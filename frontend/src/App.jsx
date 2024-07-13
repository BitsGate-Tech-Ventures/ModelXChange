//importing react stuff
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//importing pages
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard';




function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<RegisterPage/>} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />    
      
      </Routes>
      </Router>
    </Provider>
  );
}

export default App;
