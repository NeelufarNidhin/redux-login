
import './App.css';
import Login from './Pages/Login';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';

import Update from './Pages/Update';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
     
      
    <BrowserRouter>
    <Navbar/>
    <main className="form-signin w-100 m-auto">
    <Routes>
    
      {/* <Route path ='/' Component = {Home} /> */}
      <Route path ='/'  element={<Home/>} />
      <Route path ='/login' element = {<Login/>} />
      <Route path ='/register' element= {<Register/>} />
      <Route path='/profile/:id' element ={ <Profile/>} />
      <Route path='/update/:id' element = {<Update/>} />
					
      <Route path='/dashboard' element={<Dashboard/>} />
     
   </Routes>
   </main>
   </BrowserRouter>  
    </div>
  );
}

export default App;
