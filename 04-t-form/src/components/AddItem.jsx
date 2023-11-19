import React, {useRef} from 'react'
import { FaPlus } from 'react-icons/fa';

export const AddItem = ({newItems, setNewItem, HandeleSubmit}) => {
    const inputRef = useRef();
  return (
    <div className="container">
        <form className='add-form' 
            onSubmit={HandeleSubmit}
        >
            <input 
                type="text" 
                autoFocus
                ref={inputRef}
                id='add-form'
                placeholder='add item'
                required
                value={newItems}
                onChange={(e)=> setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='add item'
                onClick={()=> inputRef.current.focus()}
                className='add-btn'
            >
                <FaPlus/>
            </button>
        </form>
    </div>

  )
}

export default AddItem;
