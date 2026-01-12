import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import About from './pages/About'
import PastEvents from './pages/PastEvents'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<PastEvents />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
