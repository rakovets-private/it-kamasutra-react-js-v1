import React from 'react';
import s from './Paginator.module.css';

const Paginator = (props) => {
  let pageCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    if (i === 1 || i === 2
      || i === pageCount || i === pageCount - 1
      || i === props.currentPage || i === props.currentPage - 1 || i === props.currentPage + 1) {
      pages.push(i);
    }
  }
  return (
    <div>
      {
        pages.map(p =>
          <span key={p} className={(props.currentPage !== p) ? s.page : s.selectedPage}
                onClick={(e) => props.onPageChange(p)}>{p}</span>)
      }
    </div>
  )
}

export default Paginator;
