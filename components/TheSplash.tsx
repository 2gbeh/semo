import Image from "next/image";
// 
import TheLogo from "@/components/TheLogo";
//
import * as HomeService from "@/app/(home)/_home/home.service";

const TheSplash = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-black w-screen h-screen">
      {/* BACKGROUND */}
      <Image
        src={HomeService.randomImage()}
        alt="photo"
        // placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="w-full h-full sm:hidden"
      />

      {/* FOREGROUND */}
      <section className="absolute w-[200px]">
        <div className="text-white text-xs text-center leading-5">
          Loading platform modules from Vercel, please wait.
        </div>
        <div className="mt-4 w-[120px] mr-auto ml-auto">
          <ul className="w-[100%] bg-gray-400 rounded-full">
            <li className="w-[25%] bg-white min-h-[5px] rounded-full"></li>
          </ul>
        </div>
      </section>

      {/* LOGO */}
      <section className="hidden sm:block absolute bottom-10 right-10">
        <TheLogo />
      </section>
    </div>
  );
};

export default TheSplash;
