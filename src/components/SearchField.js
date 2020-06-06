import React, { Component } from 'react';
import GifCard from './GifCard';
class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: '',
      keyword: '',
      limit: '',
      rating: '',
      tag: '',
      send: false,
    };
  }

  handleSelectChange = (event) => {
    this.setState({
      selectValue: event.target.value,
      keyword: '',
      limit: '',
      rating: '',
      tag: '',
      send: false,
    });
  };

  handleKeyWordChange = (event) => {
    this.setState({ keyword: event.target.value });
  };

  handleLimitChange = (event) => {
    this.setState({ limit: event.target.value });
  };

  handleRatingChange = (event) => {
    this.setState({ rating: event.target.value });
  };

  handleTagChange = (event) => {
    this.setState({ tag: event.target.value });
  };

  handleSearch = () => {
    this.setState({ send: true });
  };

  render() {
    let filter;
    //console.log(this.state.selectValue);
    if (this.state.selectValue === 'Regular') {
      filter = (
        <>
          <label htmlFor='KeyWord'>Key Word: </label>
          <input
            type='text'
            name='KeyWord'
            value={this.state.keyword}
            onChange={this.handleKeyWordChange}
          />
          <br />
          <label htmlFor='Limit'>Number of GIFS: </label>
          <input
            type='text'
            name='Limit'
            value={this.state.limit}
            onChange={this.handleLimitChange}
          />
          <br />
          <label htmlFor='Rating'>Choose a search method:</label>
          <select
            name='Rating'
            value={this.state.rating}
            onChange={this.handleRatingChange}
          >
            <option value=''>--Select A Rank--</option>
            <option value='G'>G</option>
            <option value='PG'>PG</option>
            <option value='PG-13'>PG-13</option>
            <option value='R'>R</option>
          </select>
        </>
      );
    } else if (this.state.selectValue === 'Random') {
      filter = (
        <>
          <label htmlFor='Tag'>Filters results by specified tag: </label>
          <input
            type='text'
            name='Tag'
            value={this.state.tag}
            onChange={this.handleTagChange}
          />
          <br />
          <label htmlFor='Rating'>Choose a search method:</label>
          <select
            name='Rating'
            value={this.state.rating}
            onChange={this.handleRatingChange}
          >
            <option value=''>--Select A Rank--</option>
            <option value='G'>G</option>
            <option value='PG'>PG</option>
            <option value='PG-13'>PG-13</option>
            <option value='R'>R</option>
          </select>
        </>
      );
    } else if (this.state.selectValue === 'Trending') {
      filter = (
        <>
          <label htmlFor='Limit'>Number of GIFS: </label>
          <input
            type='text'
            name='Limit'
            value={this.state.limit}
            onChange={this.handleLimitChange}
          />
          <br />
          <label htmlFor='Rating'>Choose a search method:</label>
          <select
            name='Rating'
            value={this.state.rating}
            onChange={this.handleRatingChange}
          >
            <option value=''>--Select A Rank--</option>
            <option value='G'>G</option>
            <option value='PG'>PG</option>
            <option value='PG-13'>PG-13</option>
            <option value='R'>R</option>
          </select>
        </>
      );
    }

    return (
      <>
        <div className='SearchField'>
          <label htmlFor='Search methods'>Choose a search method:</label>
          <select
            name='Search methods'
            value={this.state.selectValue}
            onChange={this.handleSelectChange}
          >
            <option value=''>--Select A Method--</option>
            <option value='Regular'>Regular Search</option>
            <option value='Trending'>Trending Search</option>
            <option value='Random'>Random Search</option>
          </select>
          <button onClick={this.handleSearch}>Search</button>
          <br />
          {filter}
          {this.state.send ? (
            <GifCard
              search_method={this.state.selectValue}
              search_keyword={this.state.keyword}
              search_number={this.state.limit}
              search_rank={this.state.rating}
              search_tag={this.state.tag}
            />
          ) : (
            <GifCard />
          )}
        </div>
      </>
    );
  }
}

export default SearchField;
