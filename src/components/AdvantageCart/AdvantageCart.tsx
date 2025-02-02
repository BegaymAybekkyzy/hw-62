import React from 'react';
import './AdvantageCart.css';

interface Props {
  text: string;
  index: number;
}

const AdvantageCart: React.FC<Props> = ({text, index}) => {
  return (
    <div className={`advantage ic-advantage-${index}`}><span>{text}</span></div>
  );
};

export default AdvantageCart;