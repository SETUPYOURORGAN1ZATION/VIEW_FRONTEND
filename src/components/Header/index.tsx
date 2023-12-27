import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.Layout>
      <S.FrontLayout>
        <S.Logo to="/">VIEW</S.Logo>
        <S.Route to="/">홈</S.Route>
        <S.Route to="/Register/1313">내 출결 현황</S.Route>
      </S.FrontLayout>
      <S.BackLayout>
        <S.Route to='/login'>로그인</S.Route>
      </S.BackLayout>
    </S.Layout>
  );
};

export default Header;
