import { useState } from "react";
import * as S from "./style";

const Header = () => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("student") || "false")
  );

  const handleLogout = () => {
    localStorage.removeItem("student");
    setState({});
    window.location.reload();
  };

  return (
    <S.Layout>
      <S.FrontLayout>
        <S.Logo to="/">VIEW</S.Logo>
        <S.Route to="/">홈</S.Route>
        {localStorage.getItem("mode") === "t" && (
          <S.Route to="/register">출결 현황</S.Route>
        )}
        {localStorage.getItem("mode") === "t" && (
          <S.Route to="/passticket">이석증 신청 목록</S.Route>
        )}
      </S.FrontLayout>
      <S.BackLayout>
        {!state ? (
          <S.Route to="/login">로그인</S.Route>
        ) : (
          <S.Route to="#" onClick={handleLogout}>
            로그아웃
          </S.Route>
        )}
      </S.BackLayout>
    </S.Layout>
  );
};

export default Header;
