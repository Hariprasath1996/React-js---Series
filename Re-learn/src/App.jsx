import React, { useState } from 'react'
import User from './User'

const App = () => {

  const UserData=
  {
    fname:'venkat',
    age:29,
    gender:"male"
  }
  const [data,setData]=useState({ name:'Hari',
    age:27,
    gender:"male"})
    
  return (
    <>
      <div>
<User  {...data } />
<User {...UserData}



/>
    </div>
    </>
  
  )
}

export default App
