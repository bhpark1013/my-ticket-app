import { ChakraProvider } from "@chakra-ui/react";
import "../globals.css";
import { Button } from "@/components/ui/button";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Footer } from "@/components/footer";
import CustomMenu from "@/components/custom-menu";
export default function Page() {
  // return 123;
  return <CustomMenu />;
  // <ChakraProvider>
  //   <Component {...pageProps} />
  //   <Footer />
  // </ChakraProvider>
}
