import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import CommonLayout from './components/CommonLayout';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CommonLayout />}>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/about' element={<About />}> </Route>
          <Route path='/blog' element={<Blog />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App