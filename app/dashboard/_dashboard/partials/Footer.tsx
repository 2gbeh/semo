import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sm:absolute static bottom-5 w-full sm:px-8 px-4">
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 sm:py-0 py-5 items-center justify-between text-gray-700">
        <p>
          &copy; {new Date().getFullYear()} <b>Horizon UI</b>. All rights
          reserved.
        </p>
        <nav>
          <ul className="flex items-center gap-5">
            {[
              { path: "#", text: "Support" },
              { path: "#", text: "License" },
              { path: "#", text: "Terms of Use" },
              { path: "#", text: "Blog" },
            ].map((e, i) => (
              <li className="">
                <Link
                  key={i}
                  href="#"
                  className="whitespace-nowrap hover:underline"
                >
                  {e.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
