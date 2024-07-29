import { Icon, type IconProps } from ":/app/components/Icon";

export function LiteralIcon(props: Omit<IconProps, "children">) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <svg>
        <path
          d="M15.8162 8.89177L19.4491 9.14581L17.2842 12.1888L18.9744 13.3971L21.2255 10.2081L23.011 13.6794L24.8528 12.718L23.1578 9.40514L26.7402 9.65565L26.8848 7.58689L23.252 7.33286L25.4186 4.26465L23.7284 3.05632L21.5042 6.22192L19.7423 2.77759L17.9004 3.73894L19.619 7.07882L15.9609 6.82302L15.8162 8.89177Z"
          fill="currentColor"
        />
        <path
          d="M6.62207 19.841L16.2891 21.1996L16.6975 18.2945L9.93549 17.3442L11.991 2.71835L9.08588 2.31006L6.62207 19.841Z"
          fill="currentColor"
        />
        <path
          d="M26.9383 27.2848L8.10312 29.9319L7.69482 27.0267L26.53 24.3796L26.9383 27.2848Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
}
