"use client";

import { useRouter } from 'next/navigation';
import { RiArrowGoBackFill } from 'react-icons/ri';

export default function GoBackButton() {
	const router = useRouter();

	return (
			<div className="flex text-gray-900 cursor-pointer" >
				<span className="my-auto mx-2 text-base">뒤로가기</span>
				<RiArrowGoBackFill onClick={() => router.back()} className="my-auto mr-5" />
			</div>
			)
}
