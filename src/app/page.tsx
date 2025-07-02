import { Footer } from "@/components/Footer";
import {
  SubscriptionsSection,
  ContactUsSection,
  PartnersSection,
  TendersSection,
  BannerSection,
  DemoSection,
} from "@/components/HomeSections";

const Home: React.FC = () => {
  return (
    <main>
      <BannerSection />
      <PartnersSection />
      <TendersSection />
      <SubscriptionsSection />
      <ContactUsSection />
      <DemoSection />
      <Footer/>
    </main>
  );
};

export default Home;
