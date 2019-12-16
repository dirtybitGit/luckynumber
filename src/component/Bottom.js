import React, {Component} from 'react';
import './Bottom.css'

class Bottom extends Component {

    render() {
        const {onRemake} = this.props;
        return (
            <div>
                <button className='Btn' name="remake" onClick={onRemake}>다시 만들기</button>
            </div>
        )
    }
}

export default Bottom;