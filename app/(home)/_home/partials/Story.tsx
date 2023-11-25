import Image from "next/image";
import { FaMusic, FaVolumeXmark } from "react-icons/fa6";
// 
import X from "@/components/SketchBox";
//
import { cx, bool } from "@/utils";
import * as HomeService from "../home.service";

const tw = {
  pager: "bg-white/50 rounded-full min-h-[2px]",
};

const Story = () => {
  return (
    <section className="bg-black relative">
      {/* PAGINATION */}
      <button className="absolute top-1 w-full">
        <ul className="grid grid-cols-5 gap-1.5">
          <li className={cx(tw.pager, "!bg-white")}></li>
          <li className={tw.pager}></li>
          <li className={tw.pager}></li>
          <li className={tw.pager}></li>
          <li className={tw.pager}></li>
        </ul>
      </button>

      {/* AUDIO */}
      <button className="absolute bottom-5 left-5 flex items-center">
        <div>
          {bool(<FaVolumeXmark color="white" />, <FaMusic color="white" />)}
        </div>
        <div className="flex flex-col justify-start items-start text-xs ml-2">
          <u className="text-white font-semibold">Sinner</u>
          <p className="text-gray-200">Adekunle Gold ft. Simi</p>
        </div>
      </button>

      {/* CAROUSEL */}
      <div className="flex w-full">
        <Image
          src={HomeService.randomImage()}
          alt="photo"
          // placeholder="blur"
          quality={100}
          sizes="100vw"
          style={{ objectFit: "contain" }}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Story;
