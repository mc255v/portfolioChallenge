import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from "../../actions/actions";
import { fetchPageNumbers } from '../../utils/helper';
import '../../sass/pages/Pagination.scss';

const Pagination = ({ totalRecords }) => {
  const pageLimit = useSelector(state => state.pageLimit);
  const dispatch = useDispatch();

  const currentPage = useSelector(state => state.currentPage);
  const [totalPages, setTotalPages] = useState(1);

  const LEFT_PAGE = 'LEFT';
  const RIGHT_PAGE = 'RIGHT';

  useEffect(() => {
    setTotalPages(Math.ceil(totalRecords / pageLimit))
  },[totalRecords]);

  const handleClick = page => {
    dispatch(setCurrentPage(page))
  }

  if (!totalRecords || totalPages === 1) return null;

  const pages = fetchPageNumbers({currentPage, totalPages, RIGHT_PAGE, LEFT_PAGE});

  return (
    <nav className="pagination">
      <ul className="pagination__list">
        { pages.map((page, index) => {

          if (page === LEFT_PAGE) return (
            <li key={index} className="pagination__item" onClick={() => handleClick(currentPage - 1)}>
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
            </li>
          );

          if (page === RIGHT_PAGE) return (
            <li key={index} className="pagination__item" onClick={() => handleClick(currentPage + 1)}>
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
            </li>
          );

          return (
            <li 
              key={index} 
              className={`pagination__item${ currentPage === page ? ' pagination__item--active' : ''}`} 
              onClick={() => handleClick(page)}
            >
              { page }
            </li>
          );

        }) }
      </ul>
    </nav>
  );
}

export default Pagination;