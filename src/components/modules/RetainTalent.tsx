import training from "@/assets/training.png";
import Image from "next/image";

const steps = [
  "Partnering with Bangladesh’s top universities",
  "Rigorous technical & soft skill training",
  "Ongoing mentorship & career development",
];

const RetainTalent = () => {
  return (
    // <div className="md:flex md:flex-row-reverse max-w-[85%] mx-auto items-center">
    //   <div className="p-6 md:rounded-r-md md:px-16 md:w-[50%]">
    //     <h1 className="font-bold text-4xl text-primary">
    //       How We Source, Train, and
    //       <br />
    //       <span className="text-secondary">Retain Talent</span>
    //     </h1>
    //     <p className="my-4">
    //       We don’t just hire developers; we create them in a structured, proven
    //       process:
    //     </p>
    //     <div className="flex flex-col space-y-2">
    //       {steps.map((text, index) => (
    //         <div key={index} className="flex items-center gap-2">
    //           <h1 className="text-primary font-bold text-4xl">{index + 1}.</h1>
    //           <p>{text}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div>
    //     <Image
    //       src={training}
    //       alt="Training Process"
    //       width={500}
    //       height={500}
    //       className="w-full md:rounded-l-md"
    //     />
    //   </div>
    // </div>

    <div className="container">
      <div
        className={`max-w-[1200px] lg:mx-auto my-36 lg:rounded-2xl grid grid-cols-1 lg:grid-cols-2 lg:gap-16`}
      >
        <div className="w-full hidden lg:block my-auto">
          <Image
            src={training}
            alt="Partnership"
            width={500}
            height={500}
            className="lg:rounded-tl-4xl lg:rounded-tr-xl lg:rounded-br-4xl lg:rounded-bl-xl w-full object-cover"
          />
        </div>
        <div className="py-8 px-6 lg:px-0">
          <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary">
            How We Source, Train, and
            <span className="text-secondary"> Retain Talent</span>
          </h1>

          <p className="my-5 leading-6 font-normal text-base lg:text-lg">
            We don’t just hire developers; we create them in a structured,
            proven process:
          </p>

          <div className="flex flex-col space-y-2">
            {steps.map((text, index) => (
              <div key={index} className="flex items-center gap-2 mb-4">
                <h1 className="text-primary font-bold text-4xl">
                  {index + 1}.
                </h1>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:hidden px-4">
          <Image
            src={training}
            alt="Partnership"
            width={500}
            height={500}
            className="border border-[#ede2d0] w-full object-cover rounded-tl-4xl rounded-tr-xl rounded-br-4xl rounded-bl-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default RetainTalent;
