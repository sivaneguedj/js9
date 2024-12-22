import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css'; // Optional: for draggable styles

// Import JS9 library files
import './js9.min.js'; // path to the JS9 library location
import './js9support.css'; // path to JS9 CSS for styling

function JS9Display() {
  useEffect(() => {
    // Ensure JS9 initializes after component mounts
    $('#js9-container').draggable({
      handle: '.JS9Menubar',
      opacity: 0.35,
    });

    // Initialize JS9 (re-initialize in case of multiple renders)
    if (window.JS9) {
      window.JS9.init();
    }
  }, []);

  return (
    <div id="js9-container" style={{ width: '600px', border: '1px solid #ccc', padding: '10px' }}>
      <div className="JS9Menubar"></div>
      <div className="JS9Toolbar"></div>
      <div className="JS9" style={{ width: '100%', height: '400px' }}></div>
      <div className="JS9Statusbar" style={{ marginTop: '2px' }}></div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>JS9 React Component</h1>
      <JS9Display />
    </div>
  );
}
