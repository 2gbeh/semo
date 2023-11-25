import { FaCaretDown } from "react-icons/fa6";
// 
import TheLogo from "@/components/TheLogo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid place-items-center sm:h-screen">
      <div className="min-w-full max-w-full sm:min-w-[480px] sm:max-w-[480px] sm:p-0 p-6">
        <section className="sm:border-2 sm:rounded sm:px-8 px-0">
          <div className="mt-8 mb-3 flex justify-center">
            {/* LOGO */}
            <TheLogo variant="black" />
          </div>
          {children}
          <div className="block py-10">&nbsp;</div>
        </section>
        
        {/* FOOTER */}
        <footer className="mt-3 px-1 flex sm:flex-row flex-col justify-between text-sm absolute sm:static bottom-5 text-gray-600">
          <span className="flex items-center gap-5">
            <a href="#" className="hover:underline">
              English (US)
            </a>
            <FaCaretDown color="black" />
          </span>
          <span>
            <ul className="sm:mt-0 mt-5 flex items-center gap-5">
              <li>
                <a href="#" className="hover:underline">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
            </ul>
          </span>
        </footer>
      </div>
    </main>
  );
}
