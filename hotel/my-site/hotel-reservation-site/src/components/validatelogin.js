
  const validatelogin=(data)=>{
    const errors ={}

   
  if(data.Mobile === ""){
   
    errors.mobile = "فیلد موبایل  نباید خالی باشد"}
     else if(data.Mobile.length !== 11){
      errors.mobile = "فیلد کد موبایل باید 11 رقم باشد"
  }else { delete errors.mobile}
 


    return errors;

}
export default validatelogin;