import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { logInHandler } from "../../apiservices/ApiServices";
import { useAuth } from "../../context/auth-context";
export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { authstate, setAuthState } = useAuth();

  const navigateTo = useNavigate();
  const guestCredential = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  const loggedIn = async (login) => {
    // login only available for current users in db i.e. guest
    const { data, status } = await logInHandler(login);
    if (data !== undefined)
      if (status === 200) {
        localStorage.setItem("token", JSON.stringify(data.encodedToken));
        setAuthState({ ...authstate, isUserLoggedIn: true });
        navigateTo("/products");
      }
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-justify-center align-items-center mb-2">
        <div className="card nav-yellow-shadow  login-container flex-column">
          <div className="d-flex flex-justify-center">
            <h3>Login</h3>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loggedIn(login);
            }}
          >
            <div className=" mt-2 ml-1 d-flex flex-column">
              <label htmlFor="input-email" className="ml-2 input-label">
                Email
              </label>
              <input
                className="input input-login"
                id="input-email"
                placeholder="adarshbalika@gmail.com"
                value={guestCredential.email}
                onChange={(e) => {
                  let timer = setTimeout(() => {
                    setLogin({ ...login, email: e.target.value });
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
                value={guestCredential.password}
                onChange={(e) => {
                  let timer = setTimeout(() => {
                    setLogin({ ...login, password: e.target.value });
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
                />
                <label htmlFor="checkbox-unchecked" className="fs-small">
                  Remember me?
                </label>
              </span>
              <a href="#" className="black-text-color fs-small mr-2">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="btn orange-bg login-button ml-3 font-weight-bold"
              onClick={(e) => {
                e.preventDefault();
                loggedIn(guestCredential);
              }}
            >
              Login
            </button>
            <div className="d-flex flex-justify-center align-items-center">
              <Link
                className="black-text-color d-flex flex-justify-center align-items-center"
                to="/signup"
              >
                create new account
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
