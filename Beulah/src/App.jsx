import { useState, useEffect } from 'react'
import Sidebar from './component/Sidebar';
import Mainpage from './component/Mainpage';


function App() {
  useEffect(()=>{
    document.body.style.backgroundColor = '#EBEBEB';
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Arial, sans-serif';
  },[]);

  return (
    <div>
      <Sidebar/>
      <Mainpage/>
    </div>
  )
}

export default App
