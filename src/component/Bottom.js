import React, { Component } from "react";
import "./Bottom.css";

class Bottom extends Component {
  render() {
    const { onRemake, onQRScan, QRShow } = this.props;
    return (
      <div>
        {QRShow ? (
          <button className="Btn" name="qrscan" onClick={onQRScan}>
            돌아가기
          </button>
        ) : (
          <div>
            <button className="Btn" name="remake" onClick={onRemake}>
              다시 만들기
            </button>
            <button className="Btn" name="qrscan" onClick={onQRScan}>
              당첨번호 확인
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Bottom;
