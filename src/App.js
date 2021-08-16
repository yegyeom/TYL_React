import './App.css';
import './styles/sass/main.css';
import Page from './components/navigation/Page';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </div>
  );
}

export default App;