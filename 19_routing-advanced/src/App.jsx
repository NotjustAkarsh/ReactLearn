import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom";
import Product from './pages/Product';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import Mencollection from './pages/Mencollection';
import Womencollection from './Womencollection';
import Kidscollection from './pages/Kidscollection';
import Courses from './pages/Courses';
import Coursedetails from './pages/Coursedetails';
import Navbar2 from './components/Navbar2';



const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Mencollection />} />
          <Route path='women' element={<Womencollection />} />
          <Route path='kids' element={<Kidscollection/>} />
        </Route>
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<Coursedetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
