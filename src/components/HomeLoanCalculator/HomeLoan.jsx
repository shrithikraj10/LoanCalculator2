import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Marks from "./HomeLoanRange";
import InterestRange from "./InterestRateRange";
import NumberFormat from "react-number-format";
import CalculateRates from "./CaclulateRates";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import styles2 from "./mystyles2.module.css";
function HomeLoan() {
  const customStyle = {
    color: "orange",
    width: "280px",
    height: "30px"
  };

  const [customTenure, setCustomTenure] = useState({
    min: 0,
    max: 12,
    step: 1
  });

  const { t } = useTranslation();

  function handleClickTranslate(lang) {
    i18next.changeLanguage(lang);
  }

  const [homeLoanAmount, setHomeLoanAmount] = React.useState(0);
  const [interestRate, setInterestRate] = React.useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi1, setEMI1] = useState(interestRate * 0.01);
  const [emi, setEMI] = useState(emi1 * homeLoanAmount);
  const [totalEMI, setTotalEMI] = useState(emi * tenure);
  const [payment, setPayment] = useState(homeLoanAmount + totalEMI);

  function handleHomeLoan(event) {
    setHomeLoanAmount(event.target.value.replace(/,/g, ""));
  }

  function handleInterestRate(event) {
    setInterestRate(event.target.value);
  }
  function handleHomeLoanSlider(event, value) {
    setHomeLoanAmount(value);
  }

  function handleInterestRateSlider(event, value) {
    setInterestRate(value);
  }

  function handleTenureSlider(event, value) {
    setTenure(value);
  }

  function handletenure(event) {
    setTenure(+event.target.value);
  }

  function handleClick(event) {
    if (event.target.value === "Mo") {
      setCustomTenure((prevValue) => {
        return { ...prevValue, max: 12 };
      });
    } else if (event.target.value === "Yr") {
      setCustomTenure((prevValue) => {
        return { ...prevValue, max: 30 };
      });
    }
  }

  function calculate(event) {
    setEMI1(interestRate * 0.01);
    setEMI(emi1 * homeLoanAmount);
    //below is total interest payable; change the formula accordingly casue i am not sure of this one
    setTotalEMI(emi * tenure);
    setPayment(homeLoanAmount + totalEMI);
    console.log(payment);
    event.preventDefault();
  }

  return (
    <div className={styles2.App}>
      <nav
        style={{
          width: "100%",
          padding: "2rem 0",
          backgroundColor: "#A5B0A8",
          borderTopRadius: "2px"
        }}
      >
        <button
          className={styles2.lang}
          onClick={() => handleClickTranslate("en")}
        >
          {" "}
          <img
            height="25px"
            src="https://www.flaticon.com/svg/static/icons/svg/197/197374.svg"
          />{" "}
          English
        </button>
        <button
          className={styles2.lang}
          onClick={() => handleClickTranslate("fr")}
        >
          {" "}
          <img
            height="25px"
            src="https://www.flaticon.com/svg/static/icons/svg/197/197560.svg"
          />{" "}
          French
        </button>
      </nav>
      <div
        className="frame"
        style={{
          marginBottom: "0",
          width: "100%",
          padding: "2rem 0",
          backgroundColor: " #E1E0D6"
        }}
      >
        <form className={styles2.realdeal} onSubmit={calculate}>
          {/* --------------------HOME LOAN ----------------------------- */}
          <div className={styles2.loandiv}>
            <h3 className="setColor">{t("HomeLoan.1")} </h3>
            <NumberFormat
              className={styles2.inputsss}
              value={homeLoanAmount}
              onChange={handleHomeLoan}
              thousandSeparator={true}
              thousandsGroupStyle="lakh"
            />{" "}
            <button className={styles2.money} type="button">
              ₹
            </button>
            <button className={styles2.money2} type="button">
              €
            </button>
            <div className={styles2.slideb}>
              <Slider
                style={customStyle}
                onChange={handleHomeLoanSlider}
                min={0}
                max={20000000}
                defaultValue={0}
                value={homeLoanAmount}
                aria-labelledby="discrete-slider-custom"
                marks={Marks.map((ele) => ele)}
              />
            </div>
          </div>
          {/* ---------------------INTEREST RATE----------------------------------- */}
          <h3>{t("InterestRate.1")}</h3>
          <input
            className={styles2.inputsss2}
            type="text"
            onChange={handleInterestRate}
            value={interestRate}
          />{" "}
          <button className={styles2.money} type="button">
            %
          </button>
          <div>
            <Slider
              style={customStyle}
              onChange={handleInterestRateSlider}
              min={0}
              max={20}
              step={2.5}
              defaultValue={0}
              value={interestRate}
              aria-labelledby="discrete-slider-custom"
              marks={InterestRange.map((ele) => ele)}
            />
          </div>
          {/*---------------------TENURE-------------------------------  */}
          <h3>{t("LoanTenure.1")}</h3>
          <input
            className={styles2.inputsss3}
            onChange={handletenure}
            type="number"
            placeholder="Enter Tenure"
            value={tenure}
          />
          <button className={styles2.money} onClick={handleClick} value="Yr">
            Yr
          </button>
          <button className={styles2.money2} onClick={handleClick} value="Mo">
            Mo
          </button>
          <div>
            <Slider
              className={styles2.slide}
              style={customStyle}
              min={customTenure.min}
              max={customTenure.max}
              onChange={handleTenureSlider}
              value={tenure}
              marks={true}
              valueLabelDisplay="on"
            />
          </div>
          <button className="btn btn-secondary btn-outline-light submit">
            calculate
          </button>
        </form>
      </div>
      <div>
        <CalculateRates
          emi={emi}
          totalEMI={totalEMI}
          payment={payment}
          homeLoanAmount={homeLoanAmount}
          payments={payment}
          t={t}
        />
      </div>
    </div>
  );
}

export default HomeLoan;
