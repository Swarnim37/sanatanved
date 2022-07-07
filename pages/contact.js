import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <div className="container px-5 py-24 mx-auto font-abc">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Get in touch with us through social Media or write us.
          </p>
        </div>

        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">sanatanvedicastrology@gmail.com</a>
          <p className="leading-normal my-5">
            Vysocanska 23
            <br />
            Prague-9, 19000 , Czech Republic
          </p>

          <span className="inLine-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href="https://www.facebook.com/Sanatan-Vedic-Astrology-106720835429910">
              <a className="text-gray-900">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </Link>
            <Link href="https://twitter.com/SanatanAstro3">
              <a className="ml-3 text-gray-900">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
