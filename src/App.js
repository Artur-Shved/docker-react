import logo from './logo.svg';
import './App.css';
import HelloWorld from './hello-world'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HelloWorld/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            I was changed at feature hello world branch
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
