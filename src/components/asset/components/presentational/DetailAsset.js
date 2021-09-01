import React, { useState } from 'react';
import Modal from './Modal.js';
import '../../../../styles/sass/main.css';

const DetailAsset = ({ assetName, TotalAssetBox, AssetBox, TradeBox }) => {
  const todayTime = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month + '-' + day;
    var hours = ('0' + today.getHours()).slice(-2);
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var seconds = ('0' + today.getSeconds()).slice(-2);
    var timeString = hours + ':' + minutes + ':' + seconds;

    return dateString + ' ' + timeString;
  };

  const TotalAsset = TotalAssetBox.map((menu, idx) => {
    if (menu.title === assetName && menu.total > 0) {
      return (
        <>
          <div className="total-my-asset" key={idx}>
            <div className="gang" style={{ paddingLeft: '25px' }}>
              <ul className="asset-tabs-left">
                <li>내 {menu.title}</li>
                <li>{menu.total.toLocaleString('ko-KR')} TYL</li>
              </ul>
              {menu.link === 'cash' ? null : (
                <ul className="asset-tabs-right">
                  <li className={menu.today === '+' ? 'increase' : 'decrease'}>
                    {menu.today} {menu.value.toLocaleString('ko-KR')}
                  </li>
                  <li className={menu.today === '+' ? 'increase' : 'decrease'}>
                    ({menu.percent.toFixed(1)}%)
                  </li>
                </ul>
              )}
            </div>
          </div>
          <hr width="380px" color="#c4c4c4" noshade="true" style={{ marginTop: '0px' }} />
          <div className="time">
            {todayTime().slice(0, 9)}
            <span>{todayTime().slice(9, 12)}</span>
            <span>{todayTime().slice(12, 19)}</span>
            <span> 기준</span>
          </div>
        </>
      );
    }
  });

  const DetailList = AssetBox.map((menu, idx) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const closeModal = () => {
      setModalOpen(false);
    };

    const openModal = e => {
      if (e.currentTarget.id == 'detail-asset') {
        setModalData({
          header: menu.name,
          onAccept: closeModal,
        });
      }
      setModalOpen(true);
    };

    return (
      <>
        <li key={idx} id="detail-asset" onClick={openModal}>
          <div className="asset-img-box">
            <img
              className="profile"
              src={'https://t1.daumcdn.net/cfile/tistory/997BD7335D089C3023'}
            />
          </div>
          <div className="gang">
            <ul className="asset-tabs-left">
              <li style={{ fontSize: '12px' }}>{menu.name}</li>
              <li style={{ fontSize: '11px', color: '#747474' }}>{menu.quantity}주</li>
            </ul>
            <ul className="asset-tabs-right">
              <li style={{ fontSize: '13px' }}>
                {(menu.price * menu.quantity).toLocaleString('ko-KR')} TYL
              </li>
              <li
                className={menu.profit > 0 ? 'increase' : menu.profit < 0 ? 'decrease' : 'maintain'}
                style={{ fontSize: '11px' }}
              >
                {menu.profit > 0 ? '+' : ''}
                {menu.profit.toLocaleString('ko-KR')} (
                {((menu.profit / (menu.price * menu.quantity - menu.profit)) * 100).toFixed(1)}
                %)
              </li>
            </ul>
          </div>
        </li>
        <Modal
          open={modalOpen}
          close={closeModal}
          onAccept={modalData.onAccept}
          header={modalData.header}
          TradeBox={TradeBox}
        ></Modal>
      </>
    );
  });

  return (
    <div className="my-asset-container">
      <div id="asset" style={{ paddingBottom: '10px' }}>
        {TotalAsset}
        <div>
          {DetailList.length == 0 ? (
            assetName === '암호화폐' ? (
              <h3>보유한 {assetName}가 없습니다.</h3>
            ) : (
              <h3>보유한 {assetName}이 없습니다.</h3>
            )
          ) : (
            DetailList
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailAsset;
