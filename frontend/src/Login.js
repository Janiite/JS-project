import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  Axios.defaults.withCredentials = true;
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
         navigate("/game");
      }
    });
    
  };

  return (
    <div className="register">
      <div className="wrapper">
        <form>
          <h2>Please log in!</h2>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              className="form-control"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="text"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100 mb-3" onClick={login}>
            Log in
          </button>
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="btn btn-primary w-100 mb-3"
          >
            Sign up
          </button>

          <h1>Login status:{loginStatus}</h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
