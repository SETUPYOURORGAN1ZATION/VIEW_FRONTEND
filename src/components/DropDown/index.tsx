import React, { FC, useState } from "react";
import * as S from "./style";
import down from "../../assets/down.svg";

const DropDown: FC<{
  list: Array<string>;
  state: string;
  setState: (v: React.SetStateAction<string>) => void;
}> = ({ list, state, setState }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <S.Container onClick={() => setIsClicked((prev) => !prev)}>
      <S.Title>{state}</S.Title>
      <img src={down} alt="" />
      <S.List isClicked={isClicked}>
        {list.map((item) => (
          <S.ListItem onClick={() => setState(item)} key={item}>
            {item}
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};

export default DropDown;
