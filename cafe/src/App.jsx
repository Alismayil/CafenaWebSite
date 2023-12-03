import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layout/MainLayout";
import DetailPage from './page/detailPage';
import Homepage from './page/homePage';
import ReservationPage from "./page/reservationPage";
import ShopPage from "./page/shopPage";
import FAQ from "./page/faqPage";
import About from "./page/aboutPage";
import ShopDetailPage from "./page/shopDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Homepage />} />
            <Route path="/details/:id" element={<ShopDetailPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/details/:id" element={<DetailPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
     </>

  );
}

export default App;
