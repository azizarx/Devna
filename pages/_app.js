import '../styles/globals.css'
import Layout from '../components/layout'
import React from 'react';
function MyApp({ Component, pageProps, ...appProps }) {
  const isLayoutNeeded = ['/home'].includes(appProps.router.pathname);
  const LayoutComponent = isLayoutNeeded ? Layout : React.Fragment;
  return <LayoutComponent >
  <Component {...pageProps} />
</LayoutComponent>
}

export default MyApp
