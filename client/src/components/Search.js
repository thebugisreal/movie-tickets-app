import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Search extends Component {
  render() {
    return (
      <form className="position-relative mb-2">
        <input 
          className="header__search w-100" 
          type="text" 
          placeholder="Tìm kiếm tên phim nhanh" />
        <button 
          className="header__submit h-100 position-absolute" 
          type="submit"
        >
          <FontAwesomeIcon icon="search" />
        </button>
      </form>
    )
  }
}

export default Search;