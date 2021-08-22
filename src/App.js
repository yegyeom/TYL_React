import { useEffect } from 'react';
import './styles/sass/main.css';
import Pc from './components/navigation/Page';
import Tablet from './components/navigation/Tablet.js';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { onSilentRefresh } from './components/auth/auth';
import { useDispatch } from 'react-redux';
import { login, logout } from './components/auth/userSlice';

function App() {
  const dispatch = useDispatch();

  const isPc = useMediaQuery({
    query: '(min-width: 1000px)',
  });

  const isTablet = useMediaQuery({
    query: '(max-width: 999px)',
  });

  useEffect(() =>
    onSilentRefresh().then(user => (user ? dispatch(login(user)) : dispatch(logout()))),
  );

  return (
    <div className="container">
      <div className="main-layout">
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
    </div>
  );
}

export default App;
