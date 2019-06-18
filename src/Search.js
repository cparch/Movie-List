import React from 'react';


class Search extends React.Component{

  render() {
    return (
      <div>
        <form onChange={this.props.SearchValueHandler} >
          <label>
            <input type="text" placeholder="Search"/>
          </label>
          {/* <input type='submit' value='Go!' onClick={this.GoBtnHandler} /> */}
        </form>
        {/* <button onClick={this.GoBtnHandler}> Go!</button> */}
        <button onClick={this.props.GoBtnHandler}> Go!</button>
      </div>
  
    )
  }
}

export default Search;