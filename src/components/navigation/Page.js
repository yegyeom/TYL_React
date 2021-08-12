import { Route, Link } from 'react-router-dom';
import Home from '../home/index';
import Investment from '../investment/index';
import Ranking from '../ranking/index';
import Profile from '../profile/index.js';
import '../../styles/sass/main.css';

const Page = () => {
  return (
    <div className="page">
      <div className="menu-bar">
        <h2>LOGO</h2>
        <ul id="top" className="tabs">
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/Investment">투자</Link>
          </li>
          <li>
            <Link to="/Ranking">랭킹</Link>
          </li>
        </ul>
        <ul id="down" className="tabs">
          <li>내 자산</li>
          <li>
            <Link to="/Profile">내 정보</Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/Investment" component={Investment} />
        <Route path="/Ranking" component={Ranking} />
        <Route path="/Profile" component={Profile} />
      </div>
    </div>
  );
};

export default Page;
