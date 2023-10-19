import printDate from "@/libs/printDate";
import Test2 from "@/components/BlogComponents/Test2";

const Test = ({ text }) => {
  return (
    <div>
      <h1>하하하하 테스트 컴포넌트 입니다. MDX에 잘 들어가야 해요.</h1>
      <h3>{text}</h3>
      날짜가 출력되어야 sss함. {printDate(new Date())}
      <Test2 />
    </div>
  );
};

export default Test;
