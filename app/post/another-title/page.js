import React from "react";

export const metaData = {
  title: "제목이 들어갈게요.",
  metaDesc:
    "이 포스팅에 대한 설명이 들어갈 겁니다. 길어도 되고 짧아도 상관 없어요.",
  date: "2022-03-01",
  author: "이웃집백만장자",
  tags: ["이하정", "이정훈", "주식투자", "첫포스팅"],
};

function Page() {
  return (
    <article>
      <h1>여기서부터는 제가 직접 포스팅을 작성할 거에요.</h1>
      <p>그렇게 되면 이제 import가 되고 안되고 걱정할 필요가 없지요. </p>
      <p>자세한 얘기는 천천히 하기로 해요.</p>
    </article>
  );
}

export default Page;
