import logo from './logo.svg';
import './App.css'; 
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <h1 style={{color: "red"}}>This is my new project</h1>
     <button id="btn">Click Me!</button>
     <Home/>
    </div>
  );
}

export default App;
