import Image from "next/image";
import { Inter } from "next/font/google";
import { AppPage } from "@/shared/components/layouts/Types";
import OnbaordScreen from "@/shared/components/homepage/Onbaord";


const inter = Inter({ subsets: ["latin"] });

const HomePage: AppPage = () => {
  return (
    <>
     <OnbaordScreen/>
    </>
  );
};

export default HomePage;

HomePage.Layout = "Login";
