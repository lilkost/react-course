import React from 'react'

export const SearchItem = ({searchItem, setSearchItem}) => {
  return (
    <div className="container">
        <form className='search-form' 
            onSubmit={e => e.preventDefault()}
        >
            <input 
                type="text" 
                role='search'
                placeholder='search item'
                value={searchItem}
                onChange={e => setSearchItem(e.target.value)}
            />
        </form>
    </div>
  )
}

export default SearchItem;