import { Icon, type IconProps } from ":/app/components/Icon";

export function LumaIcon(props: Omit<IconProps, "children">) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <svg>
        <path
          d="M32.4299 16.62C23.5931 16.62 16.4299 9.45687 16.4299 0.619995C16.4299 9.45687 9.2668 16.62 0.429932 16.62C9.2668 16.62 16.4299 23.7831 16.4299 32.62C16.4299 23.7831 23.5931 16.62 32.4299 16.62Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
}
