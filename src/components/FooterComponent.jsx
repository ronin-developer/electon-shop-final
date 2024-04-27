// components
import SubscribeComponent from "./SubscribeComponent";
import FooterListComponent from "./FooterListComponent";

// logo
import logo from "../assets/images/logo_dark.png";

// icons
import { FaFacebook, FaInstagram } from "react-icons/fa";

// content/constants
import { footerContent, getHelp, aboutUs } from "../constans/footerContent";

function FooterComponent() {
  return (
    <div className="bg-[#E2F4FF] py-[40px] mt-[50px]">
      <div className="container mx-auto">
        <SubscribeComponent />

        {/* footer content */}
        <div className="mt-[50px] flex flex-col md:flex-row">
          {/* left side */}
          <div className="flex flex-col gap-[20px] w-full md:w-[20%]">
            <img src={logo} alt="MyLogo" className="w-[150px]" />

            <div className="flex items-center gap-[15px]">
              <FaFacebook size={24} color="#003F62" />
              <FaInstagram size={24} color="#003F62" />
            </div>
          </div>

          {/* right side */}
          <div className="flex items-start gap-[40px] w-full md:w-[80%] justify-between">
            <FooterListComponent title="Find Product" items={footerContent} />
            <FooterListComponent title="Get Help" items={getHelp} />
            <FooterListComponent title="About Us" items={aboutUs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
