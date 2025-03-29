import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<Home/>}/>
    </Routes>

    </>
  );
}

export default App;
