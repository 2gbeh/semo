import Image from "next/image";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
// 
import TheLogo from "@/components/TheLogo";
//
import * as HomeService from "../home.service";

const Gallery = () => {
  return (
    <section className="bg-black">
      {/* ACTION */}
      <button className="absolute top-5 left-5">
        <TheLogo />
      </button>

      {/* CONTENT */}
      <div className="flex items-center justify-between h-screen">
        {/* BACK */}
        <button className="relative left-10">
          <FaCircleChevronLeft color="white" size="2em" />
        </button>

        {/* IMAGE */}
        <div className="bg-white h-screen">
          <Image
            src={HomeService.randomImage()}
            alt="photo"
            // placeholder="blur"
            quality={100}
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
        </div>

        {/* NEXT */}
        <button className="relative right-10">
          <FaCircleChevronRight color="white" size="2em" />
        </button>
      </div>
    </section>
  );
};

export default Gallery;
