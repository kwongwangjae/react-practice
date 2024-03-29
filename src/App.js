import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={MainPage} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
