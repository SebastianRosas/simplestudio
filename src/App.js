import About from './components/About';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Work from './components/Work';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
