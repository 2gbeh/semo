import DashboardProviders from "./providers";
import {
  _DashboardDrawer,
  _DashboardHeader,
  _DashboardFooter,
} from "./_dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProviders>
      <div className="flex h-screen">
        {/* DRAWER */}
        <_DashboardDrawer />

        {/* MAIN */}
        <main className="bg-canvas flex-1 relative">
          {/* HEADER */}
          <_DashboardHeader />

          {/* CONTENT */}
          <section className="sm:px-8 px-4">{children}</section>

          {/* FOOTER */}
          <_DashboardFooter />
        </main>
      </div>
    </DashboardProviders>
  );
}
