import plogo from "@/assets/p-50.png";
import partner from "@/assets/pattern50-founders.png";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const Partnership = () => {
  const features = [
    "Top 0.5% devs at 1/10th cost.",
    "We manage ops; you lead direction.",
    "We handle recruitment, training & HR.",
  ];

  return (
    <div className="container">
      <div
        className={`bg-[#faf6f1] max-w-[1200px] lg:mx-auto my-36 lg:pl-16 lg:rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-16 relative`}
      >
        <Image
          src={plogo}
          alt="Pattern50"
          width={500}
          height={500}
          className="h-38 w-34 absolute hidden lg:block lg:-top-20 lg:-right-20"
        />
        <div className="py-8 px-6 lg:px-0">
          <h2 className="font-bold text-2xl text-primary mb-8">Partnership</h2>
          <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary">
            Pattern50 Solving <br /> North Carolina Startup Problem
            <span className="text-secondary"> With 6sense</span>
          </h1>

          <p className="my-5 leading-6 font-normal text-base lg:text-lg">
            6sense works with Pattern50, an NC-based Software firm, led by
            serial investor and long-time CTO Jim Swain.
          </p>

          <div className="space-y-3 lg:space-y-4 leading-6 font-normal text-xs lg:text-lg">
            {features.map((text, index) => (
              <div key={index} className="flex gap-2">
                <BadgeCheck />
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3.5 mt-10">
            <button className="shq-btn-primary">Book a demo</button>
          </div>
        </div>

        <div className="w-full">
          <Image
            src={partner}
            alt="Partnership"
            width={500}
            height={500}
            className="lg:rounded-r-md w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Partnership;

{
  /* <Image
        src={plogo}
        alt="Pattern50"
        width={500}
        height={500}
        className="h-38 w-34 absolute hidden lg:block lg:-top-20 lg:-right-20"
      /> */
}
