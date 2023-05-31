import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(email, password);
    axios
      .post("http://localhost:2021/login", {
        email,
        password,
      })
      .then((res) => {
        const data = res.data;
        console.log(data, "userRegister");
        if (data.status === "ok") {
          //window.localStorage.setItem("email", data.email);
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", "true");
          window.location.href = "http://localhost:5173/order"

        
        }
      })
      .catch((error) => {
        setError("An error occurred. Please try again.");
      });
  }

  return (
    <div className="login-form">
      <div className="form-box solid">
        <form onSubmit={handleSubmit}>
          <h1 className="login-text">Sign In</h1>

          <label>Email</label>
          <br />
          <input
            type="text"
            name="username"
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
          <input type="submit" value="LOGIN" className="login-btn" />
          <p>
            Vous n'avez pas de compte ? <a href="/register">Créer</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
