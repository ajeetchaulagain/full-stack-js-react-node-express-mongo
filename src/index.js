import React from 'react';
import ReactDOM from "react-dom";

import App from './components/App';

// Add prop validation and default values
ReactDOM.render(
    <App headerMessage = "Hello Props"/>,
    document.getElementById('root')
);

