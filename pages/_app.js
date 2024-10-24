import { TrackingProvider } from "@/conetxt/Tracking";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <>
    <TrackingProvider>
    <Component {...pageProps}/>
    </TrackingProvider>
    </>
  );
}
