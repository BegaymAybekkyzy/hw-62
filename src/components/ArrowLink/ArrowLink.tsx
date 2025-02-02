import React from 'react';

interface Props {
  className: string;
  text: string;
}

const ArrowLink: React.FC<Props> = ({className, text}) => {
  return (
    <a href="#" className={className}>{text} <span>&#8250;</span></a>
  );
};

export default ArrowLink;