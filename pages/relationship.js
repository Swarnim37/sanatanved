import React from "react";
import Image from "next/image";
import Link from "next/link";

const Relationship = () => {
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
              src="/img/relationship.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h6 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
              Relationship reading
              <br className="hidden lg:inline-block text-xl " />
              Recorded Audio of 15-30 Minutes.
            </h6>
            <p className="mb-8 leading-relaxed text-justify">
              A thorough analysis of the natal chart and relevant divisional
              chart together with planetary period and transits reveals the time
              periods with a high likelihood to establish a long-term
              relationship.
            </p>
            <div className="flex justify-center">
              <Link href="/sendbd">
                <a>
                  <div className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-5">
                    Send Birth Details
                  </div>
                </a>
              </Link>
              <Link href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BK2R9ZUPLH5X8">
                <a target="_blank">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    PayPal
                  </button>
                </a>
              </Link>
              <Link href="https://buy.stripe.com/5kAdTI27N9Dn0Lu7sw">
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

export default Relationship;
