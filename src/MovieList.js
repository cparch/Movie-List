import React from 'react';
import MovieItem from './MovieItem';

const MoveList = (props) => {
  let moviesToList = props.allMovies
  if(props.searchedMovies.length > 0){
    moviesToList = props.searchedMovies
  }
    const listItem = moviesToList.map((movie, i) =>
   <MovieItem 
    movieInfo={movie}
    key={movie.title}
    WatchedBtnHandler={props.WatchedBtnHandler}
    idx = {i}
  />
  );
  return (
    <div> {listItem} </div>
  )
}




export default MoveList;