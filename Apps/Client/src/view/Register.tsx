import useRegister from "../hooks/Register";


const RegisterForm = () => {
    const { handleSubmit, email, password, setEmail, setPassword, error } = useRegister();

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
