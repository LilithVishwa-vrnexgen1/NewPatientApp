import { Iconify } from 'react-native-iconify';

interface IconProps {
  name: string;
  size?: number;
  height?: number;
  width?: number;
  color?: string;
}

export function Icon({ name, size, height, width, color }: IconProps) {
  return (
    <Iconify
      icon={name}
      color={color}
      height={size || height}
      width={size || width}
    />
  );
}
