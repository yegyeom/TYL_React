import logo from './logo.svg';
import './App.css';
import GoogleButton from './components/auth/GoogleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GoogleButton />
      </header>
    </div>
  );
}

export default App;
