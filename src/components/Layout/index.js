import React from 'react';
import './index.scss';
import { Outlet } from 'react-router-dom';
import  Navbar  from '../NavBar'
import Footer from '../Footer';




const Layout = () => {
  return (
  <div className="App">
  <Navbar/>
  {/* <Sidbar/> */}
  <Footer/>
  <div >

    <Outlet/>
    
   
   
  </div>

</div>
  )
}

export default Layout