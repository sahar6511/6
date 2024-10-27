import React,{useState,useEffect} from "react";
import Input from "../Input/Input";
import Space from "../Space/Space";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
 import Warning from "../Warning/Warning";
import "../../styles/main.scss";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import validate from "../validate";
import { useAddNewCustomerMutation,useGetCustomerByIdQuery } from "../redux/services/cusomersApi";

const SignUp = () => {


  
  const [id, setId] = useState();

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Name: "",
    Family: "",
    NationalCode: "",
    Mobile: "",
    Email: "",
  });
  const [touched, setTouched] = useState({
    Name: false,
    Family: false,
    NationalCode: false,
    Mobile: false,
    Email: false,
    
  });
  
  const { data, error, isLoading } = useGetCustomerByIdQuery(id);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    event.target.name === "Mobile" && setId(event.target.value)
  };
  const handleInputBlur = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  
  
  

  useEffect(() => {
    setErrors(validate(formData,"",""));
  }, [formData]);

  const [addNewCustomer, { isLoading: isAddingNewCustomer }] = useAddNewCustomerMutation();


  const handelFormSubmit=async (event) => {
    event.preventDefault();
    // if (data && data.customerMobile === id) {
    //   setErrors({...errors,mobile:"شماره موبایل تکراری می باشد"})
     
    // }
    //  else
      if (!(errors.name || errors.family || errors.nationalCode || errors.mobile)){
        if (data  && data.customerMobile === id) {
          setErrors({...errors,mobile:"شماره موبایل تکراری می باشد"})
        }
        else{

          await addNewCustomer({
            id: formData.Mobile,
            customerName: formData.Name,
            customerFamily: formData.Family,
            customerNationalCode: formData.NationalCode,
            customerMobile: formData.Mobile,
            customerEmail: formData.Email,
            
          });
          alert(
            "اطلاعات وارد شده با موفقیت ثبت گردید. . شماره موبایل وارد شده نام کاربری و پسورد شمامی باشد"
          );
          event.target.reset()
        }
    
    } else {
      
      setTouched({
        Name: true,
        Family: true,
        NationalCode: true,
        Mobile: true,
        Email: true,
      });



    }
  };
  return (
    <div className="signup">
      
    
           <form onSubmit={handelFormSubmit}>
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
          {/* {errors.email && touched.Email && <span>{errors.email}</span>} */}
          <Space />
        </div>
        {/* <button className="btn">ثبت نهایی</button>  */}
      <button className="btn">ثبت نام</button>
      </form>

      <Warning>
       لطفا در وارد کردن شماره موبایل خود دقت کنید. نام کاربری و پسورد ورود به سایت به صورت پیش فرض همان شماره موبایل شما می باشد.
      </Warning>

      <Space />
      <Space />
    </div>
  );
};

export default SignUp;
