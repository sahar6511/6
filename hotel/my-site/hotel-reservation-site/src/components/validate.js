
  const validate=(data,rdValue,dataFromLocalStorage)=>{
    const errors ={}

    if(data.Name===""){
      errors.name = "فیلد نام نباید خالی باشد"
    }else { delete errors.name}

    if(data.Family===""){
      errors.family = "فیلد نام خانوادگی نباید خالی باشد"
    }else { delete errors.family}

    if(data.NationalCode ===""){
      errors.nationalCode = "فیلد کد ملی نباید خالی باشد"

    }
     else if(data.NationalCode.length !== 10){
       errors.nationalCode = "فیلد کد ملی باید 10 رقم باشد"
    }else { delete errors.nationalCode}



    if(data.Mobile===""){
      errors.mobile = "فیلد موبایل نباید خالی باشد"
    }
     else if(data.Mobile.length !== 11){
      errors.mobile = "فیلد کد موبایل باید 11 رقم باشد"
   }else { delete errors.mobile}

   if(!data.Email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)){
    errors.email = "غالب ایمیل نا معتبر می باشد"
  }else { delete errors.email}

  if(rdValue === undefined){
    errors.radioBox = "لطفا یکی از روش های پرداخت را انتخاب نمایید"
  }else { delete errors.radioBox}

  if(dataFromLocalStorage.length === 0){
    errors.Ls = "هیچ موردی رزرو نشده است"
  }else { delete errors.Ls}


    return errors;

}
export default validate;