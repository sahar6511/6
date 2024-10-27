import { convertToEn } from "react-calendar-datetime-picker";

const useConvertToEnDate = (date) => {
  const miladiDate = convertToEn(date);
  return [miladiDate];
};

export default useConvertToEnDate;
