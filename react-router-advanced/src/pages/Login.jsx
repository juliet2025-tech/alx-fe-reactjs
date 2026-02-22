function Login() {

  const login = () => {
    localStorage.setItem("isAuthenticated", "true");
    window.location.href = "/profile";
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;