import React from "react";
import { useNavigate } from "react-router";

import Footer from "../../components/Footer/Footer";

import { ReactComponent as ClockIcon } from "../../images/Clock.svg";
import { ReactComponent as GPSArrowIcon } from "../../images/GPSArrow.svg";
import { ReactComponent as PhoneIcon } from "../../images/Phone.svg";
import { ReactComponent as LunchImg } from "../../images/Lunch.svg";
import { ReactComponent as CakeImg } from "../../images/Cake.svg";
import { ReactComponent as CateringImg } from "../../images/Catering.svg";
import { ReactComponent as CompanyImg } from "../../images/Company.svg";

const HomePage = () => {
  let navigate = useNavigate();

  const handleDelivery = () => {
    navigate("/delivery");
  };

  return (
    <section className="wrapper">
      <div className="homepage-container">
        <div className="main-banner">
          <p className="m-bottom-xxl">
            Доставка свежей и горячей еды в течение 40 минут
          </p>
          <div className="icons-container">
            <div className="icon-container d-inline-flex flex-column">
              <ClockIcon className="margin-auto" />
              <div className="m-top-lg">
                <p>Доставка с 10:00 до 19:00</p>
                <span>Время работы</span>
              </div>
            </div>
            <div className="icon-container d-inline-flex flex-column">
              <GPSArrowIcon className="margin-auto" width="18" height="18" />
              <div className="m-top-lg">
                <p>ул. Горького, 126</p>
                <span>ближайшее кафе</span>
              </div>
            </div>
            <div className="icon-container d-inline-flex flex-column">
              <PhoneIcon className="margin-auto" width="18" height="18" />
              <div className="m-top-lg">
                <p>8-800-100-20-20</p>
                <span>заказ по телефону</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lunch-container">
          <div className="lunch-title m-bottom-md">Бизнес-ланч</div>
          <div className="lunch-time fz-18">заказ до 15:00</div>
          <div className="lunch-content d-flex flex-wrap">
            <div className="lunch-left d-inline-block">
              <div className="lunch-info">
                <h3>На первое:</h3>
                <p>Cуп-лапша, борщ, солянка, сырный крем-суп с грибами</p>
              </div>
              <div className="lunch-info">
                <h3>На первое:</h3>
                <p>
                  Свиная отбивная, паста с баклажанами, стйек из семги, курица
                  по-тайски, запечёный картофель, ризотто
                </p>
              </div>
              <div className="lunch-info ">
                <h3>Салаты:</h3>
                <p>Фунцоза, цезарь, весенний, ананасовый</p>
              </div>
              <div>
                <h3>Напитки:</h3>
                <p>
                  Кофе, чай фруктовый, морс клюквенный, компот яблочно-вишневый
                </p>
              </div>
            </div>
            <div className="lunch-right d-inline-block">
              <LunchImg />
            </div>
          </div>
          <button className="book-btn" onClick={handleDelivery}>
            Book
          </button>
        </div>
        <div className="test d-flex w-100 wrapper">
          <div className="img-box">
            <CakeImg className="m-bottom-lg" />
            <p>Семейные праздники</p>
          </div>
          <div className="img-box">
            <CateringImg className="m-bottom-lg" />
            <p>Кейтеринг</p>
          </div>
          <div className="img-box">
            <CompanyImg className="m-bottom-lg" />
            <p>Корпоративные обеды</p>
          </div>
        </div>
        <div className="pizza-banner"></div>
      </div>
    </section>
  );
};

export default HomePage;
