import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/About';
import Demo from './pages/Demo';
// bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js//bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";
import Contact from './pages/Contact';
import BlogShow from './pages/BlogShow';
import ShowWork from './pages/ShowWork';
 


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about-us" element={<About/>} />
          <Route exact path="/demo" element={<Demo/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/blog" element={<BlogShow/>} />
          <Route xeact path="/work" element={<ShowWork/>} />
        </Routes>
      </Router >
    </>
  )
}

export default App;
