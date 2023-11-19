import React, {useState} from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
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
  ];
  // const itemsArrLocal = JSON.parse(localStorage.getItem("todolist"));
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todolist")) ? JSON.parse(localStorage.getItem("todolist")) : itemsArr);
  
  const handleCheck = (id) => {
    const listItems = items.map(item=> item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems))
  }
  const handleDelete = (id) => {
    const listItems = items.filter(item=> item.id !== id);
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems))
  }

  return (
    <div className="App">
      <Header/>
      <Content 
        itemsArr={itemsArr} 
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        lenght={items.length} 
      />
    </div>
  );
}

export default App;
