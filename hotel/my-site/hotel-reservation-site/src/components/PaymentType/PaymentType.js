import React, { useState } from "react";
import Space from "../Space/Space";

const PaymentType = ({ handleRdValueChange,errors,touched}) => {
  return (
    <div>
      <h5>لطفا یکی از روش های پرداخت را انتخاب نمایید :</h5>
      <Space />
      <input
        type="radio"
        id="online"
        name="payment_type"
        value="online"
        onChange={(event) => handleRdValueChange(event)}
        
      />
      <label for="online">پرداخت آنلاین</label>
      <br />
      <input
        type="radio"
        id="cash"
        name="payment_type"
        value="cash"
        onChange={(event) => handleRdValueChange(event)}
      />
      <label for="cash">پرداخت حضوری</label>
      <br />
      <input
        type="radio"
        id="organize"
        name="payment_type"
        value="organize"
        onChange={(event) => handleRdValueChange(event)}
      />
      <label for="organize">پرداخت با کارت های سازمانی</label>
      <br />
      {errors.radioBox && touched.RadioBox && <span style={{color:"red",fontSize:".7rem"}}>{errors.radioBox}</span>}
    </div>
  );
};

export default PaymentType;
