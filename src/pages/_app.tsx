import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { GlobalStateProvider } from "@/components/State";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store, { useAppSelector } from "../store";
// import { uiLoadigSelector } from "../store/selectors/ui";
import { SnackbarProvider } from "notistack";
// import Spinner from "../components/Spinner";
import { Slide } from "@mui/material";
import { Provider } from "react-redux";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ""}
    >
      <GlobalStateProvider>
        <Provider store={store}>
          <div className="font-primary">
            <SnackbarProvider
              TransitionComponent={Slide}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Navbar />
              <Toaster position="top-center" reverseOrder={false} />
              <Component {...pageProps} />
              {/* <Spinner loading={useAppSelector(uiLoadigSelector)} /> */}
              <Footer />
            </SnackbarProvider>
          </div>
        </Provider>
      </GlobalStateProvider>
    </GoogleOAuthProvider>
  );
}
