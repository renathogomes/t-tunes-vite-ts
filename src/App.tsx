import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import './index.css';
import Search from './pages/Search';
import Album from './pages/Album';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/" element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
