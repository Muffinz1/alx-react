import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{ 
          position: 'absolute', 
          right: '10px', 
          top: '10px', 
          background: 'transparent', 
          border: 'none', 
          cursor: 'pointer' 
        }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="close icon" style={{ width: '10px', height: '10px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
