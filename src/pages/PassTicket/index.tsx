import React, { useEffect, useState } from "react";
import * as S from "./style";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "dayjs/plugin/customParseFormat";
import { supabase } from "apis";

const parseDate = (date: string) => {
  return dayjs(date).format("YYYY년 MM월 DD일");
};

const PassTicket = () => {
  const [passTicket, setPassTicket] = useState<any>();
  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("PassTicket").select();
      setPassTicket(data);
    })();
  }, []);

  const handleAcceptOrDecline = async (
    id: string,
    studentNumber: string,
    description: string,
    status: string
  ) => {
    await supabase.from("PassTicket").delete().eq("id", id);
    const { data } = await supabase.from("PassTicket").select();
    setPassTicket(data);

    if (status === "t") {
      alert("이석증을 승인했어요! 자동으로 인정결 처리를 완료했습니다.");
      await supabase
        .from("Register")
        .update({ status: "TRUANCY", description })
        .eq("studentNumber", studentNumber);
    }
    if (status === "d") alert("이석증을 거절했습니다.");
  };

  return (
    <S.Container>
      <S.PageTitle>📄 신청된 이석증 현황</S.PageTitle>
      <S.PassTicketList>
        {passTicket?.map((item: any) => (
          <S.PassTicketListItem>
            <S.PassTicketTitle>
              {item.studentNumber} {item.studentName}님이 이석증을 신청했어요.
            </S.PassTicketTitle>
            <S.PassTicketSubTitle>사유 · {item.reason}</S.PassTicketSubTitle>
            <S.PassTicketSubTitle>
              일시 · {parseDate(item.passedAt)}
              <S.PassTicketButtonList>
                <S.PassTicketAcceptButton
                  onClick={() =>
                    handleAcceptOrDecline(
                      item.id,
                      item.studentNumber,
                      item.reason,
                      "t"
                    )
                  }
                >
                  승인
                </S.PassTicketAcceptButton>
                <S.PassTicketDeclineButton
                  onClick={() =>
                    handleAcceptOrDecline(
                      item.id,
                      item.studentNumber,
                      item.reason,
                      "d"
                    )
                  }
                >
                  거절
                </S.PassTicketDeclineButton>
              </S.PassTicketButtonList>
            </S.PassTicketSubTitle>
          </S.PassTicketListItem>
        ))}
      </S.PassTicketList>
    </S.Container>
  );
};

export default PassTicket;
