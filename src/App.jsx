import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import AddQuestion from './component/AddQuestion';
import Results from './component/Results';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/addQuestion" element={<AddQuestion />} />
      <Route path="/Results" element={<Results />} />
    </Routes>
  );
}

export default App;
