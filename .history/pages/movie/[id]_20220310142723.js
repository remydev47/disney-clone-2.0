import { getSession, useSession } from "next-auth/react"
import { useState } from "react"
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header"
import Hero from "../../components/Hero";

function Movie ({ result }) {
    const {data:session} = useSession();
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const[showPlayer, setShowPlayer] = useState(false); 
    return(
        <div>
          <Head>
             <title>{result.title || result.original_name}</title>
          </Head>
          <Header />
          {!session ? (
              <Hero />
          ) : (
              <section className="relative z-50">
                  <div className="relative min-h-[calc(100vh-72px)]">
                      <Image src={
                               `${BASE_URL}${result.backdrop_path || result.
                              poster_path}` ||
                              `${BASE_URL}${result.poster_path}`
                            }
                            layout="fill"
                            objectFit="cover"
                       />
                  </div>
                  <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 spac-y-6 z-50">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                          {result.title || result.original_name}
                      </h1>
                      <div className="flex items-center space-x-3 md:space-x-5">
                          <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center
                          py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                              <img src="/images/play-icon-black.svg"
                              className="h-6 md:h-8"/>
                              <span className="uppercase font-medium tracking-wide">Play</span>
                          </button>

                          <button className="text-xs md:text-base text-black/30 text-[#f9f9f9]  border border-[#f9f9f9] flex items-center justify-center
                          py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
                          onClick={() => setShowPlayer(true)}>
                              <img src="/images/play-icon-white.svg"
                              className="h-6 md:h-8"/>
                              <span className="uppercase font-medium tracking-wide">Trailer</span>
                          </button>
                      </div>
                  </div>
              </section>
          )}
        </div>
    );
}

export default Movie;

export async function getServerSideProps(context) {
    const session = await getSession(context)
     const { id } = context.query;

     const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`).then((response) => response.json());

     return {
         props: {
             session,
             result: request,
         },
     };
}