import whyBD from "@/assets/Why Bangladesh_ - Sal Khan.png";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import styles from "./Hero.module.css";

const WhyBangladesh = () => {
  const features = [
    "Top 0.5% devs at 1/10th cost.",
    "We manage ops; you lead direction.",
    "We handle recruitment, training & HR.",
  ];

  return (
    <div className="container">
      <div
        className={`border max-w-[1200px] lg:mx-auto my-36 lg:pl-16 lg:rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-16 relative`}
      >
        <div className="py-8 px-6 lg:px-0">
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

        <div className="w-full my-auto">
          <Image
            src={whyBD}
            alt="Partnership"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyBangladesh;
