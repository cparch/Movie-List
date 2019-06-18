import React from 'react';

const MovieItem = (props) => {
  // debugger;
  let watchedStatus =<button onClick={ idx => {props.WatchedBtnHandler(props.idx)}}> To Watch </button> 
  if(props.movieInfo.watched){
    watchedStatus = <button onClick={idx => {props.WatchedBtnHandler(props.idx)}}> Watched </button> 
  }
  let showMoreInfoStatus = null
  if(props.movieInfo.additionalInfo.show) {
    showMoreInfoStatus = 
    <div>
      <h3> year: {props.movieInfo.additionalInfo.year}</h3>
      <h3> year: {props.movieInfo.additionalInfo.runTime}</h3>


    </div>
  }

  return (
    <div>
        <h2 onClick={idx => {props.ShowMoreInfo(props.idx)}}>{props.movieInfo.title}</h2>
        {watchedStatus}
        {showMoreInfoStatus}
    </div>

  )
}

export default MovieItem;