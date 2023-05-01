import React from 'react';
import './Search.css'

const Search = ({handleSearch,inputValue}) => {
  return (
    <div className='--form-control'>
        <input type="text"
         name="" id=""
          placeholder='Search Products'
          onChange={handleSearch} />
    </div>
  )
}

export default Search