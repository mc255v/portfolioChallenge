import React from 'react';
import { Link } from 'react-router-dom';
import { defaultAvatar } from '../../utils/helper';
import Col from 'react-bootstrap/Col';
import '../../sass/components/CreatorRow.scss';

const Creator = ({ creator }) => {
  return (
    <>
      <Col lg={3}>
        <div className="creator-col">
          <Link to={`/creator/${creator.screen_name}`}>
          <figure className="creator-col__shape">
            <img src={creator.avatar || defaultAvatar} alt="avatar" className="creator-col__image"/>
          </figure>
          </Link>
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
            <Link to={`/works/${work.id}`}>
            <img 
              key={work.id} 
              src={work.thumbnail} 
              alt={work.title} 
              className="creator-works__image"/>
            </Link>
          );
        })}
      </div>
      </Col>
    </>
  );
}

export default Creator;