import axios from "axios";
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleClick = (productId: string) => {
    setSelectedProductId(productId);
    window.location.href = "http://localhost:5173/order";
    console.log(productId);
    //orderProdu  ct(productId);
  };

  useEffect(() => {
    fetchProducts();
    checkLoginStatus();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:2021/products");
      if (response.status === 200) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkLoginStatus = () => {
    const loggedInStatus = localStorage.getItem("loggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  };

  const handleLoginFormClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <h1>Produits Disponibles</h1>
      <section id="InterfacePage">
        {/* Afficher les produits */}
        {products.map((product) => (
          <div className="cardInner" key={product._id}>
            <p className="title">{product.name}</p>
            <div className="cardesc">
              <p className="price">{product.price}€</p>
              <p className="desc">{product.description}</p>
              <button onClick={() => handleClick(product._id)}>
                add to card
              </button>
            </div>
            {selectedProductId === product._id && !isLoggedIn && (
              <LoginForm isShowLogin={false} onClick={handleLoginFormClick} />
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Products;
