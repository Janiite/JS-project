import "./App.css";
import Register from "./Register";
import Game from "./Game";
import Login from "./Login";
import ErrorPage from "./ErrorPage";

import{BrowserRouter as Router, Routes, Route,} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='game' element={<Game/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
