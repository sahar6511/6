import  { useEffect, useState } from "react";

const useDiffStartEnd = (startDate, endDate) => {

  const [diffDays, setDiffDays] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    
    if (startDate && endDate) {
      if (startDate > endDate) {
        setError("تاریخ ورود نباید از تاریخ خروج بزرگتر باشد");
        setDiffDays(0);
      } else if (startDate === endDate) {
        setError("تاریخ ورود و خروج نباید با هم برابر باشند");
        setDiffDays(0);
      } else {
        setDiffDays(
          Math.abs(
            (new Date(endDate) - new Date(startDate)) / 1000 / 60 / 60 / 24
          )
        );

        setError("");
      }
    } else {
      setError("لطفا تاریخ ورود و خروج را انتخاب نمایید.");
    }
  }, [startDate,endDate]);

  return [diffDays, error];
};

export default useDiffStartEnd;
