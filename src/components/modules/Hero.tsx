import img1 from "@/assets/hero-img/img-1.png";
import img2 from "@/assets/hero-img/img-2.png";
import img3 from "@/assets/hero-img/img-3.png";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div
      className={`${styles.banner} md:flex max-lg:flex-col md:mx-32 mt-16 border rounded-md border-secondary md:p-16 px-4`}
    >
      <div className="p-6">
        <h1 className="font-bold text-4xl text-primary">
          Hire a Top Developer Team From
          <br />
          <span className="text-secondary">Bangladesh</span>
        </h1>
        <p className="my-4">
          Hire a fully managed, dedicated development team that integrates into
          your workflow without the headache of full-time hiring.
        </p>
        <div className="space-y-4 font-medium text-[12px]">
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
      <div className="relative  max-md:mx-auto max-h-max max-lg:w-[100%] max-[1720px]:w-[80%] min-[1721px]:w-[30%] min-[1721px]:max-w-[500px]">
        <Image
          src={img2}
          alt="chargeOnsite"
          width={500}
          height={500}
          className="rounded-md "
        />
        <div className="rounded-tl-lg overflow-hidden  bg-white  absolute bottom-0 right-0 pt-3.5 pl-3.5">
          <Image
            src={img1}
            alt="chargeOnsite"
            width={500}
            height={500}
            className="rounded-md w-[256px] max-sm:max-w-[170px]"
          />
        </div>
        <Image
          src={img3}
          alt="chargeOnsite"
          width={200}
          height={200}
          className="rounded-md mt-3.5 w-full max-w-[230px]"
        />
      </div>
    </div>
  );
};

export default Hero;
