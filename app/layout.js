import "./globals.css";
import Header from "../components/Header";
import Sidebar from "@/components/Sidebar";
import AuthContext from "@/src/context/AuthContext";
import localFont from "next/font/local";

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
        className={`min-w-[1024px] grid grid-cols-5 ${NanumBarunpenR.className}`}
      >
        <AuthContext>
          <aside className="h-screen sticky top-0 col-span-1">
            <Sidebar />
          </aside>
          <div className="col-span-4 flex flex-col">
            <Header />
            <main className="max-w-5xl mx-auto">{children}</main>
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
