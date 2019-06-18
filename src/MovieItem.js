import React from 'react';

const MovieItem = (props) => {
  // debugger;
  let watchedStatus =<button onClick={ idx => {props.WatchedBtnHandler(props.idx)}}> To Watch </button> 
  if(props.movieInfo.watched){
    watchedStatus = <button onClick={idx => {props.WatchedBtnHandler(props.idx)}}> Watched </button> 
  }

  return (
    <div>
        <h2>{props.movieInfo.title}</h2>
        {watchedStatus}
    </div>

  )
}

export default MovieItem;