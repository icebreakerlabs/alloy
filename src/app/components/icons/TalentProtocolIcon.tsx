import { Icon, type IconProps } from ':/app/components/Icon';

export function TalentProtocolIcon(props: Omit<IconProps, 'children'>) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <svg>
        <path
          d="M11.6946 14.0952C12.1754 14.5747 12.8166 14.8144 13.618 14.8144H21.8149L20.8917 12.1774H14.366C13.8674 12.1774 13.618 11.9111 13.618 11.3783V4.89081L11 4V12.1774C11 12.9765 11.2315 13.6158 11.6946 14.0952Z"
          fill="currentColor"
        />
        <path
          d="M11.6946 27.2803C12.1754 27.7597 12.8166 27.9995 13.618 27.9995H21.8149L20.8917 25.3625H14.366C13.8674 25.3625 13.618 25.0961 13.618 24.5634V18.0759L11 17.1851V25.3625C11 26.1616 11.2315 26.8008 11.6946 27.2803Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
}
