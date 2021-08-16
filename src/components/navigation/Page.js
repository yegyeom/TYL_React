import { Route, NavLink } from 'react-router-dom';
import Home from '../home/index';
import Investment from '../investment/index';
import Ranking from '../ranking/index';
import Asset from '../asset/index.js';
import Profile from '../profile/index.js';
import '../../styles/sass/main.css';

const Page = () => {
  const topMenuBox = [
    { link: '/', title: '홈' },
    { link: '/Investment', title: '투자' },
    { link: '/Ranking', title: '랭킹' },
  ];
  const bottomMenuBox = [
    { link: '/Asset', title: '내 자산' },
    { link: '/Profile', title: '내 정보' },
  ];

  const topMenuList = topMenuBox.map((menu, idx) => (
    <li>
      <NavLink exact to={menu.link} activeClassName="active">
        {menu.title}
      </NavLink>
    </li>
  ));

  const bottomMenuList = bottomMenuBox.map((menu, idx) => (
    <li>
      <NavLink exact to={menu.link} activeClassName="active">
        {menu.title}
      </NavLink>
    </li>
  ));

  return (
    <div className="page">
      <div className="menu-bar">
        <h2>LOGO</h2>
        <ul className="tabs">{topMenuList}</ul>
        <ul className="tabs">{bottomMenuList}</ul>
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
