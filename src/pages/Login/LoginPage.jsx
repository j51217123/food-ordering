import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  registerFirebaseAuth,
  signInFirebaseAuth,
  facebookSignIn,
  googleSignIn,
} from "../../utils/firebase";

import { ReactComponent as FacebookIcon } from "../../images/Facebook.svg";
import { ReactComponent as GoogleIcon } from "../../images/Google.svg";
import { ReactComponent as ShownEye } from "../../images/ShownEye.svg";
import { ReactComponent as CloseEye } from "../../images/CloseEye.svg";

const LoginPage = () => {
  let navigate = useNavigate();
  const [shownPassword, setShownPassword] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveEmailValue = (e) => {
    setEmail(e.target.value);
  };

  const savePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  const handleSetHasAccount = () => {
    setHasAccount(!hasAccount);
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignInAndClearInputs = (email, password) => {
    signInFirebaseAuth(email, password);
    clearInputs();
    navigate("/delivery");
  };

  const handleRegisterAuthAndClearInputs = (email, password) => {
    registerFirebaseAuth(email, password);
    clearInputs();
  };

  return (
    <div className="wrapper">
      <div className="login-page-container d-flex ">
        <div className="login-form margin-auto">
          <div className="login-form-container justify-content-center align-items-center">
            <div className="login-btns-container margin-auto d-flex flex-column ">
              <button
                className="facebook-btn d-flex w-100 m-bottom-lg padding-xs"
                onClick={facebookSignIn}>
                <FacebookIcon className="margin-auto" width="18" height="18" />
                <span className="w-100">Facebook 註冊 / 登入</span>
              </button>
              <button
                className="google-btn d-flex w-100 m-bottom-lg padding-xs"
                onClick={googleSignIn}>
                <GoogleIcon className="margin-auto" width="18" height="18" />
                <span className="w-100"> Google 註冊 / 登入</span>
              </button>
              <div className="demarcation m-bottom-lg">
                <span>或</span>
              </div>
            </div>
            <div className="field d-flex justify-content-center">
              <label className="margin-auto">
                <span className="d-block fz-14 m-bottom-sm">常用信箱</span>
                <input
                  className="auth-input w-100 padding-sm m-bottom-lg"
                  type="email"
                  value={email}
                  onChange={saveEmailValue}
                  placeholder="輸入信箱 / aaa@test.com"
                />
              </label>
            </div>
            <div className="field d-flex justify-content-center">
              <label className="margin-auto">
                <span className="d-block fz-14 m-bottom-sm">密碼</span>
                <div className="input-box w-100 d-inline-flex align-items-end m-bottom-lg">
                  <input
                    className="auth-input w-100 padding-sm"
                    type={shownPassword ? "text" : "password"}
                    value={password}
                    onChange={savePasswordValue}
                    placeholder="輸入密碼 / 123456"
                  />
                  <div onClick={() => setShownPassword(!shownPassword)}>
                    <button className="shown-eye-btn">
                      {shownPassword ? (
                        <ShownEye
                          className="shown-eye"
                          width="24"
                          height="24"
                        />
                      ) : (
                        <CloseEye
                          className="close-eye"
                          width="24"
                          height="24"
                        />
                      )}
                    </button>
                  </div>
                </div>
              </label>
            </div>
            {hasAccount ? (
              <div className="d-flex flex-column">
                <button
                  className="account-btn w-100 padding-sm margin-auto m-bottom-lg"
                  onClick={handleRegisterAuthAndClearInputs}>
                  Sign up
                </button>
                <p className="account-inquire-text fz-14">
                  Already have an account ?
                  <span onClick={handleSetHasAccount}> Sign in</span>
                </p>
              </div>
            ) : (
              <div className="d-flex flex-column">
                <button
                  className="account-btn w-100 padding-sm margin-auto m-bottom-lg"
                  onClick={handleSignInAndClearInputs}>
                  Sign in
                </button>
                <p className="account-inquire-text fz-14">
                  Don't have an account ?
                  <span onClick={handleSetHasAccount}> Sign up</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
