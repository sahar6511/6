import React, { useState } from "react";
import Input from "../Input/Input";
import Email from "../Icons/EmailIcon";
import Warning from "../Warning/Warning";
import Error from "../Error/Error";
import Title from "../Title/Title";
import "../../styles/main.scss";
import Space from "../Space/Space";
// import Formik from "formik";

const PersonalInfo = ({
  handleInputChange,
  errors,
  handleInputBlur,
  touched
}) => {
  return (
    <div className="personal-info">
      <Title title1="اطلاعات شخص وارد کننده"></Title>
      <Space />
      <form className="personal-info__container">
        <div className="form-control">
          <Input
            type="text"
            placeholder="نام (اجباری)"
            name="Name"
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          {errors.name && touched.Name && <span>{errors.name}</span>}

          <Space />
        </div>
        <div className="form-control">
          <Input
            type="text"
            placeholder="نام خانوادگی (اجباری)"
            name="Family"
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          {errors.family && touched.Family && <span>{errors.family}</span>}
          <Space />
        </div>
        <div className="form-control">
          <Input
            type="number"
            placeholder="کد ملی (اجباری)"
            name="NationalCode"
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          {errors.nationalCode && touched.NationalCode && <span>{errors.nationalCode}</span>}
          <Space />
        </div>
        <div className="form-control">
          <Input
            type="number"
            placeholder="موبایل (اجباری)"
            name="Mobile"
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          {errors.mobile && touched.Mobile && <span>{errors.mobile}</span>}
          <Space />
        </div>
        <div className="form-control">
          <Input
            type="email"
            placeholder="ایمیل (اختیاری)"
            name="Email"
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          {errors.email && touched.Email && <span>{errors.email}</span>}
          <Space />
        </div>
        {/* <button className="btn">ثبت نهایی</button>  */}
      </form>

      <Warning>
        {" "}
        لطفأ در واردکردن شماره موبایل دقت کنید، زیرا ما از این طریق رزروتان را
        پیگیری خواهیم کرد{" "}
      </Warning>
    </div>
  );
};

export default PersonalInfo;
