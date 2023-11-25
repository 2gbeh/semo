import Link from "next/link";
import X from "@/components/SketchBox";
import { _DashboardHeaderMenu, _DashboardHamburgerMenu } from "../";

const breadcrumbs = [
  { path: "/", text: "Home" },
  { path: "/", text: "Users" },
  { path: "/", text: "User" },
];

const Header = () => {
  return (
    <header className="sm:px-8 px-4 py-4 flex items-center justify-between">
      {/* NAV */}
      <nav>
        <ul className="text-sm text-gray-500 flex items-center">
          {/* HAMBURGER MENU */}
          <_DashboardHamburgerMenu />

          {/* BREADCRUMBS */}
          <li className="mr-2">
            <X as={[1, 18, "Home"]} />
          </li>
          {breadcrumbs.map((e, i) => (
            <li key={i} className="">
              <Link
                href={`/dashboard${e.path}`}
                className="whitespace-nowrap hover:underline"
              >
                {e.text}
              </Link>
              {i < breadcrumbs.length - 1 ? (
                <span className="mx-1.5">/</span>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* MENU */}
      <_DashboardHeaderMenu />
    </header>
  );
};

export default Header;
