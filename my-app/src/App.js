import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './test/Navbar';
import Home from './test/home';
import Bisection from './RootofEquation/Bisection';
import Onepoint from './RootofEquation/Onepoint';
import FalsePosition from './RootofEquation/FalsePosition';
import NewtonRaphson from './RootofEquation/NewtonRaphson';
import Secant from './RootofEquation/Secant';
import New from './RootofEquation/New';
import New2 from './RootofEquation/New2';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Bisection' element={<Bisection/>} />
        <Route path='/FalsePosition' element={<FalsePosition/>} />
        <Route path='/OnePoint' element={<Onepoint/>} /> 
        <Route path='/NewtonRaphson' element={<NewtonRaphson/>} />
        <Route path='/Secant' element={<Secant/>} />  
        <Route path='/New' element={<New/>} />  
        <Route path='/New2' element={<New2/>} />  
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
