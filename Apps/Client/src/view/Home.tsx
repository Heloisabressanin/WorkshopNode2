import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>
        Bienvenue, cliquez ici pour voir les <Link to="/products">produits !</Link>
      </h1>
    </>
  );
}

export default Home;
