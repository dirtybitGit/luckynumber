import React, {Component} from 'react';
import './Numbers.css';

class Numbers extends Component {

    shouldComponentUpdate() {
        const {num} = this.props;
        if(num === null) return false;
        return true;
    }

     render() {
        const {num} = this.props
        return(
            <div className='numLine'>
                <div className='numbox'>
                    <div className='numTitle'>{num.key + 1}번째 숫자</div>
                    <div className="Numbers">
                        <div>{num.num1}</div>
                        <div>{num.num2}</div>
                        <div>{num.num3}</div>
                        <div>{num.num4}</div>
                        <div>{num.num5}</div>
                        <div>{num.num6}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Numbers;