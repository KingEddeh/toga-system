import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* icons for Material UI */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          <h1>Hello, React!</h1>
          <Hello />
        </div>
      </header>

        <div>
          <h1>Hello, React!</h1>
          <Hello />
        </div>

    </div>

    

  );
}

export default App;
