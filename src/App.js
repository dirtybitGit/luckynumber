import React,{Component} from 'react';
import './App.css';
import Bottom from './component/Bottom';
import NumberList from './component/NumberList';

class App extends Component {
  
  LineCount = 5;

  state = {
    numbers : [
      // {
      //   key : 0,
      //   num1 : '1',
      //   num2 : '2',
      //   num3 : '3',
      //   num4 : '4',
      //   num5 : '5',
      //   num6 : '6',
      // }
    ]
  }

  initArray = (tmpArray, iCount) => {
    for(var iIndex = 0; iIndex < iCount; iIndex++) {
      tmpArray[iIndex] = 0;
    }
    return tmpArray;
  };

  getOneNum = (iCount) => {
    var iRandNum = 0;
    var tmpArray = new Array(45);

    tmpArray = this.initArray(tmpArray,45);
    for(var iIndex = 0; iIndex < iCount; iIndex++) {
      iRandNum = Math.floor(Math.random() * 45) ;
      tmpArray[iRandNum] = tmpArray[iRandNum] + 1;
    }
    var iMaxCnt = 0;
    
    for(iIndex = 0; iIndex < 45; iIndex++) {
        if(tmpArray[iIndex] > iMaxCnt) {
          iRandNum = iIndex;
          iMaxCnt = tmpArray[iIndex];
        }
    }
    return iRandNum + 1;    
  }

  clearNumList = () => {

    const {numbers} = this.state;
    // 상태 모두 삭제
    this.setState({
      numbers : numbers.splice(0,numbers.length)
    });    

  }

  makeNumList = () => {

    this.clearNumList();

    var newNum = [];
    
    var tmpNum = 0;


    for(var iIndex = 0; iIndex < this.LineCount; iIndex++) {
        var aryTmp = [];
        for(var iIndex1 = 0; iIndex1 < 6; iIndex1++) {
          tmpNum = this.getOneNum(100000);
          while(aryTmp.indexOf(tmpNum) !== -1) {
            tmpNum = this.getOneNum(100000);
          }
          aryTmp = aryTmp.concat(tmpNum);
        }
        aryTmp = aryTmp.sort(function(a,b){
          return a - b;
        });
        newNum = newNum.concat({
            key : iIndex,
            num1 : aryTmp[0], 
            num2 : aryTmp[1], 
            num3 : aryTmp[2], 
            num4 : aryTmp[3],  
            num5 : aryTmp[4],  
            num6 : aryTmp[5]
        })
    }

    this.setState({
      numbers : newNum
    });
  }


  handleRemake = () => {
    this.makeNumList();
  }

  componentDidMount() {
    this.handleRemake();
  }

  render() {
    const {numbers} = this.state;

    return (
      <div className="App">
        <NumberList numbers={numbers} />
        <Bottom onRemake={ this.handleRemake }/>
      </div>
    );
  }
}

export default App;
