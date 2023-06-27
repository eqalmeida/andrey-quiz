import React from "react";

export default function Grade({ points, total, resetClick }) {
  const percent = (points * 100) / total;
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Pontuação</h5>
        <div>
          <span>Você acertou: </span>
          {points} <span> de </span> {total}
        </div>

        <div
          className="progress"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style={{ width: `${percent}%` }}></div>
        </div>

        <button className="btn btn-primary mt-3" onClick={resetClick}>
          Reiniciar teste
        </button>
      </div>
    </div>
  );
}
