import { HandCoins } from "lucide-react";
import styles from "./Hero.module.css";

const RealTeams = () => {
  return (
    <div
      className={`${styles.banner} md:flex border border-[#ede1cf] rounded-md my-12 justify-center items-center m-4 md:mx-28 md:my-16`}
    >
      <div className="px-4 py-6">
        <h1 className="font-bold text-4xl text-primary lg:text-5xl">
          Real Results from <br />
          <span className="text-secondary">Real Teams</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 md:py-16">
        {/* card1 */}
        <div className="p-4 rounded-lg bg-[#F9F4EDA3]">
          <div className="flex gap-2 font-medium text-xl md:font-semibold md:text-4xl justify-center items-center">
            <HandCoins />
            <h1>39-52%</h1>
          </div>
          <p className="text-center font-normal text-xs mt-3 lg:font-normal lg:text-lg">
            Savings on Dev Team Payroll
          </p>
        </div>
        <div className="p-4 rounded-lg bg-[#F9F4EDA3]">
          <div className="flex gap-2 font-medium text-xl md:font-semibold md:text-4xl justify-center items-center">
            <HandCoins />
            <h1>39-52%</h1>
          </div>
          <p className="text-center font-normal text-xs mt-3 lg:font-normal lg:text-lg">
            Savings on Dev Team Payroll
          </p>
        </div>
        <div className="p-4 rounded-lg bg-[#F9F4EDA3]">
          <div className="flex gap-2 font-medium text-xl md:font-semibold md:text-4xl justify-center items-center">
            <HandCoins />
            <h1>39-52%</h1>
          </div>
          <p className="text-center font-normal text-xs mt-3 lg:font-normal lg:text-lg">
            Savings on Dev Team Payroll
          </p>
        </div>
        <div className="p-4 rounded-lg bg-[#F9F4EDA3]">
          <div className="flex gap-2 font-medium text-xl md:font-semibold md:text-4xl justify-center items-center">
            <HandCoins />
            <h1>39-52%</h1>
          </div>
          <p className="text-center font-normal text-xs mt-3 lg:font-normal lg:text-lg">
            Savings on Dev Team Payroll
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealTeams;
