import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Modal = props => {
  const { closeModal, modalData } = props;

  // const [data, setdata] = useState();
  const [inputAmount, setValue] = useState();
  const [myCash, setMyCash] = useState();
  const [myInvest, setMyInvest] = useState();
  const inputRef = useRef();
  const modalEl = useRef(); // modal Ref
  const btnEl = useRef(); // btn Ref
  const [category, setCategory] = useState('stock');
  let data;

  useEffect(() => {
    if (props.category == 'stock' || props.category == 'coin') setCategory(props.category);
  }, [props.category]);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    inputRef.current.focus();
    console.log(modalData);

    axios.get('asset').then(res => {
      setMyCash(res.data.cash.amount);
    });

    let url = 'stock/amount?code=' + String(modalData.code);
    axios.get(url).then(res => {
      //해야한다
      setMyInvest(res.data.amount);
    });

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    data = {
      trsType: modalData.trsType,
      code: modalData.code,
      name: modalData.name,
      assetType: category,
      value: modalData.value,
      amount: inputAmount,
    };
  }, [inputAmount]);

  const handleClickOutside = ({ target }) => {
    if (!modalEl.current.contains(target)) {
      closeModal({ open: false, text: '' });
    }
  };

  const onClicklabel = ({ target }) => {
    console.log('또니?', data.assetType);

    if (modalData.trsType == 'buy' && inputAmount * modalData.value > myCash) {
    } else if (modalData.trsType == 'sell' && inputAmount > myInvest) {
    } else if (inputAmount != null && inputAmount != 0) {
      let url;
      if (category == 'stock') {
        url = 'stock/transaction';
      } else if (category == 'coin') {
        url = 'api/coin/transaction';
      }

      axios.post(url, data).then(res => {
        console.log('onClickBtn => ', res.data);
        closeModal({
          open: true,
          text: res.data.message,
          data: modalData,
          inputAmount: inputAmount,
          myAsset: { myCash: myCash, myInvest: myInvest },
        });
      });
    }
  };

  const onChangeInput = e => {
    setValue(e.target.value);
    console.log('myAssetmyAsset==> ', myCash, category);
  };

  return (
    <>
      <div className="trade-openModal trade-modal">
        <section ref={modalEl}>
          <div className="modal-header-container">
            <div className="modal-item-img">
              {/* <img className="item" src={item.imageUrl} alt={item.name} /> */}
            </div>

            <div className="modal-name-Btn">
              <div className="modal-item-name" id="modal-item-name">
                {modalData.name}
              </div>

              <div className="modal-item-dealBtn">
                <label id="modal-deal-label" ref={btnEl} onClick={onClicklabel}>
                  {modalData.trsType == 'buy' ? '구매하기' : '판매하기'}
                </label>
              </div>
            </div>
          </div>

          <div className="modal-body-container">
            <div className="modal-item-info">
              <div className="modal-item-text">현재가격</div>
              <div className="modal-item-myinfo">
                {parseInt(modalData.value).toLocaleString('ko-KR')} TYL
              </div>
            </div>
            <div className="modal-item-info">
              <div className="modal-item-text">
                {modalData.trsType == 'buy' ? '보유자산' : '보유수량'}
              </div>
              <div className="modal-item-myinfo">
                {modalData.trsType == 'buy'
                  ? parseInt(myCash).toLocaleString('ko-KR')
                  : parseInt(myInvest).toLocaleString('ko-KR')}
                {modalData.trsType == 'buy'
                  ? ' TYL'
                  : category == 'stock'
                  ? '주'
                  : ' ' + modalData.code.slice(4, modalData.code.length)}
              </div>
            </div>

            <div className="modal-item-info">
              <div className="modal-item-text">
                {modalData.trsType == 'buy' ? '구매수량' : '판매수량'}
              </div>

              <div className="modal-item-myinput">
                <input
                  id="modal-input"
                  ref={inputRef}
                  type="number"
                  value={inputAmount}
                  onChange={onChangeInput}
                  placeholder="수량을 입력하세요"
                ></input>
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {category == 'stock' ? '주' : modalData.code.slice(4, modalData.code.length)}
              </div>
            </div>

            <div className="modal-item-info" id="modal-item-info-custom">
              <div className="modal-item-text">
                {modalData.trsType == 'buy' ? '구매총액' : '판매총액'}
              </div>
              <div className="modal-item-myinfo">
                {inputAmount == null
                  ? 0
                  : parseInt(inputAmount * modalData.value).toLocaleString('ko-KR')}{' '}
                TYL
              </div>
            </div>
            <div id="trade-error">
              {modalData.trsType == 'buy'
                ? inputAmount * modalData.value > myCash
                  ? '보유자산이 부족합니다.'
                  : null
                : inputAmount > myInvest
                ? '보유수량이 부족합니다.'
                : null}
              &nbsp;&nbsp;
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Modal;
