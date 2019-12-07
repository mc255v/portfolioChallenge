import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWork } from '../../actions/actions';
import WorksHeader from './WorksHeader';
import WorksListImage from './WorksListImage';
import WorksListVideo from './WorksListVideo';
import Container from 'react-bootstrap/Container';
import Loading from  '../abstracts/Loading';
import '../../sass/components/Works.scss';

const WorksMain = (props) => {
  const dispatch = useDispatch();
  const work = useSelector(state => state.work);
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    dispatch(getWork(props.match.params.id));
  },[]);

  const mediaType = () => {
    if (work.type === "image") return <WorksListImage />
    if (work.type === "video") return <WorksListVideo />
  }

  if (!work || isLoading) return <Loading />

  return (
    <div className="works-page">
      <Container>
        <WorksHeader />
      </Container>
      {mediaType()}
    </div>
  );
}

export default WorksMain;