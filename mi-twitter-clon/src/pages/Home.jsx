import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importamos Link para navegar al perfil

import TweetList from "../components/TweetList";
import TweetForm from "../components/TweetForm";

const Home = ({ user, logout }) => {
  // Mantenemos la inicialización perezosa que corregimos antes
  const [tweets, setTweets] = useState(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets"));
    return storedTweets || [];
  });

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
    };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet,
      ),
    );
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Bienvenido a Twitter</h1>
      
      {/* Sección condicional: Solo se muestra si hay un usuario logueado */}
      {user ? (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "10px", backgroundColor: "#f0f8ff", borderRadius: "8px" }}>
          <p style={{ margin: 0 }}>¡Hola, <strong>{user.username}</strong>!</p>
          <div>
            <Link to="/profile" style={{ marginRight: "15px", textDecoration: "none", color: "blue" }}>Mi Perfil</Link>
            <button onClick={logout} style={{ cursor: "pointer" }}>Cerrar sesión</button>
          </div>
        </div>
      ) : (
        <div style={{ marginBottom: "20px" }}>
          <p>Estás en modo invitado. <Link to="/login">Inicia sesión</Link> para twittear.</p>
        </div>
      )}

      {/* Solo mostramos el formulario si hay usuario, pero dejamos ver los tweets a todos */}
      {user && <TweetForm onAddTweet={addTweet} />}
      <TweetList tweets={tweets} onLike={likeTweet} />
    </div>
  );
};

export default Home;