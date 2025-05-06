import started1 from "@/assets/How to Get Started_ - Image 1.png";
import started2 from "@/assets/How to Get Started_ - Image 2.png";
import started3 from "@/assets/How to Get Started_ - Image 3.png";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div className="p-6 md:w-[75%] mx-auto md:my-16">
      <h1 className="text-primary font-bold text-4xl text-center">
        How to <span className="text-secondary">Get Started?</span>
      </h1>
      <p className="my-6 text-center">
        It’s simpler than onboarding a single freelancer. We follow Scrum, and
        you get a dedicated project manager—so as CTO, all you need to do is
        create the backlog.
      </p>
      <div className=" grid md:grid-cols-3 gap-4">
        {/* card1 */}
        <div className="bg-[#faf6f1] p-4 rounded-2xl gap-4 ">
          <Image
            src={started1}
            alt="started"
            width={500}
            height={500}
            className="hidden md:block"
          />
          <h1 className="text-primary font-bold text-xl">Step 1</h1>
          <p>Get started in 60 seconds</p>
        </div>
        <div className="bg-[#faf6f1] p-4 rounded-2xl gap-4">
          <Image
            src={started2}
            alt="started"
            width={500}
            height={500}
            className="hidden md:block"
          />
          <h1 className="text-primary font-bold text-xl">Step 1</h1>
          <p>Get started in 60 seconds</p>
        </div>
        <div className="bg-[#faf6f1] p-4 rounded-2xl gap-4">
          <Image
            src={started3}
            alt="started"
            width={500}
            height={500}
            className="hidden md:block"
          />
          <h1 className="text-primary font-bold text-xl">Step 1</h1>
          <p>Get started in 60 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
