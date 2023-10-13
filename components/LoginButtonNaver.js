import { SiNaver } from "react-icons/si";
import { signIn } from "next-auth/react";

export default function LoginButtonNaver({ buttonTitle = "네이버 로그인" }) {
  const trySignIn = () => {
    try {
      signIn("naver", { redirect: true, callbackUrl: "/" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={() => trySignIn()}
      className="h-10 min-w-[140px] px-2 bg-[#1EC800] text-white text-center my-auto table cursor-pointer"
    >
      <span className="font-bold table-cell align-middle px-3">
        <SiNaver />
      </span>
      <span className="font-bold table-cell text-sm align-middle">
        {buttonTitle}
      </span>
    </div>
  );
}
