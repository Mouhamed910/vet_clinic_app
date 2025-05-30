import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Login from './pages/Login';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Accueil</h1>
      {user ? (
        <>
          <p>Bienvenue, {user.name} !</p>
          <button onClick={logout}>Se déconnecter</button>
        </>
      ) : (
        <>
          <p>Vous n'êtes pas connecté.</p>
          <Link to="/login">Se connecter</Link>
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
