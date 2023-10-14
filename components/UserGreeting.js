import Image from "next/image";
import { FaUserCheck } from "react-icons/fa";

export default function UserGreeting({ session }) {
  return (
    <div className="flex w-14">
      {session?.user?.hasOwnProperty("image") === true ? (
        <Image
          className="rounded-full"
          src={session.user.image}
          width={50}
          height={40}
          alt="Profile"
        />
      ) : (
        <span className="my-auto">
          <FaUserCheck className="text-lg" />
        </span>
      )}
    </div>
  );
}
