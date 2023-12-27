import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { supabase } from "apis";

const SignUp = () => {
  const [studentNumber, setStudentNumber] = useState("");
  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const newId = Math.floor(Math.random() * 999999);
      const { data } = await supabase.from("Student").select();
      data?.map(({ id }) => {
        if (id === newId) throw new Error("ID 중복");
        return null;
      });

      await supabase.from("Student").upsert({
        id: Math.floor(Math.random() * 99999),
        grade: +studentNumber[0],
        classNum: +studentNumber[1],
        studentNum: +studentNumber.substring(2, 4),
        name: studentName,
        password,
        studentId: studentNumber,
      });
      alert("회원가입에 성공했어요!");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Container>
      <S.SignupBox>
        <S.SignupTitle>VIEW</S.SignupTitle>
        <S.SignupInputBox>
          <S.SignupInputTitle>학번</S.SignupInputTitle>
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
            type="password"
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </S.SignupInputBox>
        <S.SignupButton onClick={handleSignup}>회원가입하기</S.SignupButton>
        <S.SignupText>
          이미 VIEW에 가입하셨나요?{" "}
          <span onClick={() => navigate("/login")}>로그인하기</span>
        </S.SignupText>
      </S.SignupBox>
    </S.Container>
  );
};

export default SignUp;
