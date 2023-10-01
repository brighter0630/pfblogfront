import "./globals.css";
import Header from "./header";
import Footer from "./footer";

export const metadata = {
  title: "이웃집백만장자의 배당성장 포트폴리오",
  description: "월 천만원 씩 적립식 배당성장주 투자의 여정",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="grid-container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}