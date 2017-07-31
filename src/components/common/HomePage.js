import React from 'react';

const Home = () => {
  return (
    <div className="homeWrapper">
      <div>
        <h1>Application Home Page</h1>
      </div>
      <div className="homebody">
        <p><b>This sample SPA show cases some of the most important aspsects
          of React, such as:</b></p>
        <ul>
          <li>How to wire up React components in single page application</li>
          <li>Routing and Route Params</li>
          <li>Using the Form Builder</li>
        </ul>
        <p><b>Technology used:</b></p>
        <ul>
          <li>Redux for managing state</li>
          <li>React JS library</li>
          <li>React Intl fro internationalization</li>
          <li>HTML5</li>
          <li>CCS 3.0</li>
        </ul>
        <p><b>Future goals for the application:</b></p>
        <ul>
          <li>Use Node/Mongo DB backend to create Restful API</li>
          <li>Consume Restful API to display data in application</li>
          <li>Proper Authorization/Authentication</li>
          <li>Globalization</li>
          <li>Accessibility</li>
          <li>Fully respsosive UI sing plain CSS3</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
