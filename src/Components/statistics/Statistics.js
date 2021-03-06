import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import StatisticsItem from "./statisticsItem/StatisticsItem";

const Statistics = ({ statistic, title }) => {
  return (
    <section className={styles.stat}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {statistic.map((stat) => {
          return <StatisticsItem key={stat.id} stat={stat} />;
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statistic: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default Statistics;
