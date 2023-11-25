import X from "@/components/SketchBox";
import Xi from "@/components/AssetIcon";
import CTA from "@/components/CTA";
import { AvatarPhoto } from "@/components/Avatar";
import { CommentList } from "@/components/Comment";
//
import { dd, rand } from "@/utils";
import APP from "@/utils/constants/APP";
//
import * as HomeService from "../home.service";

const Drawer = () => {
  return (
    <section className="bg-white dark:bg-black rounded-t-3xl">
      <section className="sm:hidden flex justify-center pt-3">
        <div className="bg-gray-200 rounded-full block min-h-[8px] w-[40%]">
          {" "}
        </div>
      </section>
      <div className="p-5">
        {/* HEADER */}
        <section className="flex justify-between">
          <div className="flex-grow">
            <div className="flex items-center">
              {/* AVATAR */}
              <div className="bg-white border-2 p-0.5 rounded-full mr-2.5 relative">
                <AvatarPhoto
                  src={HomeService.randomAvatar()}
                  size={45}
                  clickable={true}
                />
                <div className="bg-green-500 w-3 h-3 absolute rounded-full right-0 bottom-0 border-2 border-white"></div>
              </div>

              {/* DISPLAY NAME */}
              <div className="">
                <div className="text-sm font-bold">{APP.hashtag}</div>
                <div className="flex mt-0.5 items-start">
                  <p className="text-xs text-gray-400">
                    Jan 3rd, 2019 &bull; 17:00 PM
                  </p>
                  <p className="ml-1">
                    <Xi as={["globe-outline-gray", 16, "Globe"]} />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* OPTIONS */}
          <div className="">
            <Xi
              as={[
                [false, "bookmark-solid-gray", "bookmark-outline-gray"],
                20,
                "Save",
              ]}
            />
          </div>
        </section>

        {/* POST */}
        <section className="mt-1 text-sm">
          <article>
            The families of <span>PA JOHNSON EHIAGHE</span> of Opoji, Irrua LGA,
            Edo and <span>REV. JACKSON TUGBEH</span> of Ehor, Uhunmwode LGA, Edo
            - cordially invites you to the Holy Matrimony of their children;{" "}
            <a
              href="https://facebook.com/ehiaghe.sandra"
              target="_blank"
              className="my-link"
            >
              Sandra Ose Ehiaghe
            </a>{" "}
            &{" "}
            <a
              href="https://facebook.com/2gbeh"
              target="_blank"
              className="my-link"
            >
              Emmanuel Osaretin Tugbeh
            </a>
            .
          </article>
        </section>

        {/* CALENDAR */}
        <section className="mt-4 py-4 border-t-2 text-sm flex justify-evenly items-center">
          <div className="flex flex-col items-center">
            <u className="font-semibold">Dec 2nd</u>
            <p className="text-xs mt-1">Date</p>
          </div>
          <div className="flex flex-col items-center">
            <u className="font-semibold">10:00</u>
            <p className="text-xs mt-1">Time</p>
          </div>
          <div className="flex flex-col items-center">
            <u className="font-semibold">Aduwawa, B/c Edo</u>
            <p className="text-xs mt-1">Venue</p>
          </div>
        </section>

        {/* IMPRESSIONS */}
        <section className="py-4 border-t-4 text-sm flex justify-around items-center">
          <div className="flex items-center">
            <Xi as={["eye-outline-gray", 20, "Views"]} />
            <p className="ml-2">2,023</p>
          </div>
          <div className="flex items-center">
            <Xi
              as={[
                [true, "heart-solid-red", "heart-outline-gray"],
                20,
                "Likes",
              ]}
            />
            <p className="ml-2">12</p>
          </div>
          <div className="flex items-center">
            <Xi as={["comment-outline-gray", 20, "Comments"]} />
            <p className="ml-2">2</p>
          </div>
          <div className="flex items-center">
            <Xi as={["share-node-gray", 20, "Share"]} />
            <p className="ml-2">10</p>
          </div>
        </section>

        {/* COMMENTS */}
        <CommentList />

        {/* ACTION */}
        <CTA />
      </div>
    </section>
  );
};

export default Drawer;
