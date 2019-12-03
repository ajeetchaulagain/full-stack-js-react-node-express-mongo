import React from 'react';
import ReactDOM from "react-dom";

import App from './components/App';
import data from './testData';

console.log(data);
console.log(data.contests);

// Add prop validation and default values
ReactDOM.render(
    <App contests = {data.contests}/>,
    document.getElementById('root')
);

