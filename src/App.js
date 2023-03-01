import Loginform from './components/loginform/loginform';
import RegisterForm from './components/registerform/registerform';
import Index from './components/homepage/index';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App()
{
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Loginform/>}/>
          <Route path='/registerform' element={<RegisterForm/>}/>
          <Route path='/index' element={<Index/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
