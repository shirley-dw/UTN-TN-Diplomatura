import React from 'react';
import './Mensaje.css';
export const Mensaje = ({ props }) => {
  const { author, text, status, day, hour } = props;
  const isAuthor = author === 'yo';
  return (
    <div className="content" style={{ justifyContent: isAuthor ? 'flex-end' : 'flex-start' }}>
      <div className="mensaje" style={{ backgroundColor: isAuthor ? '#D9FDD3' : '#FFFFFF' }}>
        <p className="text">{text}</p>
        <div className="content-lower">
          <span className="timeSince">{`${day} ${hour}`}</span>
          <span className="timeSince">{status}</span>
        </div>
      </div>
    </div>
  );
};
export default Mensaje;