import FormContextProvider from "@/contexts/FormContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import NominationProvider from "@/contexts/NominationContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <NominationProvider>
            <NextNProgress color="#A0FF1F" />
            <Component {...pageProps} />
            <Toaster />
          </NominationProvider>
        </FormContextProvider>
      </QueryClientProvider>
    </>
  );
}
