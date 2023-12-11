import { Footer } from "./footer";

export default function Layout({ children }: any) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
