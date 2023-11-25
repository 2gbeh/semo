import Link from "next/link";
import X from "@/components/SketchBox";
import TheLogo from "@/components/TheLogo";
import {
  _DashboardDrawerMenu,
  _DashboardUpgrade,
  _DashboardDrawerWrapper,
} from "../";

const Drawer = () => {
  const drawerContent = (animated: boolean) => (
    <>
      <section className="flex items-center gap-3 pt-16 pb-8 mx-8 border-b">
        <Link href="/" title="Home">
          <TheLogo variant="black" animated={animated} width={36} />
        </Link>
        <h1 className="  text-2xl">
          <b>HORIZON</b> UI
        </h1>
      </section>

      {/* NAVIGATION LINKS */}
      <nav className="">
        <_DashboardDrawerMenu />
      </nav>

      {/* UPGRADE */}
      <_DashboardUpgrade />
    </>
  );
  //
  return (
    <>
      {/* DESKTOP */}
      <aside className="sm:block hidden w-[320px] border-r relative">
        {drawerContent(true)}
      </aside>

      {/* MOBILE */}
      <_DashboardDrawerWrapper>
        <aside className="sm:hidden block w-[320px] border-r relative">
          {drawerContent(false)}
        </aside>
      </_DashboardDrawerWrapper>
    </>
  );
};

export default Drawer;
