import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/sass/main.css';
import { useSelector } from 'react-redux';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { checkValidity, selectUser } from '../auth/userSlice';
import MobileContent from './MobileContent';
import MenuModal from './MenuModal';
import Mobilelogo from '../../styles/images/mobile-logo.svg';
import MobileMenulogo from '../../styles/images/mobile-menu-logo.svg';
import profile_img from '../../styles/images/profile_img.png';

const publicItems = [
  { link: '/', title: '홈' },
  { link: '/Investment', title: '투자' },
  { link: '/Prediction', title: '예측' },
  { link: '/Ranking', title: '랭킹' },
];
const privateItmes = [
  { link: '/Asset', title: '내 자산' },
  { link: '/Profile', title: '내 정보' },
];

const MobileTabItem = item => {
  const { idx, link, title } = item.data;
  return (
    <div key={idx} className="menu-item">
      <NavLink exact to={link} activeClassName="active">
        {title}
      </NavLink>
    </div>
  );
};

const Mobile = () => {
  const validity = useSelector(checkValidity);
  const user = useSelector(selectUser);
  const [tabBarItems, setTabBarItems] = useState([]);
  const [modalState, setModalState] = useState(false);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);
  const makeTabItemList = list => list.map((item, idx) => <MobileTabItem data={item} key={idx} />);

  useEffect(() => {
    setTabBarItems(makeTabItemList(publicItems));
  }, []);

  useEffect(() => {
    if (validity) setTabBarItems(makeTabItemList([...publicItems, ...privateItmes]));
  }, [validity]);

  return (
    <div className="mobile">
      <div className="mobile-menu-bar">
        <div className="mobile-top-menu">
          <img src={Mobilelogo}></img>
          {validity ? (
            <div className="mobile-profile-img-box">
              <img className="profile" src={profile_img} />
            </div>
          ) : (
            <img id="menu-logo" src={MobileMenulogo} onClick={openModal} />
          )}
        </div>
        <div className="mobile-main-menu">
          <ScrollMenu wheel={true}>{tabBarItems}</ScrollMenu>
        </div>
      </div>
      <MobileContent />
      <MenuModal modalState={modalState} closeModal={closeModal} />
    </div>
  );
};

export default Mobile;
