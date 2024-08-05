import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/sections/Header';
import Navbar from './components/compo/Navbar';
import Home from './Pages/Home';
import Footer from './components/compo/Footer';
import Blogs from './Pages/Blogs';
import GetSingleBlogPage from './Pages/GetSingleBlogPage';
import ScrollToTop from './components/compo/ScrollToTop';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:postId" element={<GetSingleBlogPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
