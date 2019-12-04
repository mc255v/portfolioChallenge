import React from 'react';
import Navbar from './navbar/Navbar';
import Pagination from './Pagination';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Pagination totalRecords={100} />
    </div>
  );
}

export default App;
