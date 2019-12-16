import React, {Component} from 'react';
import Numbers from './Numbers';
import './NumberList.css';

class NumberList extends Component {

    render() {
        const {numbers} = this.props;
        
        const list = numbers.map(
            item => (
                <Numbers num={item} index={item.key} key={item.key} />
            )
        );

        return(
            <div>
                <div className='top'></div>
                <div>{list}</div>
            </div>
        )
        
    }
}

export default NumberList;