import { useState } from "react";
import Axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () =>{
        Axios.post("http://localhost:3001/login", {
            username: username,
            password : password,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="register">
            <h1>Welcome to Hangman Game!</h1>
            <form >
                <h2>Please log in!</h2>
                <label>
                    Username
                </label>
                <input type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
                <label>
                    Password
                </label>
                <input type="text"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <button >Sign up</button>
                <button onClick={login}>Log in</button>
            </form>
        </div>
    )
}

export default Login;