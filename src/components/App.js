import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <Link to='/'>Home</Link> | <Link to='/counter'>Counter</Link>
    {children}
  </div>
);

export default App;