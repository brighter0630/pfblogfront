import { SiNaver } from "react-icons/si";
import { signIn } from "next-auth/react";

export default function LoginButtonNaver() {
  return (
    <div
      onClick={() => signIn("naver", { redirect: true, callbackUrl: "/" })}
      className="h-10 w-32 bg-[#1EC800] text-white text-center my-auto table"
    >
      <span className="font-bold table-cell align-middle pl-3">
        <SiNaver />
      </span>
      <span className="font-bold table-cell text-sm align-middle">
        네이버 로그인
      </span>
    </div>
  );
}
