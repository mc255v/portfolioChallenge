import React from 'react';
import '../../sass/components/loading.scss'

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="ring">
        Loading
        <span className="spin"></span>
      </div>
    </div>
  );
}

export default Loading;