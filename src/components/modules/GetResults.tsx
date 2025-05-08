import Image from "next/image";
import office from "@/assets/office.png";
import Link from "next/link";

const GetResults = () => {
  const features = [
    {
      title: "Your Team, Our Culture",
      description:
        "An all-in-one solution that slashes overhead while fueling real social impact.",
    },
    {
      title: "Team Supervision",
      description:
        "Each developer is meticulously vetted and intensively trained to be startup-ready.",
    },
    {
      title: "Process Management",
      description:
        "We’ve fine-tuned our process so you can have a working team in weeks, not months.",
    },
  ];

  return (
    <div>
      <div className="container -mb-[35%] scale-z-90">
        <div
          className={`bg-[#F9F4EDE5] max-w-[1200px] lg:mx-auto my-36 lg:pl-16 lg:rounded-lg grid grid-cols-1 lg:grid-cols-2 lg:gap-16 lg:py-24`}
        >
          <div className="py-8 px-6 lg:px-0">
            <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary">
              Get Results,
              <br />
              <span className="text-secondary"> Not Just Talent</span>
            </h1>

            <p className="my-5 leading-6 font-normal text-base lg:text-lg">
              Clear your backlog with built-in accountability, rigorous
              processes, and proven results—without the headache of recruitment,
              payroll, or operations management.
            </p>

            <div className="flex gap-3.5 mt-10">
              <Link href="/book-demo">
                <button className="shq-btn-primary">Book a demo</button>
              </Link>
            </div>
          </div>

          <div className="w-full my-auto p-6 lg:px-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`mr-16 ${
                  index !== features.length - 1
                    ? "border-b-2 border-primary"
                    : ""
                }`}
              >
                <h1 className="text-primary font-bold text-2xl mt-6 mb-2">
                  {feature.title}
                </h1>
                <p className="font-normal text-xs lg:text-base lg:mb-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={office}
        alt="office"
        width={1000}
        height={500}
        className="w-full h-[500px] lg:h-[600px] object-cover object-center"
      />
    </div>
  );
};

export default GetResults;
