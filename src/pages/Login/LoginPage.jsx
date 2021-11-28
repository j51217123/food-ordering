import React, { useState } from "react";

import {
  registerFirebaseAuth,
  signInFirebaseAuth,
  facebookSignIn,
  googleSignIn,
} from "../../utils/firebase";

import CoverImg from "../../images/Cover.jpg";
import { ReactComponent as FacebookIcon } from "../../images/Facebook.svg";
import { ReactComponent as GoogleIcon } from "../../images/Google.svg";
import { ReactComponent as ShownEye } from "../../images/ShownEye.svg";
import { ReactComponent as CloseEye } from "../../images/CloseEye.svg";

const LoginPage = () => {
  const [shownPassword, setShownPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

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
  };

  const handleRegisterAuthAndClearInputs = (email, password) => {
    registerFirebaseAuth(email, password);
    clearInputs();
  };

  return (
    <div className="wrapper">
      <div className="login-page-container d-flex">
        <div className="login-cover-img-box">
          <img src={CoverImg} alt="" />
        </div>
        <div className="login-form">
          <div className="login-form-container">
            <div className="login-btns-container d-flex flex-column ">
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
            <div>
              <label>
                <span className="d-block fz-14 m-bottom-sm">常用信箱</span>
                <input
                  className="auth-input   padding-sm m-bottom-lg"
                  type="email"
                  value={email}
                  onChange={saveEmailValue}
                  placeholder="輸入信箱 / aaa.test.com"
                />
              </label>
            </div>
            <div>
              <label>
                <span className="d-block fz-14 m-bottom-sm">密碼</span>
                <div className="input-box d-inline-flex align-items-end m-bottom-lg">
                  <input
                    className="auth-input  padding-sm"
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
              <>
                <button
                  className="account-btn w-100 padding-sm m-bottom-lg"
                  onClick={handleSignInAndClearInputs}>
                  Sign in
                </button>
                <p className="test">
                  Don't have an account ?
                  <span onClick={handleSetHasAccount}> Sign up</span>
                </p>
              </>
            ) : (
              <>
                <button
                  className="account-btn w-100 padding-sm m-bottom-lg"
                  onClick={handleRegisterAuthAndClearInputs}>
                  Sign up
                </button>
                <p className="test">
                  Already have an account ?
                  <span onClick={handleSetHasAccount}> Sign in</span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
