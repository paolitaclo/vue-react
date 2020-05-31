import React from 'react';
import './index.css';

const DigitBox = ({ digitNumnber, onSelectDigit, className }) =>
    (<div className={`digit-box${className ? ` ${className}` : ''}`} onClick={() => onSelectDigit(digitNumnber)}>
        {digitNumnber}
    </div>);

export default DigitBox;
