import React from 'react';

const WatchedFilter = (props) => {
  return (
    <div>
      <button onClick={props.WatchedFilterBtn}>Watched</button>
      <button onClick={props.ToWatchFilterBtn}>To Watch</button>

      
    </div>
  )
};

export default WatchedFilter;