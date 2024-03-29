import { Icon, type IconProps } from ':/app/components/Icon';

export function DecaIcon(props: Omit<IconProps, 'children'>) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.9828 2.74754L2.74754 30.9828L1.01721 29.2525L29.2525 1.01721L30.9828 2.74754ZM21.5711 2.74754L2.74754 21.5711L1.01721 19.8407L19.8407 1.01721L21.5711 2.74754ZM12.1593 2.74754L2.74754 12.1593L1.01721 10.429L10.429 1.01721L12.1593 2.74754ZM29.2525 10.429L30.9828 12.1593L12.1593 30.9828L10.429 29.2525L29.2525 10.429ZM30.9828 21.5711L21.5711 30.9828L19.8407 29.2525L29.2525 19.8407L30.9828 21.5711Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
}
