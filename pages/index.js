import Head from 'next/head'
import styles from '../styles/Home.module.css'
import "../components/common"
import data from "../data/eps"

import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/map"), {
  ssr: false
});


export default function Home() {

  return (
    <div >
      <Head>
        <title>EP & SP map</title>
        <meta name="description" content="Map with the locations of SP & EP" />
        <link rel="icon" href="/favicon.ico" />
        <base href="/" target="_blank"></base>
      </Head>


      <Map list={data} />


      <footer className={styles.footer}>
        <a href="https://github.com/commitdev/zero" target="_blank">
          Powered by {'Zero'}
        </a>
      </footer>
    </div>
  )
}
