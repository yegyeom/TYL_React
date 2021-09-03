import React, { useEffect, useRef, useState } from 'react';

const Message = props => {
    const { text, closeMessage } = props;

    useEffect(() => {
        window.addEventListener("click", handleClickOutsideforMsg);
        var interval = setInterval(closeMessage, 2000);
        return () => {
            clearInterval(interval);
            window.removeEventListener("click", handleClickOutsideforMsg)
        };
    }, []);

    const handleClickOutsideforMsg = ({ target }) => {
        closeMessage();
    };

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className='message-openModal message-modal'>
            <section>
                < div className="message-container"  >
                    {text}
                </div>
            </section>
        </div >
    );

};

export default Message;