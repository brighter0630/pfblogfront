import { SiKakaotalk } from "react-icons/si";
import { signIn } from "next-auth/react";

export default function LoginButtonKakao({ buttonTitle = "카카오" }) {
  const trySignIn = () => {
    try {
      signIn("kakao", { redirect: true, callbackUrl: "/" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={() => trySignIn()}
      className="h-10 min-w-[140px] px-2 bg-[#FEE500] text-black text-center my-auto table cursor-pointer"
    >
      <span className="font-bold table-cell align-middle px-3">
        <SiKakaotalk />
      </span>
      <span className="font-bold table-cell text-sm align-middle">
        {buttonTitle}
      </span>
    </div>
  );
}
