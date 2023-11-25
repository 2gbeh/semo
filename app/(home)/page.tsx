import { _HomeDrawer, _HomeGallery, _HomeStory } from "./_home";

export default function Home() {
  return (
    <main className="flex justify-between h-screen">
      <div className="flex-grow sm:block hidden">
        <_HomeGallery />
      </div>
      <div className="flex flex-col">
        <div className="sm:hidden">
          <_HomeStory />
        </div>
        <div className="sm:min-w-[320px] sm:max-w-[480px] min-w-[320px] max-w-[100%]">
          <_HomeDrawer />
        </div>
      </div>
    </main>
  );
}
