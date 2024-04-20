import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import "./App.css";
import Layout from "./components/Layout";

import Home from './pages/Home';


function App() {
  return (
    <Router> {/* Wrap your components with Router */}
      <div className="App">
        <Layout>
         
          <Home />
        
        </Layout>
      </div>
    </Router>
  );
}

export default App;
