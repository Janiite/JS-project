
import './App.css';
import Register from './Register';
//import Game from './Game';
import Login from './Login';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';




function App() {
  
  return (
    
    <div className="App">
     <h1 className='title'>Welcome to Hangman Game!</h1>
    <Register/>
    </div>
  );
}

export default App;
