//importing react stuff
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//importing pages
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Home from "./pages/Home"



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<RegisterPage/>} />
          <Route path="/Login" element={<LoginPage/>} />
      </Routes>
      </Router>
    </Provider>
  );
}

export default App;
