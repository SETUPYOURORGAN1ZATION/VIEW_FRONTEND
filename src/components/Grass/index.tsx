import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import DayInfo from "interfaces/DayInfo";
import * as S from "./style";

dayjs.locale("ko");

interface GrassProps {
  data: DayInfo[];
  attendColor?: string;
  absentColor?: string;
  truancyColor?: string;
  absentClick?: () => void;
}

const Grass = ({
  data,
  attendColor = "#ececf0",
  absentColor = "#ececf0",
  truancyColor = "#ececf0",
  absentClick,
}: GrassProps) => {
  const current = dayjs();

  const findColor = (state: string | undefined) => {
    switch (state) {
      case "ATTENDANCE":
        return attendColor;
      case "ABSENT":
        return absentColor;
      case "TRUANCY":
        return truancyColor;
      default:
        return "#ececf0";
    }
  };

  let dataStauts: { [date: string]: string } = {};

  data.forEach((item) => {
    dataStauts[item.date] = item.status;
  });

  let arr: Array<Array<string>> = [];

  for (let i = 39; i >= 0; i--) {
    let arrColumn = [];
    for (let j = 6; j >= 0; j--) {
      arrColumn.push(current.subtract(i * 7 + j, "day").format("YYYY-MM-DD"));
    }
    arr.push(arrColumn);
  }

  return (
    <S.Layout>
      {arr.map((column: string[], colIndex) => (
        <S.ColumnBox key={colIndex}>
          {column.map((day, rowIndex) => (
            <S.Block
              onClick={
                dataStauts[day] === "ABSENT" ? absentClick : function () {}
              }
              color={findColor(dataStauts[day])}
              key={rowIndex}
            />
          ))}
        </S.ColumnBox>
      ))}
    </S.Layout>
  );
};

export default Grass;
