import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import EventDetails from './pages/EventDetails';
import Event from './pages/Event';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<EventDetails />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
