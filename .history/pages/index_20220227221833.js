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
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);
  const [popularMovies, popularShows, top_ratedMovies,
  top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ]);
    
  return {
      props: {
          session,
          popularMovies: popularMovies.results,
          popularShows: popularShows.results,
          top_ratedMovies: top_ratedMovies.results,
          top_ratedShows: top_ratedShows.results,
      },
  };
}

  