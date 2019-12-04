import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCreators } from '../../actions/actions'
import Creator from './Creator';
import Pagination from '../pagination/Pagination';

const CreatersList = () => {
  const creatorsFullList = useSelector(state => state.creatorsFullList);
  const paginationList = useSelector(state => state.paginationList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCreators());
  }, [])

  return (
    <div className="creatorlist__container">
      <h1 className="creatorlist__title">Picked up creators</h1>
      <h3 className="creatorlist__subtitle">Picked up creators</h3>
      {paginationList.map((creator) => {
        return  <Creator creator={creator}/>
      })}
      <Pagination totalRecords={creatorsFullList.length} />
    </div>
  );
}

export default CreatersList;