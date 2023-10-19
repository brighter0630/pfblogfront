import printDate from "@/libs/printDate";

const Test2 = ({ text }) => {
  return (
    <div>
      <h1>하하하하 테스트2 컴포넌트 입니다. </h1>
      <h3>{text}</h3>
      날짜가 출력되 fdsfadfasdfadsf어야 함. {printDate(new Date())}
    </div>
  );
};

export default Test2;
