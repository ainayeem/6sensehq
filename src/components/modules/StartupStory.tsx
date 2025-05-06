import chargeOnsite from "@/assets/ChargeOnsSite-Cover.png";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const StartupStory = () => {
  return (
    <div className="md:flex md:flex-row-reverse mx-auto lg:px-28 lg:my-16">
      <div className="px-6 bg-[#faf6f1] py-6 md:py-8 md:pl-16 md:w-[50%]">
        <h2 className="font-bold text-2xl mb-4 text-primary">Startup Story</h2>
        <h1 className="font-bold text-4xl text-primary">
          Empowering the brave EV revolution with
          <span className="text-secondary"> Charge OnSite</span>
        </h1>
        <p className="my-4">
          For 36 months, 6sense has fueled Charge OnSite—a U.S. EV-charging
          startup—with a fully managed dev team
        </p>
        <div className="space-y-4 font-medium text-[12px]">
          <div className="flex gap-2">
            <BadgeCheck />
            <p>50,000+ Dev Hours delivered for Pattern50.</p>
          </div>
          <div className="flex gap-2">
            <BadgeCheck />
            <p>13 Experts accelerating 3 startup backlogs.</p>
          </div>
          <div className="flex gap-2">
            <BadgeCheck />
            <p>
              <span className="font-bold">$1.5M</span> Saved on Pattern50
              product costs.
            </p>
          </div>
        </div>

        <button className="bg-secondary text-white  px-6 py-4 my-4">
          Book a demo
        </button>
      </div>
      <div>
        <Image
          src={chargeOnsite}
          alt="Partnership"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default StartupStory;
