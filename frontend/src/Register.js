import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [message, setMessage] = useState("");
  //const [checkUserName, setCheckUserName] = useState("");

  const register = () => {
    if (password === password1 && username !== "") {
      Axios.post("http://localhost:3001/register", {
        username: username,
        password: password,
      }).then((response) => {
        console.log(response);
      });
    } else {
      setMessage("Passwords do not match");
    }
  };

  return (
    <div className="wrapper">
      <form>
        <h2 className="text-center mb-4">Please register!</h2>
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
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            required
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
          <p className="text-danger" >{message}</p>
        </div>
        <button className="btn btn-primary w-100 mb-3" onClick={register}>
          Sign up
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-primary w-100 mb-3"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
