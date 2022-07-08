import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font shadow-2xl font-abc">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="about"
                className="object-cover object-center h-full w-full"
                width={1700}
                height={600}
                src="/img/solar-system.jpg"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-110 h-110 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    alt="about"
                    className="object-cover object-center h-full w-full"
                    width={1110}
                    height={1110}
                    src="/img/jyoti.jpg"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Jyotisha Sharma M.A.
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  {/*<p className="text-base">
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
  </p>*/}
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 text-justify">
                  I have been actively practicing astrology for more than 15
                  years. I studied Western and Vedic astrology. Vedic philosophy
                  caught my attention with its logic, it explains the existence
                  of the universe, our existence, and everything that happens in
                  our lives. The Vedic concepts of the soul, the law of karma,
                  and reincarnation make a lot of sense. I actively study not
                  only astrology but also Ayurveda, Vastu, and Yoga. I completed
                  a number of courses with leading Vedic astrologers, as well as
                  psychology and counseling courses. I am also an educator,
                  fluent in English, Czech and Spanish.
                  <br />
                  Sanatan Astrology comprises Vedic astrology researchers and
                  practitioners from different walks of life. It aims to
                  propagate the knowledge of Vedic sciences and guide people
                  through the Vedic wisdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
