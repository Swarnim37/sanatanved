import Head from "next/head";

import Featured from "../components/Featured";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sanatan Astrology</title>
        <meta name="description" content="Vedic Astrology Services in English, Czech and Spanish Languages" />
        <meta
          name="Keywords"
          content=" Vedic Astrology reading , consultation and other services in English, Czech and Spanish Languages"
        />
        <link rel="icon" href="/img/logosvg.svg" />
      </Head>
      <Featured />
    </div>
  );
}
