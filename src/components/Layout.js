import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ docs, children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
