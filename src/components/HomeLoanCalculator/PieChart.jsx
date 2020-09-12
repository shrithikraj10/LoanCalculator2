import React from "react";
import { Pie } from "react-chartjs-2";
import styles from "./mystyles.module.css";
function PieChart({ principalAmount, totalInterest, t }) {
  var state = {
    labels: [t("HomeLoan.5"), t("InterestRate.3")],
    datasets: [
      {
        data: [principalAmount, totalInterest],
        backgroundColor: ["green", "orange"] 
      }
    ]
  };

  return (
    <div className={styles.piee}>
      <h3>{t("HomeLoan.4")}</h3>
      <Pie className={styles.actualpiee}
        data={{
          labels: state.labels,
          datasets: state.datasets
        }}
        height="80%"
      />
    </div>
  );
}

export default PieChart;
