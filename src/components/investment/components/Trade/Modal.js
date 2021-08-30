import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Modal = props => {
    const { close, modalData } = props;
    // const [data, setdata] = useState();
    const [value, setValue] = React.useState("");
    const inputRef = React.useRef();
    let data;


    const modalEl = useRef(); // modal Ref
    const btnEl = useRef(); // btn Ref

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        inputRef.current.focus();
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClickOutside = ({ target }) => {

        if (!modalEl.current.contains(target)) {
            close();
        }
        else if (btnEl.current.contains(target)) {
            console.log("거래되었습니다.");
            console.log(data);

            axios.post('stock/transaction', data).then(res => {
                console.log("onClickBtn => ", res.data);
            });
            close();
        }

    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
        // setdata({ trsType: modalData.trsType, code: modalData.code, name: modalData.name, assetType: 'STOCK', value: modalData.value, amount: e.target.value, });
        data = { trsType: modalData.trsType, code: modalData.code, name: modalData.name, assetType: 'STOCK', value: modalData.value, amount: e.target.value, };
        console.log("onChangeInput:", data);
    };


    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className='trade-openModal trade-modal' >
            <section ref={modalEl}>
                < div className="modal-header-container"  >

                    <div className="modal-item-img" >
                        {/* <img className="item" src={item.imageUrl} alt={item.name} /> */}
                    </div>

                    <div className="modal-name-Btn">

                        <div className="modal-item-name" id="modal-item-name">
                            {modalData.name}
                        </div>

                        <div className="modal-item-dealBtn">
                            <label id="modal-deal-label" ref={btnEl} >{modalData.trsType == "purchase" ? "구매하기" : "판매하기"}</label>
                        </div>
                    </div>
                </div>

                <div className="modal-body-container">
                    <div className="modal-item-info"><div className="modal-item-text">현재가격</div><div className="modal-item-myinfo">{parseInt(modalData.value).toLocaleString('ko-KR')} TYL</div></div>
                    <div className="modal-item-info"><div className="modal-item-text">보유수량</div><div className="modal-item-myinfo">주</div></div>

                    <div className="modal-item-info">
                        <div className="modal-item-text">{modalData.Deal == "purchase" ? "구매수량" : "판매수량"}</div>
                        <div className="modal-item-myinput">
                            <input id="modal-input" ref={inputRef} type="number" value={value} onChange={onChangeInput} placeholder="수량을 입력하세요" ></input>
                        </div>
                        <div>&nbsp;주</div>
                    </div>

                    <div className="modal-item-info"><div className="modal-item-text">{modalData.Deal == "purchase" ? "구매총액" : "판매총액"}</div><div className="modal-item-myinfo">{parseInt(value * modalData.value).toLocaleString('ko-KR')} TYL</div></div>
                </div>
            </section>
        </div >
    );

};

export default Modal;