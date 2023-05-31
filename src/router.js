import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import List from './pages/list.js';
import Product from './pages/product.js';
import Profile from './pages/profile.js';
import Header from './components/header.js';
import Footer from './components/footer.js'
import './App.css';

const router = () => {
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            <Footer />
            </BrowserRouter>
        </div>
    )
}

export default router