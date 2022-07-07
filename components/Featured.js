import React from "react";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="text-center relative z-10 w-25 mt-0 overflow-hidden bg-orange-400  ">
          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2  overflow-hidden">
            सनातन ज्योतिष
          </h2>
          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2  overflow-hidden">
            ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय ।
          </h2>
          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2 font-abc  ">
            asato mā sadgamaya tamasomā jyotir gamaya
          </h2>

          <p className="leading-relaxed font-abc ">
            Lead me from the unreal to the real, lead me from darkness to light.
          </p>
        </div>
      </div>

      <div>
        <section className="text-gray-600 body-font font-abc">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image
                    alt="content"
                    className=" object-cover h-full w-full"
                    src="/img/ganesh.png"
                    width="300"
                    height="280"
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  What is Vedic Astrology?
                </h2>
                <p className="leading-relaxed text-base text-justify">
                  Astrology is generally used to look farther off the curtain of
                  the material world. To look into the world of subtle energies
                  that work beyond our perception, influence our lives, and
                  shape our destiny, our karma.
                </p>
                <Link href="/vedicastrology">
                  <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                    Learn More
                  </button>
                </Link>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/img/birthchart.jpg"
                    width="400"
                    height="260"
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  Consultations
                </h2>
                <p className="leading-relaxed text-base text-justify">
                  The sophisticated Vedic Astrology System, which has been
                  around for more than 2000 years, is very effective at
                  foretelling future trends and major events. We provide several
                  different readings to help you on your path through life.
                </p>
                <Link href="/services">
                  <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Featured;
