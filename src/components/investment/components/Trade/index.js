import React, { useEffect, useState, useRef } from 'react';
import Modal from './Modal.js';
import Message from './Message';

const Trade = (props) => {
    // https://image.flaticon.com/icons/png/512/5381/5381292.png
    //https://image.flaticon.com/icons/png/512/5396/5396865.png 판매
    const [selectedItem, setSelectedItem] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState();
    const [message, setMessage] = useState({ open: false, text: "", });

    useEffect(() => { // props.Name의 값이 변경될 때 마다 실행.
        setSelectedItem(props.sendItem);
    }, [props]);

    const getMessage = (msg) => {
        setMessage(msg);
    }

    const closeModal = (msg) => {
        setModalOpen(false);
        setMessage(msg);
    };

    const closeMessage = () => {
        setMessage({ open: false, text: "", });
    };

    const openModal = e => {
        e.target.id === 'trade-purchase'
            ? setModalData({ code: selectedItem.code, name: selectedItem.name, value: selectedItem.value, trsType: "buy", assetType: 'STOCK', })
            : setModalData({ code: selectedItem.code, name: selectedItem.name, value: selectedItem.value, trsType: "sell", assetType: 'STOCK', })
        setModalOpen(true);
    };



    return (<>
        <div className="trade-container">
            <div className="trade-item" id="trade-purchase" onClick={openModal}>구매하기</div>
            <div className="trade-item" id="trade-sell" onClick={openModal}>판매하기</div>
        </div >
        {
            modalOpen ?
                <Modal
                    closeModal={closeModal}
                    modalData={modalData}
                    getMessage={getMessage}
                >
                </Modal> : null
        }
        {
            message.open ?
                <Message text={message.text} closeMessage={closeMessage}>
                </Message> : null
        }

    </>);
};


export default Trade;