import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/utils/style/index.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import Profils from './pages/Profils';
import NotFound from './pages/404'
// Composants
import TopNavBar from './components/TopNavBar';
import SideNavBar from './components/SideNavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TopNavBar/>
      <SideNavBar/>
      <Routes>        
        <Route  path="/" element={<Home/>}/>
        <Route  path="/user/:userId" element={<Profils/>}/>
        <Route  path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);