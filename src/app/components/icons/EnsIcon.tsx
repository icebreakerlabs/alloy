import { Icon, type IconProps } from ':/app/components/Icon';

export function EnsIcon(props: Omit<IconProps, 'children'>) {
  return (
    <Icon viewBox="0 0 328 328" {...props}>
      <svg>
        <path
          fill="currentColor"
          d="M55.21 77.9c3.1-5.7 7.5-10.6 12.9-14.1l90.6-63-92.8 152.8s-8.1-13.7-11.3-20.6c-3.9-8.7-5.9-18.1-5.8-27.7.1-9.4 2.3-18.8 6.4-27.4zm-37.4 105.5c1 14.6 5.2 28.9 12.2 41.8 7 12.9 16.7 24.2 28.4 33l100.2 69.6s-62.7-90-115.6-179.6c-5.4-9.5-9-19.8-10.6-30.5-.7-4.9-.7-9.8 0-14.7-1.4 2.5-4.1 7.8-4.1 7.8-5.4 10.9-9 22.5-10.8 34.5-1 12.7-.9 25.4.3 38.1zm255.5 12.1c-3.2-6.9-11.3-20.6-11.3-20.6l-92.7 152.9 90.6-63c5.4-3.6 9.8-8.4 12.9-14.1 4.1-8.6 6.3-18 6.4-27.5s-1.9-19-5.8-27.7h-.1zm36.8-50.4c-1-14.6-5.2-28.9-12.2-41.8s-16.7-24.2-28.4-33L169.51.7s62.7 90 115.6 179.6c5.3 9.5 8.9 19.8 10.6 30.5.7 4.9.7 9.8 0 14.7 1.4-2.5 4.1-7.8 4.1-7.8 5.4-10.9 9-22.5 10.8-34.5 1.1-12.7 1-25.4-.3-38.1h-.2z"
        />
      </svg>
    </Icon>
  );
}
