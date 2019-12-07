import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const WorksListVideo = () => {
  const work = useSelector(state => state.work);

  const videoType = (video) => {
    const id = video.video_id;
    const url = video.platform === "youtube" ?
      `https://www.youtube.com/embed/${id}`
      :
      `https://player.vimeo.com/video/${id}`
      return (
        <iframe src={url}
          key={id}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title={id}
          className="list__iframe"
        />
      );
  }

  return (
    <>
    <div className="list">
      <Container>
          <Row>
            {work.videos.map(video => {
              return videoType(video);
            })}
          </Row>
      </Container>
    </div>
    </>
  );
}

export default WorksListVideo;