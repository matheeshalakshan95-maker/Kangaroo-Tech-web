import Seo from '../Components/Common/Seo';
import Hero from '../Components/Home/Hero';
import TrustSection from '../Components/Home/TrustSection';
import ServicesOverview from '../Components/Home/ServicesOverview';
import CimaHighlight from '../Components/Home/CimaHighlight';
import OutsourcingSection from '../Components/Home/OutsourcingSection';
import ReadyMadeSection from '../Components/Home/ReadyMadeSection';
import WhyChooseUs from '../Components/Home/WhyChooseUs';
import CtaSection from '../Components/Common/CtaSection';

const Home = () => {
  return (
    <>
      <Seo
        title="KANGARO TECH | Australian-Standard Software, AI & SaaS Development"
        description="KANGARO TECH builds websites, software, SaaS platforms and AI-integrated systems for Australian businesses, combining Australian standards with expert Sri Lankan technology teams."
      />
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <CimaHighlight />
      <OutsourcingSection />
      <ReadyMadeSection />
      <WhyChooseUs />
      <CtaSection />
    </>
  );
};

export default Home;
