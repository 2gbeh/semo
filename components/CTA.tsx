import { FaWhatsapp } from "react-icons/fa6";
//
import Xi from "./AssetIcon";
//
import APP from "@/utils/constants/APP";

const CTA = () => {
  return (
    <section className="sticky bottom-5 flex justify-center">
      <a
        href={APP.whatsAppGroup}
        className="flex items-center justify-center bg-black rounded-full py-3 px-10 w-full sm:w-auto"
      >
        <p className="mr-2.5">
          <FaWhatsapp color="#16BC00" size="" />
        </p>
        <p className="text-white uppercase__ tracking-wide__ font-semibold text-sm">
          WhatsApp Group
        </p>
      </a>
    </section>
  );
};

export default CTA;
