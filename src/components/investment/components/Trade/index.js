import React, { useEffect, useState, useRef } from 'react';
import Modal from './Modal.js';
import Message from './Message';

const Trade = props => {
  // https://image.flaticon.com/icons/png/512/5381/5381292.png
  //https://image.flaticon.com/icons/png/512/5396/5396865.png 판매
  const [selectedItem, setSelectedItem] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [message, setMessage] = useState({ open: false, text: '' });
  const [category, setCategory] = useState();

  useEffect(() => {
    setCategory(props.category);
  }, [props.category]);

  useEffect(() => {
    setSelectedItem(props.sendItem);
  }, [props.sendItem]);

  const getMessage = msg => {
    setMessage(msg);
  };

  const closeModal = msg => {
    setModalOpen(false);
    setMessage(msg);
  };

  const closeMessage = () => {
    setMessage({ open: false, text: '' });
  };

  const openModal = e => {
    e.target.id === 'trade-purchase'
      ? setModalData({
          code: selectedItem.code,
          name: selectedItem.name,
          value: selectedItem.value,
          trsType: 'buy',
          assetType: 'STOCK',
        })
      : setModalData({
          code: selectedItem.code,
          name: selectedItem.name,
          value: selectedItem.value,
          trsType: 'sell',
          assetType: 'STOCK',
        });
    setModalOpen(true);
  };

  return (
    <>
      <div className="trade-container" id={props.isPc ? null : 'm'}>
        <div className="trade-item" id="trade-purchase" onClick={openModal}>
          구매하기
        </div>
        <div className="trade-item" id="trade-sell" onClick={openModal}>
          판매하기
        </div>
      </div>
      {modalOpen ? (
        <Modal
          closeModal={closeModal}
          modalData={modalData}
          getMessage={getMessage}
          category={category}
        ></Modal>
      ) : null}
      {message.open ? (
        <Message
          text={message.text}
          data={message.data}
          inputAmount={message.inputAmount}
          closeMessage={closeMessage}
          myAsset={message.myAsset}
          category={category}
        ></Message>
      ) : null}
    </>
  );
};

export default Trade;
