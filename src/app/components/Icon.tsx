import { forwardRef, type ReactElement } from 'react';
import { ark } from '@ark-ui/react/factory';

import { type HTMLStyledProps, styled } from ':/ui/jsx';
import { icon, type IconVariantProps } from ':/ui/recipes';

export type IconProps = IconVariantProps &
  HTMLStyledProps<'svg'> & {
    children: ReactElement;
  };

const StyledIcon = styled(ark.svg, icon);

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  function Icon(props, ref) {
    return <StyledIcon ref={ref} asChild {...props} />;
  },
);
