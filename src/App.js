import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Adbar from './Components/js/Welcome/Adbar';
import Featured from './Components/js/Welcome/Featured';
import Menubar from './Components/js/Welcome/MEnubar';
const App = () => {
    return (
        <BrowserRouter>
  <Adbar/>
  <Menubar/>
  
        </BrowserRouter>
    )
}

export default App
