import React from 'react';
import sprite from 'images/svg/sprite.svg';

const Icon = ({ name, width = 24, height = 24, className }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
};

export default Icon;
