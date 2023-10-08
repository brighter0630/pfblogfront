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
      <body className="grid grid-flow-col h-full max-w-screen-xl">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="w-5/6">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
