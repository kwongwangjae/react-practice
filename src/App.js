import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Board from './components/board/Board';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Board} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
