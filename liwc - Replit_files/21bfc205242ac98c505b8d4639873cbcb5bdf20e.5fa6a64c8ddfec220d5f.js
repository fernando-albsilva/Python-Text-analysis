(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"3gM7":function(e,t,r){"use strict";var n=r("vJKn"),a=r.n(n),s=r("rg98"),c=r("G5Ub");t.a=function(){var e=Object(s.a)(a.a.mark((function e(t,r){var n,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}n=t.user,e.next=13;break;case 4:if(!((s=r.getState().user)&&s.userInfo.isLoggedIn&&s.userInfo)){e.next=9;break}n=s.userInfo,e.next=13;break;case 9:return e.next=11,Object(c.b)("/is_authenticated");case 11:(o=e.sent).success&&(n=o.user);case 13:return n&&(t&&(n=JSON.parse(JSON.stringify(n))),r.dispatch({type:"FETCH_USER_INFO_SUCCESS",user:n})),e.abrupt("return",{user:n});case 15:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},"7J1T":function(e,t,r){"use strict";r.d(t,"f",(function(){return l})),r.d(t,"d",(function(){return p})),r.d(t,"a",(function(){return d})),r.d(t,"e",(function(){return f})),r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r("cpVT"),a=r("vJKn"),s=r.n(a),c=r("rg98"),o=r("G5Ub");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){var t=e.username,r=e.email,n=e.password,a=e.teacher,i=e.hCaptchaResponse,u=e.hCaptchaSiteKey,l=e.privacyInvite,p=e.source;return function(){var e=Object(c.a)(s.a.mark((function e(c,d){var f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"FETCH_SIGNUP_REQUEST"}),e.prev=1,e.next=4,Object(o.d)("/signup",{email:r,username:t,password:n,teacher:a,privacyInvite:l,hCaptchaResponse:i,hCaptchaSiteKey:u,source:p});case 4:f=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),c({type:"FETCH_SIGNUP_FAILURE",error:e.t0}),e.abrupt("return",{error:e.t0});case 11:return c({type:"FETCH_SIGNUP_SUCCESS",user:f}),e.abrupt("return",{user:d().user.userInfo});case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()}function p(e){var t=e.username,r=e.password,n=e.teacher,a=e.hCaptchaResponse,i=e.hCaptchaSiteKey;return function(){var e=Object(c.a)(s.a.mark((function e(c,u){var l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"FETCH_LOGIN_REQUEST"}),e.prev=1,e.next=4,Object(o.d)("/login",{username:t,password:r,teacher:n,hCaptchaResponse:a,hCaptchaSiteKey:i});case 4:l=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),c({type:"FETCH_LOGIN_FAILURE",error:e.t0}),e.abrupt("return",{error:e.t0});case 11:return c({type:"FETCH_LOGIN_SUCCESS",user:l}),e.abrupt("return",{user:u().user.userInfo});case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()}function d(e){var t=e.provider;return function(){var e=Object(c.a)(s.a.mark((function e(r,n){var a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"FETCH_USER_INFO_REQUEST"}),e.prev=1,e.next=4,Object(o.b)("/is_authenticated");case 4:a=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),r({type:"FETCH_USER_INFO_FAILURE",error:e.t0}),e.abrupt("return",{error:e.t0});case 11:if(a.success){e.next=16;break}return(c=new Error("Unauthorized")).status=401,r({type:"FETCH_USER_INFO_FAILURE",error:c}),e.abrupt("return",{error:c});case 16:return r({type:"FETCH_USER_INFO_SUCCESS",user:u(u({},a.user),{},{loginMethod:t,should_complete_profile:a.should_complete_profile})}),e.abrupt("return",{user:n().user.userInfo});case 18:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()}function f(){return{type:"AUTH_MODAL_SHOW"}}function b(){return{type:"AUTH_MODAL_INCREMENT_PROMPT_COUNT"}}function h(){return{type:"AUTH_MODAL_DISSMISS"}}},"8TBL":function(e,t,r){"use strict";var n=r("nKUr"),a=r("MX0m"),s=r.n(a),c=r("q1tI"),o=r("vJKn"),i=r.n(o),u=r("rg98"),l=r("xvhg"),p=r("/MKj"),d=r("XLFt"),f=r("KRxe"),b=r("eWa3"),h=r.n(b),j=r("91Rb"),g=r.n(j),m=r("G5Ub"),x={email:function(){var e=Object(u.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h()(t)){e.next=2;break}return e.abrupt("return",{message:"Invalid email address"});case 2:return e.next=4,Object(m.d)("/data/user/exists",{email:t});case 4:if(r=e.sent,!r.exists){e.next=8;break}return e.abrupt("return",{message:"Email already in use"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),username:function(){var e=Object(u.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g()(t,{min:2,max:15})){e.next=2;break}return e.abrupt("return",{message:"Your username must be between 2 and 15 characters"});case 2:if(t.match(/^[0-9a-zA-Z]+$/)){e.next=4;break}return e.abrupt("return",{message:"Your username can only contain alphanumeric characters (letters A-Z, numbers 0-9)"});case 4:return e.next=6,Object(m.d)("/data/user/exists",{username:t});case 6:if(r=e.sent,!r.exists){e.next=10;break}return e.abrupt("return",{message:"Username is taken"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),password:function(e){if(!g()(e,{min:6,max:255}))return{message:"Your password must be at least 6 characters long"}},school:function(e){0}},v=r("7J1T"),O=r("JxgA"),w=r("up5I"),y=r("IdsG"),k=r("yzOi"),C=r("xom/"),S="a20d9b66-6747-404a-9393-c449c4611661";var E=function(e){var t=e.email,r=void 0===t?"":t,a=e.username,o=void 0===a?"":a,b=e.password,h=void 0===b?"":b,j=e.schoolName,g=void 0===j?"":j,m=e.isTeacher,E=e.randomUsername,R=void 0===E?"":E,N=e.privacyInvite,_=e.onSubmit,T=e.onChangeAuth,U=e.toggleTeacher,I=e.source,P=void 0===I?"explicit":I,L=c.useState(!1),F=Object(l.a)(L,2),A=F[0],D=F[1],H=Object(p.e)(),B=Object(k.a)(N?R:o,x.username),G=Object(k.a)(N?"".concat(R,"@teams.noreply.replit.com"):r,x.email),z=Object(k.a)(h||"",x.password),K=Object(k.a)(g||"",x.school),M=function(){var e=Object(u.a)(i.a.mark((function e(t){var r,n,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),D(!0),e.next=4,B.validate();case 4:if(!e.sent){e.next=8;break}return D(!1),e.abrupt("return");case 8:return e.next=10,G.validate();case 10:if(!e.sent){e.next=14;break}return D(!1),e.abrupt("return");case 14:return e.next=16,z.validate();case 16:if(!e.sent){e.next=20;break}return D(!1),e.abrupt("return");case 20:return e.prev=20,e.next=23,Object(O.b)(S);case 23:r=e.sent,e.next=31;break;case 26:return e.prev=26,e.t0=e.catch(20),_({error:"Something went wrong trying to submit. Please try again."}),D(!1),e.abrupt("return");case 31:return e.next=33,H(Object(v.f)({username:B.value,password:z.value,privacyInvite:N,email:G.value,teacher:m,hCaptchaResponse:r,hCaptchaSiteKey:S,source:P}));case 33:if(n=e.sent,a=n.user,s=n.error,D(!1),!s){e.next=41;break}if(_({error:s.status&&s.message?s.message:"Something went wrong"}),!(s.status>=500)){e.next=41;break}throw s;case 41:a&&_({user:a});case 42:case"end":return e.stop()}}),e,null,[[20,26]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsxs)("form",{onSubmit:M,className:"jsx-2210825178",children:[N&&Object(n.jsx)("div",{className:"jsx-2210825178 invite-message",children:Object(n.jsx)(y.a,{size:"small",children:"Use our default or pick a username that's not your real name."})}),Object(n.jsxs)(C.a,{align:"center",justify:"center",children:[Object(n.jsx)("h1",{className:"jsx-2210825178",children:m?"Teacher Sign up":"Sign up"}),!N&&Object(n.jsx)("div",{className:"jsx-2210825178 teacher-cta-container",children:Object(n.jsx)(C.b,{align:"center",onClick:function(e){e.preventDefault(),U()},children:m?Object(n.jsx)("a",{className:"jsx-2210825178 teacher-cta-text",children:"Not a teacher?"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("a",{className:"jsx-2210825178 teacher-cta-text",children:"Are you a teacher?"}),Object(n.jsx)("a",{className:"jsx-2210825178 teacher-cta-text",children:"Sign up for our education product."})]})})})]}),Object(n.jsxs)(C.b,{align:"stretch",spacing:1,children:[Object(n.jsx)(f.b,{ref:B.ref,placeholder:"Username",onBlur:B.handleBlur,validationResults:B.error?[{message:B.error.message,state:"error"}]:void 0,onChange:function(e){return B.setValue(e.target.value)},value:B.value,autoComplete:"on",autoFocus:!0,autoCorrect:"off",autoCapitalize:"off"}),N?null:Object(n.jsx)(f.b,{placeholder:"Email",onBlur:G.handleBlur,validationResults:G.error?[{message:G.error.message,state:"error"}]:void 0,onChange:function(e){return G.setValue(e.target.value)},value:G.value,autoComplete:"on",autoCorrect:"off",autoCapitalize:"off"}),Object(n.jsx)(f.b,{type:"password",placeholder:"Password",onBlur:z.handleBlur,validationResults:z.error?[{message:z.error.message,state:"error"}]:void 0,onChange:function(e){return z.setValue(e.target.value)},value:z.value}),m?Object(n.jsx)(f.b,{type:"text",placeholder:"School or Organization name",onBlur:K.handleBlur,validationResults:K.error?[{message:K.error.message,state:"error"}]:void 0,onChange:function(e){return K.setValue(e.target.value)},value:K.value}):null,Object(n.jsxs)("div",{className:"jsx-2210825178",children:[A?Object(n.jsx)(d.a,{style:{margin:"0 auto",width:"32px",height:"32px"}}):Object(n.jsx)(w.a,{type:"submit",color:"primary",filled:!0,fullWidth:!0,children:"Create account"}),!N&&Object(n.jsx)("div",{className:"jsx-2210825178 options-row",children:Object(n.jsx)(C.b,{align:"center",justify:"space-between",children:T&&Object(n.jsx)(y.a,{size:"small",children:Object(n.jsx)("a",{onClick:function(e){T&&(e.preventDefault(),T())},className:"jsx-2210825178 signup-form-switcher",children:"Already have an account? Log in"})})})})]})]}),Object(n.jsx)(s.a,{id:"2210825178",children:[".invite-message.jsx-2210825178{text-align:center;padding:var(--spacing-1);}",".signup-form-bottom.jsx-2210825178{font-size:var(--font-size-desktop-text-small);color:var(--color-foreground-2);}",".signup-form-switcher.jsx-2210825178{cursor:pointer;}",".options-row.jsx-2210825178{wrap:nowrap;line-height:var(--font-size-desktop-text-small);margin-top:var(--spacing-3);}",".teacher-cta-container.jsx-2210825178{margin:var(--spacing-2) 0;cursor:pointer;}",".teacher-cta-text.jsx-2210825178{color:var(--color-primary-1);-webkit-text-decoration:none;text-decoration:none;}",".teacher-cta-text.jsx-2210825178:hover{-webkit-text-decoration:underline;text-decoration:underline;}"]})]}),!1]})},R=r("H+61"),N=r("UlJF"),_=r("7LId"),T=r("VIvw"),U=r("iHvq"),I=r("ANjH"),P=r("YFqc"),L=r.n(P),F=r("cpVT"),A=r("BvvR");function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){Object(F.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(U.a)(e);if(t){var a=Object(U.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(T.a)(this,r)}}var G=function(e){Object(_.a)(r,e);var t=B(r);function r(){var e;Object(R.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isShown:!1},e.toggleShowHide=function(){e.setState({isShown:!e.state.isShown})},e}return Object(N.a)(r,[{key:"focus",value:function(){this.input&&this.input.focus()}},{key:"render",value:function(){var e=this,t=this.state.isShown,r=t?"HIDE":"SHOW";return Object(n.jsxs)("div",{className:"jsx-3588716774 password-input",children:[this.props.validated?Object(n.jsx)(A.a,H(H({ref:function(t){return e.input=t},type:t?"text":"password"},this.props),{},{validated:void 0})):Object(n.jsx)(f.b,H(H({ref:function(t){return e.input=t}},this.props),{},{type:t?"text":"password",validated:void 0})),this.props.value&&this.props.value.length>0&&Object(n.jsx)("div",{onClick:this.toggleShowHide,className:"jsx-3588716774 password-show-toggle",children:r}),Object(n.jsx)(s.a,{id:"3588716774",children:[".password-input.jsx-3588716774{position:relative;}",".password-input.jsx-3588716774 input{padding-right:67px !important;}",".password-show-toggle.jsx-3588716774{position:absolute;right:19px;line-height:16px;top:12px;cursor:pointer;}"]})]})}}]),r}(c.Component);G.defaultProps={validated:!1,theme:"replitLight"};var z=G,K=r("zgDP");function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(U.a)(e);if(t){var a=Object(U.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(T.a)(this,r)}}var J=function(e){Object(_.a)(r,e);var t=M(r);function r(){var e;Object(R.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={username:e.props.username||"",password:e.props.password||"",isLoading:!1},e.onLogin=function(){var t=Object(u.a)(i.a.mark((function t(r){var n,a,s,c,o,u,l,p;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r&&r.preventDefault&&r.preventDefault(),!e.state.isLoading){t.next=3;break}return t.abrupt("return");case 3:if(n=e.props.onSubmit,a=e.state,s=a.username,c=a.password,s&&c){t.next=9;break}return n({error:"All fields are required"}),!s&&e.inputRefs.username?e.inputRefs.username.focus():!c&&e.inputRefs.password&&e.inputRefs.password.focus(),t.abrupt("return");case 9:return e.setState({isLoading:!0}),t.prev=10,t.next=13,Object(O.b)();case 13:o=t.sent,t.next=21;break;case 16:return t.prev=16,t.t0=t.catch(10),n({error:"Something went wrong trying to submit. Please try again."}),e.setState({isLoading:!1}),t.abrupt("return");case 21:return t.next=23,e.props.login({username:s,password:c,hCaptchaResponse:o,hCaptchaSiteKey:O.a,teacher:e.props.isTeacher});case 23:if(u=t.sent,l=u.user,p=u.error,e.setState({isLoading:!1}),!p){t.next=31;break}if(n({error:p.status&&p.message?p.message:"Something went wrong"}),!(p.status>=500)){t.next=31;break}throw p;case 31:l&&(Object(K.track)(K.events.LOGIN_SUCCESSFUL,{source:e.props.source}),n({user:l}));case 32:case"end":return t.stop()}}),t,null,[[10,16]])})));return function(e){return t.apply(this,arguments)}}(),e.inputRefs={},e}return Object(N.a)(r,[{key:"render",value:function(){var e=this,t=this.props.onChangeAuth,r=this.state,a=r.username,c=r.password,o=r.isLoading;return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:this.onLogin,method:"POST",action:"/login",className:"jsx-3136334415 login-form",children:[Object(n.jsx)("div",{className:"jsx-3136334415 title-container",children:Object(n.jsx)(C.b,{justify:"center",align:"center",spacing:3,children:Object(n.jsx)("h1",{className:"jsx-3136334415",children:"Log in"})})}),Object(n.jsx)("div",{className:"jsx-3136334415 input-group",children:Object(n.jsx)(f.b,{ref:function(t){return e.inputRefs.username=t},name:"username",placeholder:"Email or Username",value:a,onChange:function(t){return e.setState({username:t.currentTarget.value})},autoComplete:"on",autoFocus:!0,autoCorrect:"off",autoCapitalize:"off"})}),Object(n.jsx)("div",{className:"jsx-3136334415 input-group",children:Object(n.jsx)(z,{ref:function(t){return e.inputRefs.password=t},validated:!1,name:"password",placeholder:"Password",value:c,onChange:function(t){return e.setState({password:t.currentTarget.value})}},"password")}),o?Object(n.jsx)(d.a,{style:{margin:"0 auto",width:"32px",height:"32px"}}):Object(n.jsx)(w.a,{color:"primary",onClick:this.onLogin,type:"submit",filled:!0,fullWidth:!0,children:"Log in"}),Object(n.jsxs)("div",{className:"jsx-3136334415 login-form-bottom",children:[Object(n.jsx)(L.a,{href:"/forgot",children:Object(n.jsx)("a",{className:"jsx-3136334415 login-forgot",children:"Forgot password?"})}),t&&Object(n.jsxs)("div",{className:"jsx-3136334415",children:["or"," ",Object(n.jsx)("a",{onClick:function(e){e.preventDefault(),t()},className:"jsx-3136334415 login-form-switcher",children:"sign up"})]})]}),Object(n.jsx)(s.a,{id:"3136334415",children:[".title-container.jsx-3136334415{margin-bottom:var(--spacing-3);}",".input-group.jsx-3136334415{margin-bottom:8px;}",".login-form-bottom.jsx-3136334415{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:var(--spacing-3) 0 var(--spacing-2);font-size:14px;}",".login-forgot.jsx-3136334415{color:var(--color-primary-1);display:inline-block;border:0;margin-left:3px;}",".login-forgot.jsx-3136334415:hover{-webkit-text-decoration:underline;text-decoration:underline;}",".login-form-switcher.jsx-3136334415{color:var(--color-primary-1);cursor:pointer;}"]})]})})}}]),r}(c.Component),Y=Object(p.c)(null,(function(e){return Object(I.b)({login:v.d},e)}))(J),V=r("TSYQ"),W=r.n(V),Q=r("V6K1");function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(U.a)(e);if(t){var a=Object(U.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(T.a)(this,r)}}var Z=["google","github","facebook"],X=function(e){Object(_.a)(r,e);var t=q(r);function r(){var e;Object(R.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onOAuth=function(t,r){var n=e.props.onSubmit,a=window.open(t),s=function(){var t=Object(u.a)(i.a.mark((function t(c){var o,u,l,p;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.origin!==window.location.origin&&"https://replit.com"!==c.origin&&"https://repl.it"!==c.origin||"authenticated"!==c.data&&"authenticated:new_user"!==c.data){t.next=14;break}return window.removeEventListener("message",s),a.close(),t.next=5,e.props.authenticate({provider:r});case 5:if(o=t.sent,u=o.error,l=o.user,!u){t.next=13;break}if(n({error:u.status&&u.message?u.message:"Something went wrong"}),401===u.status){t.next=12;break}throw u;case 12:return t.abrupt("return");case 13:l&&(p="authenticated:new_user"===c.data,e.props.isLogin&&!p&&Object(K.track)(K.events.LOGIN_SUCCESSFUL,{source:e.props.source}),n({user:l,social:!0,newUser:p}));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();window.addEventListener("message",s)},e.onOptionClick=function(t,r){t.preventDefault();var n="/auth/".concat(r,"/get?close=1");e.props.isTeacher&&(n+="&teacher=1"),e.props.source&&(n+="&source=".concat(e.props.source)),e.onOAuth(n,r)},e}return Object(N.a)(r,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"jsx-568775840 social-container",children:[Object(n.jsx)("div",{className:"jsx-568775840 social-spacer"}),this.props.googleClassroom?Object(n.jsxs)(C.b,{align:"center",children:[Object(n.jsx)(Q.a,{level:4,align:"center",children:Object(n.jsx)("a",{onClick:function(t){return e.onOptionClick(t,"google")},className:"jsx-568775840",children:"Login with Google"})}),Object(n.jsx)("div",{className:"jsx-568775840",children:Object(n.jsx)($,{provider:"google",onClick:function(t){return e.onOptionClick(t,"google")}})})]}):Object(n.jsx)(C.b,{sapcing:1,children:Z.map((function(t){return Object(n.jsx)($,{onClick:function(r){return e.onOptionClick(r,t)},provider:t},t)}))}),Object(n.jsx)(s.a,{id:"568775840",children:[".jsx-568775840{margin:var(--spacing-2) 0;}",".social-container.jsx-568775840{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".social-spacer.jsx-568775840{border-bottom:1px solid var(--color-border);}"]})]})}}]),r}(c.Component),$=function(e){var t=e.onClick,r=e.provider;return Object(n.jsxs)("div",{className:"jsx-213257005 social-login-container",children:[Object(n.jsx)(w.a,{className:"social-login-item",onClick:t,fullWidth:!0,children:Object(n.jsxs)(C.a,{align:"center",justify:"space-between",spacing:2,children:[Object(n.jsx)("div",{style:{backgroundImage:"url(/public/images/".concat(r,".png)")},className:"jsx-213257005 "+(W()("social-login-icon",Object(F.a)({},r,r))||"")}),Object(n.jsxs)(y.a,{children:["Continue with"," ","".concat(r.substring(0,1).toUpperCase()).concat(r.substring(1))]})]})}),Object(n.jsx)(s.a,{id:"213257005",children:[".social-login-container.jsx-213257005{min-width:280px;margin:var(--spacing-1) 0;}",".social-login-icon.jsx-213257005{height:24px;width:24px;background-size:contain;background-repeat:no-repeat;}",".social-login-item.jsx-213257005:hover{background-color:var(--color-control-3);}",".social-login-item.jsx-213257005,.social-login-item.jsx-213257005:hover{border:0 none;}",".replit-ui-theme-root.dark .social-login-icon.github{-webkit-filter:brightness(0) invert(1);filter:brightness(0) invert(1);}"]})]})},ee=Object(p.c)(null,(function(e){return Object(I.b)({authenticate:v.a},e)}))(X),te=r("EQ2k"),re=r("ZY4o");t.a=function(e){var t=e.onSubmit,r=e.isLogin,a=e.email,c=e.isTeacher,o=e.toggleTeacher,i=e.onChangeAuth,u=e.privacyInvite,l=e.randomUsername,p=e.source,d=void 0===p?"explicit":p,f=e.googleClassroom;return Object(n.jsxs)("div",{className:s.a.dynamic([["1827768959",[te.a.black]]]),children:[Object(n.jsx)(s.a,{id:"1827768959",dynamic:[te.a.black],children:["div.__jsx-style-dynamic-selector{max-width:280px;margin-top:auto;margin-bottom:auto;color:".concat(te.a.black,";}")]}),r&&Object(n.jsx)(Y,{isTeacher:c,onSubmit:t,onChangeAuth:i,source:d}),!r&&!f&&Object(n.jsx)(E,{isTeacher:c,email:a,onSubmit:t,toggleTeacher:o,onChangeAuth:i,privacyInvite:u,randomUsername:l,source:d}),!u&&Object(n.jsx)(ee,{isTeacher:c,onSubmit:t,source:d,isLogin:r,googleClassroom:f}),Object(n.jsx)(re.a,{})]})}},EQ2k:function(e,t,r){"use strict";t.a={skyBlue:"#4183C4",black:"rgb(63, 64, 63)",blue:"#5192B3",blueGray:"#7998a6",blueGrayDark:"#3b6273",deepBlue:"#0E1628",errorRed:"#d56d6d",paleRed:"#fEf1f1",paleRedHover:"#fee2e2",ctaRed:"#F06A60",ctaRedHover:"#F1584B",green:"#5ea170",paleGreen:"#dceede",activeYellow:"#f9c013",yellow:"#ffcd26",warningOrange:"#FB8532",paleWarningOrange:"#fae6D0",ghGold:"#afa482",ghGrey:"#838b95",white:"rgb(255, 255, 255)",gray96:"rgb(245, 245, 245)",gray94:"rgb(240, 240, 240)",gray93:"rgb(236, 236, 236)",gray87:"rgb(222, 222, 222)",gray85:"rgb(217, 217, 217)",gray75:"rgb(191, 191, 191)",gray70:"rgb(180, 180, 180)",gray50:"rgb(127, 127, 127)",gray47:"rgb(119, 119, 119)",gray35:"rgb(89, 89, 89)",gray25:"rgb(63, 63, 63)"}},JxgA:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return f}));var n=r("vJKn"),a=r.n(n),s=r("rg98"),c=e.env.BYPASS_CAPTCHA_CYPRESS?"20000000-ffff-ffff-ffff-000000000002":"473079ba-e99f-4e25-a635-e9b661c7dd3e",o=0;function i(){var e=Math.floor(500*Math.random());return 1e3*Math.pow(1.7,o)+e}var u=null;function l(){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.createElement("script")).src="https://www.hcaptcha.com/1/api.js?render=explicit&host=repl.it",e.abrupt("return",new Promise((function(e,r){t.onload=d((function(){u=null,e()})),t.onerror=function(){o++,u=new Promise((function(e,t){setTimeout((function(){l().then(e,t)}),i())})),5===o&&r(new Error("Failed to load captcha script after ".concat(5," times")))},window.document.head.appendChild(t)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return function(){"undefined"===typeof window.hcaptcha?setTimeout((function(){d(e)}),100):e()}}function f(e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:if(window.location.hostname,!u){e.next=6;break}return e.next=6,u;case 6:return r=window.hcaptcha,e.abrupt("return",new Promise((function(e,n){var a=document.createElement("div"),s=r.render(a,{sitekey:t||c,size:"invisible",callback:function(t){r.reset(s),window.document.body.contains(a)&&window.document.body.removeChild(a),e(t)},"error-callback":function(){r.reset(s),window.document.body.contains(a)&&window.document.body.removeChild(a),n(new Error("HCaptcha render error"))},"expired-callback":function(){r.reset(s),window.document.body.contains(a)&&window.document.body.removeChild(a),n(new Error("HCaptcha render expired"))}});window.document.body.appendChild(a),r.execute(s)})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u=l()}).call(this,r("8oxB"))},ZY4o:function(e,t,r){"use strict";var n=r("nKUr"),a=r("MX0m"),s=r.n(a);r("q1tI");t.a=function(){return Object(n.jsxs)("div",{className:"jsx-710207973 signup-form-email-disclaimer",children:["By continuing, you agree to Repl.it's"," ",Object(n.jsx)("a",{href:"/site/terms",target:"_blank",className:"jsx-710207973",children:"Terms of Service"})," ","and"," ",Object(n.jsx)("a",{href:"/site/privacy",target:"_blank",className:"jsx-710207973",children:"Privacy Policy"}),", and to receiving emails with updates.",Object(n.jsx)(s.a,{id:"710207973",children:[".signup-form-email-disclaimer.jsx-710207973{font-size:12px;margin-top:20px;text-align:center;color:var(--color-foreground-2);line-height:14px;}"]})]})}}}]);
//# sourceMappingURL=21bfc205242ac98c505b8d4639873cbcb5bdf20e.5fa6a64c8ddfec220d5f.js.map