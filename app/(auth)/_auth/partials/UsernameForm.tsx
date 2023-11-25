import Link from "next/link";
// 
import { cx } from "@/utils";
import { tw } from "../AUTH";

const UsernameForm = () => {
  return (
    <>
      {/* HEADING */}
      <hgroup className="text-center">
        <h1 className="text-xl">Sign in</h1>
        <h2 className="text-gray-600 mt-1">to continue to Gmail</h2>
      </hgroup>

      {/* FORM */}
      <form className="mt-8 text-sm flex flex-col">      
        {/* INPUT */}
        <div className="relative">
          <label htmlFor="username" className={tw.label}>
            Username
          </label>
          <input
            type="search"
            name="username"
            id="username"
            placeholder=""
            className={tw.input}
            required
          />
        </div>
        
        {/* OPTIONS */}
        <p className="mt-8 text-gray-600">
          Already have an account? Use Guest mode to sign in privately.{" "}
          <a href="/register" className={cx(tw.link, "inline-block")}>
            Create account
          </a>
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

export default UsernameForm;
