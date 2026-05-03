import React from 'react';
import './LigneBus.css';

function LigneBus({ numero, depart, arrivee, arrets }) {
  return (
    <div className="ligne-bus">
      <div className="ligne-numero">{numero}</div>
      <div className="ligne-info">
        <div className="ligne-trajet">
          {depart} → {arrivee}
        </div>
        <div className="ligne-arrets">{arrets} arrêts</div>
      </div>
    </div>
  );
}

export default LigneBus;
