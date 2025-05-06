import whyBD from "@/assets/Why Bangladesh_ - Sal Khan.png";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const WhyBangladesh = () => {
  return (
    <div className="md:flex max-w-[85%] mx-auto md:p-16">
      <div className="p-6">
        <h1 className="font-bold text-4xl text-primary">
          Why <br />
          <span className="text-secondary">Bangladesh</span>
        </h1>
        <h2 className="font-bold text-2xl mb-4 text-primary">
          The Future Of Tech Talent
        </h2>
        <p className="my-4">
          Growing South-east Asian country Bangladesh with more than 165 million
          people, offers a young, skilled, and cost-effective tech
          workforce—perfect for scaling startups efficiently.
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
          src={whyBD}
          alt="Partnership"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default WhyBangladesh;
