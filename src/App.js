import React from 'react'
import { Route, Routes } from "react-router-dom"


import Header from "./components/Header";
import Sidebar from './components/Sidebar';

import MainPage from './pages/MainPage';
import Thanks from './pages/Thanks';

function App() {

  return (
      <>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/thanks" element={<Thanks/>} />
        </Routes>
      </>
  );
}

export default App;
