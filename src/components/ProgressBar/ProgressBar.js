import React from "react";
import PropTypes from "prop-types";

class ProgressBar extends React.Component {
  // you can include the propTypes declaration this way:
  // static propTypes = {
  //   percent: PropTypes.number.isRequired,
  //   width: PropTypes.number.isRequired,
  //   height: PropTypes.number
  // };

  // static defaultProps = {
  //   height: 5
  // };
  getColor = percent => {
    if (this.props.percent === 100) return "green";
    return this.props.percent > 50 ? "lightgreen" : "red";
  };

  getWidthAsPercentOfTotalWidth = () => {
    return parseInt(this.props.width * (this.props.percent / 100), 10);
  };

  render() {
    const { percent, width, height } = this.props;
    return (
      <div style={{ border: "solid 1px lightgray", width: width }}>
                
        <div
          style={{
            width: this.getWidthAsPercentOfTotalWidth(),
            height,
            backgroundColor: this.getColor(percent)
          }}
        />
              
      </div>
    );
  }
}

// Either you can use static (line 5 and 11) to declare PropTypes or you can add separatly:

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,

  /** Bar width */
  width: PropTypes.number.isRequired,

  /** Bar height */
  height: PropTypes.number
};

ProgressBar.defaultProps = {
  height: 5
};

export default ProgressBar;
