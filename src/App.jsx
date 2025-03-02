import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post-form" element={<PostForm />} />
      </Routes>
    </div>
  );
};

export default App;
