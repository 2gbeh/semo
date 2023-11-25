import { cx, bool } from "@/utils";
// 
import { _AuthUsernameForm, _AuthPasswordForm } from "../_auth";

export const metadata = { title: "Sign in" };

export default function Login() {
  return <>{bool(<_AuthUsernameForm />, <_AuthPasswordForm />)}</>;
}
