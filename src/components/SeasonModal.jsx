import { formatDistanceStrict, formatDistanceToNowStrict } from 'date-fns';
import reactDom from 'react-dom';
import { startIn, getSeasonDuration } from '../modules/season.module';

import ActionButton from './ActionButton';

import './SeasonModal.css';

export default function SeasonModal({ onBackClick, nextSeason }) {
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
              <p className="mt-2 text-gray-500">
                Duration : {getSeasonDuration(nextSeason)}
              </p>
              <p className="text-gray-500">Start {startIn(nextSeason)}</p>
            </div>
            <ActionButton label="Go back" action={onBackClick} />
          </div>
        </div>
      </div>
    </>,
    document.getElementById('seasonModal')
  );
}
