export type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

export type IconComponentProps = IconProps & {
  children?: React.ReactNode;
};
