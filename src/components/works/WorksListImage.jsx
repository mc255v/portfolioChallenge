import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WorksModal from './WorksModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const WorksListImage = () => {
  const work = useSelector(state => state.work);
  const [showModal, setShowModal] = useState(false);
  const [currentImg, setCurrentImg] = useState();

  const handleClick = (image) => {
    setCurrentImg(image)
    setShowModal(true)
  }

  return (
    <>
    <WorksModal 
      show={showModal} 
      setShow={setShowModal} 
      imageSource={currentImg}
      title={work.title}
    />
    <div className="list">
    <Container>
      <Row>
        {work.images.map(image => (
          <div
            key={image.id} 
            className="list__item"
            onClick={() => handleClick(image.urls.detail)}
          >
            <img src={image.urls.detail} alt="Work Display"/>
            <div className="list__item--view">
              <p>view</p>
            </div>
          </div>
        ))}
      </Row>
    </Container>
    </div>
    </>
  );
}

export default WorksListImage;