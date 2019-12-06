import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterWorks } from '../../actions/actions';
import WorksDisplay from './ProfileWorksItem';

const Works = () => {
  const dispatch = useDispatch();
  const userWorks = useSelector(state => state.userWorks);
  const userWorksFiltered = useSelector(state => state.userWorksFiltered);
  const categories = useSelector(state => state.categories);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = (category) => {
    console.log('fired', category)
    setSelectedCategory(category);
    dispatch(filterWorks(category));
  }

  return (
    <div>
      <nav className="works__nav-container">
        {categories.map(category => {
          return <button key={category} onClick={() => handleClick(category)}>{category}</button>
        })}
      </nav>
      <div className="works__list">
        <WorksDisplay 
          works={selectedCategory === "All" ? userWorks : userWorksFiltered}
        />
      </div>
    </div>
  );
}

export default Works;