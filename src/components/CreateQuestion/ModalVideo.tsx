import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalVideoProps {
  onBackDropClick: () => void;
}
const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backgroud-color: "00000";
  backdrop-filter: blur(100px);
`;

const ModalVideo: React.FC<ModalVideoProps> = ({ onBackDropClick, children }) => {
  return ReactDOM.createPortal(
    <Overlay onClick={onBackDropClick}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </Overlay>,
    document.getElementById("modal-root")!
  );
};

export default ModalVideo;
