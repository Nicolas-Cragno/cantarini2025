import React from 'react';
import '../assets/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>  
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}
