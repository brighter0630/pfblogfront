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
      className="h-8 my-auto table rounded-md min-w-[80px] bg-[#1EC800] text-white text-center my-autocursor-pointer text-xs"
    >
      <span className="font-bold table-cell align-middle px-1">
        <SiNaver className="mx-auto" />
      </span>
      <span className="font-bold table-cell align-middle px-1">
        {buttonTitle}
      </span>
    </div>
  );
}
