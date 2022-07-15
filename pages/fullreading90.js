import React from "react";
import Image from "next/image";
import Link from "next/link";

const Fullreading90 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font font-abc">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              width={700}
              height={620}
              src="/img/kundli.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Birth Chart Reading (90 Minutes)
            </h1>
            <h2 className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">
              Audio or Live online reading of 90 Minutes.
            </h2>
            <p className="mb-8 leading-relaxed text-justify">
              Personal horoscope (the whole chart) – The interpretation of the
              personal horoscope will tell us what shapes our personality, what
              our abilities are, what we can excel at, where we are headed, what
              our relationships are like, in other words - what karmic tasks our
              soul brings to this incarnation. You can also learn what our
              health is like and what will be our priorities in different
              periods of life. In order to interpret a personal horoscope, it is
              necessary to thoroughly study not only the main horoscope Lagna
              but also Navamsha, the lunar horoscope, other relevant divisional
              charts, and the planetary periods applicable to the horoscope in
              order to assess the future trends.
            </p>
            <div className="flex justify-center">
              <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=98Q83DGS5K85W">
                <a target="_blank">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    PayPal
                  </button>
                </a>
              </Link>
              <Link href="https://buy.stripe.com/eVa3f4dQv16Rbq800a">
                <a target="_blank">
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Stripe
                  </button>
                </a>
              </Link>
            </div>
            <div className="flex justify-center mt-4">
              <Link href="/sendbd">
                <a>
                  <div className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-5">
                    Send Birth Details
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fullreading90;
