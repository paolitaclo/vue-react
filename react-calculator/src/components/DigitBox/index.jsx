import React from 'react';
import './index.css';

const DigitBox = ({
  digitNumber,
  onSelectDigit,
  styledBox
}) =>
  (
    <div
      className={`digit-box${styledBox ? ` ${styledBox}` : ''}`}
      onClick={() => onSelectDigit(digitNumber)}
    >
      {digitNumber}
    </div>
  );

export default DigitBox;
