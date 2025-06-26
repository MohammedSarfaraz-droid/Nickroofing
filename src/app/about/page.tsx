import About from "@/components/About";
import { BottomMenu } from "@/components/BottomMenu";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <About/>
      <Footer/>
      <BottomMenu/>
    </>
  );
}
