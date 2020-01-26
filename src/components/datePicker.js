import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class TideDatePicker extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    // 表示を変更したのち、リフトアップした画像パスを変更
    this.setState({
      startDate: date
    });
    this.props.setTideImg(date)
  };

  render() {
    return (
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default TideDatePicker