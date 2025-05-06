import partner from "@/assets/pattern50-founders.png";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const Partnership = () => {
  return (
    <div className="md:flex mx-auto lg:px-28 lg:my-16">
      <div className="px-6 bg-[#faf6f1] py-6 md:py-8 md:pl-16">
        <h2 className="font-bold text-2xl mb-4 text-primary">Partnership</h2>
        <h1 className="font-bold text-4xl text-primary">
          Pattern50 Solving <br /> North Carolina Startup <br /> Problem
          <span className="text-secondary"> With 6sense</span>
        </h1>
        <p className="my-4">
          6sense works with Pattern50, an NC-based Software firm, led by serial
          investor and long-time CTO Jim Swain.{" "}
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
          src={partner}
          alt="Partnership"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Partnership;
