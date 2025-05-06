import trainging from "@/assets/training.png";
import Image from "next/image";

const RetainTalent = () => {
  return (
    <div className="md:flex md:flex-row-reverse max-w-[85%] mx-auto items-center">
      <div className="p-6 md:rounded-r-md md:px-16 md:w-[50%]">
        <h1 className="font-bold text-4xl text-primary">
          How We Source, Train, and
          <br />
          <span className="text-secondary">Retain Talent</span>
        </h1>
        <p className="my-4">
          We don’t just hire developers; we create them in a structured, proven
          process:
        </p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-primary font-bold text-4xl">1.</h1>
            <p>Partnering with Bangladesh’s top universities</p>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-primary font-bold text-4xl">2.</h1>
            <p>Partnering with Bangladesh’s top universities</p>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-primary font-bold text-4xl">3.</h1>
            <p>Partnering with Bangladesh’s top universities</p>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src={trainging}
          alt="chargeOnsite"
          width={500}
          height={500}
          className="w-full md:rounded-l-md"
        />
      </div>
    </div>
  );
};

export default RetainTalent;
