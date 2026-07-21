import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Evitamos que el usuario mande un nombre vacio
    if (username.trim() === "") return;

    // Llamamos a la funcion que nos pasaron desde App.jsx
    onLogin(username);

    //Redirigir al usuario a la pagina principal
    navigate("/");
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2>Iniciar Sesión</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
