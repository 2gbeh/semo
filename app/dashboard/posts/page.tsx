import X from "@/components/SketchBox";
import Rx from "@/components/Repeat";

export const metadata = { title: "User Comments" };

export default function Posts() {
  return (
    <>
      <h1 className="text-2xl font-bold">User Comments</h1>

      {/* FORM */}
      <section className="mt-4">
        <ul className="flex items-center gap-4">
          <li className="">
            <X as={[1, ["100%", 40], "Avatar"]} />
          </li>
          <li className="flex-1">
            <div className="gap-4 flex items-center justify-between">
              <div className="w-[240px]">
                <X as={[1, ["100%", 40], "Display Name"]} />
              </div>
              <div className="flex-1">
                <X as={[1, ["100%", 40], "Comment"]} />
              </div>
            </div>
          </li>
          <li className="">
            <X as={[1, ["100%", 40], "Post"]} />
          </li>
        </ul>
      </section>

      {/* TABLE */}
      <section className="mt-8">
        <X as={[1, ["100%", 640], "Comments"]} />
      </section>
    </>
  );
}
