import { Icon, type IconProps } from ":/app/components/Icon";

export function RodeoIcon(props: Omit<IconProps, "children">) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <svg>
        <path
          d="M31.8098 15.0295L17.4073 0.630255C17.1834 0.406707 16.8983 0.254457 16.5879 0.192693C16.2776 0.130929 15.9559 0.162415 15.6634 0.283183C15.371 0.404245 15.1211 0.609372 14.9454 0.872579C14.7696 1.13579 14.676 1.44523 14.6763 1.76171V12.2983L7.22623 4.84825C6.60064 4.22266 5.58794 4.22266 4.96392 4.84825C4.33813 5.47383 4.33813 6.48673 4.96392 7.11076L12.4138 14.5608H1.87718C1.45285 14.5609 1.04592 14.7295 0.74585 15.0295C0.445781 15.3296 0.277133 15.7365 0.276978 16.1608C0.277081 16.5852 0.445707 16.9921 0.745781 17.2922C1.04585 17.5923 1.45281 17.7609 1.87718 17.761H12.4136L4.96372 25.211C4.33794 25.8366 4.33794 26.8495 4.96372 27.4736C5.11208 27.6224 5.28837 27.7404 5.48247 27.8209C5.67657 27.9013 5.88466 27.9427 6.09478 27.9425C6.30497 27.9427 6.51313 27.9014 6.7073 27.8209C6.90147 27.7404 7.07782 27.6224 7.22623 27.4736L14.6761 20.0235V30.5619C14.6762 30.9862 14.8449 31.393 15.1449 31.6931C15.4449 31.9931 15.8518 32.1617 16.2761 32.1619C16.7004 32.1617 17.1073 31.9931 17.4073 31.6931C17.7073 31.393 17.8759 30.9862 17.8761 30.5619V20.0235L25.3277 27.4751C25.4761 27.624 25.6524 27.742 25.8465 27.8225C26.0407 27.903 26.2488 27.9443 26.4589 27.9441C26.6691 27.9442 26.8772 27.9029 27.0714 27.8224C27.2655 27.742 27.4418 27.6239 27.5902 27.4751C28.2158 26.8495 28.2158 25.8366 27.5902 25.2126L20.1386 17.761H30.6767C30.9931 17.7607 31.3023 17.6668 31.5654 17.4911C31.8284 17.3154 32.0336 17.0658 32.1551 16.7737C32.2762 16.4812 32.3079 16.1594 32.2461 15.8489C32.1843 15.5384 32.0318 15.2533 31.8078 15.0295H31.8098ZM17.8763 14.5608V5.62423L26.8142 14.5608H17.8763Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
}