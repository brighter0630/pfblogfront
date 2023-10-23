import Link from "next/link";
import BarChartOneOnOne from "@/components/BlogContentsComponents/BarChartOneOnOne";

export const metaData = {
  title: "배당성장주 투자의 가장 큰 기쁨",
  metaDesc:
    "배당성장주 투자를 하는 이유는 무엇인가? 배당성장주에 투자함으로써 우리가 잃는 것과 얻는 것은 무엇일까? 주식투자는 노동이다. 가장 적게 일하며 가장 많은 리턴은 무엇으로 얻어지는가?",
  date: "2023-10-23",
  author: "이웃집백만장자",
  tags: ["투자철학", "배당성장주"],
  published: true,
};

export const chartData = [
  {
    name: "나",
    "나의 연습시간": 2 * 2 * 52 * 30,
  },
  {
    name: "손흥민",
    "손흥민 선수의 연습시간": 12 * 7 * 52 * 20,
  },
];

async function Page() {
  return (
    <article>
      <h3>둥글지 않은 축구공</h3>
      <p>
        투자자들이 간과하는 투자하는데 있어서 가장 중요한 사실이 있다. 그건 바로
        주식투자가 어렵다는 것이다. 인정하지 싫지만 주식투자는 정말 어렵다. 단,
        주식 투자가 어려운 데에 특별한 이유가 있는 건 아니다. 천천히 시간을
        가지고 한 번 생각해보자.
      </p>
      <p>
        나는 축구를 좋아한다. 일주일에 못해도 한번에서 두번은 축구를 한다.
        그런데 나의 축구 실력은 리오넬 메시나 호날두의 발 끝만큼도 못미친다.
        당연하지 않겠는가? 나에겐 그들만큼의 재능도 없었거니와 더 중요하게는
        그들만큼의 노력을 하지 않았다. 나의 직업은 따로 있고 그들의 직업도 따로
        있기 때문이다. 그런데 나는 운동장에서 축구를 할 때 만큼은 리오넬 메시다.
        적어도 내 마음 속에서 만큼은 그렇다.
      </p>
      <p>
        그런데 나의 이런 상상은 아무런 문제가 되지 않는다. 나는 여전히 축구를
        즐기고 있고 나의 몸은 하루하루 건강해지고 있기 때문이다. 축구 동호회를
        하며 축구를 즐기는데 내가 나 스스로를 메시로 생각하든, 사비 에르난데스로
        생각하든 아무도 모른다. 그저 나 혼자만의 비밀스러운 상상이며 나만의
        즐거움이다. 하지만 내가 만약 프리미어리그나 라리가에서 뛴다면 나의 이런
        상상은 크나 큰 문제가 된다. 나의 실력은 도저히 이만큼의 수준에서 뛸
        실력이 아니기 때문이다. 실제 경기에서는 공 한번 제대로 잡지 못하고
        경기를 마치게 될 가능성이 크다.
      </p>
      <p>
        문제는 이제부터다. 주식시장은 굳이 표현하자면, 아마추어부터 최상위
        프로페셔널까지 모두가 하나의 리그에서 뛰고 있는 경기장이다. 메시와
        호날두, 그리고 우리가 한 경기장에서 뛰고 있다. 여기서 우리는 그들과
        경쟁해야 한다. 나만의 전문 분야가 있다고 해도 사실 중요하지 않다. 나는
        미드필더가 주 포지션이지만, 골키퍼인 노이어가 미드필더를 보면 나보다
        못할까? 당연히 아니다. 나보다 잘할 거라는 말로는 부족하다. 아무리 못해도
        적어도 나보다 10배 정도는 잘할 것이다.
      </p>
      <p>
        아무리 열심히 기업과 산업에 대해 분석하고 투자를 한다고 해서 전문
        투자자들과 일반 투자자들은 경쟁할 수 없다. 심지어는 자신의 전문 분야가
        있어서 그 분야의 주식을 산다고 해도, 투자 전문가들을 이길 수 없다.
        왜냐하면 노이어가 우리보다 미드필더를 잘 볼 것이기 때문이다. 내
        분야에서의 전문성은 물론 인정받아야 마땅하지만, 그 분야의{" "}
        <strong>투자</strong>에 대해서는 투자 전문가가 당연히 앞설 수 밖에 없는
        것이 현실이다.
      </p>
      <h3>받아들이거나 부딫히거나</h3>
      <p>
        나는 재능을 믿지 않는다. 그 무엇을 하든, 열심히 하기만 하면 누구나
        원하는 걸 이룰 수 있다고 생각한다. 신체적인 제약(예를 들면 운동에 있어서
        젊음이라던가..)으로 인한 것들을 제외하면 그렇다. 30대 후반에 운동선수로
        성공할 수는 없다. 하지만 50대가 되어서도 새로운 언어를 배울 수 있고,
        60대가 되어서도 코딩을 새롭게 배울 수 있다고 생각한다. 50, 60대에
        시작하여 세계 최고의 전문가는 될 수 없겠지만, 20대에 10년을 한 것과
        50대에 10년을 한 것 사이에는 의미있는 차이가 없으리라 믿는다.
      </p>
      <p>
        적어도 나는 그런 생각으로 살아가고 있다. 나는 이 블로그를 만드는 데 끊임
        없이 노력 중이다. 나는 코딩에 대한 경험이라곤 2-3년 전에 보잘 것 없는
        웹사이트를 하나 만든 것이 전부다. 그것을 제외하곤 코딩에 대한 경험이
        전혀 없다. 이번이 두번쨰 웹사이트라 2-3년 전보다는 조금 수월하게
        만들었지만 여전히 모르는 게 너무 많다. 그래서 끊임 없이 공부하고
        배워가면서 사이트를 완성시키고 있다.
      </p>
      <BarChartOneOnOne
        data={chartData}
        firstKey="나의 연습시간"
        secondKey="손흥민 선수의 연습시간"
      />
      <p>
        이렇게 후천적 노력을 믿는 나는 더더욱 주식투자에 보수적일 수 밖에 없다.
        나는 하루에 정말 많아야 2-3시간을 주식투자에 쓸 수가 있는데, 바다건너
        월스트리트에서는 하루 12시간 씩 주 6-7일 노력하는 사람들이 있다.
        일주일에 나는 10시간, 저들은 84시간이다. 과연 게임이 되겠는가? 내가
        축구를 주 2회, 2시간/일 씩 해도 하루 종일 축구와 축구 생각만 하는
        손흥민(12시간 곱하기 7일)을 도저히 이길 수 없다. 당연하지 않은가?
      </p>
      <p>
        그런데도 사람들은 여전히 자신에게 승산이 있다고 믿는다. 왜냐면 실제로
        주식투자에 성공하는 사람들을 봤기 때문이다. 하지만 여기엔 크나큰 함정이
        있다. 바로 그들의 성공 뒤에 숨은 노력이다.
      </p>
      <p>
        주식 투자로 성공한 사람들은 단순히 매수 버튼을 시기 적절하게 눌렀을
        뿐이지만, 그 뒤에 어마어마한 노력이 있다. 정정당당하게 성공한
        주식투자자가 아니더라도 마찬가지다. 주식 투자로 순진한 사람들을 꼬드겨
        주가를 조작해 수익을 올리는 사람들도 어마어마한 노력을 한다. 자신의
        텔레그램을 광고하고, 사람들을 모집하고, 채팅방을 조작하고, 기자들을
        매수해 소문을 내고, 매수와 매도를 반복해 차트를 완성한다. 사기꾼은
        사기꾼일 뿐이지만, 이 세상 최고의 투자자 또는 최고의 사기꾼, 또는 최고의
        축구선수가 되기 위해서는 뼈를 깎는 노력이 필요함은 명확하다.
      </p>
      <p>
        사실 대부분의 사람들이 이만큼의 노력을 쏟아부을 준비가 되지 않았다. 다들
        자신의 본업이 있고 가정이 있고 할 일이 있고 또 취미가 있기 때문이다.
        이만큼의 노력을 들이려면 정말 본업과 주식투자 외에 모든 걸 포기해야 할
        정도다. 하지만 대부분은 그럴만한 마음의 준비가 되어 있지 않다. 나도
        그렇다.
      </p>
      <h3>세상에서 가장 합리적인 투자법</h3>
      <p>
        이런 대부분의 사람들에게 가장 합리적인 대안이 있다. 그건 바로 배당성장주
        투자다. 배당성장주 투자는 누구나 쉽게 할 수 있는 투자로써, 연 100-200%의
        수익은 거둘 수 없지만, 느리지만 안정적이고, 수익성있는 투자법이다. 많은
        시간을 요하지도 않는다. 투자자로써 그리고 주주로써 내가 보유한 기업이
        배당을 지속적으로 늘리는지, 기업이 매각되거나 사업에서의 심각한 변화가
        생겼는 지 여부만 확인해주면 끝이다. 매년 1회 연차보고서와 컨퍼런스콜를
        통해서 실적을 확인하면 그만이다. 10개의 기업을 보유한다면, 일년에 10번,
        그러니까 365일 중 10일만 기업보고서를 읽는데 쓰면 된다. 하나의
        기업보고서를 살펴보는데 2시간이 걸리지 않으므로 전혀 부담스럽지 않은
        수준이다.
      </p>
      <Link href={"/post/2023-10-19-Philosophy"} replace={false}>
        <p>
          앞선 포스팅에서도 이야기 했지만, 배당성장주는 배당주와 달라도 한참
          다르다. 우선, 주요 목적이 배당이 아니다. 이익의 성장이다. 배당이
          이익의 성장을 대변할 뿐이다.
        </p>
      </Link>
      <p></p>
    </article>
  );
}

export default Page;
