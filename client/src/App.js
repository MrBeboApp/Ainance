import logo from './ardapp.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome to Arabic dapps academy with Bahaa Taha</p>
        <a
          className="App-link"
          href="https://ardapps.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arabic Dapps
       </a>
      </header>
    </div>
  );
}

export default App;
