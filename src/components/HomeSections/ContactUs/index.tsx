import { ContactUs as ContactUsShared } from "@/components/shared/ContactUs";
import { GoogleMapsEmbed } from "@next/third-parties/google";

const ContactUs: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F7FAFC] py-16 min-h-[600px] overflow-clip">
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch relative z-10 h-full min-h-[600px]">
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 lg:py-0 z-10 lg:mr-8">
          <ContactUsShared />
        </div>

        <div className="w-full h-[300px] lg:h-full lg:w-1/2 lg:absolute -right-20 top-0 bottom-0 z-0 flex overflow-clip">
          <div className="w-full h-full overflow-clip">
            <GoogleMapsEmbed
              apiKey="AIzaSyDLcdoN420sDVeALYer02_dtHRJWjsil10"
              q="Yerevan,Armenia"
              height={1000}
              width="100%"
              mode="place"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactUs };
