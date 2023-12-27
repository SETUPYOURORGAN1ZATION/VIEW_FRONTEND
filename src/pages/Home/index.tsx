import Grass from "components/Grass";
import DayInfo from "interfaces/DayInfo";
import banner from "assets/banner.png";
import * as S from "./style";
import { useState } from "react";
import { supabase } from "apis";

const data: DayInfo[] = [
  { date: "2023-09-02", status: "TRUANCY", description: null },
  { date: "2023-09-03", status: "ATTENDANCE", description: null },
  { date: "2023-09-04", status: "ATTENDANCE", description: null },
  { date: "2023-09-08", status: "ATTENDANCE", description: null },
  { date: "2023-10-06", status: "ABSENT", description: "배고파서" },
  { date: "2023-12-10", status: "ATTENDANCE", description: null },
  { date: "2023-12-09", status: "ATTENDANCE", description: null },
  { date: "2023-12-17", status: "ATTENDANCE", description: null },
  { date: "2023-12-13", status: "ATTENDANCE", description: null },
  { date: "2023-12-13", status: "ATTENDANCE", description: null },
  { date: "2023-12-14", status: "ATTENDANCE", description: null },
  { date: "2023-12-15", status: "ATTENDANCE", description: null },
  { date: "2023-12-16", status: "ATTENDANCE", description: null },
  { date: "2023-12-18", status: "ATTENDANCE", description: null },
  { date: "2023-12-19", status: "ATTENDANCE", description: null },
  { date: "2023-12-20", status: "ATTENDANCE", description: null },
  { date: "2023-12-21", status: "ATTENDANCE", description: null },
  { date: "2023-12-22", status: "ATTENDANCE", description: null },
  { date: "2023-12-23", status: "ATTENDANCE", description: null },
  { date: "2023-12-25", status: "ATTENDANCE", description: null },
  { date: "2023-12-26", status: "ATTENDANCE", description: null },
  { date: "2023-12-27", status: "ATTENDANCE", description: null },
  { date: "2023-12-28", status: "ATTENDANCE", description: null },
];

const Home = () => {
  const student = JSON.parse(localStorage.getItem("student") ?? "false");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const handleReserve = async () => {
    await supabase.from("PassTicket").upsert({
      id: Math.floor(Math.random() * 999999),
      reason,
      passedAt: date,
      status: "pending",
      studentNumber: student.studentId,
      studentName: student.name,
    });
    alert("이석증 신청을 완료했어요!");
    setReason("");
    setDate("");
  };

  return (
    <S.Layout>
      <S.Banner src={banner} />
      {student && (
        <S.StudentId>
          {student.grade}학년 {student.classNum}반 {student.studentNum}번
        </S.StudentId>
      )}
      <S.Name>{student.name ? `${student.name}님` : "로그인하세요"}</S.Name>
      <S.Text>출결 현황</S.Text>
      <Grass data={data} attendColor="#0085ff" />
      <S.Box>
        <S.PassTicketBox>
          <S.PassTicketMainText>이석증 발급하기</S.PassTicketMainText>
          <S.ContentBox>
            <S.ReasonBox>
              <S.PassTicketText>✉️ 사유</S.PassTicketText>
              <S.ReasonArea
                value={reason}
                onChange={({ target: { value } }) => setReason(value)}
                placeholder="사유를 입력하세요."
              />
            </S.ReasonBox>
            <S.DateAndSubmitBox>
              <S.PassTicketText>🗓️ 날짜</S.PassTicketText>
              <S.DateBox>
                <S.DateInput
                  value={date}
                  onChange={({ target: { value } }) => setDate(value)}
                  type="date"
                />
              </S.DateBox>
              <S.SubmitButton onClick={handleReserve}>신청하기</S.SubmitButton>
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
          <S.StudentIdAndName>
            {student.studentId} {student.name}
          </S.StudentIdAndName>
        </S.TodayAttendBox>
      </S.Box>
    </S.Layout>
  );
};

export default Home;
