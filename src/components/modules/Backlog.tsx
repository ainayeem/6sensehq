import backlog1 from "@/assets/Clear Backlog Faster - Image 1.png";
import backlog2 from "@/assets/Clear Backlog Faster - Image 2.png";
import backlog3 from "@/assets/Clear Backlog Faster - Image 3.png";
import { Rocket } from "lucide-react";
import Image from "next/image";

const Backlog = () => {
  return (
    <div className="p-6 mx-auto md:my-16 lg:px-28">
      <h1 className="text-primary font-bold text-4xl text-center">
        Clear Backlog <span className="text-secondary">Faster</span>
      </h1>
      <p className="my-6 text-center lg:text-xl">
        Scale quickly and safely without hiring full-time employees,
        significantly reducing risk and overhead. Significantly reducing risk
        and overhead
      </p>
      <div className=" grid md:grid-cols-3 space-y-6 lg:gap-8">
        {/* card1 */}
        <div className="relative ">
          <Image
            src={backlog1}
            alt="backlog"
            width={500}
            height={500}
            className=""
          />
          <h1 className="text-primary font-bold text-2xl mt-6 mb-2">
            Dedicated Team for the Cofounder CTO
          </h1>
          <p className="font-normal text-xs lg:text-base">
            They work under your CTO, following scrum to clear your backlog
            quickly.
          </p>
          <div className="absolute top-0 md:top-4 md:left-4 p-2 bg-[#faf6f1] md:w-[50%] rounded-tr-2xl rounded-bl-2xl text-primary font-semibold flex gap-2">
            <Rocket />
            <p>Tech Leadership</p>
          </div>
        </div>
        <div className="relative ">
          <Image
            src={backlog2}
            alt="backlog"
            width={500}
            height={500}
            className=""
          />
          <h1 className="text-primary font-bold text-2xl mt-6 mb-2">
            Dedicated Team for the Cofounder CTO
          </h1>
          <p className="font-normal text-xs lg:text-base">
            They work under your CTO, following scrum to clear your backlog
            quickly.
          </p>
          <div className="absolute top-0 md:top-4 md:left-4 p-2 bg-[#faf6f1] md:w-[50%] rounded-tr-2xl rounded-bl-2xl text-primary font-semibold flex gap-2">
            <Rocket />
            <p>Tech Leadership</p>
          </div>
        </div>
        <div className="relative ">
          <Image
            src={backlog3}
            alt="backlog"
            width={500}
            height={500}
            className=""
          />
          <h1 className="text-primary font-bold text-2xl mt-6 mb-2">
            Dedicated Team for the Cofounder CTO
          </h1>
          <p className="font-normal text-xs lg:text-base ">
            They work under your CTO, following scrum to clear your backlog
            quickly.
          </p>
          <div className="absolute top-0 md:top-4 md:left-4 p-2 bg-[#faf6f1] md:w-[50%] rounded-tr-2xl rounded-bl-2xl text-primary font-semibold flex gap-2">
            <Rocket />
            <p>Tech Leadership</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backlog;
