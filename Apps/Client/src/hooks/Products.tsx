import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleClick = (productId: string) => {
    setSelectedProductId(productId);
    //window.location.href = "http://localhost:5173/order";
  };

  useEffect(() => {
    fetchProducts();
    fetchUsers();
    checkLoginStatus();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:2021/products");
      if (response.status === 200) {
        const responseData = response.data;
        if (Array.isArray(responseData.data)) {
          setProducts(responseData.data);
        } else {
          console.error("Invalid data format. Expected an array.");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:2021/users");
        if (response.status === 200) {
          const responseData = response.data;
          if (Array.isArray(responseData.data)) {
            console.log(responseData.data);
          } else {
            console.error("Invalid data format. Expected an array.");
          }
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


  return{
    handleClick,
    handleLoginFormClick,
    isLoggedIn,
    products,
    selectedProductId,
    
  }
};

export default useProducts;
