import React from "react";

import CoverImg from "../../images/Cover.jpg";

const LoginPage = () => {
  return (
    <div className="wrapper">
      <div className="login-page-container">
        <div className="login-cover-img-box">
          <img src={CoverImg} alt="" />
        </div>
        <div className="login-form">
            <div className='login-form-container'>

            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
