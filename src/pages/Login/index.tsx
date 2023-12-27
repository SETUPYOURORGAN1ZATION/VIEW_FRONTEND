import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LoginBox>
        <S.LoginTitle>VIEW</S.LoginTitle>
        <S.LoginInputBox>
          <S.LoginInputTitle>학반</S.LoginInputTitle>
          <S.LoginInput
            placeholder="학번을 입력해주세요"
            value={studentNumber}
            onChange={({ target: { value } }) => setStudentNumber(value)}
          />
        </S.LoginInputBox>
        <S.LoginInputBox>
          <S.LoginInputTitle>비밀번호</S.LoginInputTitle>
          <S.LoginInput
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </S.LoginInputBox>
        <S.LoginButton>로그인하기</S.LoginButton>
        <S.SignupText>
          VIEW의 회원이 아니신가요?{" "}
          <span onClick={() => navigate("/signup")}>회원가입하기</span>
        </S.SignupText>
      </S.LoginBox>
    </S.Container>
  );
};

export default Login;
