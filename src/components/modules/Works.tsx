import { ArrowBigUp, Wrench } from "lucide-react";
import styles from "./Hero.module.css";

const steps = [
  {
    step: 1,
    title: "Share The Backlog",
    description: "Collaborate with your Product Owner",
  },
  {
    step: 2,
    title: "Join Sprint Reviews",
    description: "Collaborate with your Product Owner",
  },
  {
    step: 3,
    title: "Check In Daily",
    description: "Collaborate with your Product Owner",
  },
];

const Works = () => {
  return (
    // <div className="container my-12 lg:my-32">
    //   <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary">
    //     How to
    //     <span className="text-secondary"> Works</span>
    //   </h1>

    //   <p className="my-5 leading-6 font-normal text-base lg:text-lg">
    //     It’s simpler than onboarding a single freelancer. We follow Scrum, and
    //     you get a <br /> dedicated project manager—so as CTO, all you need to do
    //     is create the backlog.
    //   </p>
    //   <div
    //     className={`max-w-[1200px] lg:mx-auto lg:rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16`}
    //   >
    //     {steps.map((item, index) => (
    //       <div key={index} className="bg-[#faf6f1] p-4 gap-4">
    //         <h1 className="font-bold text-5xl text-[#b7c3c0]">{item.step}</h1>
    //         <h2 className="text-primary font-bold text-xl">{item.title}</h2>
    //         <p>{item.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="container">
      <div
        className={`${styles.banner} max-w-[1200px] lg:mx-auto border border-[#BA8D4640] mx-4 my-36 px-2 lg:px-16 py-4 lg:py-11 rounded-2xl`}
      >
        <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary">
          How It
          <span className="text-secondary"> Works</span>
        </h1>
        <p className="mt-4 mb-8 leading-6 font-normal text-base lg:text-lg">
          You attend daily scrum and sprint review meetings. Your own Product
          Owner refines the backlog for you. The team works on sprint by sprint
          and shows you whats going on in each sprint
        </p>
        <div
          className={`max-w-[1200px] lg:mx-auto lg:rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16`}
        >
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-[#faf6f1] p-4 gap-8 lg:my-8 rounded-lg"
            >
              <h1 className="font-bold text-5xl text-[#b7c3c0] mb-4">
                {item.step}
              </h1>
              <h2 className="text-primary font-bold text-xl mb-4">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-3.5 mt-8 items-center">
          <button className="shq-btn-primary">Book a demo</button>
          <ArrowBigUp />
          <Wrench />
        </div>
      </div>
    </div>
  );
};

export default Works;
