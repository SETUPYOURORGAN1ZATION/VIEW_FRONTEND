const getDateFormat = (checkedDate: string) => {
  return `${parseInt(checkedDate.slice(0, 4)) + 1}-${checkedDate.slice(
    6,
    8,
  )}-${checkedDate.slice(9, 11)}`;
};

export default getDateFormat;
