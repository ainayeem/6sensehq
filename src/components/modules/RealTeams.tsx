import { HandCoins, Rocket, Award, ThumbsUp } from "lucide-react"; // import different icons
import styles from "./Hero.module.css";

const stats = [
  {
    percentage: "39-96%",
    description: "Savings on Dev Team Payroll",
    icon: HandCoins,
  },
  {
    percentage: "3x",
    description: "Faster team ramp-up speed",
    icon: Rocket,
  },
  {
    percentage: "2x",
    description: "Code shipped per sprint",
    icon: Award,
  },
  {
    percentage: "80%",
    description: "Client satisfaction rate",
    icon: ThumbsUp,
  },
];

const RealTeams = () => {
  return (
    <div className="container">
      <div
        className={`${styles.banner} max-w-[1200px] lg:mx-auto border border-[#BA8D4640] mx-4 my-36 px-2 lg:px-16 py-4 lg:py-11 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8`}
      >
        <div className="lg:my-auto">
          <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary">
            Real Results from
            <br />
            <span className="text-secondary">Real Teams</span>
          </h1>
        </div>

        <div className="w-full grid grid-cols-2 gap-8">
          {stats.map(({ percentage, description, icon: Icon }, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-[#F9F4EDA3] text-primary"
            >
              <div className="flex gap-2 items-center font-medium text-xl lg:text-4xl">
                <Icon />
                <h1>{percentage}</h1>
              </div>
              <p className="font-normal text-xs mt-3 lg:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealTeams;
