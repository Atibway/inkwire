import { Header } from "@/components/header/header";
import Banner from "./_components/banner";
import Branding from "./_components/branding";
import Benefits from "./_components/benefits";
import FeatureHighlight from "./_components/feature.highlight";
import Pricing from "./_components/pricing";
import Footer from "@/components/footer/footer";


const Page = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Page;
