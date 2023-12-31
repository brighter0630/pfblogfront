import { SiKakaotalk } from "react-icons/si";
import { signIn } from "next-auth/react";

export default function LoginButtonKakao({ title }) {
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
      className="h-8 my-auto table rounded-md min-w-[90px] bg-[#FEE500] text-black text-center cursor-pointer text-xs"
    >
      <span className="font-bold table-cell align-middle px-1">
        <SiKakaotalk className="mx-auto" />
      </span>
      <span className="font-bold table-cell align-middle px-1 text-[.6rem]">
        {title}
      </span>
    </div>
  );
}
