import React from "react";
import PropTypes from "prop-types";

function ForecastSummary({ date, description, icon, temperature }) {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">{date}</div>
      <div className="forecast-summary_icon">{icon}</div>
      <div className="forecast-summary_temperature">{temperature.max}@deg;c</div>
      <div className="forecast-summary_description">{description}</div>
    </div>
  );
}

ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
  };
};

export default ForecastSummary;
