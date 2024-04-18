import { Icon, type IconProps } from ':/app/components/Icon';

export function XmtpIcon(props: Omit<IconProps, 'children'>) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <svg>
        <path
          d="M2 16C2 8.26801 8.26786 2 15.9997 2C23.7264 2 29.6963 8.15151 29.8781 15.9394C29.8781 18.4243 29.0296 20.5151 26.9085 22.4848C25.116 24.1494 22.0601 24.3939 19.8179 23.1515C18.2175 22.2283 16.9842 20.2622 15.939 18.8182L13.9997 21.7879H9.818L13.7573 15.9391L9.9392 10.1818H14.2421L15.9694 13.1515L17.6662 10.1818H21.9996L18.0603 15.9394C18.0603 15.9394 19.939 18.8182 20.9692 19.9394C21.9996 21.0607 23.8783 21.0909 25.0903 19.8788C26.423 18.5461 26.7213 17.4849 26.7267 15.9394C26.7475 9.95723 21.996 5.15151 15.9997 5.15151C10.0084 5.15151 5.15143 10.0085 5.15143 16C5.15143 21.9914 10.0084 26.8485 15.9997 26.8485C16.8284 26.8485 17.6226 26.7789 18.3935 26.606L19.0602 29.6667C17.9633 29.9126 17.0771 30 15.9997 30C8.26786 30 2 23.732 2 16Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
}