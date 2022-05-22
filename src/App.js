import {Route, Routes } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Stocks from './pages/Stocks'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <div className="App">
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/stocks' element={<Dashboard/>}/>
      <Route path='/stocks/:symbol' element={<Stocks/>}/>
    </Routes>
    </div>
  );
}

export default App;
