import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import EventDetails from './pages/EventDetails';
import Event from './pages/Event';

function App() {
  const [inputVals, setInputVals] = useState({});
  const onSubmitForm = (input) => {
    setInputVals(input);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<EventDetails onSubmitForm={onSubmitForm} />} />
          <Route path="/event" element={<Event inputs={inputVals} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
