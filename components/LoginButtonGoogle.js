import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function LoginButtonGoogle({ title = "구글 로그인" }) {
  const trySignIn = () => {
    try {
      signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      onClick={() => trySignIn()}
      className="h-8 my-auto table rounded-md min-w-[90px] bg-[#3F85F4] text-white text-center cursor-pointer text-xs"
    >
      <span className="font-bold table-cell align-middle px-1">
        <FcGoogle />
      </span>

      <span className="font-bold table-cell align-middle px-1 text-[.6rem]">
        {title}
      </span>
    </div>
  );
}
