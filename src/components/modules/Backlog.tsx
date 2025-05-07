import backlog1 from "@/assets/Clear Backlog Faster - Image 1.png";
import backlog2 from "@/assets/Clear Backlog Faster - Image 2.png";
import backlog3 from "@/assets/Clear Backlog Faster - Image 3.png";
import { Rocket } from "lucide-react";
import Image from "next/image";

const backlogCards = [
  {
    image: backlog1,
    title: "Dedicated Team for the Cofounder CTO",
    description:
      "They work under your CTO, following scrum to clear your backlog quickly.",
    label: "Tech Leadership",
  },
  {
    image: backlog2,
    title: "Dedicated Team for the Cofounder CTO",
    description:
      "They work under your CTO, following scrum to clear your backlog quickly.",
    label: "Tech Leadership",
  },
  {
    image: backlog3,
    title: "Dedicated Team for the Cofounder CTO",
    description:
      "They work under your CTO, following scrum to clear your backlog quickly.",
    label: "Tech Leadership",
  },
];

const Backlog = () => {
  return (
    // <div className="p-6 mx-auto md:my-16 lg:px-28">
    //   <h1 className="text-primary font-bold text-4xl text-center">
    //     Clear Backlog <span className="text-secondary">Faster</span>
    //   </h1>
    //   <p className="my-6 text-center lg:text-xl">
    //     Scale quickly and safely without hiring full-time employees,
    //     significantly reducing risk <br /> and overhead. Significantly reducing
    //     risk and overhead
    //   </p>
    //   <div className="grid md:grid-cols-3 space-y-6 lg:gap-8 lg:px-20">
    //     {backlogCards.map((card, index) => (
    //       <div key={index} className="relative">
    //         <Image
    //           src={card.image}
    //           alt="backlog"
    //           width={500}
    //           height={500}
    //           className=""
    //         />
    //         <h1 className="text-primary font-bold text-2xl mt-6 mb-2">
    //           {card.title}
    //         </h1>
    //         <p className="font-normal text-xs lg:text-base">
    //           {card.description}
    //         </p>
    //         <div className="absolute top-0 md:top-4 md:left-4 p-2 bg-[#faf6f1] md:w-[60%] rounded-tr-2xl rounded-bl-2xl text-primary font-semibold flex gap-2">
    //           <Rocket />
    //           <p>{card.label}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="container">
      <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary text-center">
        Clear Backlog
        <span className="text-secondary"> Faster</span>
      </h1>

      <p className="my-5 leading-6 font-normal text-base lg:text-lg text-center">
        6sense works with Pattern50, an NC-based Software firm, led by serial
        investor and long-time CTO Jim Swain.
      </p>
      <div
        className={`max-w-[1200px] lg:mx-auto lg:rounded-2xl grid grid-cols-1 lg:grid-cols-3 lg:gap-16`}
      >
        {backlogCards.map((card, index) => (
          <div key={index} className="relative m-6 lg:m-0">
            <Image
              src={card.image}
              alt="backlog"
              width={500}
              height={500}
              className=""
            />
            <h1 className="text-primary font-bold text-2xl mt-6 mb-2">
              {card.title}
            </h1>
            <p className="font-normal text-xs lg:text-base">
              {card.description}
            </p>
            <div className="absolute top-0 md:top-4 md:left-4 p-2 bg-[#faf6f1] md:w-[60%] rounded-tr-2xl rounded-bl-2xl text-primary lg:font-medium text-xs flex items-center gap-2">
              <Rocket />
              <p>{card.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backlog;
