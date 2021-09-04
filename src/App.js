import { useEffect } from 'react';
import './styles/sass/main.css';
import Pc from './components/navigation/Page';
import Mobile from './components/navigation/Mobile.js';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { onSilentRefresh } from './components/auth/auth';
import { useDispatch } from 'react-redux';
import { login, logout } from './components/auth/userSlice';

function App() {
  const dispatch = useDispatch();

  const isPc = useMediaQuery({
    query: '(min-width: 481px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 480px)',
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
        {isMobile && (
          <BrowserRouter>
            <Mobile />
          </BrowserRouter>
        )}
      </div>
    </div>
  );
}

export default App;
