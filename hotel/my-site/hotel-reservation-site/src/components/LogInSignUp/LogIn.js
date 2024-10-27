import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import Space from "../Space/Space";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useGetCustomerByIdQuery } from "../redux/services/cusomersApi";
import validatelogin from "../validatelogin";
import Error from "../Error/Error";
import "../../styles/main.scss";

const LogIn = () => {
  const [id, setId] = useState();

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Mobile: "",
  });
  const [touched, setTouched] = useState({
    Mobile: false,
  });

  const { data, error, isLoading } = useGetCustomerByIdQuery(id);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setId(event.target.value);
  };
  const handleInputBlur = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  useEffect(() => {
    setErrors(validatelogin(formData));
  }, [formData]);

  const handelSubmitLogInForm = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      if (data && data.customerMobile === id) {
        console.log(data.customerMobile);
      } else {
        setErrors({...errors,mobile:"اطلاعاتی برای شماره موبایل  درج شده یافت نشد"})

        
      }
    } else {
      setTouched({
        Mobile: true,
      });
    }
  };
  return (
    <div className="login">
      <form onSubmit={handelSubmitLogInForm}>
        <Input
          placeholder="شماره موبایل"
          type="text"
          name="Mobile"
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
        />
        {errors.mobile && touched.Mobile && <span>{errors.mobile}</span>}
        <Space />
        <Space />
        {/* <Input
          placeholder="رمز عبور"
          type="text"
          name="Password"
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
        />
        {errors.password && touched.Password && <span>{errors.password}</span>}
        <Space /> */}
        <Space />
        <Space />
        <button className="btn">ورود</button>
      </form>
    </div>
  );
};

export default LogIn;
