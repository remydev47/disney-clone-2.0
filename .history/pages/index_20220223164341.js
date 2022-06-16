import Head from "next/head";
import Brands from "../components/Brands";
import Header from "../components/Header";
import Slider from "../components/Slider";
import MoviesCollections from "../components/MoviesCollection";
import ShowsCollection from "../components/ShowsCollection";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Disney Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:bg-absolute after:inset-0 after:z-[-1]">
      <Slider />
      <Brands />
      <MoviesCollections />
      <ShowsCollection />
    </main>  
    </div>
  );
}


  const [popularMoviesRes, popularShoeRes, top_ratedMoviesRes, top_ratedShowRes] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`)
  ])