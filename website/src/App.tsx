import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BackTop } from 'antd';
import ScrollToTop from './components/scroll-to-top';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import NotFound from './pages/not-found';
import { SanGoCongNghiep, SanGoTuNhien, SanNhua, PhuKien } from './pages/category';

const App = () => {
  return (
    <BrowserRouter>
      <BackTop />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category">
          <Route path="" element={<NotFound />} />
          <Route path="san-go-cong-nghiep" element={<SanGoCongNghiep />} />
          <Route path="san-go-tu-nhien" element={<SanGoTuNhien />} />
          <Route path="san-nhua" element={<SanNhua />} />
          <Route path="phu-kien" element={<PhuKien />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;