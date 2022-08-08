import Head from "next/head";

import Featured from "../components/Featured";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sanatan Astrology</title>
        <meta
          name="google-site-verification"
          content="a3mXJiJi_VwknA08QWrXQRARTk-74QPBnTq1EyAwIXY"
        />
        <meta
          name="description"
          content=" Sanatan Astrology , Vedic Astrology Services in English, Czech and Spanish Languages"
        />
        <meta
          name="Keywords"
          content=" Sanatan Astrology , Vedic Astrology reading , consultation and other services in English, Czech and Spanish Languages"
        />
        <link rel="icon" href="/img/logosvg.svg" />
      </Head>
      <Featured />
    </div>
  );
}
