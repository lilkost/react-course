import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Table from './Table';

function App() {
  
  const API_URL = "https://jsonplaceholder.typicode.com"

  const [reqType, setReqType] = useState("posts");
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    const fetchItems = async () => {
      try{
        const response = await fetch(`${API_URL}/${reqType}`)
        if(!response.ok) throw Error("Data api error");
        const data = await response.json();
        setItems(data);
        setFetchError(null)
      }
      catch(error) {
        console.log(error)
        setFetchError(error.message)
      } finally{
        setIsLoading(false)
      }
    }
    setTimeout(()=> {
      (async ()=>fetchItems())()
    }, 400)
    
  }, [reqType])
  

  return (
    <div className="App">
       <Header/>
       <main>
        {isLoading && <p className='loading'>loading...</p>}
        {setFetchError && !isLoading &&  <p className='error'>{`${fetchError}`}</p>}
        {!fetchError && !isLoading &&
        <>
          <Form
            reqType={reqType}
            setReqType={setReqType}
          />
          <Table
            items={items}
          />
        </>
        }
       </main>
      <Footer />
    </div>
  );
}

export default App;
