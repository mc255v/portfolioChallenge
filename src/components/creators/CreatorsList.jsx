import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCreators } from '../../actions/actions'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Creator from './CreatorRow';
import Pagination from '../pagination/Pagination';

import '../../sass/components/CreatorList.scss';

const CreatersList = () => {
  const creatorsFullList = useSelector(state => state.creatorsFullList);
  const paginationList = useSelector(state => state.paginationList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCreators());
  }, [])

  return (
    <div className="creator-list">
      <Container>
        <div className="creator-list__header">
          <h1 className="creator-list__title">Picked up creators</h1>
          <h3 className="creator-list__subtitle">Picked up creators</h3>
        </div>
        {paginationList.map((creator) => {
          return  (
            <Row key={creator.id} className="creator-list__row">
              <Creator  creator={creator}/>
            </Row>
          );
        })}
        <Pagination totalRecords={creatorsFullList.length} />
      </Container>
    </div>
  );
}

export default CreatersList;