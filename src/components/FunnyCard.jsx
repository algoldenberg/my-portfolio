import React from 'react';
import '../styles/FunnyCard.css';

function FunnyCenteredCard() {
    return (
      <div className="funny-wrapper">
        <div className="funny-centered-card">
        <p className="funny-centered-text">And if it's still not enouhg for you</p>
          <img
            src="https://i.pinimg.com/736x/53/2a/fa/532afae6b519d8506d2b8b52add12611.jpg"
            alt="Hire Me"
            className="funny-centered-img"
          />
          <p className="funny-centered-text">Hire me I'm cool</p>
        </div>
      </div>
    );
  }
  
  export default FunnyCenteredCard;