import Backlog from "@/components/modules/Backlog";
import DevelopmentPartner from "@/components/modules/DevelopmentPartner";
import GetResults from "@/components/modules/GetResults";
import GetStarted from "@/components/modules/GetStarted";
import Hero from "@/components/modules/Hero";
import Partnership from "@/components/modules/Partnership";
import RealTeams from "@/components/modules/RealTeams";
import StartupStory from "@/components/modules/StartupStory";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <DevelopmentPartner />
      <Partnership />
      <RealTeams />
      <StartupStory />
      <Backlog />
      <GetResults />
      <GetStarted />
      {/* <Works /> */}
      {/* <RetainTalent /> */}
      {/* <WhyBangladesh /> */}
      {/* <Donation /> */}
    </div>
  );
}
