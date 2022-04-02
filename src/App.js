import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import About from './components/About/About';
import Error from './components/Error/Error';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/orders' element={<Orders />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
