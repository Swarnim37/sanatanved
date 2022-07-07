import React from "react";
import Image from "next/image";
import Link from "next/link";

const Childbirth = () => {
  return (
    <div>
      <section className="text-gray-600 body-font font-abc">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              alt="Child"
              className="object-cover object-center w-full h-full block cursor-pointer"
              width={720}
              height={600}
              src="/img/childbirth.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Child Birth Reading
              <br className="hidden lg:inline-block" />
              Recorded Audio of 15-30 Minutes.
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              A thorough natal chart as well as related divisional charts
              examination of both parents together with planetary periods can
              show you when the planetary influences are the most auspicious for
              childbirth.
            </p>
            <div className="flex justify-center">
              <Link href="/sendbd">
                <a>
                  <div className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-5">
                    Send Birth Details
                  </div>
                </a>
              </Link>

              <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=734S7Z4W6C6S4">
                <a target="_blank">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    PayPal
                  </button>
                </a>
              </Link>
              <Link href="https://buy.stripe.com/5kAg1Q3bR2aV1Py8wz">
                <a target="_blank">
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Pay by Stripe
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Childbirth;
