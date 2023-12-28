import React, { useEffect, useState } from "react";
import * as S from "./style";
import DropDown from "components/DropDown";
import Retry from "components/Retry";
import upArrow from "assets/upArrow.svg";
import downArrow from "assets/upArrow.svg";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import getDateFormat from "helper/getDateFormat";
import { supabase } from "apis";

dayjs.locale("ko");

const Register = () => {
  const [isHoverUpdateModal, setIsHoverUpdateModal] = useState("");
  const [isEditMode, setIsEditMode] = useState("");
  const [content, setContent] = useState("");
  const [currGrade, setCurrGrade] = useState("1학년");
  const [currClass, setCurrClass] = useState("1반");
  const [date, setDate] = useState(dayjs());
  const [register, setRegister] = useState<any>();
  const isCurrRegister = (grade: number, classNum: number) =>
    grade === +currGrade[0] && classNum === +currClass[0];
  const filteredDataList = register?.filter(({ studentNumber }: any) =>
    isCurrRegister(+studentNumber[0], +studentNumber[1]),
  );

  const getRegister = async () => {
    const { data } = await supabase
      .from("Register")
      .select()
      .order("studentNumber")
      .eq("checkedDate", date.subtract(1, "year").format("YYYY년 MM월DD일"));
    setRegister(
      data?.map((item: any) => ({
        ...item,
        checkedDate: getDateFormat(item.checkedDate),
      })),
    );
  };

  useEffect(() => {
    getRegister();
  }, [date]);

  const handleStatusUpdate = async (studentNumber: string, status: string) => {
    await supabase
      .from("Register")
      .update({ status })
      .match({
        studentNumber,
        checkedDate: date.subtract(1, "year").format("YYYY년 MM월DD일"),
      });

    getRegister();
  };

  const handleUpdateDescription = async (
    studentNumber: string,
    description: string,
  ) => {
    await supabase
      .from("Register")
      .update({ description })
      .match({
        studentNumber,
        checkedDate: date.subtract(1, "year").format("YYYY년 MM월DD일"),
      });

    getRegister();
  };

  return (
    <S.Container>
      <S.PageTitle>
        🗓️ {date.year()}년 {date.month() + 1}월 {date.date()}일
        <S.ArrowBox>
          <S.UpArrow
            src={upArrow}
            onClick={() => date.date() <= 27 && setDate(date.add(1, "day"))}
          />
          <S.DownArrow
            src={downArrow}
            onClick={() => date.date() >= 28 && setDate(date.subtract(1, "day"))}
          />
        </S.ArrowBox>
      </S.PageTitle>
      <S.List>
        <Retry />
        <DropDown
          state={currGrade}
          setState={setCurrGrade}
          list={["1학년", "2학년", "3학년"]}
        />
        <DropDown
          state={currClass}
          setState={setCurrClass}
          list={["1반", "2반", "3반", "4반"]}
        />
      </S.List>
      <S.RegisterContainer>
        <S.RegisterListTitle>
          {currGrade} {currClass}
        </S.RegisterListTitle>
        <S.RegisterList>
          {filteredDataList?.map((register: any) => (
            <S.RegisterListItem status={register.status}>
              <S.RegisterListItemHead>
                <S.StatusCircle status={register.status} />
                <S.StatusTitle>
                  {(() => {
                    switch (register.status) {
                      case "ATTENDANCE":
                        return "출석 완료";
                      case "ABSENT":
                        return "미인정 결석";
                      case "TRUANCY":
                        return "인정 결석";
                      default:
                        return "미확인";
                    }
                  })()}
                </S.StatusTitle>
                <S.StatusUpdateButton
                  onClick={() => setIsHoverUpdateModal(register.studentNumber)}
                >
                  상태 변경
                </S.StatusUpdateButton>
                {isHoverUpdateModal === register.studentNumber && (
                  <S.RegisterUpdateModal>
                    {["출석 완료", "미인정 결석", "인정 결석"].map(
                      (registerType) => {
                        let type =
                          registerType === "출석 완료"
                            ? "ATTENDANCE"
                            : registerType === "미인정 결석"
                            ? "ABSENT"
                            : "TRUANCY";
                        return (
                          <S.RegisterUpdateModalItem
                            onClick={() => {
                              handleStatusUpdate(register.studentNumber, type);
                              setIsHoverUpdateModal("");
                            }}
                          >
                            {registerType}
                          </S.RegisterUpdateModalItem>
                        );
                      },
                    )}
                  </S.RegisterUpdateModal>
                )}
              </S.RegisterListItemHead>
              <S.RegisterListItemContent>
                {register.studentNumber} {register.studentName}
              </S.RegisterListItemContent>
              {isEditMode !== register.studentNumber &&
                register.description && (
                  <S.RegisterListItemDescription
                    onClick={() => setIsEditMode(register.studentNumber)}
                  >
                    {register.description}
                  </S.RegisterListItemDescription>
                )}
              {(isEditMode === register.studentNumber ||
                !register.description) && (
                <S.RegisterListItemInputBox>
                  <S.RegisterListItemInput
                    onChange={({ target: { value } }) => setContent(value)}
                    onFocus={() => setIsEditMode(register.studentNumber)}
                    placeholder="사유 입력..."
                  />
                  {isEditMode === register.studentNumber && (
                    <S.RegisterListItemInputButton
                      onClick={() => {
                        setIsEditMode("");
                        handleUpdateDescription(
                          register.studentNumber,
                          content,
                        );
                      }}
                    >
                      수정
                    </S.RegisterListItemInputButton>
                  )}
                </S.RegisterListItemInputBox>
              )}
            </S.RegisterListItem>
          ))}
        </S.RegisterList>
      </S.RegisterContainer>
    </S.Container>
  );
};

export default Register;
