import Link from "next/link";
// 
import { cx } from "@/utils";
import { tw } from "../_auth/AUTH";

export const metadata = { title: "Forgot Password" };

export default function ForgotPassword() {
  return (
    <>
      {/* HEADING */}
      <hgroup className="text-center">
        <h1 className="text-xl">Find your email</h1>
        <h2 className="text-gray-600 mt-1">
          Enter your phone number or recovery email
        </h2>
      </hgroup>
      
      {/* FORM */}
      <form className="mt-8 text-sm flex flex-col">
        {/* INPUT */}
        <div className="relative">
          <label htmlFor="email" className={tw.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=""
            className={tw.input}
            required
          />
        </div>

        {/* ACTION */}
        <div className="mt-8 flex items-center justify-between">
          <span>
            <Link href="/login" className={tw.link}>
              Go back
            </Link>
          </span>
          <span>
            <button className={tw.button}>Next</button>
          </span>
        </div>
      </form>
    </>
  );
}
