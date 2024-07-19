import { Icon, type IconProps } from ":/app/components/Icon";

export function BlueskyIcon(props: Omit<IconProps, "children">) {
  return (
    <Icon viewBox="0 0 32 32" {...props}>
      <svg
        width="36"
        height="28"
        viewBox="0 0 36 28"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.0962 1.08506C14.5805 1.12231 15.9588 0.86155 17.1881 0.56354C18.4174 0.265529 19.5349 0.00477024 19.6839 0.00477024C19.8702 -0.0324811 21.621 0.153775 23.5953 0.377283C26.2402 0.638042 27.3577 0.936052 27.7302 1.38307C27.991 1.71833 29.0713 2.2771 30.1515 2.57511C31.3808 2.94762 32.2376 3.46914 32.4611 3.95341C32.6474 4.40042 33.5414 5.2572 34.3982 5.89047C35.5902 6.74725 36 7.30602 36 8.05105C36 8.64707 35.3295 10.7704 34.4727 12.8192C33.6532 14.868 32.4984 17.3639 31.9024 18.4069C31.3436 19.4127 30.077 21.7595 29.1085 23.6221C28.14 25.4846 27.1342 27.2355 26.8734 27.5335C26.4264 28.0177 25.9794 27.8687 23.1856 26.3042C20.9505 25.0749 19.5722 24.5534 18.6036 24.5534C17.8214 24.5534 15.5863 25.1494 13.6492 25.8572C11.7122 26.6022 9.66334 27.161 9.10457 27.161C8.17329 27.161 7.91253 26.8257 6.49698 23.8828C5.67745 22.0948 3.96389 18.0344 2.77185 14.868C1.54256 11.7017 0.387769 8.87058 0.201512 8.60982C0.0152559 8.38631 -0.0592467 7.75304 0.0525072 7.23152C0.201512 6.561 0.797533 6.03948 2.21308 5.33171C3.25612 4.77294 5.08143 4.02791 6.19897 3.69265C7.31651 3.32013 9.36533 2.57511 10.7809 2.05359C12.1592 1.53207 13.6492 1.08506 14.0962 1.08506ZM15.5117 1.83028L16.741 1.49502C17.3742 1.30876 18.6408 1.1225 19.5348 1.1225C20.8759 1.08525 21.1366 1.19701 21.2856 1.90478C21.3974 2.38905 21.7326 4.62412 22.0307 6.8592C22.3287 9.09428 22.9992 13.4527 23.4835 16.5445C23.9677 19.5991 24.303 22.244 24.2285 22.393C24.154 22.5792 23.558 22.691 22.8874 22.691C21.9562 22.691 21.8071 22.5792 22.1424 22.2067C22.4032 21.9832 22.5894 21.4245 22.5894 21.0147C22.5894 20.6049 22.1052 18.9286 21.5091 17.2896C21.2077 16.4605 20.7442 15.1741 20.2392 13.7724C19.7458 12.4029 19.2128 10.9233 18.7525 9.65305C17.8585 7.08271 16.741 4.28886 15.5117 1.83028ZM22.7757 5.36915C22.6639 4.32611 22.4777 3.05957 22.3659 2.46355C22.2169 1.45776 22.2169 1.45776 24.452 1.45776C25.6813 1.45776 26.7616 1.60677 26.8733 1.83028C26.9851 2.01653 27.0596 5.85342 27.0223 10.2863C27.0223 14.7565 26.8733 19.3384 26.7616 20.4559C26.5753 21.8342 26.3146 22.542 25.942 22.6165C25.495 22.691 25.3088 22.1322 25.0853 20.1952C24.899 18.8169 24.3775 15.3152 23.8932 12.4469C23.409 9.57855 22.9247 6.37493 22.7757 5.36915ZM2.17572 6.41219C2.84624 6.07692 5.56558 4.99664 8.24768 4.0281C10.9298 3.05957 13.3884 2.24004 13.7609 2.24004C14.0961 2.20279 14.6549 2.5753 14.9529 3.02232C15.2509 3.50659 16.4057 6.37493 17.5232 9.46679C18.6408 12.5214 19.9818 16.172 20.5034 17.5503C21.0249 18.9659 21.4719 20.4187 21.4719 20.8284C21.4719 21.3872 20.9131 21.8342 19.3486 22.542C18.1565 23.0635 15.3999 24.1811 13.2021 24.9633C12.6066 25.1717 12.0376 25.3722 11.5211 25.5542C10.0988 26.0553 9.07468 26.4161 8.9927 26.4161C8.88095 26.4161 8.24768 25.2986 7.5399 23.883C6.86938 22.5047 5.19307 18.6306 3.85202 15.2407C2.51098 11.8509 1.31894 8.64726 1.20718 8.05124C1.02093 7.19446 1.16993 6.97095 2.17572 6.41219ZM27.9536 16.172C28.0654 13.7134 28.1771 9.80205 28.2144 7.45522L28.2889 3.24583L29.6299 3.50659C30.3749 3.61834 31.1572 3.91635 31.3435 4.10261C31.5918 4.35095 31.5546 5.43124 31.2317 7.34347C30.971 8.90802 30.0769 13.3037 29.2574 17.1033C28.4379 20.9029 27.6556 24.1438 27.5066 24.2928C27.3576 24.4418 26.6126 24.4791 25.8675 24.3673C25.0853 24.2556 24.452 23.9948 24.452 23.8085C24.452 23.6223 24.75 23.5478 25.1225 23.6595C25.4578 23.7713 26.1283 23.6968 26.6126 23.4733C27.1341 23.2125 27.5066 22.6165 27.6183 21.8715C27.6928 21.2009 27.8419 18.6306 27.9536 16.172ZM31.9767 8.79627C32.1258 8.42376 32.2748 7.64148 32.2748 7.00821C32.2748 6.41219 32.3865 5.92792 32.5355 5.92792C32.6845 5.92792 33.355 6.33768 34.0256 6.8592C34.6961 7.34347 35.2549 7.97674 35.2549 8.2375C35.2549 8.61001 35.1431 8.61001 34.7706 8.2375C34.5098 7.97674 33.9138 7.75323 33.4668 7.75323C32.759 7.75323 32.6473 7.93949 32.8335 8.79627C32.908 9.35504 32.908 9.6158 32.8335 9.35504C32.7218 9.09428 32.4238 9.01978 32.163 9.16878C31.865 9.35504 31.7905 9.24328 31.9767 8.79627ZM33.206 10.2863C33.7276 10.2118 33.8766 9.95106 33.8021 9.35504C33.6903 8.72177 33.8021 8.57276 34.2491 8.68451C34.6961 8.83352 34.8078 9.13153 34.6216 9.72755C34.5098 10.1746 33.7648 11.9999 33.0198 13.7134C32.2748 15.4642 31.1945 17.6621 30.6357 18.5561C30.0769 19.4874 29.6672 19.8972 29.7789 19.4874C29.8907 19.0776 30.3377 16.9916 30.7847 14.831C31.1945 12.7077 31.6415 10.5843 31.7532 10.1746C31.9022 9.65305 32.014 9.57855 32.2003 9.95106C32.3493 10.2118 32.7963 10.3608 33.206 10.2863ZM26.2028 26.3789C25.942 26.3789 25.1598 26.0436 24.452 25.6339C23.409 25.0378 23.3344 24.9261 24.0795 25.1123C24.5637 25.2241 25.3833 25.3358 25.8303 25.3731C26.2773 25.4103 26.6871 25.6711 26.6871 25.9319C26.6871 26.1926 26.4636 26.3789 26.2028 26.3789Z"
          fill="#EDEEF0"
        />
        <path
          d="M18.1193 3.24514C17.9331 3.99016 17.7468 4.84694 17.7468 5.07045C17.7468 5.33121 17.9331 5.55472 18.1193 5.55472C18.3056 5.55472 18.4918 5.29396 18.4918 4.99595C18.4918 4.69794 18.7526 4.36268 19.0506 4.25092C19.3859 4.13917 19.6839 4.32543 19.7956 4.69794C19.9446 5.21946 20.0936 5.25671 20.4661 4.92145C20.8014 4.58618 20.7269 4.21367 20.0564 3.17064C19.6094 2.42561 19.0878 1.82959 18.8643 1.82959C18.6781 1.82959 18.3428 2.46286 18.1193 3.20789V3.24514ZM24.1913 2.68637C23.9678 2.94713 23.707 3.54315 23.558 3.99016C23.4462 4.47443 23.5207 4.92145 23.707 5.0332C23.8933 5.14495 24.0795 4.99595 24.0795 4.73519C24.0423 4.47443 24.3775 4.58619 24.8245 5.0332C25.2343 5.44296 25.6813 5.66647 25.8676 5.51747C26.0166 5.33121 25.8303 4.92145 25.4951 4.58618C24.8618 3.95291 24.8618 3.91566 25.5696 3.61765C25.9793 3.46865 26.2773 3.13338 26.2028 2.87263C26.1283 2.64912 25.7186 2.38836 25.3088 2.31386C24.899 2.23935 24.4148 2.42561 24.1913 2.68637ZM12.9414 4.28817C12.7179 4.58619 12.5689 5.14495 12.6434 5.48022C12.6806 5.85273 13.0531 6.18799 13.4629 6.26249C13.8727 6.337 14.4687 6.11349 14.7667 5.77823C15.2882 5.1822 15.251 5.14495 14.2824 5.36846C13.7237 5.48022 13.2766 5.44296 13.2766 5.21946C13.2766 5.0332 13.4629 4.77244 13.6492 4.66069C13.8354 4.54893 14.0217 4.28817 14.0217 4.10192C14.0217 3.91566 13.8727 3.72941 13.6864 3.72941C13.5002 3.72941 13.1649 3.99016 12.9414 4.28817ZM28.8104 5.48022C28.7359 6.26249 28.6987 7.00752 28.7732 7.15652C28.8477 7.34278 29.3319 7.23103 29.8535 6.97027C30.375 6.74676 30.8965 6.29974 30.971 6.03898C31.0828 5.81548 30.971 5.25671 30.7847 4.84694C30.5985 4.43718 30.077 4.10192 29.7045 4.10192C29.1457 4.10192 28.9594 4.43718 28.8104 5.48022ZM8.09872 5.40571C7.87521 5.70372 7.80071 6.4115 7.91246 6.97027L8.13597 8.0133C6.49691 6.4115 5.90089 5.92723 5.71463 5.96448C5.56563 5.96448 5.45387 6.07624 5.41662 6.22524C5.37937 6.4115 5.37937 6.93302 5.37937 7.45453C5.34212 7.97605 5.37937 8.68383 5.41662 9.01909C5.41662 9.3916 5.60288 9.61511 5.82639 9.50335C6.01264 9.3916 6.1244 9.05634 6.01264 8.75833C5.86364 8.31131 6.1244 8.19956 7.20469 8.27406C8.02421 8.27406 8.65749 8.12506 8.69474 7.90155C8.76924 7.64079 9.179 7.52904 9.73777 7.64079C10.2593 7.75254 10.6691 7.64079 10.6691 7.45453C10.6691 7.26828 10.2965 7.00752 9.81228 6.93302C9.14175 6.78401 9.06725 6.67226 9.43976 6.18799C9.70052 5.85273 9.84953 5.40571 9.73777 5.21946C9.62602 5.0332 9.32801 4.84694 9.03 4.84694C8.73199 4.84694 8.32222 5.1077 8.09872 5.40571ZM2.84628 7.00752C2.10126 7.60354 2.10126 7.71529 2.62278 9.01909C2.95804 9.80136 3.3678 10.3601 3.59131 10.2484C3.77757 10.1366 3.88932 9.72686 3.77757 9.3171C3.66581 8.90733 3.74032 8.57207 3.96382 8.57207C4.15008 8.57207 4.33634 8.38582 4.33634 8.19956C4.33634 8.0133 4.03833 7.82705 3.66581 7.82705C3.10704 7.82705 3.10704 7.7898 3.77757 7.34278C4.27425 6.9951 4.37359 6.74676 4.07558 6.59775C3.85207 6.44875 3.2933 6.63501 2.84628 7.00752ZM11.2278 11.1797C10.1848 11.5149 9.06725 11.9247 8.69474 12.0737C8.28497 12.2599 8.02421 12.707 8.02421 13.0795C8.06146 13.4892 7.76345 13.8618 7.31644 13.9735C6.90667 14.0853 6.57141 14.4205 6.57141 14.7185C6.57141 15.0165 6.98118 15.5381 7.5027 15.8361C8.09872 16.1713 8.65749 17.0654 8.99275 18.1829C9.29076 19.1514 9.55152 20.2317 9.55152 20.6042C9.55152 20.9395 9.73777 21.2375 9.96128 21.2375C10.1848 21.2375 10.5946 20.9767 10.8926 20.6787C11.2278 20.3807 11.7866 20.12 12.1964 20.12C12.5689 20.12 12.9041 20.0082 12.9041 19.822C12.9041 19.673 12.5689 18.8534 12.1591 17.9594C11.7493 17.1026 11.4886 16.1341 11.6003 15.8361C11.7121 15.5381 12.0101 15.2773 12.2336 15.2773C12.4944 15.2773 13.0159 15.8361 13.4257 16.4693C13.7982 17.1399 14.0217 17.9221 13.8727 18.1457C13.7609 18.4064 13.8727 18.7789 14.0962 18.9652C14.4314 19.2259 15.1392 19.0769 16.145 18.5927C17.039 18.2202 17.7468 17.6986 17.7468 17.5124C17.7468 17.3261 17.5605 17.1399 17.3743 17.1399C17.188 17.1399 16.6665 16.5811 16.2567 15.9106C15.6607 15.0165 15.549 14.346 15.698 13.2285C15.847 12.2351 15.7352 11.4901 15.3627 10.9934C14.953 10.3974 14.7294 10.3229 14.3569 10.6954C14.0589 10.9562 13.6492 11.0307 13.4629 10.8817C13.2394 10.6954 12.2336 10.8444 11.2278 11.1797Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
}
