import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import {  EmotionCache } from '@emotion/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';
import { api } from 'utils/api';

const publicPages: Array<string> = [
  '/',
  '/sign-in',
  '/sign-up',
];

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { pathname } = useRouter();
  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);
  const {
    Component,
    pageProps: { ...pageProps },
  } = props;

  return (
    <ClerkProvider {...pageProps}>
      <Toaster />
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
      <ReactQueryDevtools />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
