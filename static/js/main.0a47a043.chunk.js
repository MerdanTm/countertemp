(this.webpackJsonpcountertemp=this.webpackJsonpcountertemp||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(8),i=n.n(o),s=(n(13),n.p,n(14),n(2)),a=n(3),l=n(5),j=n(4),h=(n(15),n(6)),u=n(0),b=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(s.a)(this,n),c=e.call(this),console.log("BlogItem Constructor Method...","Props:::>",t),c.props.appClick=c.props.appClick.bind(Object(h.a)(c)),c}return Object(a.a)(n,[{key:"clickItem",value:function(){console.log("Button clicked from BlogItem Comp.")}},{key:"render",value:function(){console.log(this.props);var t=this.props,e=t.blogMessage,n=t.nowNmbr;return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:this.clickItem,children:"Click To Item"}),Object(u.jsx)("h1",{children:this.props.title}),Object(u.jsx)("p",{children:this.props.description}),Object(u.jsx)("h3",{children:this.props.dataXYZ}),Object(u.jsx)("h4",{children:e}),Object(u.jsx)("h4",{children:n})]})}}]),n}(c.Component);b.defaultProps={description:"One Desc",title:"One Title"};c.Component;var d=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).state={name:"Tommy",age:12,address:"Newyork"},c.clickButton=function(){console.log("Click in Header.js"),c.props.appjsClick("123"),c.setState({name:"New Tommy"})},c.changeState=function(){c.setState({name:"Changed Tommy "+Math.floor(4*Math.random())})},console.log(t),c}return Object(a.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Header Comp."}),Object(u.jsx)("h3",{children:this.state.age}),Object(u.jsx)("h2",{children:this.state.name}),Object(u.jsx)("button",{onClick:this.clickButton,children:"Add"}),Object(u.jsx)("button",{onClick:this.changeState,children:"Change State"})]})}}]),n}(c.Component),p=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={number:0},t.incrementState=function(){t.setState({number:t.state.number+1})},t.decrementState=function(){0==!t.state.number&&t.setState({number:--t.state.number})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:this.state.number}),Object(u.jsx)("button",{onClick:this.decrementState,children:"-"}),Object(u.jsx)("button",{onClick:this.incrementState,children:"+"})]})}}]),n}(c.Component),O=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"FOOTER COMPONENT"})})};var m=function(){return Object(u.jsxs)("div",{className:"App",htmlFor:"",children:[Object(u.jsx)(d,{appjsClick:function(){console.log("Click in App.js")}}),Object(u.jsx)(p,{}),Object(u.jsx)(O,{})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),o(t),i(t)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.0a47a043.chunk.js.map