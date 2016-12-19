import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>React Slingshot</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="table-data">table data app</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;
