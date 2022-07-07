import React from "react";

const Sendbd = () => {
  return (
    <>
      <div className="container  sm:py-8 px-8 md:px-20 py-24 mx-auto flex flex-wrap">
        <ul className="font-abc list-none mb-11">
          <>
            <li>
              Once the payment has been made, please send the birth details in
              the format shown below to-
              <b>sanatanvedicastrology@gmail.com</b>
            </li>
            <li>
              The accuracy of the reading depends upon the accurate birth
              details. So please keep that in mind.
            </li>
          </>
        </ul>
        <>
          <br />
          <ul className="list-decimal bg-orange-400 font-abc mb-11">
            <li>Name of the reading </li>
            <li>Name</li>
            <li>PayPal or Stripe(preferred): transaction ID or payment ID</li>
            <li>Gender</li>
            <li>Date of birth [DD/MM/YYYY]</li>
            <li>Time of birth: Both formats, for example- 6:00 PM = 18:00</li>
            <li>City, State, and Country of Birth</li>
            <li>Skype ID and Zoom ID (if going for live reading)</li>
            <li>Specific questions.</li>
            <li>
              For childbirth reading please send birth details of both parents
              (if available)
            </li>
            <li>
              For compatibility reading please send birth details of both
              partners
            </li>
            <li>
              Sometimes confirmation email can take a few hours but do not worry
              we will get back to you as soon as possible.
            </li>
          </ul>
          <br />
          <ul className="list-disc marker:text-blue-500 font-abc">
            <li>Audio reading can take up to two weeks.</li>
            <li>
              The time and date of the live reading depend on available slots.
              It can take up to two weeks.
            </li>
            <li>
              In live readings, only the screen will be shared with the charts.
            </li>
            <li>
              Cancellation can be done 48 hours prior to the reading. The
              reading can be postponed to the next available slot.
            </li>
            <li>
              We do not charge for the reading we charge for the time spent. If
              you do not relate to the given reading, we offer a full refund
              (minus transaction charges). The refund must be requested within
              three days after the reading, otherwise, it will be considered
              satisfactory.
            </li>
            <li>
              If you are going for the reading it means you are agreeing to the
              given below disclaimer.
            </li>
          </ul>
          <br />
          <p className="font-abc text-justify">
            <b> DISCLAIMER:</b> Jyotish/Astrology works with probabilities and
            complex factors that determine karma. There are many variables to
            consider, so predictions are a forecast indicating the right time
            for certain actions. The reading intends to instruct you about the
            most suitable direction of your life to advance towards your
            fulfilments and spiritual progress. You can decide to follow or not
            the indications given. The stars do not control your life; you have
            free will and need to use your judgment. The indications given in
            the reading describe the possibilities (and probabilities) and are
            not responsible for any loss, damage, or problems.
          </p>
        </>
      </div>
    </>
  );
};

export default Sendbd;
