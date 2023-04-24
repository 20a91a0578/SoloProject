import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Header';
import Remove from './components/Remove';
import AddUpdate from './components/AddUpdate';
import Attendance from './components/Attendance';
import Footer from './Footer';
import Dash from './components/Dash';
// import Login from './Login';
function App(props) {
  return (
    <>
 <BrowserRouter>
 <Header username={props.username}/>
 <Routes>
  <Route path='/' element={<Dash />}/>
  <Route path='/dashboard' element={<Dash/>}/>
  <Route path='/attendance' element={<Attendance/>}/>
  <Route path='/addupdate' element={<AddUpdate/>}/>
  <Route path='/remove' element={<Remove/>}/>
  

 </Routes>
 <Footer/>
 </BrowserRouter>
    </>
  );
}

export default App;
