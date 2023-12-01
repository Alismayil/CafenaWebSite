import "./App.scss";
import About from "./components/Routes/Aboutroute/index";
import Menu from "./components/Routes/Menuroute/index";
import Reservation from "./components/Routes/ReservationRoute/index";
import Navbar from "./layout/navbar/index";
import DetailPage from './page/detailPage';
import Homepage from './page/homePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages from "./components/Routes/Pagesroute/index";
import Shop from "./components/Routes/Shoproute/index";
import Home2 from "./components/Routes/Homeroute/home2";
import Home1 from "./components/Routes/Homeroute/home1";
import Blog from "./components/blog";
import Footer from "./layout/footer/index";
import MainLayout from "./layout/MainLayout";
import ShopPage from "./page/shopPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/details/:id" element={<DetailPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
     </>

  );
}

export default App;
