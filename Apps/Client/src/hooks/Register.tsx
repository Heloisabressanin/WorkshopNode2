import axios from "axios";
import React, { useState } from "react";

const useRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email, password);
    axios
      .post("http://localhost:2021/register", {
        email,
        password,
      })
      .then((res) => {
        const data = res.data;
        console.log(data, "userRegister");

        // Enregistrer le token dans le local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("loggedIn", "true");

        // Rediriger vers la page "Produits"
        window.location.href = "/products";
      })
      .catch((error) => {
        setError("An error occurred. Please try again.");
      });
  };
  return{
    handleSubmit,
    email,
    password,
    setEmail,
    setPassword,
    error
  }
};

export default useRegister;