import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [studentNumber, setStudentNumber] = useState("");
  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.SignupBox>
        <S.SignupTitle>VIEW</S.SignupTitle>
        <S.SignupInputBox>
          <S.SignupInputTitle>학반</S.SignupInputTitle>
          <S.SignupInput
            placeholder="학번을 입력해주세요"
            value={studentNumber}
            onChange={({ target: { value } }) => setStudentNumber(value)}
          />
        </S.SignupInputBox>
        <S.SignupInputBox>
          <S.SignupInputTitle>이름</S.SignupInputTitle>
          <S.SignupInput
            placeholder="이름을 입력해주세요"
            value={studentName}
            onChange={({ target: { value } }) => setStudentName(value)}
          />
        </S.SignupInputBox>
        <S.SignupInputBox>
          <S.SignupInputTitle>비밀번호</S.SignupInputTitle>
          <S.SignupInput
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </S.SignupInputBox>
        <S.SignupButton>로그인하기</S.SignupButton>
        <S.SignupText>
          이미 VIEW에 가입하셨나요?{" "}
          <span onClick={() => navigate("/login")}>로그인하기</span>
        </S.SignupText>
      </S.SignupBox>
    </S.Container>
  );
};

export default SignUp;
