import React, { Component } from "react";
import "./Bottom.css";

class Bottom extends Component {
  render() {
    const { onRemake, onQRScan } = this.props;
    return (
      <div>
        <button className="Btn" name="remake" onClick={onRemake}>
          다시 만들기
        </button>
        <button className="Btn" name="qrscan" onClick={onQRScan}>
          당첨번호 확인하기
        </button>
      </div>
    );
  }
}

export default Bottom;
