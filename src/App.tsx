import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import './index.css';
import Search from './pages/Search';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
      </Routes>
    </>
  );
}

export default App;
