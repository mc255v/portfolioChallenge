import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { defaultAvatar } from '../../utils/helper';
import "../../sass/components/shapes.scss";

const WorksHeader = () => {
  const work = useSelector(state => state.work);

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
              <Link to={`/creator/${credit.user.screen_name}`}>
              <figure className="image-circle-medium">
                <img src={credit.user.avatar.thumb || defaultAvatar} alt="Avatar thumb"/>
                <figcaption>{credit.user.screen_name}</figcaption>
              </figure>
              </Link>
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