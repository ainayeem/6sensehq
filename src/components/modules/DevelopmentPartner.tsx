import devFeature from "@/assets/dev-partner/dev-feature.png";
import logo1 from "@/assets/dev-partner/logo-1.png";
import logo2 from "@/assets/dev-partner/logo-2.svg";
import logo3 from "@/assets/dev-partner/logo-3.svg";
import logo4 from "@/assets/dev-partner/logo-4.svg";
import logo5 from "@/assets/dev-partner/logo-5.svg";
import logo6 from "@/assets/dev-partner/logo-6.svg";
import logo7 from "@/assets/dev-partner/logo-7.png";
import logo8 from "@/assets/dev-partner/logo-8.png";
import Image from "next/image";

const DevelopmentPartner = () => {
  return (
    <div className="my-12">
      <h1 className="font-bold text-2xl text-center">
        A Development Partner for <br /> New Age Startups
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-8 gap-4 mt-8 md:px-52 justify-center items-center">
        <Image
          src={logo1}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo2}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo3}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo4}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo5}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo6}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo7}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo8}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
      </div>
      <Image
        src={devFeature}
        alt="Development Partner"
        width={1000}
        height={1000}
        className="mx-auto my-4 px-4"
      />
    </div>
  );
};

export default DevelopmentPartner;
