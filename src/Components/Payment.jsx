import React from "react";
import { useState } from "react";
import style from "./styles/payment.module.css";

const data = {
  name: "",
  address: "",
  email: "",
  cardNo: "",
  cvv: "",
};

const Payment = () => {
  const [formData, setFormData] = useState(data);

  const handleOnChange = (events) => {
    const { value, name } = events.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    //Prevent Default
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className={style.payment__div}>
      <h1>Payment Page</h1>
      <form action="" onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
          className={style.input}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleOnChange}
          className={style.input}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          className={style.input}
        />
        <input
          type="text"
          placeholder="Card No."
          name="cardNo"
          value={formData.cardNo}
          onChange={handleOnChange}
          className={style.input}
        />
        <input
          type="text"
          placeholder="CVV"
          name="cvv"
          value={formData.cvv}
          onChange={handleOnChange}
          className={style.input}
        />
        <input type="submit" className={style.input_btn} />
      </form>
    </div>
  );
};

export default Payment;
