import donate1 from "@/assets/Donation Image - 1.png";
import donate2 from "@/assets/Donation Image - 2.png";
import Image from "next/image";

const Donation = () => {
  return (
    <div className="md:flex max-w-[85%] mx-auto md:p-16">
      <div className="p-6">
        <h2 className="font-bold text-2xl mb-4 text-primary">
          For every hire you do, we donate the first months 50% salary to a
          nonprofit.
        </h2>
        <p className="my-4">
          Which goes into making the lives of young Bangladeshi children better.
        </p>
      </div>
      <div className="flex gap-2">
        <Image
          src={donate1}
          alt="Partnership"
          width={500}
          height={500}
          className="w-48"
        />
        <Image
          src={donate2}
          alt="Partnership"
          width={500}
          height={500}
          className="w-32 h-32"
        />
      </div>
    </div>
  );
};

export default Donation;
