import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Intake from './pages/Intake';

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
<Route path="/intake" element={<Intake />} />
</Routes>

    </Router>
  );
}
