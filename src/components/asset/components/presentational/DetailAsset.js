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
    console.log('assetbox', AssetBox);
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
            <hr width="480px" color="#c4c4c4" noshade="true" style={{ marginTop: '0px' }} />
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
                className="profile"
                src={
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA3CAMAAAABvyXUAAAAqFBMVEX////hACrvgAreAADudQDvfwDvfADudwD++fX99O7ucwD74dL4yqzgABr98+rhACbgACDzomTxkkrgABTwijTfAArpa3P86+7tbQD0qnj87OLsZQD51b764eTxkUT+9/jvm6HrgofiKjznXmj1sob2y870v8L42NvzpW3lTln3wp/4z7TymlrwhyjjNkL30NfwqK/qdX3tj5TkPU/ysrn2uZDrWQDhIzMvlgqFAAAEPElEQVRYhe2Y22KqOhCGgUACQQwWUcRUsB6KKNZ62H3/N9szAWwtrLXXhbIudv8LDGnIRyYzk6Ga9qP/qSa7PP4b3IxScya75y6pYVis6JycAxfI5sztlisZcg1Kt91yXcWlMy0liy65MXItyx4R3dsn3XFt5NLJG9F13f/oEIx+RXuppyN43x23sIB7OQTI1b3u9niAATwbE8XVSdoVFxOHYcYjXy8tPZqn63EHXJU46EA5li5eDqHnheTlffVo7rYMYDtUZn5eqHULn4jjY53bNQ1l6I0A7DoJ9UrCI/NHklXiAO5J6OFRSwP9KkH8B260g/trGTZRQbSHVfue7/teGJ7OSb6zHwbGAOYy9TBpPIOZg1E6f0en7ucGo8bDqoKCMi7PhBAw6tHTyTju9ba9PCs4tfCEfNQBudz1NG2cJOhEvvDnbkSVLKM8IaPHmbrWiujBQSWSWtQcdFAQJEIE5y9cyibdFH0rEq6zimtRdunfc/LkN+lgQd52amMtRvN7bux6A54bblLMCIvRaKEywwpbZ2y9krGlvHjYuyMU11PmX4IU4vsYPNoYGsGpGuBw4/4V9TvkBT8Mg/AD7+AIUty9rwu9Nv6Fmbt7uzCe7v5itTqkyRfuPMCDqB4zza4uLCcX9es4VYcr3c+Oa+9ts80pzgEs7PO25K7xZ90YK7cyY4aUW1vjU4WzZ1EUUXir/hRzyXRav6A75VXLpjxqMRZWb1/OGMV9Dtqrm2HEqGUxDrNXuXLGl/0eo7bW53DRTPPKNa2qtaMGLZpzrUMsKd6+cMMxbK43arGN7VJaUHoBQsmVfAjXibmsubzBzU3mzFjWmCsJBfryZnXlioWn+y8tWDgvzJ4WGxyQFsvBvzOGuy3Z8JfcmJlS6zPe/ORZEYHFG9mMK64OYSVa88iWP+EK2A64Bv8HDM8wpGOT2iWXN7gFm6gHTacx20oPSvJrxYW7oLWGy9hSU59PNqxX9pG7VVzmlFxGs4nSpeJmbKienLBZy3ypCBSu5IoTxG7YVs48sVyZjvWr/S07oByr1iuHlQYup/CXXlQboIgmbStJA1FGDvrVM7yCf/oTbm6iw6DhS+6nnAsOlbKOIFvK1tT+CuHkHas4eoVr8N4cVNnZRDsrrqMCpwBHq7jxblApa7pwq6B689I6b6QQXOTQGCP5TC1vUMeRJiO+oxzepuYOn0rNKP0PYHjEfHj2rnbG/LgBn1Z+dquC53ZMcc/qGivOngZ4YHy3s/Ir27nRzVRp4IUf+w9wLIEHA3IhhhJPQJXeCCaniCg30Ye/13at3Ak3P8VvktYYo1cI8RlH3gb7V3hctPjW9pKrgsPif8B1e191kzqSw57AZ5cX1HmDvJQRdIRagLQly1LcuHXP/nRwc+9Gw18+W2m8To/puYrX8zVTP4OaO1yrUdt964izv/Ivvx/96EeP1L/Rv1EC9C6n3QAAAABJRU5ErkJggg=='
                }
              />
            </div>
            <div className="gang">
              <ul className="asset-tabs-left">
                <li className="name" style={{ fontSize: '13px' }}>
                  {menu.name}
                </li>
                <li style={{ fontSize: '12px', color: '#747474' }}>{menu.quantity}주</li>
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
      <Modal open={modalOpen} close={closeModal} header={modalData.header}></Modal>
    </div>
  );
};

export default DetailAsset;
