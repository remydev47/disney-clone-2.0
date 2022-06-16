import { getSession,useSession } from "next-auth/client";
import Head from "next/head";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Header from "../components/Header";
import Slider from "../components/Slider";
import MoviesCollections from "../components/MoviesCollection";
import ShowsCollection from "../components/ShowsCollection";

export default function Home() {
  const [session] = useSession();
  return (
    <div className="">
      <Head>
        <title>Disney Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {!session ? (
        <Hero />
      ): (
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:bg-absolute after:inset-0 after:z-[-1]">
          <Slider />
          <Brands />
          <MoviesCollections />
          <ShowsCollection />
        </main>  
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const [popularMoviesRes, popularShowsRes, top_ratedMoviesRes,
  top_ratedShowsRes] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=$
      {process.env.API_KEY}&language=en-US&page=1`
    ),
    
  ])

  return {
      props: {
          session,
      },
  };
}

  