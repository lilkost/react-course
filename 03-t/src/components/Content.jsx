import {FaTrashAlt} from 'react-icons/fa';

const Content = ({itemsArr, items, setItems, handleCheck, handleDelete}) => {
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