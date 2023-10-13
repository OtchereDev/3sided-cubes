import FormContextProvider from "@/contexts/TestContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FormContextProvider>
        <NextNProgress color="#A0FF1F" />
        <Component {...pageProps} />
      </FormContextProvider>
    </>
  );
}
