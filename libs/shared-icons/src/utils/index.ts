import type { IconProps } from '../types/index';

export const getIconSize = (size?: number | string): string => {
  if (typeof size === 'number') {
    return `${size}px`;
  }
  return size || '24px';
};

export const getIconStyle = (props: IconProps): React.CSSProperties => ({
  width: getIconSize(props.size),
  height: getIconSize(props.size),
  color: props.color,
  ...props.style,
});
