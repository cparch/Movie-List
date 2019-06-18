import React from 'react';
import MovieItem from './MovieItem';

const MoveList = (props) => {
  let moviesToList = props.allMovies;
  if(props.wholeState.watchedFilteredMovies.show){
    moviesToList = props.wholeState.watchedFilteredMovies.list
  }

  if(props.wholeState.toWatchFilteredMovies.show){
    moviesToList = props.wholeState.toWatchFilteredMovies.list
  }

  if(props.searchedMovies.length > 0){
    moviesToList = props.searchedMovies
  }
  // debugger;
     const listItem = moviesToList.map((movie, i) =>

   <MovieItem 
    movieInfo={movie}
    key={movie.title}
    WatchedBtnHandler={props.WatchedBtnHandler}
    idx = {i}
    ShowMoreInfo={props.ShowMoreInfo}
  />
  );


  //kjkjhkjhkjhkjhkjhkjhkh
  return (
    <div> {listItem} </div>
  )
}




export default MoveList;