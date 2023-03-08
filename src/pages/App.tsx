import React from 'react';
import {Homepage, Props } from './Homepage';

const App: React.FC = () => {
  const props: Props = {
    name: "Lovepreet Singh",
    img: "sample img"
  };

  return (
    <div className="App">
    <Homepage {...props} />
    Hello Guys
    </div>
  );
};

export default App;