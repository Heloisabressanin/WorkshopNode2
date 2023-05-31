import axios from "axios";
import React, { useState } from "react";

const RegisterForm = () => {
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

  return (
    <div className="register-form">
      <div className="form-box solid">
        <form onSubmit={handleSubmit}>
          <h1 className="login-text">Register</h1>
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            className="login-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            className="login-box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {error && <p className="error-message">{error}</p>}
          <input type="submit" value="Submit" className="login-btn" />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
