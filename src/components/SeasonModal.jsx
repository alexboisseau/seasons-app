import reactDom from 'react-dom';
import './SeasonModal.css';

export default function SeasonModal({ onBackClick }) {
  return reactDom.createPortal(
    <>
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div
            className="shadow-black-500/50 flex flex-col items-center justify-center rounded bg-gray-100 shadow-lg"
            style={{ height: '350px', width: '250px' }}
          >
            <div>
              <h1 className="text-4xl font-bold">Winter</h1>
              <p className="text-gray-500">Since 21 days</p>
            </div>
            <button
              onClick={() => onBackClick()}
              className="mt-5 rounded bg-red-500 p-3 text-white shadow shadow-md hover:bg-red-600"
            >
              <span>Go back</span>
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('seasonModal')
  );
}
