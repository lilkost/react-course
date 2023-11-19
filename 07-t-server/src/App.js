import React, { useState, useEffect} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from './apiRequest';

function App() {

  const [items, setItems] = useState([]);
  // JSON.parse(localStorage.getItem('todoloist')) || []
  const [newItems, setNewItems] = useState("");
  const [serchItem, setSerchItem] = useState("")
  const [fetchError, setEetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "http://localhost:3000/items";

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        if(!response.ok) throw Error("did not receive list items");
        console.log(listItems);
        setItems(listItems);
        setEetchError(null);
      } catch (error) {
        console.log(error);
        setEetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(()=> {

      (async()=>fetchItems())()
      
    }, 1000)
    
  }, [])

  const handleCheck = async (id) =>{
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
    
    const myItem = listItems.filter(item=> item.id === id);
    
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }

    const reqUrl = `${API_URL}/${id}`;

    const result = await apiRequest(reqUrl, updateOptions);
    if(result) setEetchError(result);
  } 

  const handleDelete = async (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)

    const deleteOptions = {
      method: "DELETE",
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if(result) setEetchError(result);
  }

  const addItem = async item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, postOptions);
    if(result) setEetchError(result)
  }

  const HeandlSubmit = e => {
    e.preventDefault();
    if(!newItems) return;
    addItem(newItems);
    console.log(newItems);
    setNewItems("");
  }

  return (
    <div className="App">
      <Header />
      <SearchItem
        serchItem={serchItem}
        setSerchItem={setSerchItem}
      />
      <AddItem
        newItems={newItems}
        setNewItems={setNewItems}
        HeandlSubmit={HeandlSubmit}
      />
      <main className="content">
        {fetchError && <h2 className="error">{`Erro: ${fetchError}`}</h2>}
        {isLoading && <p className="loading-text">Loading...</p>}
        {!fetchError && !isLoading && <Content 
            items={items.filter( item => (item.item).toLowerCase().includes(serchItem.toLowerCase()))}
            setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        }
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
