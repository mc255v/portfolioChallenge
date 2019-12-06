import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWork } from '../../actions/actions';
import WorksHeader from './WorksHeader';
import WorksList from './WorksList';

const WorksMain = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWork(props.match.params.id));
  }, [])

  return (
    <div>
      <WorksHeader />
      <WorksList />
    </div>
  );
}

export default WorksMain;