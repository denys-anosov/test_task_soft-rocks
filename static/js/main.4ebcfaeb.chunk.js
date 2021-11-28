(this.webpackJsonpreact_ts_template=this.webpackJsonpreact_ts_template||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),r=n(19),a=n.n(r),c=n(4),o=n(6),l=n.n(o),u=n(10),b=n(18),d=n(11),j=n(12),p=n(15),h=n(14),m=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=(n(25),n(13)),O=n(9),x=(n(26),n(17)),v=n.n(x),_=n(0),C=function(e){var t=e.isVisible,n=e.setVisibility,s=e.onDelete,i=e.selectedUserId;return Object(_.jsx)("div",{className:v()("Popup",{"Popup Popup--active":t}),onClick:function(){return n(!1)},children:Object(_.jsxs)("div",{className:v()("Popup__content",{"Popup__content Popup__content--active":t}),onClick:function(e){return e.stopPropagation()},children:[Object(_.jsx)("p",{className:"Popup__heading",children:"Do you confirm deletion?"}),Object(_.jsx)("button",{className:"Popup__button",onClick:function(){return s(i),void n(!1)},type:"button",children:"Yes"}),Object(_.jsx)("button",{className:"Popup__button",type:"button",onClick:function(){return n(!1)},children:"No"})]})})},y=(n(28),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={id:0,name:"",username:"",email:"",phone:"",website:"",isConfirmationVisible:!1,selectedUserId:0},e.inputHandler=function(t){var n=t.target,s=n.name,i=n.value;e.setState((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(f.a)({},s,i))}))},e.submitHandler=function(t){t.preventDefault();var n=Object(O.a)(Object(O.a)({},e.state),{},{id:e.props.visibleUsers.length+1});e.props.onAdd(n),e.setState({id:0,name:"",username:"",email:"",phone:"",website:""})},e.setConfirmationVisibility=function(t){e.setState({isConfirmationVisible:t})},e.deleteClickHandler=function(t){e.setConfirmationVisibility(!0),e.setState({selectedUserId:t})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,s=t.username,i=t.email,r=t.phone,a=t.website;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{className:"Main-heading",children:"List of users"}),Object(_.jsxs)("div",{className:"Main-page",children:[Object(_.jsx)(C,{isVisible:this.state.isConfirmationVisible,setVisibility:this.setConfirmationVisibility,onDelete:this.props.onDelete,selectedUserId:this.state.selectedUserId}),Object(_.jsx)("ul",{className:"ContactList",children:this.props.visibleUsers.map((function(t){return Object(_.jsxs)("li",{className:"ContactList__item",children:[Object(_.jsxs)("div",{children:["".concat(t.id,". "),t.name]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("button",{className:"ContactList__button",onClick:function(){return e.deleteClickHandler(t.id)},type:"button",children:"Delete user"}),Object(_.jsx)("button",{className:"ContactList__button",type:"button",children:Object(_.jsx)(c.b,{to:"contact-info",onClick:function(){return e.props.onFindUser(t.id)},className:"ContactList__button--link",children:"More info"})})]})]},t.id)}))}),Object(_.jsxs)("form",{className:"Form",onSubmit:this.submitHandler,children:[Object(_.jsx)("p",{className:"Form__name",children:"Add new user"}),Object(_.jsx)("input",{onChange:this.inputHandler,value:n,name:"name",type:"text",placeholder:"Name",required:!0}),Object(_.jsx)("input",{onChange:this.inputHandler,value:s,name:"username",type:"text",placeholder:"Username"}),Object(_.jsx)("input",{onChange:this.inputHandler,value:i,name:"email",type:"email",placeholder:"Email",required:!0}),Object(_.jsx)("input",{onChange:this.inputHandler,value:r,name:"phone",type:"tel",placeholder:"Phone"}),Object(_.jsx)("input",{onChange:this.inputHandler,value:a,name:"website",type:"text",placeholder:"Website"}),Object(_.jsx)("button",{className:"Form__button",type:"submit",children:"Submit"})]})]})]})}}]),n}(i.a.Component)),N=(n(29),function(e){var t=e.currentUser,n=t.id,s=t.name,i=t.username,r=t.email,a=t.phone,o=t.website;return Object(_.jsxs)(_.Fragment,{children:[n?Object(_.jsx)("div",{children:Object(_.jsxs)("ul",{className:"ContactInfo__list",children:[Object(_.jsxs)("li",{children:["Name: ",s]}),Object(_.jsxs)("li",{children:["Username: ",i]}),Object(_.jsxs)("li",{children:["Email: ",r]}),Object(_.jsxs)("li",{children:["Phone: ",a]}),Object(_.jsxs)("li",{children:["Website: ",o]})]})}):Object(_.jsx)("div",{className:"ContactInfo__error",children:"Oops, something went wrong..."}),Object(_.jsx)("button",{className:"ContactInfo__button",type:"button",children:Object(_.jsx)(c.b,{className:"ContactInfo__button--link",to:"/",children:"Go back"})})]})}),U=n(2),g=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={users:[],currentUser:{id:0,name:"",username:"",email:"",phone:"",website:""}},e.addUser=function(t){e.setState((function(e){return{users:[].concat(Object(b.a)(e.users),[t])}}))},e.deleteUser=function(t){e.setState((function(e){return{users:Object(b.a)(e.users.filter((function(e){return e.id!==t})))}}))},e.findUserById=function(t){var n=e.state.users.find((function(e){return e.id===t}));n&&e.setState({currentUser:n})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,this.setState({users:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.users;return Object(_.jsx)("main",{className:"Container",children:Object(_.jsx)("section",{className:"App",children:Object(_.jsxs)(U.d,{children:[Object(_.jsx)(U.b,{path:"/",element:Object(_.jsx)(y,{visibleUsers:e,onAdd:this.addUser,onDelete:this.deleteUser,onFindUser:this.findUserById})}),Object(_.jsx)(U.b,{path:"/contact-info",element:Object(_.jsx)(N,{currentUser:this.state.currentUser})}),Object(_.jsx)(U.b,{path:"*",element:Object(_.jsx)(U.a,{to:"/"})})]})})})}}]),n}(i.a.Component),k=g;a.a.render(Object(_.jsx)(c.a,{children:Object(_.jsx)(k,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.4ebcfaeb.chunk.js.map