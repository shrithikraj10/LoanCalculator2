import React from "react";
import PieChart from "./PieChart";
import NumberFormat from "react-number-format";
import styles from "./mystyles.module.css";

function CalculateRates(props) {
  return (
    <div className={styles.divcolor}>
      <div className={styles.everything}>
        <div className={styles.framing}>
          <p>{props.t("HomeLoan.2")}</p>
          <NumberFormat
            className={styles.test}
            displayType={"text"}
            thousandSeparator={true}
            thousandsGroupStyle="lakh"
            prefix={props.t("Currency.1")}
            value={props.emi}
          />
        </div>
        <hr className={styles.pok} />
        <div className={styles.framing}>
          <p>{props.t("InterestRate.2")}</p>
          <NumberFormat
            className={styles.test}
            displayType={"text"}
            thousandSeparator={true}
            thousandsGroupStyle="lakh"
            prefix={props.t("Currency.1")}
            value={props.totalEMI}
          />
        </div>
        <hr className={styles.pok} />
        <div className={styles.framing}>
          <p>{props.t("HomeLoan.3")}</p>
          <NumberFormat
            className={styles.test}
            displayType={"text"}
            thousandSeparator={true}
            thousandsGroupStyle="lakh"
            prefix={props.t("Currency.1")}
            value={props.payment}
          />
        </div>
      </div>
      <div className={styles.piechart}>
        <PieChart
          className={styles.actualpie}
          principalAmount={props.homeLoanAmount}
          totalInterest={props.payments}
          t={props.t}
        />
      </div>
    </div>
  );
}

export default CalculateRates;
