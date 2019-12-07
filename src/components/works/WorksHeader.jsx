import React from 'react';
import { useSelector } from 'react-redux';
import history from '../../history';
import { defaultAvatar } from '../../utils/helper';
import "../../sass/components/shapes.scss";

const WorksHeader = () => {
  const work = useSelector(state => state.work);

  const handleClick = (id) => {
    history.push(`/creator/${id}`);
  }

  if (!work) return <div>test</div>
  
  return (
    <div className="works-header">
      <h2 className="works-header__title">{work.title}</h2>
      <h4 className="works-header__description">{work.description}</h4>
      <div className="works-credit">
        <p className="works-credit__title">Credit</p>
        <div className="works-credit__inner">
        {work.credits.map(credit => {
          return (
            <div key={credit.user.id} className="credit">
              <figure 
                className="image-circle-medium" 
                onClick={() => handleClick(credit.user.screen_name)}
              >
                <img src={credit.user.avatar.thumb || defaultAvatar} alt="Avatar thumb"/>
                <figcaption>{credit.user.screen_name}</figcaption>
              </figure>
              <div className="credit__inner">
                <p className="credit__name">{credit.user.name}</p>
                <p className="credit__role">{credit.creative_roles[0].name}</p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default WorksHeader;