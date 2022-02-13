import React from 'react';

import './Modal.css';

export default function FallBackModal() {
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div
          data-testid="fallbackmodal-content"
          className="shadow-black-500/50 rounded bg-gray-100 shadow-lg"
        >
          <p className="px-12 py-8 text-2xl font-bold">Chargement ...</p>
        </div>
      </div>
    </div>
  );
}
