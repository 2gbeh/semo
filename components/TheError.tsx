import Image from "next/image";
// 
import TheLogo from "@/components/TheLogo";
//
import * as HomeService from "@/app/(home)/_home/home.service";

const TheError = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-black w-screen h-screen">
      Error
    </div>
  );
};

export default TheError;
