import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h2>Perfil de Usuario</h2>
      
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", marginTop: "20px" }}>
        {/* Como esta ruta está protegida, siempre deberíamos tener a 'user' aquí */}
        {user ? (
          <p style={{ fontSize: "18px" }}>Nombre de usuario: <strong>@{user.username}</strong></p>
        ) : (
          <p>No se encontró información del usuario.</p>
        )}
      </div>

      <div style={{ marginTop: "30px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Profile;