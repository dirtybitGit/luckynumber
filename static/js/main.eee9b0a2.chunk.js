(this["webpackJsonplucky-number"]=this["webpackJsonplucky-number"]||[]).push([[0],{11:function(e,n,t){e.exports=t(29)},16:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(8),l=t.n(c),u=(t(16),t(1)),o=t(2),i=t(4),m=t(3),s=t(5),h=t(9),d=t.n(h),v=(t(24),t(25),function(e){function n(){return Object(u.a)(this,n),Object(i.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props,n=e.onRemake,t=e.onQRScan,a=e.QRShow;return r.a.createElement("div",null,a?r.a.createElement("button",{className:"Btn",name:"qrscan",onClick:t},"\ub3cc\uc544\uac00\uae30"):r.a.createElement("div",null,r.a.createElement("button",{className:"Btn",name:"remake",onClick:n},"\ub2e4\uc2dc \ub9cc\ub4e4\uae30"),r.a.createElement("button",{className:"Btn",name:"qrscan",onClick:t},"\ub2f9\ucca8\ubc88\ud638 \ud655\uc778")))}}]),n}(a.Component)),f=(t(26),function(e){function n(){return Object(u.a)(this,n),Object(i.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(){return null!==this.props.num}},{key:"render",value:function(){var e=this.props.num;return r.a.createElement("div",{className:"numLine"},r.a.createElement("div",{className:"numbox"},r.a.createElement("div",{className:"numTitle"},e.key+1,"\ubc88\uc9f8 \uc22b\uc790"),r.a.createElement("div",{className:"Numbers"},r.a.createElement("div",null,r.a.createElement("span",null,e.num1)),r.a.createElement("div",null,r.a.createElement("span",null,e.num2)),r.a.createElement("div",null,r.a.createElement("span",null,e.num3)),r.a.createElement("div",null,r.a.createElement("span",null,e.num4)),r.a.createElement("div",null,r.a.createElement("span",null,e.num5)),r.a.createElement("div",null,r.a.createElement("span",null,e.num6)))))}}]),n}(a.Component)),p=(t(27),function(e){function n(){return Object(u.a)(this,n),Object(i.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props.numbers.map((function(e){return r.a.createElement(f,{num:e,index:e.key,key:e.key})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:"firstString"},"\uc7ac\ubbf8\ub85c \ubcf4\ub294"),r.a.createElement("div",{className:"secondString"},"\ub85c\ub610 \ubc88\ud638 \uc0dd\uc131\uae30")),r.a.createElement("div",null,e))}}]),n}(a.Component)),E=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).LineCount=5,t.state={numbers:[],QRResult:"",QRShow:!1},t.initArray=function(e,n){for(var t=0;t<n;t++)e[t]=0;return e},t.getOneNum=function(e){var n=0,a=new Array(45);a=t.initArray(a,45);for(var r=0;r<e;r++)a[n=Math.floor(45*Math.random())]=a[n]+1;var c=0;for(r=0;r<45;r++)a[r]>c&&(n=r,c=a[r]);return n+1},t.clearNumList=function(){var e=t.state.numbers;t.setState({numbers:e.splice(0,e.length)})},t.makeNumList=function(){t.clearNumList();for(var e=[],n=0,a=0;a<t.LineCount;a++){for(var r=[],c=0;c<6;c++){for(n=t.getOneNum(1e5);-1!==r.indexOf(n);)n=t.getOneNum(1e5);r=r.concat(n)}r=r.sort((function(e,n){return e-n})),e=e.concat({key:a,num1:r[0],num2:r[1],num3:r[2],num4:r[3],num5:r[4],num6:r[5]})}t.setState({numbers:e})},t.handleRemake=function(){t.makeNumList()},t.onQRScan=function(){t.setState({QRShow:!t.state.QRShow})},t.QRHandleScan=function(e){e&&(t.setState({QRResult:e}),console.log(e))},t.QRHandleErr=function(e){console.log(e)},t}return Object(s.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handleRemake()}},{key:"render",value:function(){var e=this.state,n=e.numbers,t=e.QRShow;return r.a.createElement("div",{className:"App"},t?r.a.createElement("div",null,r.a.createElement(d.a,{delay:300,onError:this.QRHandleErr,onScan:this.QRHandleScan,className:"QRScanArea"}),r.a.createElement("p",null,this.state.QRResult)):r.a.createElement(p,{numbers:n}),r.a.createElement(v,{onRemake:this.handleRemake,onQRScan:this.onQRScan,QRShow:t}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.eee9b0a2.chunk.js.map