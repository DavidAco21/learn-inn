import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
    onBackDropClick: () => void;
    
}
const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

`

const Modal: React.FC<ModalProps> = ({onBackDropClick, children}) => {

    
    return ReactDOM.createPortal(<Overlay onClick = {onBackDropClick}>
        <div onClick={e => e.stopPropagation()}>
        {children}
        </div>
              

    </Overlay>, document.getElementById('modal-root')!);

}

export default Modal