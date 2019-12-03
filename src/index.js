import React from 'react';
import ReactDOM from "react-dom";

import App from './components/App';
import data from './testData';
console.log(data);

// Add prop validation and default values
ReactDOM.render(
    <App headerMessage = "Hello Props"/>,
    document.getElementById('root')
);

