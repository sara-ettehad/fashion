import Home from '../src/pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

import "./style/body.css";

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';



function App() {
  return (
    <div className='container'>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;