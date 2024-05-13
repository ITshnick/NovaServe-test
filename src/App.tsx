import React from 'react';
import Header from './components/Header/header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

const links = [
  { label: "Home", path: '/' },
  { label: "List", path: '/list' },
]

function App() {
  return (
    <div className="App">
      <Router>
      <Header title='Nova Serve' links={links} />
        <Routes>
          <Route path="/" />
          <Route path="/list" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
