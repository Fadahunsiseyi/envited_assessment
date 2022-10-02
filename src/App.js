import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import EventDetails from './pages/EventDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
