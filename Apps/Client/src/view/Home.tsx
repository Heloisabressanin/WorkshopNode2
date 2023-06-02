import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setIsLoggedIn(true);
      console.log(tokenResponse);
    },
  });

  return (
    <>
      <h1>
        Bienvenue, cliquez ici pour voir les{" "}
        <Link to="/products">produits !</Link>
      </h1>
      {!isLoggedIn ? (
        <button onClick={() => login()}>Sign in with Google 🚀</button>
      ) : (
        <p>Connexion réussie avec Google !</p>
      )}
    </>
  );
}

export default Home;
