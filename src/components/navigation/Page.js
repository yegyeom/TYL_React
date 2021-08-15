import { Route, NavLink } from 'react-router-dom';
import Home from '../home/index';
import Investment from '../investment/index';
import Ranking from '../ranking/index';
import Asset from '../asset/index.js';
import Profile from '../profile/index.js';
import '../../styles/sass/main.css';

const Page = () => {
  return (
    <div className="page">
      <div className="menu-bar">
        <h2>LOGO</h2>
        <ul className="tabs">
          <li id="top">
            <NavLink to="/" activeClassName="active-style">
              홈
            </NavLink>
          </li>

          <li>
            <NavLink to="/Investment" activeClassName="active">
              투자
            </NavLink>
          </li>
          <li id="bottom">
            <NavLink to="/Ranking" activeClassName="active">
              랭킹
            </NavLink>
          </li>
        </ul>
        <ul className="tabs">
          <li id="top">
            <NavLink to="/Asset" activeClassName="active">
              내 자산
            </NavLink>
          </li>
          <li id="bottom">
            <NavLink to="/Profile" activeClassName="active">
              내 정보
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/Investment" component={Investment} />
        <Route path="/Ranking" component={Ranking} />
        <Route path="/Asset" component={Asset} />
        <Route path="/Profile" component={Profile} />
      </div>
    </div>
  );
};

export default Page;
