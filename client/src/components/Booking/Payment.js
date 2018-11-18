import React, { Component } from 'react';

class Payment extends Component {
  render() {
    return(
      <div className="my-5">
        <label className="bookingPage__label" htmlFor="method">Phương thức</label>
        <input className="bookingPage__input" type="text" id="method" />
        <label className="bookingPage__label" htmlFor="numberCard">Số thẻ</label>
        <input className="bookingPage__input" type="text" id="numberCard" />
        <label className="bookingPage__label" htmlFor="nameAuthor">Tên chủ thẻ</label>
        <input className="bookingPage__input" type="text" id="nameAuthor" />
        <label className="bookingPage__label" htmlFor="expirationDate">Ngày hết hạn</label>
        <input className="bookingPage__input" type="text" id="expirationDate" />
        <label className="bookingPage__label" htmlFor="cvv">CVV/CVC2</label>
        <input className="bookingPage__input" type="text" id="cvv" />
      </div>
    )
  }
}

export default Payment;