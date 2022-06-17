import React from "react";
import { useOrder, useCart } from "../../context";
import { Navbar, Footer } from "../components";
export default function Orders() {
  const { stateOrder } = useOrder();
  const { orders } = stateOrder;
  const { originalPrice, discountPrice, totalAmount } = useCart();
  return (
    <div>
      <Navbar />
      <div className="m-2">
        <div className="d-flex flex-justify-center">
          <h3 className="pb-1 pl-2 ">Order details:</h3>
        </div>
        <div className="card-checkout-container">
          <div className="d-flex flex-column card-container">
            {orders.map((item) => {
              const {
                categoryName,
                description,
                discountPrice,
                _id,
                orignalPrice,
                productImg,
                rating,
                subtitle,
              } = item.product;

              return (
                <div className="card hori-card card-shadow" key={_id}>
                  <div className="card-img-hori">
                    <img src={productImg} className="responsive-img img-hori" />
                  </div>
                  <div className="card-body flex-column">
                    <a className="card-title" href="#">
                      {subtitle}
                    </a>
                    <span className="card-subtitle">{categoryName}</span>
                    <p className="card-text">{description}</p>
                    <div className="price-container">
                      <span className="discount-price">Rs {discountPrice}</span>
                    </div>
                    <div className="d-flex align-items-center flex-justify-space-between">
                      <div className="ml-1 mb-1 d-flex align-items-center">
                        <span className="mr-1">Quantity: </span>

                        <span className="p-1">{item.quantity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" mt-2 mb-2">
            <div className="d-flex flex-column card-shadow card-checkout ml-2">
              <h3 className="p-1">Bill amount</h3>
              <span className="d-flex flex-justify-space-between">
                <p className="p-1">Total of Original Price </p>
                <p className="p-1">Rs{" " + originalPrice}</p>
              </span>
              <span className="d-flex flex-justify-space-between">
                <p className="p-1">Price after discount</p>
                <p className="p-1">Rs{" " + discountPrice}</p>
              </span>
              <span className="d-flex flex-justify-space-between">
                <p className="p-1">Taxes and charges charges</p>
                <p className="p-1">- Rs 300</p>
              </span>
              <span className="d-flex flex-justify-space-between total-amt pt-1">
                <p className="p-1 font-weight-bold">Total Amount</p>
                <p className="p-1 font-weight-bold">Rs {totalAmount}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
