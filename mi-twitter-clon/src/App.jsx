import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Funcion para iniciar sesion
  const login = (username) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Funcion para cerrar sesion
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <Routes>
        {/* Ruta publica para el Login */}
        <Route path="/login" element={<Login onLogin={login} />} />

        {/*Ruta Home: Le pasamos el usuario actual y la funcion para salir*/}
        <Route path="/" element={<Home user={user} logout={logout} />} />

        {/*Ruta protegida. Si no hay usuario, lo patea al /login */}
        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
