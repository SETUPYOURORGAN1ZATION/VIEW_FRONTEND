import Grass from "components/Grass";
import DayInfo from "interfaces/DayInfo";
import banner from "assets/banner.png";
import * as S from "./style";

const Home = () => {
  const data: DayInfo[] = [
    { date: "2023-09-02", status: "TRUANCY", description: null },
    { date: "2023-09-03", status: "ATTENDANCE", description: null },
    { date: "2023-10-06", status: "ABSENT", description: "배고파서" },
    { date: "2023-12-27", status: "ATTENDANCE", description: null },
  ];

  return (
    <S.Layout>
      <S.Banner src={banner} />
      <S.Text>출결 현황</S.Text>
      <Grass data={data} attendColor="#0085ff" />
    </S.Layout>
  );
};

export default Home;
