import React from 'react'
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className="missing">
      <h1 style={
        {
          color: 'red', 
          fontSize: '60px', 
          textAlign: "center"
        }
      }>
        404
      </h1>
      <Link to="/" style={{textAlign: 'center', margin: '15px auto', display: 'block'}}>go to home page</Link>
    </main>
  )
}

export default Missing