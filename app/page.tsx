import React from 'react';
import './styles.css'; // Import your CSS file

export default function Home() {
  return (
    <div>
      <svg viewBox="0 0 800 600">
        <symbol id="s-text">
          <text
            textAnchor="middle"
            x="50%"
            y="35%"
            className="text--line"
          ></text>
          <text
            textAnchor="middle"
            x="50%"
            y="68%"
            className="text--line2"
          >
            CantaA
          </text>
        </symbol>

        <g className="g-ants">
          {[...Array(5)].map((_, index) => (
            <use
              key={index}
              xlinkHref="#s-text"
              className="text-copy"
            ></use>
          ))}
        </g>
      </svg>
    </div>
  );
};

