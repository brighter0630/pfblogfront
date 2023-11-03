import Image from "next/image";
import { FaUserCheck } from "react-icons/fa";

export default function UserGreeting({ session }) {
  return (
    <div className="grid grid-flow-col px-1 text-black collapse invisible max-w-0 md:max-w-none md:visible">
      <div className="grid grid-flow-row gap-0">
        {session?.user?.hasOwnProperty("name") === true && (
          <span className="text-sm my-auto px-1 text-center">
            {session.user.name}
          </span>
        )}
        {session?.user?.hasOwnProperty("email") === true && (
          <span className="text-xs my-auto px-1 text-center">
            {session.user.email}
          </span>
        )}
      </div>
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
  );
}
