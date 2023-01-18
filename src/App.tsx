import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import ArticlePage from './pages/Articlepage/ArticlePage';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/article' element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
