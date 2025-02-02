import React from 'react';
import './AdvantageCart.css';

interface Props {
  text: string;
  icon: string;
}

const AdvantageCart: React.FC<Props> = ({text, icon}) => {
  return (
    <div className={`advantage ${icon}`}><span>{text}</span></div>
  );
};

export default AdvantageCart;