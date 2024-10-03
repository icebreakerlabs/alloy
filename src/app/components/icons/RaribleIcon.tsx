import { Icon, type IconProps } from ':/app/components/Icon';

export function RaribleIcon(props: Omit<IconProps, 'children'>) {
  return (
    <Icon viewBox="0 0 49 48" {...props}>
      <svg>
        <path
          d="m.0966797 10.4931c0-5.79516 4.7127903-10.4931 10.5263203-10.4931h26.9474c5.8135 0 10.5263 4.69794 10.5263 10.4931v26.8625c0 5.7952-4.7128 10.4931-10.5263 10.4931h-26.9474c-5.81353 0-10.5263203-4.6979-10.5263203-10.4931z"
          fill="#feda03"
        />
        <path
          clipRule="evenodd"
          d="m36.1418 20.0308c0 2.2953-1.341 3.437-2.8481 3.8336 1.8038.5407 3.1092 2.0189 3.1092 4.3622v4.3022h-6.883v-4.0859c0-1.2498-.7358-1.7545-1.9937-1.7545h-8.1647v5.8404h-6.883v-17.2087h16.3531c4.106 0 7.3102.8892 7.3102 4.7107zm-16.7772.0972h9.305v.0008c.0139-.0005.0279-.0008.0419-.0008.6398 0 1.1585.5252 1.1585 1.1732 0 .6479-.5187 1.1731-1.1585 1.1731-.014 0-.028-.0002-.0419-.0007v.0007h-9.305z"
          fill="#000"
          fillRule="evenodd"
        />
      </svg>
    </Icon>
  );
}