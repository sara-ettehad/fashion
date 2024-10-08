import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

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
        <Route path="/fashion" element={<Home />} />
        <Route path="/signup" element={<SignUp />} /> {/* Add this route */}
        <Route path="/signin" element={<SignIn />} /> {/* Add this route */}
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;