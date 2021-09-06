import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Message = props => {
  const { text, closeMessage, data, inputAmount, myAsset } = props;

  useEffect(() => {
    console.log('과연==>?', myAsset.myCash, myAsset.myInvest);
    window.addEventListener('click', handleClickOutsideforMsg);
    return () => {
      window.removeEventListener('click', handleClickOutsideforMsg);
    };
  }, []);

  const handleClickOutsideforMsg = ({ target }) => {
    closeMessage();
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className="message-modal message-openModal">
      <section>
        <div className="message-container">
          <div className="message-header-container">
            {data.name}&nbsp;
            {inputAmount}
            {data.trsType == 'buy' ? '주를 구매했어요!' : '주를 판매했어요!'}
          </div>
          <div className="message-item-info">
            <div className="message-item-text">
              {data.trsType == 'buy' ? '구매가격' : '판매가격'}
            </div>
            <div className="message-item-myinfo">
              {parseInt(data.value).toLocaleString('ko-KR')} TYL
            </div>
          </div>
          <div className="message-item-info">
            <div className="message-item-text">보유자산</div>
            <div className="message-item-text-custom">
              <div className="message-item-myinfo-custom1">
                {data.trsType == 'buy'
                  ? parseInt(myAsset.myCash - data.value * inputAmount).toLocaleString('ko-KR')
                  : parseInt(myAsset.myCash + data.value * inputAmount).toLocaleString(
                      'ko-KR',
                    )}{' '}
                TYL
              </div>
              <div
                className={
                  data.trsType == 'buy'
                    ? 'message-item-myinfo-decrease'
                    : 'message-item-myinfo-increase'
                }
              >
                {data.trsType == 'buy' ? '-' : '+'}
                {parseInt(inputAmount * data.value).toLocaleString('ko-KR')} TYL
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Message;
