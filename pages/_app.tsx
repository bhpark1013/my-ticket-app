import { ChakraProvider } from "@chakra-ui/react";
import "../globals.css";
import { Button } from "@/components/ui/button";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { Footer } from "@/components/footer";
export default function App({ Component, pageProps }: any) {
  const router = useRouter();
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
