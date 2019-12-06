import React from 'react';
import { useSelector } from 'react-redux';

const WorksHeader = () => {
  const work = useSelector(state => state.work);

  if (!work) return <div>test</div>

  return (
    <div>
      <h2>{work.title}</h2>
      <h4>{work.description}</h4>
      <div className="credit__container">
        <p>Credit</p>
        {work.credits.map(credit => {
          return (
            <div key={credit.user.id}>
              <img src={credit.user.avatar.thumb} alt="Avatar thumb"/>
              <p>{credit.user.name}</p>
              <p>{credit.creative_roles[0].name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorksHeader;