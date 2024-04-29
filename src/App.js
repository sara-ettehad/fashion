import Home from '../src/pages/Home';

import Sidebar from './components/Sidebar';
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
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
