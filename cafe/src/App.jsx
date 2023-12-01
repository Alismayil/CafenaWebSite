import "./App.scss";
import About from "./components/Routes/Aboutroute/index";
import Menu from "./components/Routes/Menuroute/index";
import Reservation from "./components/Routes/ReservationRoute/index";
import Navbar from "./layout/navbar/index";
import { Route, Routes } from "react-router-dom";
import Pages from "./components/Routes/Pagesroute/index";
import Shop from "./components/Routes/Shoproute/index";
import Home2 from "./components/Routes/Homeroute/home2";
import Home1 from "./components/Routes/Homeroute/home1";
import Blog from "./components/blog";
import ReservationPage from './page/reservationPage/index'
import Footer from "./layout/footer/index";

function App() {
  return (
    <>
      {/* <Navbar>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="Home1" element={<Home1 />} />
            <Route path="Home2" element={<Home2 />} />
            <Route path="/" element={<Navbar />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="pages" element={<Pages />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </Navbar>
      <Blog />
      <Footer /> */}
      <ReservationPage>
        
      </ReservationPage>
    </>
  );
}

export default App;
