import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './Components/ProductAll';
import ProductDetail from './Components/ProductDetail';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import PrivateRouter from './Components/PrivateRouter';
function App() {
  const [authenticate, setAuthenticate] = useState(false); // true값이면 로그인 false 로그아웃상태
  useEffect(() => {
    console.log("Login", authenticate);
  }, [authenticate])
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<ProductAll />}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<PrivateRouter authenticate={authenticate} />}/>
      </Routes>
    </div>
    );
}

export default App;
