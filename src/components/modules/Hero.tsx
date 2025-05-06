import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import styles from "./Hero.module.css";
// import img1 from "@/assets/hero-img/img-1.png";
// import img2 from "@/assets/hero-img/img-2.png";
// import img3 from "@/assets/hero-img/img-3.png";
import img1 from "@/assets/hero-img/img-1.png";
import img2 from "@/assets/hero-img/img-2.png";
import img3 from "@/assets/hero-img/img-3.png";

const Hero = () => {
  return (
    <div
      className={`${styles.banner} border rounded-md border-[#ede2d0] my-12 p-4 lg:px-16 mx-2 lg:flex lg:items-center lg:mx-28`}
    >
      <div className="lg:w-[50%]">
        <h1 className="font-bold text-4xl text-primary">
          Hire a Top Developer Team From
          <br />
          <span className="text-secondary">Bangladesh</span>
        </h1>
        <p className="my-4 font-normal text-[16px]">
          Hire a fully managed, dedicated development team that integrates into{" "}
          your workflow without the headache of full-time hiring.
        </p>
        <div className="space-y-4 font-normal text-[16px]">
          <div className="flex gap-2">
            <BadgeCheck />
            <p>Top 0.5% devs at 1/10th cost.</p>
          </div>
          <div className="flex gap-2">
            <BadgeCheck />
            <p>We manage ops; you lead direction.</p>
          </div>
          <div className="flex gap-2">
            <BadgeCheck />
            <p>We handle recruitment, training & HR.</p>
          </div>
        </div>

        <button className="bg-secondary text-white  px-6 py-4 my-4">
          Book a demo
        </button>
      </div>
      <div className="relative w-[350px] lg:w-[512px] mx-auto">
        <Image
          src={img2}
          alt="chargeOnsite"
          width={500}
          height={500}
          className="rounded-md w-full"
        />
        <div className="absolute rounded-tl-lg overflow-hidden  bg-white bottom-0 right-0 pt-3.5 pl-3.5">
          <Image
            src={img1}
            alt="chargeOnsite"
            width={500}
            height={500}
            className="rounded-md w-[170px] lg:w-[250px]"
          />
        </div>
        <Image
          src={img3}
          alt="chargeOnsite"
          width={200}
          height={200}
          className="rounded-md mt-3.5 w-[170px] lg:w-[250px]"
        />
      </div>
    </div>
  );
};

export default Hero;
