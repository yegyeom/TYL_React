import './App.css';
import MenuBar from './components/navigation/MenuBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <MenuBar />
      </div>
    </BrowserRouter>
  );
}

export default App;