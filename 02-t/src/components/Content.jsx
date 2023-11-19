import React from 'react'
import {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';

const Content = () => {
  const itemsArr = [
    {
      id: 1,
      checked: false,
      item: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae perferendis quos aliquid quam voluptatum molestias, incidunt deleniti quidem dolorum expedita omnis velit possimus, nobis sapiente voluptate temporibus perspiciatis corrupti distinctio.'
    },
    {
      id: 2,
      checked: true,
      item: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae perferendis quos aliquid quam voluptatum molestias, incidunt deleniti quidem dolorum expedita omnis velit possimus, nobis sapiente voluptate temporibus perspiciatis corrupti distinctio.'
    },
    {
      id: 3,
      checked: false,
      item: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae perferendis quos aliquid quam voluptatum molestias, incidunt deleniti quidem dolorum expedita omnis velit possimus, nobis sapiente voluptate temporibus perspiciatis corrupti distinctio.'
    },
  ]
  const [items, setItems] = useState(itemsArr);
 
  const handleCheck = (id) => {
    const listItems = items.map(item=> item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter(item=> item.id !== id);
    setItems(listItems);
  }

  return (
    <main className="main">
        {items.length ? (
          <ul className='list'>
            {items.map(item=> (
              <li className='item' key={item.id}>
                <input type="checkbox"
                  checked={item.checked}
                  onChange={()=>handleCheck(item.id)}
                />
               <label 
                style={(item.checked) ? {color: 'blue'} : {}}
                onDoubleClick={()=>handleCheck(item.id)}>
                {item.item}
               </label>
                <FaTrashAlt 
                  role='button' 
                  tabIndex="0"
                  onClick={()=>handleDelete(item.id)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p style={{
            margin: "0 auto",
            color: "red"
          }}>
            Список пуст  :(
          </p>
        )

        }
    </main>
  )
}

export default Content