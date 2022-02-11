import reactDom from 'react-dom';
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
              <p className="mt-2 text-gray-500">Duration : 91 days</p>
              <p className="text-gray-500">Start in : 15 days</p>
            </div>
            <button
              onClick={() => onBackClick()}
              className="mt-5 rounded bg-red-500 p-3 text-white shadow shadow-md hover:bg-red-600"
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('seasonModal')
  );
}
