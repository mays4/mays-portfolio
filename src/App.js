import React from 'react';
import { Routes,Route} from 'react-router-dom'

import Layout from './components/Layout';
import Home from './components/Home'
  import About from './components/About'
import Contact from './components/Contact'

import './App.scss';
import Projcet from './components/Projects';

// const Contact= React.lazy(()=>import('./components/Contact'))
function App() {
  return (
    <>
      <Routes>
      
         <Route path="/" element={<Layout/>}>
          <Route  index  element={<Home/>}>
            </Route>
            
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/project" element={<Projcet/>}/>
         </Route>
   
      </Routes>
      
       
    
    </>
  )
}

export default App;
