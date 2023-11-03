import "./globals.css";
import Header from "../components/Header";
import IndexPriceDiv from "@/components/IndexPriceDiv";
import Sidebar from "@/components/Sidebar";
import AuthContext from "@/src/context/AuthContext";
import localFont from "next/font/local";
import GoBackButton from '@/components/GoBackButton';
import ToTheTopButton from '@/components/ToTheTopButton';

export const metadata = {
  title: "이웃집백만장자의 배당성장 포트폴리오",
  description:
    "월 천만원 적립식 배당성장주 투자의 여정을 공유합니다. 10년 재무제표(대차대조표, 손익계산서, 현금흐름표) 및 배당 정보를 제공합니다.",
};

const NanumBarunpenR = localFont({ src: "../public/fonts/NanumBarunpenR.ttf" });

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`w-auto ${NanumBarunpenR.className}`}
      >
				<AuthContext>
					<div className="flex flex-col sm:w-[360px] md:w-[640px] lg:w-[768px] mx-auto justify-center">
						<Header />
						<main className="w-full">{children}</main>
						<div className="flex justify-between px-2 md:px-5 py-1 md:py-2">
							<ToTheTopButton />
							<GoBackButton />
						</div>
						<footer className="text-slate-700 py-10 font-semibold max-h-52 mt-10 bg-slate-200 overflow-x-hidden">
							<div className="my-auto p-4 text-center">
								<p className="">
									<span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
									배당성장주투자. All rights reserved.
								</p>
								<p>Contact: brighter87@gmail.com</p>
							</div>
						</footer>
					</div>
				</AuthContext>
			</body>
    </html>
  );
}
