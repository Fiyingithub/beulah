import { useState, useEffect } from 'react'
import Sidebar from './component/Sidebar';
import Home from './component/Pages/Home.jsx';
import Membership from './component/Pages/Membership.jsx';
import About from './component/Pages/About.jsx';
import {BrowserRouter,Route, Routes} from 'react-router-dom'







function App() {
  useEffect(()=>{
    document.body.style.backgroundColor = '#EBEBEB';
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Arial, sans-serif';
  },[]);

  return (
    <div>
      <BrowserRouter>
        <Sidebar/>
        {/* <Mainpage/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/membership' element={<Membership/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
