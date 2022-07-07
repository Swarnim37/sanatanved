import React from "react";
import Image from "next/image";
import Link from "next/link";

const Compatibility = () => {
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
              src="/img/compatility.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
              Compatibility Reading
              <br className="hidden lg:inline-block" />A hour long recorded
              Audio or Live online reading of 60 Minutes.
            </h3>
            <p className="mb-8 leading-relaxed text-justify">
              Compatibility reading – assess the compatibility of a couple,
              business partners, colleagues, parents and children. The reading
              consists of an analysis of individual charts and also an analysis
              of mutual planetary influences.
            </p>
            <div className="flex justify-center">
              <Link href="/sendbd">
                <a>
                  <div className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-5">
                    Send Birth Details
                  </div>
                </a>
              </Link>
              <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9NE26CXQ28Y6A">
                <a target="_blank">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    PayPal
                  </button>
                </a>
              </Link>
              <Link href="https://buy.stripe.com/cN24j813JdTD79SfZ5">
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

export default Compatibility;
