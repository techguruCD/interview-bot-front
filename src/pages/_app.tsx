import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { GlobalStateProvider } from "@/components/State";
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ''}>
      <GlobalStateProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
      </GlobalStateProvider>
    </GoogleOAuthProvider>
  );
}
