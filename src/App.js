import Footer from './components/Footer';
import Header from './components/Header';
import Card from './pages/Card';
import Home from './pages/Home';
import Сonditions from './pages/Сonditions';
import Cart from './pages/Cart';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper container'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/conditions' element={<Сonditions />} />
          <Route path='/card/:id' element={<Card />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
