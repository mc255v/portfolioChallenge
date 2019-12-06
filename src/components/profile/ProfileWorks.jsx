import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterWorks } from '../../actions/actions';
import ProfileWorksItem from './ProfileWorksItem';
import Container from 'react-bootstrap/Container';

const ProfileWorks = () => {
  const dispatch = useDispatch();
  const userWorks = useSelector(state => state.userWorks);
  const userWorksFiltered = useSelector(state => state.userWorksFiltered);
  const categories = useSelector(state => state.categories);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = (category) => {
    setSelectedCategory(category);
    dispatch(filterWorks(category));
  }

  return (
    <Container>
      <nav className="works-nav">
        {categories.map(category => {
          return <button
            key={category} 
            onClick={() => handleClick(category)}
            className={`works-nav__btn ${ selectedCategory === category ? 'works-nav__btn--active' : ''}`}
          >
            {category}
          </button>
        })}
      </nav>
      <ProfileWorksItem 
        works={selectedCategory === "All" ? userWorks : userWorksFiltered}
      />
    </Container>
  );
}

export default ProfileWorks;