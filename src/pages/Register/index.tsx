import React, { useEffect, useState } from "react";
import * as S from "./style";
import DropDown from "components/DropDown";
import Retry from "components/Retry";
import { supabase } from "apis";

const Register = () => {
  const [isHoverUpdateModal, setIsHoverUpdateModal] = useState("");
  const [isEditMode, setIsEditMode] = useState("");
  const [content, setContent] = useState("");
  const [currGrade, setCurrGrade] = useState("1학년");
  const [currClass, setCurrClass] = useState("1반");
  const [register, setRegister] = useState<any>();
  const isCurrRegister = (grade: number, classNum: number) =>
    grade === +currGrade[0] && classNum === +currClass[0];
  const filteredDataList = register?.filter(({ studentNumber }: any) =>
    isCurrRegister(+studentNumber[0], +studentNumber[1])
  );

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("Register")
        .select()
        .order("studentNumber");
      setRegister(data);
    })();
  }, []);

  const handleStatusUpdate = async (studentNumber: string, status: string) => {
    await supabase
      .from("Register")
      .update({ status })
      .eq("studentNumber", studentNumber);

    const { data } = await supabase
      .from("Register")
      .select()
      .order("studentNumber");
    setRegister(data);
  };

  const handleUpdateDescription = async (
    studentNumber: string,
    description: string
  ) => {
    await supabase
      .from("Register")
      .update({ description })
      .eq("studentNumber", studentNumber);

    const { data } = await supabase
      .from("Register")
      .select()
      .order("studentNumber");
    setRegister(data);
  };

  return (
    <S.Container>
      <S.PageTitle>🗓️ 2023년 12월 27일</S.PageTitle>
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
                      }
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
                          content
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
