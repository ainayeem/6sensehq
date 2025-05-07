import started1 from "@/assets/How to Get Started_ - Image 1.png";
import started2 from "@/assets/How to Get Started_ - Image 2.png";
import started3 from "@/assets/How to Get Started_ - Image 3.png";
import Image from "next/image";

const steps = [
  {
    image: started1,
    title: "Step 1",
    description: "Get started in 60 seconds",
  },
  {
    image: started2,
    title: "Step 2",
    description: "Meet your PM and align on sprint goals",
  },
  {
    image: started3,
    title: "Step 3",
    description: "Start shipping with your new team",
  },
];

const GetStarted = () => {
  return (
    // <div className="p-6 md:w-[75%] mx-auto md:my-16">
    //   <h1 className="text-primary font-bold text-4xl text-center">
    //     How to <span className="text-secondary">Get Started?</span>
    //   </h1>
    //   <p className="my-6 text-center">
    //     It’s simpler than onboarding a single freelancer. We follow Scrum, and
    //     you get a <br /> dedicated project manager—so as CTO, all you need to do
    //     is create the backlog.
    //   </p>
    //   <div className="grid md:grid-cols-3 gap-4">
    //     {steps.map((step, index) => (
    //       <div key={index} className="bg-[#faf6f1] p-4 rounded-2xl gap-4">
    //         <Image
    //           src={step.image}
    //           alt={`step-${index + 1}`}
    //           width={500}
    //           height={500}
    //           className="hidden md:block"
    //         />
    //         <h1 className="text-primary font-bold text-xl">{step.title}</h1>
    //         <p>{step.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="container my-12 lg:my-32">
      <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary text-center">
        How to
        <span className="text-secondary"> Get Started?</span>
      </h1>

      <p className="my-5 leading-6 font-normal text-base lg:text-lg text-center">
        It’s simpler than onboarding a single freelancer. We follow Scrum, and
        you get a <br /> dedicated project manager—so as CTO, all you need to do
        is create the backlog.
      </p>
      <div
        className={`max-w-[1200px] lg:mx-auto lg:rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16`}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#faf6f1] p-8 mx-6 lg:mx-0 rounded-2xl gap-4"
          >
            <Image
              src={step.image}
              alt={`step-${index + 1}`}
              width={500}
              height={500}
              className="hidden md:block"
            />
            <h1 className="text-primary font-bold text-xl mt-4 mb-2">
              {step.title}
            </h1>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
