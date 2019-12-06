import React from 'react';

const WorksDisplay = ({ works }) => {
  return (
    <div>
      {works.map(work => {
        return (
          <div key={work.id}>
            <img src={work.thumbnail} alt="Creator's Work"/>
            <p className={work.title}></p>
          </div>
        );
      })}
    </div>
  );
}

export default WorksDisplay;