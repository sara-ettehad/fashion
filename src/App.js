import Home from '../src/pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import '../src/style/home/home.css';


function App() {
  return (
    <div>
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