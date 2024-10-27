// import { DtPicker, convertToEn,convertToFa } from "react-calendar-datetime-picker";
// import "react-calendar-datetime-picker/dist/style.css";
// import React, { useState, useEffect } from "react";
// import "../../styles/main.scss";
// import Input from "../Input/Input";
// import moment from "jalali-moment";
// import { Link, useLocation } from "react-router-dom";

// import Button from "../Button/Button";
// import Error from "../Error/Error";
// import useConvertToEnDate from "../../hooks/useConvertToEnDate";
// import useDiffStartEnd from "../../hooks/useDiffStartEnd";

// const DatePicker = ({ handleSearchRoomsClick }) => {


//   const [jalaliStartDate, setJalaliStartDate] = useState();
//   const [jalaliEndDate, setJalaliEndDate] = useState();


//   const [miladiStartDate, setMiladiStartDate] = useConvertToEnDate(jalaliStartDate);
//   const [miladiEndDate, setMiladiEndDate] = useConvertToEnDate(jalaliEndDate);


//   const[diffSatrtEnd,error]= useDiffStartEnd(miladiStartDate,miladiEndDate);


//   const location = useLocation();


//   return (
//     <div className="box-shadow p-30">
//       <div className="dtpicker">
//         <div className="dtpicker-right">
//           <DtPicker
//             onChange={setJalaliStartDate}
//             local="fa"
//             clearBtn="true"
//             isRequired="true"
//             todayBtn="true"
//             headerClass="custom-headr"
//             inputClass="custom-input"
//             placeholder="تاریخ ورود"
//           />
//         </div>
//         <div className="dtpicker-center">
//           <DtPicker
//             onChange={setJalaliEndDate}
//             local="fa"
//             clearBtn="true"
//             isRequired="true"
//             todayBtn="true"
//             headerClass="custom-headr"
//             inputClass="custom-input"
//             placeholder="تاریخ خروج"
//           />
//         </div>
//         <div className="dtpicker-left">
//           <Input
//             type="text"
//             disabled="disabled"
//             value={`${diffSatrtEnd} شب`}
//           />
//         </div>

//         <div
//           className="btn"
//           onClick={() =>{if(error===""){

//             handleSearchRoomsClick(miladiStartDate, miladiEndDate,error)
//           }
//           }
//           }
//         >
//           جستجوی اتاق
//         </div>
//       </div>
//       {location.pathname === "/onlinereservation" ? error ?<Error>{error}</Error>:null: null}

//     </div>
//   );
// };
// export default DatePicker;
