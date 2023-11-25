import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
// 
import { AvatarPhoto, AvatarSolid } from "@/components/Avatar";
//
import { cx } from "@/utils";
import { tw } from "../AUTH";

const PasswordForm = () => {
  return (
    <>
      {/* HEADING */}
      <div className="flex flex-col items-center">
        <h1 className="text-xl">Hi Emmanuel</h1>

        <div className="my-3 border-2 rounded-full pl-2 pr-3 py-1 flex items-center">
          <AvatarPhoto src="/images/etugbeh.png" size={24} />
          <b className="mx-2 font-semibold text-sm">
            tugbeh.osaretin@gmail.com
          </b>
          <FaChevronDown color="#555" size={12} />
        </div>
      </div>

      <p className="text-gray-600 my-4">To continue, first verify it's you</p>

      {/* FORM */}
      <form className="mt-8 text-sm flex flex-col">
        {/* INPUT */}
        <div className="relative">
          <label htmlFor="password" className={tw.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            className={tw.input}
            required
          />
        </div>
        <p className="mt-2 flex items-center gap-2">
          <input
            type="checkbox"
            name="toggle-password"
            id="toggle-password"
            className=""
          />
          <label htmlFor="toggle-password" className="">
            Show password
          </label>
        </p>

        {/* ACTION */}
        <div className="mt-8 flex items-center justify-between">
          <span>
            <Link href="/forgot-password" className={tw.link}>
              Forgot Password?
            </Link>
          </span>
          <span>
            <button className={tw.button}>Next</button>
          </span>
        </div>
      </form>
    </>
  );
};

export default PasswordForm;
