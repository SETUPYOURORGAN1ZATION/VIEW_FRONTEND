import React from "react";
import * as S from "./style";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "dayjs/plugin/customParseFormat";

const mocks = [
  {
    studentNumber: "2210",
    studentName: "박우빈",
    reason: "커피팅 회사 면접이 잡혀 있어 자습에 참여하지 못할 것 같습니다.",
    date: "2022-12-27",
  },
  {
    studentNumber: "2210",
    studentName: "박우빈",
    reason: "커피팅 회사 면접이 잡혀 있어 자습에 참여하지 못할 것 같습니다.",
    date: "2022-12-27",
  },
  {
    studentNumber: "2210",
    studentName: "박우빈",
    reason: "커피팅 회사 면접이 잡혀 있어 자습에 참여하지 못할 것 같습니다.",
    date: "2022-12-27",
  },
];

const parseDate = (date: string) => {
  return dayjs(date).format("YYYY년 MM월 DD일");
};

const PassTicket = () => {
  return (
    <S.Container>
      <S.PageTitle>📄 신청된 이석증 현황</S.PageTitle>
      <S.PassTicketList>
        {mocks.map((item) => (
          <S.PassTicketListItem>
            <S.PassTicketTitle>
              {item.studentNumber} {item.studentName}님이 이석증을 신청했어요.
            </S.PassTicketTitle>
            <S.PassTicketSubTitle>사유 · {item.reason}</S.PassTicketSubTitle>
            <S.PassTicketSubTitle>
              일시 · {parseDate(item.date)}
              <S.PassTicketButtonList>
                <S.PassTicketAcceptButton>승인</S.PassTicketAcceptButton>
                <S.PassTicketDeclineButton>거절</S.PassTicketDeclineButton>
              </S.PassTicketButtonList>
            </S.PassTicketSubTitle>
          </S.PassTicketListItem>
        ))}
      </S.PassTicketList>
    </S.Container>
  );
};

export default PassTicket;
