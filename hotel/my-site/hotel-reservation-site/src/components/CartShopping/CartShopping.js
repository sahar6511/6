import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartShoppingIcon from "../Icons/CartShoppingIcon";
import Divider from "../Divider/Divider";
import Title from "../Title/Title";
import hotelimg from "../../images/hotel.webp";
import "../../styles/main.scss";
import useDeleteFromLocalStorage from "../../hooks/useDeleteFromLocalStorage";

const CartShopping = ({ dataFromLocalStorage,handleDeleteFromLocalStorage }) => {

 





  return (
    <div className="cart-shopping">
      <div className="cart-shopping__img">
        <img src={hotelimg} alt="hotelimg" />
      </div>
      <Title title1="لیست اتاق های رزرو شده "></Title>

      {dataFromLocalStorage && dataFromLocalStorage.length >= 1 ? (
        <div style={{ border: " 1px solid #dee2e6" }} className="p-30">
          {dataFromLocalStorage.map(
            (currentItem) =>
              currentItem.id && (
                <div className="cart-shopping__info">
                  <div className="pt-10">
                    <h5>{currentItem.title}</h5>
                    <button className ="delete-btn" onClick={()=>handleDeleteFromLocalStorage(currentItem.id)}>X</button>
                    <p>
                      <span> قیمت هر شب : </span>
                      {currentItem.price}ریال
                    </p>
                    <p>
                      <span>تعداد بزرگسال :</span> {currentItem.adultCount}
                    </p>
                    <p>
                      <span> به مدت :</span> {currentItem.diffSatrtEnd}{" "}
                      <span>شب</span>
                    </p>
                    <p>
                      <span> قیمت کل :</span>{" "}
                      {currentItem.diffSatrtEnd *
                        currentItem.adultCount *
                        currentItem.price}{" "}
                      <span>ریال</span>
                    </p>
                    <Divider></Divider>
                  </div>
                </div>
              )
          )}
          <Link to="/CompleteInfo" className="btn">
            مرحله بعد{" "}
          </Link>
        </div>
      ) : (
        <div className="cart-shopping__icon">
          <CartShoppingIcon></CartShoppingIcon>
          <p>هنوز اتاقی انتخاب نشده است</p>
        </div>
      )}
    </div>
  );
};

export default CartShopping;
