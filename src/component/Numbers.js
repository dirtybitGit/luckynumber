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
                        <div><span>{num.num1}</span></div>
                        <div><span>{num.num2}</span></div>
                        <div><span>{num.num3}</span></div>
                        <div><span>{num.num4}</span></div>
                        <div><span>{num.num5}</span></div>
                        <div><span>{num.num6}</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Numbers;