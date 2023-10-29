import { SiNaver } from "react-icons/si";
import { signIn } from "next-auth/react";

export default function LoginButtonNaver({ title, width, height, fontSize, iconSize }) {
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
      className="my-auto table rounded-md min-w-[90px] bg-[#2DB400] text-white text-center cursor-pointer"
			style={{width: `${width}px`, height: `${height}px`}}
    >
      <span className="font-bold table-cell align-middle px-1">
        <SiNaver className="mx-auto" style={{fontSize: `${iconSize}px`}} />
      </span>

			<span className="font-bold table-cell align-middle px-1" 
						 style={{fontSize: `${fontSize}px`}} >
        {title}
      </span>
    </div>
  );
}
