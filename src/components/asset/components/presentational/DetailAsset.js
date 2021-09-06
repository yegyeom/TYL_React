import React, { useState, useEffect } from 'react';
import Modal from './Modal.js';
import '../../../../styles/sass/main.css';

const DetailAsset = ({ todayTime, assetName, TotalAssetBox, AssetBox }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [totalAsset, setTotalAsset] = useState([]);
  const [detailList, setDetailList] = useState([]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = e => {
    const id = e.currentTarget.className;
    if (e.currentTarget.id == 'detail-asset') {
      setModalData({
        header: AssetBox[id].name,
        onAccept: closeModal,
      });
      setModalOpen(true);
    }
  };

  useEffect(() => {
    const assets = TotalAssetBox.map((menu, idx) => {
      if (menu.title === assetName && menu.total > 0) {
        return (
          <div key={idx}>
            <div className="total-my-asset" key={idx}>
              <div className="gang" style={{ paddingLeft: '25px' }}>
                <ul className="asset-tabs-left">
                  <li>내 {menu.title}</li>
                  <li>{menu.total.toLocaleString('ko-KR')} TYL</li>
                </ul>
                {menu.link === 'cash' ? null : (
                  <ul className="asset-tabs-right">
                    <li
                      className={
                        menu.today === '+'
                          ? 'increase'
                          : menu.today === ''
                          ? 'maintain'
                          : 'decrease'
                      }
                    >
                      {menu.today === '+' ? '+' : ''} {menu.value.toLocaleString('ko-KR')}
                    </li>
                    <li
                      className={
                        menu.today === '+'
                          ? 'increase'
                          : menu.today === ''
                          ? 'maintain'
                          : 'decrease'
                      }
                    >
                      ({menu.percent.toFixed(2)}%)
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <hr width="90%" color="#c4c4c4" noshade="true" style={{ marginTop: '0px' }} />
            <div className="time">
              {todayTime.slice(0, 9)}
              <span>{todayTime.slice(9, 12)}</span>
              <span>{todayTime.slice(12, 19)}</span>
              <span> 기준</span>
            </div>
          </div>
        );
      }
    });

    const details = AssetBox.map((menu, idx) => {
      return (
        <div key={idx}>
          <li key={idx} id="detail-asset" className={idx} onClick={openModal}>
            <div className="asset-img-box">
              <img
                className="asset-img"
                src={`https://testyourlife.kro.kr/api/image/stock/${menu.code}_logo`}
              />
            </div>
            <div className="gang">
              <ul className="asset-tabs-left">
                <li className="name" style={{ fontSize: '13px' }}>
                  {menu.name}
                </li>
                <li style={{ fontSize: '12px', color: '#747474' }}>
                  {`${menu.quantity} ${menu.title === '주식' ? '주' : '개'}`}
                </li>
              </ul>
              <ul className="asset-tabs-right">
                <li style={{ fontSize: '14px' }}>
                  {(menu.price * menu.quantity).toLocaleString('ko-KR')} TYL
                </li>
                <li
                  className={
                    menu.profit > 0 ? 'increase' : menu.profit < 0 ? 'decrease' : 'maintain'
                  }
                  style={{ fontSize: '12px' }}
                >
                  {menu.profit > 0 ? '+' : ''}
                  {menu.profit.toLocaleString('ko-KR')} (
                  {((menu.profit / (menu.price * menu.quantity - menu.profit)) * 100).toFixed(2)}
                  %)
                </li>
              </ul>
            </div>
          </li>
        </div>
      );
    });

    setTotalAsset(assets);
    setDetailList(details);
  }, []);

  return (
    <div className="my-asset-container">
      <div id="asset" style={{ paddingBottom: '10px' }}>
        {totalAsset}

        {detailList.length == 0 ? (
          <div>
            {assetName === '암호화폐' ? (
              <h3>보유한 {assetName}가 없습니다.</h3>
            ) : (
              <h3>보유한 {assetName}이 없습니다.</h3>
            )}
          </div>
        ) : (
          <div>{detailList}</div>
        )}
      </div>
      <Modal
        open={modalOpen}
        close={closeModal}
        header={modalData.header}
        assetName={assetName}
      ></Modal>
    </div>
  );
};

export default DetailAsset;
