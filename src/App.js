import React from 'react';
import './App.css';
import MoveList from './MovieList';
import Search from './Search';
import AddMovie from './AddMovie';
import WatchedFilter from './WatchedFilter';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {movies:[
      {title: 'Mean Girls', 'watched': false, 'additionalInfo': {show: false, 'runTime': '100 minutes', 'year': 2000} },
      {title: 'Hackers', 'watched': false, 'additionalInfo': {show: false, 'runTime': '101 minutes', 'year': 2002} },
      {title: 'The Grey', 'watched': false, 'additionalInfo': {show: false, 'runTime': '102 minutes', 'year': 2003} },
      {title: 'Sunshine', 'watched': false, 'additionalInfo': {show: false, 'runTime': '103 minutes', 'year': 2004} },
      {title: 'Ex Machina', 'watched': false, 'additionalInfo': {show: false, 'runTime': '104 minutes', 'year': 2005} },
      ],
      searchMatch: [],
      searchTerm: '',
      addMovieName: '',
      userAddedMoviesList: [],
      toWatchFilteredMovies: {list:[], show: false},
      watchedFilteredMovies: {list: [], show: false }
    }
    this.ShowMoreInfo = this.ShowMoreInfo.bind(this);
    this.ToWatchFilterBtn = this.ToWatchFilterBtn.bind(this);
    this.WatchedBtnHandler = this.WatchedBtnHandler.bind(this);
    this.GoBtnHandler = this.GoBtnHandler.bind(this);
    this.SearchValueHandler = this.SearchValueHandler.bind(this);
    this.AddMovieValueHandler = this.AddMovieValueHandler.bind(this);
    this.AddMovieBtnHandler = this.AddMovieBtnHandler.bind(this);
    this.WatchedFilterBtn = this.WatchedFilterBtn.bind(this);
  }

  ShowMoreInfo(i) {
    let newState = {...this.state};
    newState.movies[i].additionalInfo.show = !newState.movies[i].additionalInfo.show;
    this.setState(newState);
  }

  ToWatchFilterBtn(){

    const movies = this.state.movies;
    let newState = {...this.state};
    movies.map(movie => {
      if(!movie.watched) {
        newState.toWatchFilteredMovies.list.push(movie)
      } 
    })
    newState.watchedFilteredMovies.show = false;
    newState.toWatchFilteredMovies.show = true;
    newState.watchedFilteredMovies.list = [];
    this.setState(newState)
  }

  WatchedFilterBtn() {
    const movies = this.state.movies;
    let newState = {...this.state};
    movies.map(movie => {
      if(movie.watched) {
        newState.watchedFilteredMovies.list.push(movie)
      } 
    })
    newState.watchedFilteredMovies.show = true;
    newState.toWatchFilteredMovies.show = false;
    newState.toWatchFilteredMovies.list = [];
    this.setState(newState)
  }

  WatchedBtnHandler(i) {
    let newState = {...this.state};
    newState.movies[i].watched = !this.state.movies[i].watched;
    this.setState(newState);
  }

  AddMovieBtnHandler() { 
    let newState = {...this.state};
    newState.userAddedMoviesList = this.state.userAddedMoviesList.concat([{'title': newState.addMovieName, 'watched': false}])
    newState.movies =  newState.userAddedMoviesList;
    this.setState(newState);
  }

  AddMovieValueHandler(event){
    let newState = {...this.state};
    newState.addMovieName = event.target.value;
    this.setState(newState);
  }

  SearchValueHandler(event){
    let newState = {...this.state};
    newState.searchTerm = event.target.value;
    this.setState(newState);
  }

  GoBtnHandler() {
    let searchMatch = [];
    let movieList = this.state.movies;
    movieList.forEach(movie => {
      if(movie.title.indexOf(this.state.searchTerm)> -1){
       searchMatch.push(movie)
      }
    })
    let newState = {...this.state};
    newState.searchMatch = searchMatch;
    this.setState(newState); 
  }

    render(){
      return (
      <div className="App">
        <h1> Welcome to the Movie List page </h1>
        <AddMovie
          AddMovieBtnHandler={this.AddMovieBtnHandler}
          AddMovieValueHandler={this.AddMovieValueHandler}  
        />
        <Search 
          GoBtnHandler={this.GoBtnHandler}
          SearchValueHandler={this.SearchValueHandler}
          />
        <WatchedFilter
          WatchedFilterBtn={this.WatchedFilterBtn}
          ToWatchFilterBtn ={() => {this.ToWatchFilterBtn()}}
        />
        <MoveList 
          wholeState={this.state}
          allMovies={this.state.movies}
          searchedMovies={this.state.searchMatch}  
          WatchedBtnHandler={(i) => {this.WatchedBtnHandler(i)}}
          ShowMoreInfo={(i) => {this.ShowMoreInfo(i)}}
        />
      </div>
    );
  }
}

export default App;
