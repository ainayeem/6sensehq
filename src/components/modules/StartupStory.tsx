import chargeOnsite from "@/assets/ChargeOnsSite-Cover.png";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const StartupStory = () => {
  const features = [
    {
      boldtext: "20,0000+",
      text: "Dev Hours in 36 sprints",
    },
    {
      boldtext: "30+",
      text: "Charging stations deployed",
    },
    {
      boldtext: "$1.5M",
      text: "Saved in hiring costs",
    },
  ];

  return (
    <div className="container">
      <div
        className={`bg-[#faf6f1] max-w-[1200px] lg:mx-auto my-36 lg:rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-16`}
      >
        <div className="w-full hidden lg:block">
          <Image
            src={chargeOnsite}
            alt="Partnership"
            width={500}
            height={500}
            className="lg:rounded-l-md w-full h-full object-cover"
          />
        </div>
        <div className="py-8 px-6 lg:px-0">
          <h2 className="font-bold text-2xl text-primary mb-8">
            Startup Story
          </h2>
          <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary">
            Empowering the brave EV revolution with
            <span className="text-secondary"> Charge OnSite</span>
          </h1>

          <p className="my-5 leading-6 font-normal text-base lg:text-lg">
            For 36 months, 6sense has fueled Charge OnSite—a U.S. EV-charging
            startup—with a fully managed dev team
          </p>

          <div className="space-y-3 lg:space-y-4 leading-6 font-normal text-xs lg:text-lg">
            {features.map((text, index) => (
              <div key={index} className="flex gap-2">
                <BadgeCheck className="text-primary" />
                <p>
                  <span className="">{text.boldtext}</span> {text.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-3.5 mt-10">
            <Link href="/book-demo">
              <button className="shq-btn-primary">Book a demo</button>
            </Link>{" "}
          </div>
        </div>

        <div className="w-full lg:hidden">
          <Image
            src={chargeOnsite}
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

export default StartupStory;
