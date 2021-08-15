import './App.css';
import './styles/sass/main.css';
import Pc from './components/navigation/Page';
import Tablet from './components/navigation/Tablet.js';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isPc = useMediaQuery({
    query: '(min-width: 1000px)',
  });

  const isTablet = useMediaQuery({
    query: '(max-width: 999px)',
  });

  return (
    <div className="container">
      {isPc && (
        <BrowserRouter>
          <Pc />
        </BrowserRouter>
      )}
      {isTablet && (
        <BrowserRouter>
          <Tablet />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
