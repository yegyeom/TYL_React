import React, { useEffect, useState, useRef } from 'react';
import Modal from './Modal.js';

const Trade = (props) => {
    // https://image.flaticon.com/icons/png/512/5381/5381292.png
    //https://image.flaticon.com/icons/png/512/5396/5396865.png 판매
    const [selectedItem, setSelectedItem] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState();

    useEffect(() => { // props.Name의 값이 변경될 때 마다 실행.

        console.log("Modal's props :", props.sendItem);
        setSelectedItem(props.sendItem);
    }, [props]);


    const closeModal = () => {
        setModalOpen(false);
    };

    const openModal = e => {
        e.target.id === 'trade-purchase'
            ? setModalData({ code: selectedItem.code, name: selectedItem.name, value: selectedItem.value, trsType: "purchase", assetType: 'STOCK', })
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
                    close={closeModal}
                    modalData={modalData}
                >
                </Modal> : null
        }
    </>);
};


export default Trade;