import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
export const useRazorpay = () => {
  const navigate = useNavigate();
  const createOrder = async (paymentId, paymentStatus = "Paid") => {
    try {
      navigate("/success");
    } catch (err) {
      console.error("FAILED TO ADD ORDER", err);
    }
  };

  /**
   * @param {*} total
   * @param {*} name
   * @param {*} email
   */
  const loadRazorPay = async (total, name, email) => {
    const options = {
      key: process.env.REACT_APP_RAZOR_KEY,
      amount: total * 100,
      currency: "INR",
      name: "Dream Store",
      handler: function (response) {
        createOrder(response.razorpay_payment_id);
      },
      modal: {
        ondismiss: function () {
          createOrder(v4(), "Failed");
        },
      },
      prefill: {
        name,
        email,
        contact: 8867928888,
      },
      theme: {
        color: "#ffad00",
      },
    };
    const razorpayEmbed = new window.Razorpay(options);
    razorpayEmbed.open();
    razorpayEmbed.on("payment.failed", function (response) {
      console.error(response);
    });
  };
  return { createOrder, loadRazorPay };
};
