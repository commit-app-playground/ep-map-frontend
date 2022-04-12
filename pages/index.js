import Head from 'next/head'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.css";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/map"), {
  ssr: false
});


const data = [{
  id: 1,
  imageUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQFjVPJxfQe60g/profile-displayphoto-shrink_400_400/0/1561895463767?e=1655337600&v=beta&t=2XWFC9yvl5dDFuw5Pu7xh4AUm-IDUvv9D81pAgHYU7g",
  name: "Victor Jimemez",
  linkedInUrl: "https://www.linkedin.com/in/victor-daniel-jimenez-camacho-b2b8b653/",
  tags: ["react", "node"],
  location: "Zapopan, Jalisco, Mexico",
  latitude: 20.721205587707157,
  longitude: -103.39187972729057
},
{
  id: 2,
  imageUrl: "https://randomuser.me/api/portraits/women/54.jpg",
  name: "Testing User",
  linkedInUrl: "https://www.linkedin.com/in/victor-daniel-jimenez-camacho-b2b8b653/",
  tags: ["docker", "aws"],
  location: "Vancouver, Canada",
  latitude: 49.2614806457502,
  longitude: -123.11383334600704
},
{
  id: 3,
  imageUrl: "https://randomuser.me/api/portraits/men/53.jpg",
  name: "Another User",
  linkedInUrl: "https://www.linkedin.com/in/victor-daniel-jimenez-camacho-b2b8b653/",
  tags: ["python", "django"],
  location: "Halifax, Canada",
  latitude: 44.64872409972722,
  longitude: -63.575272450777824
},
{
  id: 4,
  imageUrl: "https://randomuser.me/api/portraits/women/31.jpg",
  name: "DevOps User",
  linkedInUrl: "https://www.linkedin.com/in/victor-daniel-jimenez-camacho-b2b8b653/",
  tags: ["terraform", "kubernetes"],
  location: "Ottawa, Canada",
  latitude: 45.42090637564526,
  longitude: -75.69020024917324
},
{
  id: 4,
  imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  name: "Community User",
  linkedInUrl: "https://www.linkedin.com/in/victor-daniel-jimenez-camacho-b2b8b653/",
  tags: ["facebook", "instagram"],
  location: "Montreal, Canada",
  latitude: 45.51823914177567,
  longitude: -73.57637434547226
},
{
  id: 4,
  imageUrl: "https://randomuser.me/api/portraits/women/36.jpg",
  name: "Manager User",
  linkedInUrl: "https://www.linkedin.com/in/victor-daniel-jimenez-camacho-b2b8b653/",
  tags: ["figma", "cypress"],
  location: "Calgary, Canada",
  latitude: 51.04616412149516,
  longitude: -114.057370660417
},
]

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
