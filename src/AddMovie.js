import React from 'react';

const AddMovie = (props) => {
  return (
    <div>
      <form onChange={props.AddMovieValueHandler} >
        <label>
          <input type="text" placeholder="Add movie title here"/>
        </label>
      </form>
      <button onClick={props.AddMovieBtnHandler}> Add</button>

    </div>
  )
};

export default AddMovie;