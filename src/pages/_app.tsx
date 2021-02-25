import React from 'react';
import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengeContext';

/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
      ;
    </ChallengesProvider>
  );
}

export default MyApp;
