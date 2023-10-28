import Image from "next/image";
import unAuthorizedImage from "@/public/images/unauthorized.jpg";

export default function NotAdmin() {
  return (
    <div className="py-5 flex flex-col mx-auto">
      <div className="round-lg overflow-hidden">
        <Image
          src={unAuthorizedImage}
          width={1280}
          height={853}
          objectFit="cover"
          alt="unAuthorizedImage"
        />
      </div>
      <span className="text-center text-4xl p-4 font-bold">
        관리자 전용 페이지 입니다. 관리자만 접근할 수 있습니다.
      </span>
    </div>
  );
}
