import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function LoginButtonGoogle() {
  return (
    <div
      onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
      className="h-10 w-32 bg-[#3F85F4] text-white text-center my-auto table"
    >
      <span className="font-bold table-cell align-middle pl-3">
        <FcGoogle />
      </span>
      <span className="font-bold table-cell text-sm align-middle">
        구글 로그인
      </span>
    </div>
  );
}
