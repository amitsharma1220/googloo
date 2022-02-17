import './App.css';
import Home from './pages/Home';
import Search from './components/Search'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Home (the one with the search on) */}
          <Route path="/" element={<Home />} />

          {/* SearchPage (the result page) */}
          <Route path="/search" element={<Search />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
