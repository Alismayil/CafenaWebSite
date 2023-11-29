
import './App.scss'
import About from './components/Routes/Aboutroute';
import Menu from './components/Routes/Menuroute';
import Reservation from './components/Routes/ReservationRoute';
import Navbar from './layout/navbar/index'
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages from './layout/navbar/pages';
import Shop from './layout/navbar/shop';

function App() {

  return (
    <>
    <Navbar>
     
    <Routes>
  
<Route path='/' element={<Navbar/>}>
<Route path='about' element={<About/>}/>
<Route path='menu' element={<Menu/>}/>
<Route path='reservation' element={<Reservation/>}/>
<Route path='pages' element={<Pages/>}/>
<Route path='shop' element={<Shop/>}/>
</Route>
</Routes>

      </Navbar>
    </>
  )
}

export default App
