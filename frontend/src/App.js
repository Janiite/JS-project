import "./App.css";
import Register from "./Register";
//import Game from "./Game";
//import Login from "./Login";

//import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="title w-100 text-center">Welcome to Hangman Game!</h1>
      <Register/>
    </div>
  );
}

export default App;
