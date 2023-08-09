import React, { useState } from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  position: relative;
  padding: 10px;
  background-color: #cce5ff;
  border: 1px solid #b8daff;
  border-radius: 4px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

interface Props {
  onClose: () => void;
}

const Alert: React.FC<Props> = ({ onClose }) => {
    return (
      <AlertContainer>
        Alert
        <CloseButton onClick={onClose}>&#x2716;</CloseButton>
      </AlertContainer>
    );
  };

export default Alert;