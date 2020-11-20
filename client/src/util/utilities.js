import { Responsive } from 'semantic-ui-react';

export default function getWidth() {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
}
