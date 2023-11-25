import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
// 
import { AvatarPhoto, AvatarSolid } from "@/components/Avatar";
// 
import { cx, isset } from "@/utils";
import { mockAccounts as data } from "../_auth/AUTH";

export const metadata = { title: "Sign up" };

export default function Register() {
  return (
    <>
      {/* HEADING */}
      <hgroup className="text-center">
        <h1 className="text-xl">Choose an account</h1>
      </hgroup>

      {/* LIST */}
      <table className="mt-8 text-sm w-full">
        {data?.map((e, i) => (
          <tr key={i} className="border-b-2">
            <th className="px-2 py-4 w-1">
              {isset(
                e.avatar,
                <AvatarPhoto src={e.avatar!} size={32} />,
                <AvatarSolid text={e.name} size={32} />
              )}
            </th>
            <td>
              <Link href={e.path}>
                <p>{e.name}</p>
                <p className="text-gray-500 -mt-0.5">{e.email}</p>
              </Link>
            </td>
          </tr>
        ))}

        {/* LAST ITEM */}
        <tr className="border-b-2">
          <th className="px-2 py-4 w-1">
            <p className=" grid place-items-center">
              <FaRegCircleUser color="#555" size={18} />
            </p>
          </th>
          <td>
            <Link href="/login">Use another account</Link>
          </td>
        </tr>
      </table>
    </>
  );
}
