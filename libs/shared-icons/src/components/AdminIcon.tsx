import React from 'react';
import { IconProps } from '../types/index';
import { getIconStyle } from '../utils/index';

const AdminIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      style={getIconStyle(props)}
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" />
      <circle cx="12" cy="7" r="4" />
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" />
      <path d="M8 3.13C7.13959 3.35031 6.37696 3.85071 5.83236 4.55232C5.28776 5.25392 4.99219 6.11683 4.99219 7.005C4.99219 7.89317 5.28776 8.75608 5.83236 9.45768C6.37696 10.1593 7.13959 10.6597 8 10.88" />
    </svg>
  );
};

export default AdminIcon;
