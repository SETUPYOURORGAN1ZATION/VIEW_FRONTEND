import React, { useState } from "react";
import * as S from "./style";
import DropDown from "components/DropDown";
import Retry from "components/Retry";

const mocks = [
  {
    grade: 2,
    classNum: 1,
    list: Array.from({ length: 16 }).map(() => ({
      status: "ABSENT",
      studentNumber: "2210",
      studentName: "박우빈",
      description: "",
    })),
  },
  {
    grade: 1,
    classNum: 1,
    list: [
      {
        status: "ATTENDANCE",
        studentNumber: "2210",
        studentName: "박우빈",
        description: "",
      },
      {
        status: "ATTENDANCE",
        studentNumber: "2211",
        studentName: "배유정",
        description: "",
      },
      {
        status: "ATTENDANCE",
        studentNumber: "2212",
        studentName: "백서진",
        description: "",
      },
      {
        status: "ATTENDANCE",
        studentNumber: "2213",
        studentName: "유성욱",
        description: "",
      },
    ],
  },
  {
    grade: 2,
    classNum: 3,
    list: Array.from({ length: 16 }).map(() => ({
      status: "TRUANCY",
      studentNumber: "2210",
      studentName: "박우빈",
      description: "UNITHON 참석으로 수~금 3일 결석",
    })),
  },
  {
    grade: 2,
    classNum: 4,
    list: Array.from({ length: 16 }).map(() => ({
      status: "abtend",
      studentNumber: "2210",
      studentName: "박우빈",
      description: "",
    })),
  },
];

const Register = () => {
  const [isHoverUpdateModal, setIsHoverUpdateModal] = useState("");
  const [currGrade, setCurrGrade] = useState("1학년");
  const [currClass, setCurrClass] = useState("1반");
  const isCurrRegister = (grade: number, classNum: number) =>
    grade === +currGrade[0] && classNum === +currClass[0];
  const filteredDataList = mocks.filter(({ grade, classNum }) =>
    isCurrRegister(grade, classNum)
  );

  return (
    <S.Container>
      출결현황
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
      {filteredDataList.map((item) => (
        <S.RegisterContainer>
          <S.RegisterListTitle>
            {item.grade}학년 {item.classNum}반
          </S.RegisterListTitle>
          <S.RegisterList>
            {item.list.map((register) => (
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
                    onClick={() =>
                      setIsHoverUpdateModal(register.studentNumber)
                    }
                  >
                    상태 변경
                  </S.StatusUpdateButton>
                  {isHoverUpdateModal === register.studentNumber && (
                    <S.RegisterUpdateModal>
                      {["출석 완료", "미인정 결석", "인정 결석"].map(
                        (registerType) => (
                          <S.RegisterUpdateModalItem
                            onClick={() => setIsHoverUpdateModal("")}
                          >
                            {registerType}
                          </S.RegisterUpdateModalItem>
                        )
                      )}
                    </S.RegisterUpdateModal>
                  )}
                </S.RegisterListItemHead>
                <S.RegisterListItemContent>
                  {register.studentNumber} {register.studentName}
                </S.RegisterListItemContent>
                <S.RegisterListItemDescription>
                  {register.description || "-"}
                </S.RegisterListItemDescription>
              </S.RegisterListItem>
            ))}
          </S.RegisterList>
        </S.RegisterContainer>
      ))}
    </S.Container>
  );
};

export default Register;
