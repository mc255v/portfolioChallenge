import React from 'react';
import { useSelector } from 'react-redux';

const Works = () => {
  const userWorks = useSelector(state => state.userWorks);

  return (
    <div>Works</div>
  );
}

export default Works;