import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import "dayjs/locale/ko";

const getDateFormat = (checkedDate: string) => {
  dayjs.extend(customParseFormat);
  dayjs.locale("ko");
  const date = dayjs(checkedDate, "YYYY년 M월D일")
    .add(1, "year")
    .format("YYYY-MM-DD");
  console.log(date);
  return date;
};

export default getDateFormat;
