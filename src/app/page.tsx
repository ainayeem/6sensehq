import Backlog from "@/components/modules/Backlog";
import DevelopmentPartner from "@/components/modules/DevelopmentPartner";
import Donation from "@/components/modules/Donation";
import Footer from "@/components/modules/Footer";
import GetResults from "@/components/modules/GetResults";
import GetStarted from "@/components/modules/GetStarted";
import Hero from "@/components/modules/Hero";
import Navbar from "@/components/modules/Navbar";
import Partnership from "@/components/modules/Partnership";
import RealTeams from "@/components/modules/RealTeams";
import RetainTalent from "@/components/modules/RetainTalent";
import StartupStory from "@/components/modules/StartupStory";
import WhyBangladesh from "@/components/modules/WhyBangladesh";
import Works from "@/components/modules/Works";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <DevelopmentPartner />
      <Partnership />
      <RealTeams />
      <StartupStory />
      <Backlog />
      <GetResults />
      <GetStarted />
      <Works />
      <RetainTalent />
      <WhyBangladesh />
      <Donation />
      <Footer />
    </div>
  );
}
