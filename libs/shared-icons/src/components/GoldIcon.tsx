import React from 'react';
import { IconProps } from '../types/index';
import { getIconStyle } from '../utils/index';

const GoldIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      style={getIconStyle(props)}
      className={props.className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
      <path d="M12 18L13.5 12L18 13L13.5 14L12 20L10.5 14L6 13L10.5 12L12 18Z" />
    </svg>
  );
};

export default GoldIcon;
