import { useState } from "react";
import Axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [checkUserName, setCheckUserName] = useState("");

  const register = () => {
    Axios.get("http://localhost:3001/check", {
      username: username,
    }).then((response) => {
      alert(response);
    });
    if (password === password1 && username !== "") {
      Axios.post("http://localhost:3001/register", {
        username: username,
        password: password,
        password1: password1,
      }).then((response) => {
        console.log(response);
      });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="register">
     
      <div className="wrapper">
        <form>
          <h2>Please register!</h2>
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
          </div>
          <button className="btn btn-primary" onClick={register}>Sign up</button>
          <button className="btn btn-primary mx-2">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
