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
      {title: 'Mean Girls', 'watched': false },
      {title: 'Hackers', 'watched': false},
      {title: 'The Grey', 'watched': false},
      {title: 'Sunshine', 'watched': false},
      {title: 'Ex Machina', 'watched': false},
      ],
      searchMatch: [],
      searchTerm: '',
      addMovieName: '',
      userAddedMoviesList: [],
      toWatchFilteredMovies: [],
      watchedFilteredMovies: [],
      testing: test,
    }
    this.ToWatchFilterBtn = this.ToWatchFilterBtn.bind(this);
    this.WatchedBtnHandler = this.WatchedBtnHandler.bind(this);
    this.GoBtnHandler = this.GoBtnHandler.bind(this);
    this.SearchValueHandler = this.SearchValueHandler.bind(this);
    this.AddMovieValueHandler = this.AddMovieValueHandler.bind(this);
    this.AddMovieBtnHandler = this.AddMovieBtnHandler.bind(this);
    this.WatchedFilterBtn = this.WatchedFilterBtn.bind(this);
  }

  ToWatchFilterBtn(){
    const movies = this.state.movies;
    let newState = {...this.state};
    movies.map(movie => {
      if(!movie.watched) {
        newState.toWatchFilteredMovies.push(movie)
      }
    })
    newState.movies = newState.toWatchFilteredMovies;
    // newState.toWatchFilteredMovies = [];
    this.setState(newState)
  }

  WatchedFilterBtn() {
    const movies = this.state.movies;
    let newState = {...this.state};
    movies.map(movie => {
      if(movie.watched) {
        // newState.filteredMovies.push(movie)
        newState.watchedFilteredMovies.push(movie)
      } else {
        newState.toWatchFilteredMovies.push(movie)
      }
    })
    newState.movies = newState.watchedFilteredMovies;
    // newState.filteredMovies = [];
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
          allMovies={this.state.movies}
          searchedMovies={this.state.searchMatch}  
          WatchedBtnHandler={(i) => {this.WatchedBtnHandler(i)}}
        />
      </div>
    );
  }
}

export default App;
