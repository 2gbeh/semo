import Link from "next/link";
import { headers } from "next/headers";
import { FaArrowLeft, FaSyncAlt, FaHome } from "react-icons/fa";
// 
import X from "@/components/SketchBox";
//
import { cx, dd, bool } from "@/utils";

export const metadata = { title: "404 Not Found" };

const tw = {
  button:
    "flex items-center gap-2 rounded bg-blue-500 hover:bg-blue-600 transition text-white py-2 px-5",
};

export default function NotFound() {
  const headersList = headers();
  const path = headersList.get("referer");
  return (
    <main className="h-screen grid place-items-center">
      <section className="min-w-full max-w-full sm:min-w-[640px] sm:max-w-[640px] text-sm __border-2 p-5">
        {/* ICON */}
        <img src="/images/rex-black.png" alt="" width={48} />
        {/* HEADING */}
        <h1 className="mt-5 text-xl">This resource is unavailable</h1>
        <h2 className="mt-3 font-semibold underline">
          <a href="" title="Ctrl+F5">
            {path}
          </a>
        </h2>
        {/* LIST */}
        <p className="mt-3">Troubleshoot:</p>
        <ul className="list-disc list-inside mx-5">
          <li>Reboot internet connection</li>
          <li>Re-type URL or clear browser cache</li>
          <li>
            <Link href="/login" className="text-blue-500">
              Sign in and revisit this path
            </Link>
          </li>
          <li>
            <a href="#" target="_blank" className="text-blue-500">
              Contact webmaster or site owner
            </a>
          </li>
        </ul>
        <p className="mt-5">ERR_NOT_FOUND</p>
        {/* ACTION */}
        <div className="mt-10 flex justify-between">
          <button className={tw.button}>
            <FaArrowLeft color="white" />
            Back
          </button>
          <button
            className={cx(
              tw.button,
              "!text-blue-500 bg-transparent border-2 hover:bg-gray-100 !px-3"
            )}
          >
            {/* <FaSyncAlt color="#3b82f6" />
            Retry */}
            <FaHome color="#3b82f6" />
            Home
          </button>
        </div>
      </section>
    </main>
  );
}
