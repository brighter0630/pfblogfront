import React from "react";

export const metaData = {
  title: "한글도 될까요? 그건 의문이죠",
  metaDesc:
    "두번째 포스팅은 처음 쓰는 거에요. 하지만 역시나 꼼꼼하게 확인하는 건 필수죠.",
  date: "2023-07-31",
  author: "이웃집백만장자",
  tags: ["해외주식", "이정훈", "주식투자", "두번째포스팅"],
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
