import chargeOnsite from "@/assets/ChargeOnsSite-Cover.png";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const StartupStory = () => {
  return (
    <div className="md:flex">
      <div className="p-6 bg-[#faf6f1]">
        <h2 className="font-bold text-2xl mb-4">Startup story</h2>
        <h1 className="font-bold text-4xl">
          Empowering the brave EV revolution with
          <br />
          <span className="text-secondary">Charge OnSite</span>
        </h1>
        <p className="my-4">
          For 36 months, 6sense has fueled Charge OnSite—a U.S. EV-charging
          startup—with a fully managed dev team
        </p>
        <div className="space-y-4 font-medium text-[12px]">
          <div className="flex gap-2">
            <BadgeCheck />
            <p> 20,000+ Dev Hours in 36 sprints </p>
          </div>
          <div className="flex gap-2">
            <BadgeCheck />
            <p>30+ Charging Stations deployed</p>
          </div>
          <div className="flex gap-2">
            <BadgeCheck />
            <p>
              <span className="font-bold">$1.5M</span> Saved in hiring costs
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
          alt="chargeOnsite"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default StartupStory;
