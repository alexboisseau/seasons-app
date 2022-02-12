import { formatDistanceStrict, formatDistanceToNowStrict } from 'date-fns';
import reactDom from 'react-dom';
import ActionButton from './ActionButton';
import './SeasonModal.css';

export default function SeasonModal({ onBackClick, nextSeason }) {
  const currentYear = new Date().getFullYear();

  const beginAt = new Date(
    currentYear + (nextSeason.name === 'Winter' ? -1 : 0),
    nextSeason.beginAt.month - 1,
    nextSeason.beginAt.day
  );

  const endAt = new Date(
    currentYear,
    nextSeason.endAt.month,
    nextSeason.endAt.day
  );

  const startIn = formatDistanceToNowStrict(beginAt, {
    unit: 'day',
    addSuffix: true,
  });

  const duration = formatDistanceStrict(beginAt, endAt, { unit: 'day' });

  return reactDom.createPortal(
    <>
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div
            className="shadow-black-500/50 flex flex-col items-center justify-center rounded bg-gray-100 shadow-lg"
            style={{ height: '350px', width: '250px' }}
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold">
                {nextSeason.name} {nextSeason.icon}
              </h1>
              <p className="mt-2 text-gray-500">Duration : {duration}</p>
              <p className="text-gray-500">Start {startIn}</p>
            </div>
            <ActionButton label="Go back" action={onBackClick} />
          </div>
        </div>
      </div>
    </>,
    document.getElementById('seasonModal')
  );
}
