import "./globals.css";
import Header from "../components/Header";
import Footer from "./footer";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "이웃집백만장자의 배당성장 포트폴리오",
  description: "월 천만원 적립식 배당성장주 투자의 여정",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="grid grid-cols-5 min-w-[1024px] max-w-[1024px]">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4 grid grid-flow-row pt-5">
          <Header />
          <main>{children}</main>
          <footer className="text-blue-50 font-semibold max-h-52 mt-10 bg-slate-400 w-screen h-16">
            <div className="my-auto pl-30">
              <p className="">
                <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
                배당성장투자. All rights reserved.
              </p>
              <p>Contact: brighter87@gmail.com</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
