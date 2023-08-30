import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Remove from './components/Remove';
import AddUpdate from './components/AddUpdate';
import Attendance from './components/Attendance';

import Dash from './components/Dash';
import Login from './Login';
import Udash from './components/Udash';
function App() {

  return (
    <>
 <BrowserRouter>
 
 <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/dashboard' element={<Dash/>}/>
  <Route path='/attendance' element={<Attendance/>}/>
  <Route path='/addupdate' element={<AddUpdate/>}/>
  <Route path='/remove' element={<Remove/>}/>
  <Route path='/udashboard' element={<Udash/>}/>
  

 </Routes>

 </BrowserRouter>
    </>
  );
}

export default App;
