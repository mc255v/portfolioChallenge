import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WorksModal from './WorksModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WorksList = () => {
  const work = useSelector(state => state.work);
  const [showModal, setShowModal] = useState(false);
  const [currentImg, setCurrentImg] = useState();

  const handleClick = (image) => {
    setCurrentImg(image)
    setShowModal(true)
  }

  if (!work) return <div>test</div>

  return (
    <>
    <WorksModal 
      show={showModal} 
      setShow={setShowModal} 
      imageSource={currentImg}
      title={work.title}
    />
    <Container>
      <Row>
        {work.images.map(image => {
          return (
            <Col key={image.id} onClick={() => handleClick(image.urls.detail2x)}>
              <img src={image.urls.detail} alt="Work Display"/>
            </Col>
          )
        })}
      </Row>
    </Container>
    </>
  );
}

export default WorksList;