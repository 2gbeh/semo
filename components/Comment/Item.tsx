import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa6";
//
import X from "../SketchBox";
import Xi from "../AssetIcon";
import { AvatarPhoto, AvatarSolid } from "../Avatar";
//
import { dd, bool, rand } from "@/utils";
import { type TComment, CommentService } from "./";

const CommentItem = ({ data: item }: { data: TComment }) => {
  return (
    <div className="py-0 px-0 sm:pr-2 pr-0 text-sm">
      <div className="flex">
        {/* AVATAR */}
        <div className="flex flex-col items-center ">
          <div className="bg-white border-2 rounded-full">
            {item.has_initials ? (
              <AvatarSolid text={item.sender} size={35} />
            ) : (
              <AvatarPhoto src={`/images/avatar.png`} size={35} />
            )}
          </div>
          <div className="border-l-2 left-5 flex-grow"></div>
        </div>
        <div className="ml-3 w-full">
          <div className="flex justify-between">
            {/* USERNAME */}
            <p className="flex-grow text-blue-500 text-xs">{item.sender}</p>

            {/* ACTION */}
            <div className="flex">
              <p className="text-gray-400">{rand(0, 99)}</p>
              <p className="ml-2">
                {bool(
                  <FaRegThumbsUp color="gray" size="1.2em" />,
                  <FaThumbsUp color="#0093dd" size="1.2em" />
                )}
              </p>
            </div>
          </div>

          {/* COMMENT */}
          <p className="block">{item.message}</p>

          {/* DATE */}
          <p className="mt-2 mb-5 text-gray-400 text-xs">
            Posted &bull; {item.created_at}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
