import './index.scss';
import Sidbar from '../Sidbar'
import { Outlet } from 'react-router-dom';
import  Navbar  from '../NavBar'
import Footer from '../Footer';




const Layout = () => {
  return (
  <div className="App">
  <Navbar/>
  <Sidbar/>
  <Footer/>
  <div >

    <Outlet/>
    
   
   
  </div>
  {/* <div className='contact-container'>
    <Contact/>
    </div> */}
</div>
  )
}

export default Layout