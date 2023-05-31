

const Order = () => {
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (isLoggedIn === "true") {
    return (
      <>
        <h1>Orders</h1>
        <p>je suis auth</p>
        

        {/* Affichez les informations des commandes ici */}
      </>
    );
  } else {
    window.location.href = "/login"; 
    return null; 
  }
};

export default Order;
