import Image from "next/image";
import { FaUserCheck } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { GrLogout } from "react-icons/gr";
import LoginButtonNaver from "./LoginButtonNaver";
import LoginButtonGoogle from "./LoginButtonGoogle";

export default function UserGreeting() {
	const { data: session, status } = useSession();

  return (
		<div>
			<div className="my-auto float-right">
				{status === "unauthenticated" ? (
					<div className="flex flex-row cursor-pointer mx-1" >
						<LoginButtonGoogle title="로그인" width="90" height="50" fontSize="15" iconSize="20" />
						<LoginButtonNaver title="로그인" width="90" height="50" fontSize="15" iconSize="20" />
						{/* <LoginButtonKakao title="카카오 로그인" /> 카카오에서 승인 거절...ㅠㅠ */}
					</div>
				) : (
					<div className="flex flex-row cursor-pointer collapse md:visible mx-0 max-w-0 md:max-w-none md:w-40">
						<div
						className="flex w-8 lg:w-24 p-1 lg:p-2 m-auto text-sm lg:text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 hover:rounded-lg hover:opacity-50 hover:text-white"
						onClick={() => signOut()}
					>
							<div className="hidden lg:flex text-xs lg:text-sm p-1 px-2 w-20">
								<span className="w-14">로그아웃</span>
							</div>
							<GrLogout className="m-auto text-xl md:text-3xl" />
						</div>
					</div>
				)}
			</div>
			<div className="hidden flex-row px-1 text-black md:flex">
				<div className="flex-col max-h-[30px] lg:max-h-[30px] hidden xl:flex my-auto">
					{session?.user?.hasOwnProperty("name") === true && (
						<span className="text-sm my-auto px-1 text-center h-10">
							{session.user.name}
						</span>
					)}
					{session?.user?.hasOwnProperty("email") === true && (
						<span className="text-xs my-auto px-1 text-center h-10">
							{session.user.email}
						</span>
					)}
				</div>
				<div className={`m-auto ${session ? "flex" : "hidden"}`}>
					{session?.user?.hasOwnProperty("image") === true ? (
						<Image
							className="rounded-full min-w-[50px]"
							src={session.user.image}
							width={50}
							height={50}
							alt="Profile"
							priority={false}
						/>
					) : (
						<span className="my-auto">
							<FaUserCheck className="text-lg mx-4" />
						</span>
					)}
				</div>
			</div>
		</div>
  );
}
