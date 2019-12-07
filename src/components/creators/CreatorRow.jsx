import React from 'react';
import history from "../../history";
import { defaultAvatar } from '../../utils/helper';
import Col from 'react-bootstrap/Col';
import '../../sass/components/CreatorRow.scss';

const Creator = ({ creator }) => {
  const creatorClick = (id) => {
    history.push(`/creator/${id}`);
  }

  const workClick = (id) => {
    history.push(`/works/${id}`);
  }

  return (
    <>
      <Col lg={3}>
        <div className="creator-col" onClick={() => creatorClick(creator.screen_name)}>
          <figure className="creator-col__shape">
            <img src={creator.avatar || defaultAvatar} alt="avatar" className="creator-col__image"/>
          </figure>
          <div className="creator-col__info-box">
            <p className="creator-col__profession">{creator.profession}</p>
            <p className="creator-col__name">{creator.name}</p>
          </div>
        </div>
      </Col>
      <Col>
      <div className="creator-works">
        {creator.works.map(work => {
          return (
            <img 
              key={work.id} 
              src={work.thumbnail} 
              alt={work.title} 
              onClick={() => workClick(work.id)}
              className="creator-works__image"/>
          );
        })}
      </div>
      </Col>
    </>
  );
}

export default Creator;