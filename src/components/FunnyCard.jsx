import React from 'react';
import '../styles/FunnyCard.css';

function FunnyCenteredCard() {
  return (
    <div className="funny-wrapper">
      <p className="funny-header-text">And if it's still not enough for you...</p>
      <div className="funny-centered-card">
        <img
          src="https://i.pinimg.com/736x/53/2a/fa/532afae6b519d8506d2b8b52add12611.jpg"
          alt="Hire Me"
          className="funny-centered-img-small"
        />
        <p className="funny-centered-text">pls hire me I'm cool</p>
      </div>
    </div>
  );
}

export default FunnyCenteredCard;
