// PopupComponent.js
import { useState } from 'react';
import './PopupComponent.css';

const PopupComponent = ({ iframeSrc }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <button className="openPopupButton" onClick={openPopup}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
          <g>
            <path fill="none" d="M0 0H24V24H0z" />
            <path d="M15 3c.552 0 1 .448 1 1v2h5c.552 0 1 .448 1 1v13c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V7c0-.552.448-1 1-1h5V4c0-.552.448-1 1-1h6zm1 5H8v11h8V8zM4 8v11h2V8H4zm10-3h-4v1h4V5zm4 3v11h2V8h-2z" />
          </g>
        </svg>
        We help people get a job
      </button>
      {isPopupOpen && (
        <div className="popupContainer">
          <button className="closePopupButton" onClick={closePopup}>
            Close
          </button>
          <iframe className="popupIframe" src={iframeSrc} title="Popup Iframe"></iframe>
        </div>
      )}
    </>
  );
};

export default PopupComponent;

