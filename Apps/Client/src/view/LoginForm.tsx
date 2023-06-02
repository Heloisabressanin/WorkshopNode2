import useLogin from "../hooks/Login";

const LoginForm = ({ isShowLogin }: any) => {
  const { handleSubmit, email, setPassword, password, setEmail, error, login } =
    useLogin();

  return (
    <>
      <div className={`${isShowLogin ? "active" : ""} show`}>
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
              <button onClick={() => login()}>Sign in with Google 🚀</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
