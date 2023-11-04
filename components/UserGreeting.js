import Image from "next/image";
import { FaUserCheck } from "react-icons/fa";

export default function UserGreeting({ session }) {
  return (
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
			<div className='m-auto'>
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
  );
}
