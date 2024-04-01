import { Icon, type IconProps } from ':/app/components/Icon';

export function MirrorIcon(props: Omit<IconProps, 'children'>) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <svg>
        <path
          d="M6 13.6001H25.2V26.0001C25.2 27.1047 24.3046 28.0001 23.2 28.0001H8C6.89543 28.0001 6 27.1047 6 26.0001V13.6001Z"
          fill="currentColor"
        />
        <circle cx="15.6" cy="13.6" r="9.6" fill="currentColor" />
      </svg>
    </Icon>
  );
}
