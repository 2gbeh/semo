import X from "@/components/SketchBox";
import Rx from "@/components/Repeat";
import { ChartStat } from "@/components/charts";

export const metadata = { title: "Dashboard" };

export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* CARDS */}
      {/* Total visitors, users, posts, uploads */}
      <section className="mt-4 grid sm:grid-cols-4 grid-cols-2 gap-5 w-full">
        <ChartStat label="Total visitors" value="1,970" icon="ViewIcon" />
        <ChartStat label="Total users" value="1,992" icon="StarIcon" />
        <ChartStat label="Total posts" value="1,995" icon="ChatIco" />
        <ChartStat label="Total uploads" value="2,023" icon="AttachmentIcon" />
      </section>

      {/* CHARTS */}
      {/* Line graph visitors and users */}
      {/* Column chart posts last 7 days */}
      <section className="mt-6">
        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-5 w-full">
          <Rx
            as={
              <li className="bg-rx__">
                <X as={[1, ["100%", 320], "Chart"]} />
              </li>
            }
          />
        </ul>
      </section>

      {/* TABLES */}
      {/* User comments with delete action */}
      <section className="mt-6">
        <X as={[1, ["100%", 640], "Table"]} />
      </section>
    </>
  );
}
