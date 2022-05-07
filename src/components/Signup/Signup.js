import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { signUpHandler } from "../../apiservices/ApiServices";

export default function Signup() {
  const [signIn, setSignin] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const navigateTo = useNavigate();
  const signUp = async (signIn) => {
    const { status } = await signUpHandler(signIn);
    if (status === 201) {
      navigateTo("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-justify-center align-items-center">
        <div className="card nav-yellow-shadow  login-container flex-column">
          <div className="d-flex flex-justify-center">
            <h3>Signup</h3>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signUp(signIn);
            }}
          >
            <div className=" mt-2 ml-1 d-flex flex-column">
              <label htmlFor="input-email" className="ml-2 input-label">
                Email
              </label>
              <input
                className="input input-login"
                id="input-email"
                placeholder="you@dreamstore.com"
                onChange={(e) => {
                  let timer = setTimeout(() => {
                    setSignin({ ...signIn, email: e.target.value });
                    clearTimeout(timer);
                  }, 1000);
                }}
              />
            </div>
            <div className=" mt-2 ml-1 d-flex flex-column">
              <label htmlFor="input-fname" className="ml-2 input-label">
                First Name
              </label>
              <input
                className="input input-login"
                id="input-fname"
                placeholder="Buddy"
                onChange={(e) => {
                  let timer = setTimeout(() => {
                    setSignin({ ...signIn, firstName: e.target.value });
                    clearTimeout(timer);
                  }, 1000);
                }}
              />
            </div>
            <div className=" mt-2 ml-1 d-flex flex-column">
              <label htmlFor="input-lname" className="ml-2 input-label">
                Last Name
              </label>
              <input
                className="input input-login"
                id="input-lname"
                placeholder="Puppy"
                onChange={(e) => {
                  let timer = setTimeout(() => {
                    setSignin({ ...signIn, lastName: e.target.value });
                    clearTimeout(timer);
                  }, 1000);
                }}
              />
            </div>
            <div className=" mt-2 ml-1 d-flex flex-column">
              <label htmlFor="input-password" className="ml-2 input-label">
                Password
              </label>
              <input
                className="input input-login"
                id="input-password"
                placeholder="*******"
                onChange={(e) => {
                  let timer = setTimeout(() => {
                    setSignin({ ...signIn, password: e.target.value });
                    clearTimeout(timer);
                  }, 1000);
                }}
              />
            </div>

            <div className="d-flex flex-justify-around align-items-center">
              <span className="d-flex align-items-center">
                <input
                  id="checkbox-unchecked"
                  className="form-check-input"
                  type="checkbox"
                  disabled
                />
                <label
                  htmlFor="checkbox-unchecked"
                  className="fs-small grey-text"
                >
                  I accept all terms and conditions
                </label>
              </span>
            </div>
            <button
              type="submit"
              className="btn orange-bg login-button ml-3 font-weight-bold"
            >
              Create New Account
            </button>
            <div className="d-flex flex-justify-center align-items-center">
              <Link
                className="black-text-color d-flex flex-justify-center align-items-center"
                to="/login"
              >
                Already have an account
                <span className="material-icons pl-1 fs-small">
                  arrow_forward_ios
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
