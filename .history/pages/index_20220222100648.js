import Head from "next/head";
import Brands from "../components/Brands";
import Header from "../components/Header";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Disney Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Slider />
      <Brands />
    </div>
  );
}
