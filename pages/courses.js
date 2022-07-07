import React from "react";
import Image from "next/image";

const Courses = () => {
  return (
    <div classNaeme="max-w-sm rounded overflow-hidden shadow-lg font-abc">
      <Image
        alt="about"
        className="object-cover object-center h-full w-full"
        width={1700}
        height={700}
        src="/img/coming-soon.jpg"
      />
    </div>
  );
};

export default Courses;
