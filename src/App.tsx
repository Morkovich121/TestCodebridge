import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';

import { fetchArticles } from './app/articleSlice';

import Homepage from './pages/Homepage/Homepage';
import ArticlePage from './pages/Articlepage/ArticlePage';

import './App.scss';

const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/article/:id' element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
