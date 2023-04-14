import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/Hero/Hero';
import Posts from './components/Posts/Posts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Posts/>
    <Footer />
  </React.StrictMode>
);
