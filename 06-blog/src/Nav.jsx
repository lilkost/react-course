import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({search, setSearch }) => {
  return (
    <nav className='nav'>
      <form className='searchForm' 
        onSubmit={ e => e.preventDefault() }
      >
        <input 
          type="text" 
          id="search"
          role='search'
          placeholder='search post'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      <ul className='nav-list'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;