import React from 'react';
import './PageNotFound.css';

const PageNotFound: React.FC = () => {
  return (
    <div className="page-not-found">
      <h1 className="title">404</h1>
      <p className="message">Oops! Page not found.</p>
    </div>
  );
};

export default PageNotFound;
