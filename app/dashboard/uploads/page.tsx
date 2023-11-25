import X from "@/components/SketchBox";
import Rx from "@/components/Repeat";

export const metadata = { title: "Photo Gallery" };

export default function Posts() {
  return (
    <>
      <h1 className="text-2xl font-bold">Photo Gallery</h1>

      {/* FORM */}
      <section className="mt-4">
        <ul className="flex items-center gap-4">
          <li className="flex-1">
            <div className="gap-4 flex items-center justify-between">
              <div className="w-[240px]">
                <X as={[1, ["100%", 40], "Type"]} />
              </div>
              <div className="flex-1">
                <X as={[1, ["100%", 40], "File"]} />
              </div>
            </div>
          </li>
          <li className="">
            <X as={[1, ["100%", 40], "Upload"]} />
          </li>
        </ul>
      </section>

      {/* TABLE */}
      <section className="mt-8">
        <X as={[1, ["100%", 640], "Uplodas"]} />
      </section>
    </>
  );
}
