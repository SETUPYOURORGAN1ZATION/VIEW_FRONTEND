import Grass from "components/Grass";
import DayInfo from "interfaces/DayInfo";
import banner from "assets/banner.png";
import calendar from "assets/calendar.svg";
import * as S from "./style";

const Home = () => {
  const data: DayInfo[] = [
    { date: "2023-09-02", status: "TRUANCY", description: null },
    { date: "2023-09-03", status: "ATTENDANCE", description: null },
    { date: "2023-09-04", status: "ATTENDANCE", description: null },
    { date: "2023-09-05", status: "ATTENDANCE", description: null },
    { date: "2023-10-06", status: "ABSENT", description: "배고파서" },
    { date: "2023-12-27", status: "ATTENDANCE", description: null },
  ];

  return (
    <S.Layout>
      <S.Banner src={banner} />
      <S.StudentId>2학년 2반 10번</S.StudentId>
      <S.Name>박우빈님</S.Name>
      <S.Text>출결 현황</S.Text>
      <Grass data={data} attendColor="#0085ff" />
      <S.Box>
        <S.PassTicketBox>
          <S.PassTicketMainText>이석증 발급하기</S.PassTicketMainText>
          <S.ContentBox>
            <S.ReasonBox>
              <S.PassTicketText>✉️ 사유</S.PassTicketText>
              <S.ReasonArea placeholder="사유를 입력하세요." />
            </S.ReasonBox>
            <S.DateAndSubmitBox>
              <S.PassTicketText>🗓️ 날짜</S.PassTicketText>
              <S.DateBox>
                <S.DateInput type="date" />
              </S.DateBox>
              <S.SubmitButton>신청하기</S.SubmitButton>
            </S.DateAndSubmitBox>
          </S.ContentBox>
        </S.PassTicketBox>
        <S.TodayAttendBox>
          <S.HeaderBox>
            <S.HeaderText>2023년 12월 27일</S.HeaderText>
            <S.TodayStatus />
          </S.HeaderBox>
          <S.Empty />
          <S.TodayStatusText>출석 완료</S.TodayStatusText>
          <S.StudentIdAndName>2210 박우빈</S.StudentIdAndName>
        </S.TodayAttendBox>
      </S.Box>
    </S.Layout>
  );
};

export default Home;
