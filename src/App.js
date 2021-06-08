import logo from './logo.svg';
import './App.css';
import NavBar  from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
       COMERCIO - GOURDIN
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
