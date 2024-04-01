import { Icon, type IconProps } from ':/app/components/Icon';

export function TenfoldIcon(props: Omit<IconProps, 'children'>) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <svg>
        <path
          d="M5.61388 7.78369H0V24.2161H5.61388V7.78369Z"
          fill="currentColor"
        />
        <path
          d="M15.9779 7.35132C11.2148 7.35132 7.34119 11.2302 7.34119 16C7.34119 20.7697 11.2148 24.6486 15.9779 24.6486C20.7411 24.6486 24.6146 20.7697 24.6146 16C24.6146 11.2302 20.7411 7.35132 15.9779 7.35132ZM15.9779 19.027C14.311 19.027 12.9551 17.6692 12.9551 16C12.9551 14.3308 14.311 12.9729 15.9779 12.9729C17.6448 12.9729 19.0008 14.3308 19.0008 16C19.0008 17.6692 17.6448 19.027 15.9779 19.027Z"
          fill="currentColor"
        />
        <path
          d="M31.9559 1.72973V0H0V5.62162H26.342V26.3784H0V32H31.9559V26.3784V1.72973Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
}
