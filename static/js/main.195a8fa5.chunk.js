(this.webpackJsonpreact_ts_template=this.webpackJsonpreact_ts_template||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),s=n(19),a=n.n(s),c=n(11),o=n(9),u=n.n(o),l=n(14),d=n(18),b=n(5),j=n(6),p=n(8),h=n(7),m=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=(n(25),n(15)),O=n(13),v=(n(26),n(17)),x=n.n(v),y=n(1),U=function(e){var t=e.isVisible,n=e.setVisibility,i=e.onDelete,r=e.selectedUserId;return Object(y.jsx)("div",{className:x()("popup",{active:t}),onClick:function(){return n(!1)},children:Object(y.jsxs)("div",{className:x()("popup__content",{active:t}),onClick:function(e){return e.stopPropagation()},children:[Object(y.jsx)("p",{children:"Do you confirm deletion?"}),Object(y.jsx)("button",{onClick:function(){return i(r),void n(!1)},type:"button",children:"Yes"}),Object(y.jsx)("button",{type:"button",onClick:function(){return n(!1)},children:"No"})]})})},C=(n(28),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={id:0,name:"",username:"",email:"",phone:"",website:"",isConfirmationVisible:!1,selectedUserId:0},e.inputHandler=function(t){var n=t.target,i=n.name,r=n.value;e.setState((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(f.a)({},i,r))}))},e.submitHandler=function(t){t.preventDefault();var n=Object(O.a)(Object(O.a)({},e.state),{},{id:e.props.visibleUsers.length+1});e.props.onAdd(n),e.setState({id:0,name:"",username:"",email:"",phone:"",website:""})},e.setConfirmationVisibility=function(t){e.setState({isConfirmationVisible:t})},e.deleteClickHandler=function(t){e.setConfirmationVisibility(!0),e.setState({selectedUserId:t})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,i=t.username,r=t.email,s=t.phone,a=t.website;return Object(y.jsxs)("div",{children:[Object(y.jsx)(U,{isVisible:this.state.isConfirmationVisible,setVisibility:this.setConfirmationVisibility,onDelete:this.props.onDelete,selectedUserId:this.state.selectedUserId}),Object(y.jsx)("ul",{children:this.props.visibleUsers.map((function(t){return Object(y.jsxs)("li",{children:[Object(y.jsx)("div",{children:t.name}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:function(){return e.deleteClickHandler(t.id)},type:"button",children:"Delete user"})}),Object(y.jsx)("div",{children:Object(y.jsx)(c.b,{to:"contact-info",onClick:function(){return e.props.onFindUser(t.id)},children:"More info"})})]},t.id)}))}),Object(y.jsxs)("form",{className:"form",onSubmit:this.submitHandler,children:[Object(y.jsx)("p",{children:"Add new user"}),Object(y.jsx)("input",{onChange:this.inputHandler,value:n,name:"name",type:"text",placeholder:"Name",required:!0}),Object(y.jsx)("input",{onChange:this.inputHandler,value:i,name:"username",type:"text",placeholder:"Username"}),Object(y.jsx)("input",{onChange:this.inputHandler,value:r,name:"email",type:"email",placeholder:"Email",required:!0}),Object(y.jsx)("input",{onChange:this.inputHandler,value:s,name:"phone",type:"tel",placeholder:"Phone"}),Object(y.jsx)("input",{onChange:this.inputHandler,value:a,name:"website",type:"text",placeholder:"Website"}),Object(y.jsx)("button",{type:"submit",children:"Submit"})]})]})}}]),n}(r.a.Component)),w=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={id:0,name:"",username:"",email:"",phone:"",website:""},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){if(this.props.currentUser.id){var e=this.props.currentUser,t=e.id,n=e.name,i=e.username,r=e.email,s=e.phone,a=e.website;this.setState({id:t,name:n,username:i,email:r,phone:s,website:a})}}},{key:"render",value:function(){var e=this.state,t=e.id,n=e.name,i=e.username,r=e.email,s=e.phone,a=e.website;return Object(y.jsx)(y.Fragment,{children:t?Object(y.jsxs)("ul",{children:[Object(y.jsxs)("li",{children:["Name: ",n]}),Object(y.jsxs)("li",{children:["Username: ",i]}),Object(y.jsxs)("li",{children:["Email: ",r]}),Object(y.jsxs)("li",{children:["Phone: ",s]}),Object(y.jsxs)("li",{children:["Website: ",a]})]}):Object(y.jsx)("span",{children:"Oops, something went wrong..."})})}}]),n}(r.a.Component),k=n(2),g=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[],currentUser:{id:0,name:"",username:"",email:"",phone:"",website:""}},e.addUser=function(t){e.setState((function(e){return{users:[].concat(Object(d.a)(e.users),[t])}}))},e.deleteUser=function(t){e.setState((function(e){return{users:Object(d.a)(e.users.filter((function(e){return e.id!==t})))}}))},e.findUserById=function(t){var n=e.state.users.find((function(e){return e.id===t}));n&&e.setState({currentUser:n})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,this.setState({users:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.users;return Object(y.jsx)("main",{className:"App",children:Object(y.jsxs)(k.d,{children:[Object(y.jsx)(k.b,{path:"/",element:Object(y.jsx)(C,{visibleUsers:e,onAdd:this.addUser,onDelete:this.deleteUser,onFindUser:this.findUserById})}),Object(y.jsx)(k.b,{path:"/contact-info",element:Object(y.jsx)(w,{currentUser:this.state.currentUser})}),Object(y.jsx)(k.b,{path:"*",element:Object(y.jsx)(k.a,{to:"/"})})]})})}}]),n}(r.a.Component),S=g;a.a.render(Object(y.jsx)(c.a,{children:Object(y.jsx)(S,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.195a8fa5.chunk.js.map