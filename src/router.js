import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LP from './pages/lp.js';
import Home from './pages/home.js';
import BlogDetail from './pages/blog_detail.js';
import Product from './pages/product.js';
import ProductDetail from './pages/product_detail.js';
import Profile from './pages/profile.js';
import Header from './components/header.js';
import Footer from './components/footer.js'
import './App.css';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<LP />} />
                    <Route path="/blog" element={<Home />} />
                    <Route path="/blog/:id" element={<BlogDetail />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Router