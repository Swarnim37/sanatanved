import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font font-abc">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              width={720}
              height={600}
              src="/img/home.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
              Home/Property Reading
            </h1>
            <h2 className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">
              Recorded Audio of 15-30 Minutes.
            </h2>
            <p className="mb-8 leading-relaxed  text-left">
              Examination of specific areas in your chart together with
              planetary periods reveals when the probability of acquiring a
              property is very high.
            </p>
            <div className="flex justify-center">
              <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9TYP277PXARVG">
                <a target="_blank">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    PayPal
                  </button>
                </a>
              </Link>
              <Link href="https://buy.stripe.com/cN24j813JdTD79SfZ5">
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

export default Home;
