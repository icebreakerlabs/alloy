import { Icon, type IconProps } from ':/app/components/Icon';

export function LensIcon(props: Omit<IconProps, 'children'>) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <svg>
        <g clipPath="url(#clip0_452_7227)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.6383 12.6665C21.6757 12.6586 21.7099 12.6395 21.7363 12.6116C21.8536 12.4918 21.9736 12.3747 22.0963 12.2604C27.0973 7.49526 34.4318 14.8805 29.6999 19.9149C29.5858 20.0372 29.4692 20.1577 29.35 20.2772C23.6405 26.0253 16.0279 26.0258 16.0266 26.0258C16.0251 26.0258 8.41344 26.0251 2.70428 20.2772C2.58583 20.1572 2.46918 20.0364 2.35435 19.9146C-2.37753 14.8862 4.95228 7.49526 9.95796 12.2604C10.0777 12.3745 10.2 12.4942 10.3177 12.6116C10.4377 12.7311 10.6436 12.6452 10.6436 12.4756C10.6437 12.3076 10.6459 12.1396 10.6503 11.9716C10.84 5.04184 21.2129 5.04184 21.4026 11.9716C21.4103 12.1386 21.4103 12.3151 21.4103 12.4756C21.4091 12.5139 21.4196 12.5517 21.4403 12.5839C21.461 12.6161 21.491 12.6413 21.5264 12.6561C21.5618 12.6708 21.6008 12.6745 21.6383 12.6665ZM20.3229 18.1773C20.2202 18.0537 20.2759 17.8202 20.4364 17.8202C21.8659 17.8202 22.9686 18.6953 23.2065 19.7639C23.2589 19.9987 23.4493 20.1959 23.6898 20.1959C23.9306 20.1959 24.1288 19.9995 24.0932 19.7618C23.8498 18.1314 22.254 16.9489 20.4364 16.9489C18.6186 16.9489 17.023 18.1314 16.7794 19.7618C16.744 19.9998 16.9425 20.1959 17.183 20.1959H17.2847C17.4689 20.1959 17.6158 20.0455 17.6468 19.8638C17.7015 19.5412 17.8351 19.2338 18.0331 18.96C18.055 18.9298 18.1033 18.9484 18.1033 18.9858C18.1033 19.6836 18.6651 20.2493 19.3582 20.2493C20.0514 20.2493 20.6132 19.6836 20.6132 18.9858C20.6138 18.6907 20.5111 18.4047 20.3229 18.1773ZM9.19953 18.9495C9.2292 18.9102 9.29269 18.9368 9.29269 18.9858C9.29269 19.6836 9.85449 20.2493 10.5474 20.2493C11.2406 20.2493 11.8024 19.6836 11.8024 18.9858C11.803 18.6724 11.6871 18.3699 11.4772 18.1371C11.3902 18.0406 11.4377 17.8571 11.5678 17.8571C12.9972 17.8571 14.1002 18.7314 14.3378 19.8006C14.3902 20.0354 14.5807 20.2328 14.8212 20.2328C15.0617 20.2328 15.2602 20.0362 15.2246 19.7987C14.9815 18.1673 13.3853 16.9858 11.5675 16.9858C9.74998 16.9858 8.15411 18.1675 7.91075 19.7985C7.8754 20.0364 8.07385 20.2326 8.31411 20.2326H8.38895C8.58817 20.2326 8.74637 20.07 8.78249 19.8738C8.8434 19.542 8.98791 19.2274 9.19953 18.9495ZM17.4225 22.0328C17.5926 21.8625 17.8553 21.7799 18.0664 21.8953H18.0661C18.2775 22.0106 18.3575 22.2782 18.2055 22.4648C17.71 23.0713 16.9077 23.4558 16.023 23.4558C15.1389 23.4558 14.335 23.0756 13.839 22.464C13.6873 22.2772 13.7683 22.0098 13.9799 21.8953C14.1913 21.7807 14.4537 21.8646 14.6235 22.0349C14.9505 22.3631 15.4468 22.5851 16.023 22.5851C16.598 22.5851 17.0948 22.3606 17.4225 22.0328Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_452_7227">
            <rect
              width="32"
              height="20.6452"
              fill="currentColor"
              transform="translate(0 6)"
            />
          </clipPath>
        </defs>
      </svg>
    </Icon>
  );
}