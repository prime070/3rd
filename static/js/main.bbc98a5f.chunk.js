(this.webpackJsonp3rd=this.webpackJsonp3rd||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),l=(a(12),a(3)),i=a(4),s=a(6),u=a(5),h=(a(13),function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:"tc pa2 ma2 dib ba bw2 grow bg-washed-green"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t)}),r.a.createElement("h2",null,a),r.a.createElement("p",null,n))}),m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(h,{key:t[a].id,id:t[a].id,name:t[a].name,email:t[a].email})})))},d=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"ma3 pa2"},r.a.createElement("input",{type:"search",placeholder:"search robot",className:"bg-washed-yellow ba",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflow:"scroll",height:"800px",border:"5px solid purple"}},e.children)},p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robotList:[],searchfield:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robotList:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robotList,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLocaleLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriend"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(m,{robots:n}))):r.a.createElement("h1",{className:"tc"},"LOADING")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.bbc98a5f.chunk.js.map