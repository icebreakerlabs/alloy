import { Icon, type IconProps } from ":/app/components/Icon";

export function DaimoIcon(props: Omit<IconProps, "children">) {
  return (
    <Icon viewBox="0 0 200 200" {...props}>
      <svg>
        <path
          d="M148.504 112.094L134.68 88.1322"
          stroke="currentColor"
          strokeWidth="7.8336"
          strokeLinecap="round"
        />

        <path
          d="M155.418 100.109L127.77 100.109"
          stroke="currentColor"
          strokeWidth="7.8336"
          strokeLinecap="round"
        />

        <path
          d="M148.504 88.125L134.68 112.087"
          stroke="currentColor"
          strokeWidth="7.8336"
          strokeLinecap="round"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.7456 31C37.6018 31 31 37.6018 31 45.7456V154.494C31 162.638 37.6018 169.24 45.7456 169.24H147.122C159.337 169.24 169.24 159.337 169.24 147.122V128.461C169.24 126.425 167.59 124.774 165.554 124.774H124.08C115.936 124.774 109.334 118.172 109.334 110.029V90.2141C109.334 82.0704 115.936 75.4686 124.08 75.4686H165.554C167.59 75.4686 169.24 73.8181 169.24 71.7822V53.1184C169.24 40.9027 159.337 31 147.122 31H45.7456Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
}
