import { Wrench } from "lucide-react";

const Works = () => {
  return (
    <div className="p-6 md:w-[75%] mx-auto md:my-16">
      <h1 className="text-primary font-bold text-4xl ">
        How It <span className="text-secondary">Works</span>
      </h1>
      <p className="my-6">
        It’s simpler than onboarding a single freelancer. We follow Scrum, and
        you get a dedicated project manager—so as CTO, all you need to do is
        create the backlog.
      </p>
      <div className=" grid md:grid-cols-3 gap-4">
        {/* card1 */}
        <div className="bg-[#faf6f1] p-4 gap-4 ">
          <h1 className="font-bold text-5xl text-[#b7c3c0]">1</h1>
          <h1 className="text-primary font-bold text-xl">Share The Backlog</h1>
          <p>Collaborate with your Product Owner</p>
        </div>
        <div className="bg-[#faf6f1] p-4 gap-4 ">
          <h1 className="font-bold text-5xl text-[#b7c3c0]">2</h1>
          <h1 className="text-primary font-bold text-xl">
            Join Sprint Reviews
          </h1>
          <p>Collaborate with your Product Owner</p>
        </div>
        <div className="bg-[#faf6f1] p-4 gap-4 ">
          <h1 className="font-bold text-5xl text-[#b7c3c0]">3</h1>
          <h1 className="text-primary font-bold text-xl">Check In Daily</h1>
          <p>Collaborate with your Product Owner</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-secondary text-white  px-6 py-4 my-4">
            Book a demo
          </button>
          <Wrench />
        </div>
      </div>
    </div>
  );
};

export default Works;
