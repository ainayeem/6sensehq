import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import styles from "./Hero.module.css";
// import img1 from "@/assets/hero-img/img-1.png";
// import img2 from "@/assets/hero-img/img-2.png";
// import img3 from "@/assets/hero-img/img-3.png";
import img1 from "@/assets/hero-img/img-1.png";
import img2 from "@/assets/hero-img/img-2.png";
import img3 from "@/assets/hero-img/img-3.png";
import getTeam from "@/assets/images/Get your team today!.svg";

const Hero = () => {
  const features = [
    "Top 0.5% devs at 1/10th cost.",
    "We manage ops; you lead direction.",
    "We handle recruitment, training & HR.",
  ];

  return (
    <div className="container">
      <div
        className={`${styles.banner} max-w-[1200px] lg:mx-auto border border-[#BA8D4640] mx-4 my-36 px-2 lg:px-16 py-4 lg:py-11 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-16`}
      >
        <div className="">
          <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary">
            Hire a Top Developer Team From
            <br />
            <span className="text-secondary">Bangladesh</span>
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
            <Image
              src={getTeam}
              alt="Get your team today!"
              width={500}
              height={500}
              className="w-40 -translate-y-1/2 hidden lg:block"
            />
          </div>
        </div>

        <div className="w-full">
          <Image
            src={img2}
            alt="chargeOnsite"
            width={500}
            height={500}
            className="rounded-md w-full"
          />

          <div className="flex mt-3.5">
            <div className="w-1/2">
              <Image
                src={img3}
                alt="chargeOnsite"
                width={500}
                height={500}
                className="rounded-md w-full aspect-square object-cover"
              />
            </div>

            <div
              className={`${styles.banner} w-1/2 rounded-tl-md -mt-[30%] aspect-[1/1.5] pt-3.5 pl-3.5`}
            >
              <Image
                src={img1}
                alt="chargeOnsite"
                width={500}
                height={500}
                className="rounded-md w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
