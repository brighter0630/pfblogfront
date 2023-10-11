import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function LoginButtonGoogle({ buttonTitle = "구글 로그인" }) {
  return (
    <div
      onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
      className="h-10 min-w-[140px] px-2 bg-[#3F85F4] text-white text-center my-auto table"
    >
      <span className="font-bold table-cell align-middle pl-3">
        <FcGoogle />
      </span>

      <span className="font-bold table-cell text-sm align-middle">
        {buttonTitle}
      </span>
    </div>
  );
}
