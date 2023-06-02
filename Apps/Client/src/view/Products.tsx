import LoginForm from "./LoginForm";
import useProducts from "../hooks/Products";



const Products = () => {
  const {
    handleClick,
    handleLoginFormClick,
    isLoggedIn,
    products,
    selectedProductId,
  } = useProducts();

  return (
    <>
      <h1>Produits Disponibles</h1>
      <section id="InterfacePage">
        {/* Afficher les produits */}
        {products.map((product) => (
          <div>
          <div className="cardInner" key={product._id}>
            <p className="title">{product.name}</p>
            <div className="cardesc">
          </div>
            
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
