
import './App.css';
import Login from './Pages/Login';
import { Counter } from './component/Counter';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Register from './Pages/Register';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
     
      
    <BrowserRouter>
    <Navbar/>
    <main className="form-signin w-100 m-auto">
    <Routes>
    
      <Route path ='/' Component = {Home} />
      <Route path ='/login' element = {<Login/>} />
      <Route path ='/register'element= {<Register/>} />
   
   </Routes>
   </main>
   </BrowserRouter>  
    </div>
  );
}

export default App;
