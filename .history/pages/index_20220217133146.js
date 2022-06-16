import Head from "next/head";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex fle-col items-centre
    justify-center min-h-screen py-2">
      <Head>
        <title>Disney Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Disney plus</h1>
    </div>
  );
}
