"use client";
import React from "react";
import Link from "next/link";
import X from "@/components/SketchBox";
//
import { usePathname } from "next/navigation";
//
import { cx } from "@/utils";

const DrawerMenu = () => {
  const pathname = usePathname();
  //
  return (
    <ul className="flex flex-col items-start gap-2 mt-10 ml-16">
      {[
        { path: "/dashboard", text: "Dashboard" },
        { path: "/dashboard/uploads", text: "Photo Gallery" },
        { path: "/dashboard/posts", text: "User Comments" },
      ].map((e, i) => (
        <li key={i} className="w-full">
          <Link
            href={e.path}
            className={cx(
              `flex items-center justify-start gap-4 hover:text-black text-gray-700 transition py-2 whitespace-nowrap`,
              pathname.endsWith(e.path)
                ? "border-r-4 border-r-black font-bold !text-black"
                : ""
            )}
          >
            <X as={[1, 16, e.text]} />
            {e.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(DrawerMenu);
