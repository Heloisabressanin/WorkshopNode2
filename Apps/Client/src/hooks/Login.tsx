import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";

const useLogin = () => {
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
          window.localStorage.setItem("loggedIn", "true");
          window.location.href = "http://localhost:5173/order";
        }
      })
      .catch((error) => {
        setError("An error occurred. Please try again.");
      });
  }
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      window.localStorage.setItem("loggedIn", "true");

      window.location.href = "http://localhost:5173/order";
    },
  });
  return {
    handleSubmit,
    email,
    setPassword,
    password,
    setEmail,
    error,
    login,
  };
};

export default useLogin;
