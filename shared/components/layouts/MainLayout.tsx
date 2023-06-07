import React, { PropsWithChildren } from "react";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default MainLayout;