(function(t){function e(e){for(var o,s,i=e[0],l=e[1],u=e[2],d=0,p=[];d<i.length;d++)s=i[d],r[s]&&p.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(o=!1)}o&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},r={app:0},n=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("64a9"),r=a.n(o);r.a},1:function(t,e){},"34ba":function(t,e,a){"use strict";var o=a("7dbb"),r=a.n(o);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("28a5"),a("cadf"),a("551c"),a("097d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$route.meta.public?a("div",{staticStyle:{},attrs:{id:"app"}},[a("router-view")],1):a("div",{attrs:{id:"app"}},[a("el-container",{staticStyle:{height:"calc(92vh)"},attrs:{id:"main-container"}},[a("nav-bar"),a("el-main",[a("router-view")],1),a("el-footer")],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticStyle:{"background-color":"teal"}},[a("el-col",{attrs:{span:24}},[a("el-header",{staticStyle:{padding:"0"}},[a("el-row",[a("el-col",{attrs:{span:21}},[a("el-menu",{staticStyle:{"border-bottom":"none","background-color":"transparent"},attrs:{"default-active":t.activeIndex,"background-color":"teal","text-color":"white",router:"",mode:"horizontal","active-text-color":"yellow"}},[t.user.roles.includes("valet")?a("el-menu-item",{attrs:{index:"1",route:{path:"/"}}},[t._v("Home")]):a("el-menu-item",{attrs:{index:"2",route:{path:"/tasks"}}},[t._v("Home")])],1)],1),a("el-col",{staticStyle:{height:"60px"},attrs:{span:3}},[a("el-menu",{staticStyle:{"border-bottom":"none","background-color":"transparent"},attrs:{"default-active":t.activeIndex,"text-color":"white",router:"",mode:"horizontal","active-text-color":"yellow"}},[a("el-menu-item",{attrs:{index:"/login"},on:{click:function(e){t.$auth.logout()}}},[a("i",{staticClass:"el-icon-d-arrow-right",staticStyle:{color:"white"}})])],1)],1)],1)],1)],1)],1)},i=[],l={name:"NavBar",data:function(){return{activeIndex:"1",hasTasks:!1,user:{roles:[]}}},sockets:{realtime:function(t){this.hasTasks=t.status}},mounted:function(){try{this.user=JSON.parse(window.localStorage.user),console.log(this.user)}catch(t){this.$auth.logout(),window.localStorage.user="",window.location="/"}}},u=l,c=(a("34ba"),a("2877")),d=Object(c["a"])(u,s,i,!1,null,null,null);d.options.__file="NavBar.vue";var p=d.exports,m={name:"app",components:{NavBar:p},data:function(){return{activeIndex:"1"}},created:function(){}},f=m,h=(a("034f"),Object(c["a"])(f,r,n,!1,null,null,null));h.options.__file="App.vue";var v=h.exports,w=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home-wrapper"}},[a("el-row",[a("el-col",{attrs:{span:24}})],1),t.valet?a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:20}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tasks.results}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("h4",[t._v("History")]),t._l(e.row.history,function(e,o){return a("span",{key:o},[a("p",[a("el-tag",{attrs:{size:"medium",type:"success"}},[t._v(t._s(e.status))]),t._v(" (Updated "+t._s(t._f("humanizeTime")(e.made_at))+")")],1)])})]}}])}),a("el-table-column",{attrs:{label:"Title",prop:"title"}}),a("el-table-column",{attrs:{label:"Current Status",prop:"status"}}),a("el-table-column",{attrs:{label:"Priority"},scopedSlots:t._u([{key:"default",fn:function(e){return["low"===e.row.priority?a("el-tag",{attrs:{size:"medium",type:"warning"}},[t._v(t._s(e.row.priority))]):t._e(),"medium"===e.row.priority?a("el-tag",{attrs:{size:"medium",type:"primary"}},[t._v(t._s(e.row.priority))]):t._e(),"high"===e.row.priority?a("el-tag",{attrs:{size:"medium",type:"danger"}},[t._v(t._s(e.row.priority))]):t._e()]}}])}),a("el-table-column",{attrs:{label:"Created on"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t._f("calendarTime")(e.row.created_on))+"\n          ")]}}])}),a("el-table-column",{attrs:{label:"Action"},scopedSlots:t._u([{key:"default",fn:function(e){return["completed"!==e.row.status?a("el-dropdown",{on:{command:t.handlePatchStatus}},[a("span",{staticClass:"el-dropdown-link"},[t._v("\n                Change status"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{disabled:""}},[t._v("Accept")]),a("el-dropdown-item",{attrs:{disabled:"completed"===e.row.status,command:{status:"declined",id:e.row.id}}},[t._v("Decline")]),a("el-dropdown-item",{attrs:{disabled:"completed"===e.row.status,command:{status:"completed",id:e.row.id}}},[t._v("Complete")])],1)],1):a("span",[t._v("No action available")])]}}])})],1)],1),a("el-col",{attrs:{span:4}},[a("h4",[t._v("Updates")]),t.updated?a("el-card",{staticStyle:{color:"deeppink"},attrs:{shadow:"always"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Task!\n            "),a("el-button",{staticStyle:{float:"right",padding:"5px"},attrs:{type:"success"},on:{click:t.getNewTask}},[t._v("View")])],1)]),a("i",{staticClass:"el-icon-info"}),t._v(" A new task is available\n      ")]):a("p",[t._v("No tasks available")])],1)],1):t._e(),t.manager?a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:20}},[a("el-tabs",{model:{value:t.activeTabName,callback:function(e){t.activeTabName=e},expression:"activeTabName"}},[a("el-tab-pane",{attrs:{label:"Active Tasks",name:"current"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.activeTasks}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("h4",[t._v("History")]),t._l(e.row.history,function(e,o){return a("span",{key:o},[a("p",[a("el-tag",{attrs:{size:"medium",type:"success"}},[t._v(t._s(e.status))]),t._v(" (Updated "+t._s(t._f("humanizeTime")(e.made_at))+")")],1)])})]}}])}),a("el-table-column",{attrs:{label:"Title",prop:"title"}}),a("el-table-column",{attrs:{label:"Current Status",prop:"status"}}),a("el-table-column",{attrs:{label:"Priority"},scopedSlots:t._u([{key:"default",fn:function(e){return["low"===e.row.priority?a("el-tag",{attrs:{size:"medium",type:"warning"}},[t._v(t._s(e.row.priority))]):t._e(),"medium"===e.row.priority?a("el-tag",{attrs:{size:"medium",type:"primary"}},[t._v(t._s(e.row.priority))]):t._e(),"high"===e.row.priority?a("el-tag",{attrs:{size:"medium",type:"danger"}},[t._v(t._s(e.row.priority))]):t._e()]}}])}),a("el-table-column",{attrs:{label:"Created on"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(t._f("calendarTime")(e.row.created_on))+"\n              ")]}}])}),a("el-table-column",{attrs:{label:"Action"},scopedSlots:t._u([{key:"default",fn:function(e){return["new"===e.row.status?a("el-dropdown",{on:{command:t.handlePatchStatus}},[a("span",{staticClass:"el-dropdown-link"},[t._v("\n                    Change status"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{disabled:"new"!==e.row.status,command:{status:"cancelled",id:e.row.id}}},[t._v("Cancel")])],1)],1):a("span",[t._v("No action available")])]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"Previous Tasks ( "+t.tasks.results.length+" )",name:"previous"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tasks.results}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("h4",[t._v("History")]),t._l(e.row.history,function(e,o){return a("span",{key:o},[a("p",[a("el-tag",{attrs:{size:"medium",type:"success"}},[t._v(t._s(e.status))]),t._v(" (Updated "+t._s(t._f("humanizeTime")(e.made_at))+")")],1)])})]}}])}),a("el-table-column",{attrs:{label:"Title",prop:"title"}}),a("el-table-column",{attrs:{label:"Current Status",prop:"status"}}),a("el-table-column",{attrs:{label:"Priority"},scopedSlots:t._u([{key:"default",fn:function(e){return["low"===e.row.priority?a("el-tag",{attrs:{size:"medium",type:"warning"}},[t._v(t._s(e.row.priority))]):t._e(),"medium"===e.row.priority?a("el-tag",{attrs:{size:"medium",type:"primary"}},[t._v(t._s(e.row.priority))]):t._e(),"high"===e.row.priority?a("el-tag",{attrs:{size:"medium",type:"danger"}},[t._v(t._s(e.row.priority))]):t._e()]}}])}),a("el-table-column",{attrs:{label:"Created on"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(t._f("calendarTime")(e.row.created_on))+"\n              ")]}}])}),a("el-table-column",{attrs:{label:"Action"},scopedSlots:t._u([{key:"default",fn:function(e){return["new"===e.row.status?a("el-dropdown",{on:{command:t.handlePatchStatus}},[a("span",{staticClass:"el-dropdown-link"},[t._v("\n                    Change status"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{disabled:"new"!==e.row.status,command:{status:"cancelled",id:e.row.id}}},[t._v("Decline")])],1)],1):a("span",[t._v("No action available")])]}}])})],1)],1)],1)],1),a("el-col",{attrs:{span:4}},[a("el-card",{attrs:{shadow:"hover"}},[a("h4",[t._v("New task")]),a("el-form",{ref:"newTaskForm",attrs:{"label-position":"top",model:t.newTaskForm},nativeOn:{submit:function(e){return e.preventDefault(),t.addNewTask(e)}}},[a("el-form-item",{attrs:{label:"Title"}},[a("el-input",{attrs:{placeholder:"Task title here"},model:{value:t.newTaskForm.title,callback:function(e){t.$set(t.newTaskForm,"title",e)},expression:"newTaskForm.title"}})],1),a("el-form-item",{attrs:{label:"Priority"}},[a("el-select",{model:{value:t.newTaskForm.priority,callback:function(e){t.$set(t.newTaskForm,"priority",e)},expression:"newTaskForm.priority"}},[a("el-option",{attrs:{label:"Low",value:"low"}}),a("el-option",{attrs:{label:"Medium",value:"medium"}}),a("el-option",{attrs:{label:"High",value:"high"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"success","native-type":"submit"}},[t._v("Add")])],1)],1)],1),a("el-card",{attrs:{shadow:"hover"}},[a("h4",[t._v("Recent updates")]),a("div",t._l(t.recentUpdatesReversed,function(e,o){return a("p",{key:o},[a("span",[t._v(t._s(e.message)+" "),a("strong",[t._v(t._s(e.change))])])])}))])],1)],1):t._e(),t.valet&&(t.newJobDialog.data.id||t.newJobDialog.errs)?a("el-dialog",{attrs:{visible:t.newJobDialog.value,width:"30%","close-on-click-modal":!1,"show-close":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.$set(t.newJobDialog,"value",e)}}},[t.newJobDialog.errs?a("div",[a("p",[a("el-alert",{attrs:{title:"Job fetch error",type:"error",description:t.newJobDialog.errs,"show-icon":!0,closable:!1}})],1),a("el-button",{attrs:{type:"success"},on:{click:function(e){t.newJobDialog.value=!1,t.newJobDialog.errs=""}}},[t._v("OK")])],1):a("div",[a("span",[a("h2",[t._v(t._s(t.newJobDialog.data.title))])]),a("p",[t._v("Manager: "+t._s(t.newJobDialog.data.created_by.username)+"("+t._s(t.newJobDialog.data.created_by.email)+")")]),a("p",[t._v("Created on: "+t._s(t._f("calendarTime")(t.newJobDialog.data.created_on)))]),a("p",[t._v("Priority:\n        "),"low"===t.newJobDialog.data.priority?a("el-tag",{attrs:{size:"medium",type:"warning"}},[t._v(t._s(t.newJobDialog.data.priority))]):t._e(),"medium"===t.newJobDialog.data.priority?a("el-tag",{attrs:{size:"medium",type:"info"}},[t._v(t._s(t.newJobDialog.data.priority))]):t._e(),"high"===t.newJobDialog.data.priority?a("el-tag",{attrs:{size:"medium",type:"danger"}},[t._v(t._s(t.newJobDialog.data.priority))]):t._e()],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.newJobDialog.value=!1,t.patchStatus("declined",t.newJobDialog.data.id)}}},[t._v("Decline")]),a("el-button",{attrs:{type:"success"},on:{click:function(e){t.newJobDialog.value=!1,t.patchStatus("accepted",t.newJobDialog.data.id)}}},[t._v("Accept")])],1)])]):t._e()],1)},b=[],_=(a("6762"),a("2fdb"),a("5132")),y=a.n(_),k=a("2b27"),T=a.n(k),S=a("8055"),D=a.n(S);o["default"].use(T.a);var x=window.$cookies.get("vueauth_access_token"),J=D()("http://127.0.0.1:8000/updates",{query:{token:x},extraHeaders:{Authorization:"Bearer "+x}});o["default"].use(new y.a({debug:!0,connection:J}));var C=function(){try{return JSON.parse(window.localStorage.user)}catch(t){return null}},$=C,F={name:"home",data:function(){return{activeTabName:"current",eligible:!1,updated:!1,statusUpdateId:"",newJobDialog:{value:!1,data:{},errs:""},manager:!1,valet:!1,tasks:{pagination:{page:1,total:0,totalPages:0,perPage:10},results:[]},recentUpdates:[],newTaskForm:{title:"",priority:""}}},sockets:{connect:function(){},disconnect:function(){}},computed:{activeTasks:function(){return this.tasks.results.filter(function(t){return"accepted"===t.status||"new"===t.status||"declined"===t.status})},recentUpdatesReversed:function(){return this.recentUpdates.slice().reverse()}},methods:{handlePatchStatus:function(t){this.patchStatus(t.status,t.id)},getNewTask:function(){var t=this,e="/api/v1/valets/job";this.$http.get(e).then(function(e){t.newJobDialog.value=!0,t.newJobDialog.data=e.data},function(e){t.newJobDialog.value=!0,t.newJobDialog.errs=e.response.data.message})},addNewTask:function(){var t=this,e="/api/v1/jobs";this.$http.post(e,this.newTaskForm).then(function(e){t.tasks.results.push(e.data)},function(t){console.log(t)})},deleteTask:function(t){var e=this,a="/api/v1/jobs/"+t;this.$http.delete(a).then(function(t){e.fetchTasks()},function(t){console.log(t)})},patchStatus:function(t,e){var a=this,o="/api/v1/jobs/"+e+"/status";this.$http.patch(o,{status:t}).then(function(t){a.fetchTasks()},function(t){console.log(t)})},fetchTasks:function(){var t=this,e="";e=this.valet?"/api/v1/valets/deliveries?page="+this.tasks.pagination.page+"&perPage="+this.tasks.pagination.perPage:"/api/v1/jobs?page="+this.tasks.pagination.page+"&perPage="+this.tasks.pagination.perPage,this.$http.get(e).then(function(e){t.tasks.results=e.data.results,t.tasks.pagination.totalPages=e.data.total_pages,t.tasks.pagination.total=e.data.total},function(t){console.log(t)})}},created:function(){var t=this;this.user=$(),this.manager=this.user.roles.includes("manager"),this.valet=!this.manager,this.fetchTasks(),this.manager?(this.sockets.subscribe("realtime-manager",function(e){t.fetchTasks(),t.recentUpdates.push(e)}),this.sockets.subscribe("manager-status",function(e){t.$notify({title:e.title,message:t.$createElement("i",{style:"color: teal"},e.message)})})):(this.sockets.subscribe("realtime-valet",function(e){t.updated=e.status}),this.sockets.subscribe("valet-status",function(e){t.$notify({title:e.title,message:t.$createElement("i",{style:"color: teal"},e.message)})}))},ready:function(){}},z=F,P=Object(c["a"])(z,g,b,!1,null,null,null);P.options.__file="Home.vue";var N=P.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login-wrapper"}},[a("el-container",[a("el-header",{staticClass:"hidden-sm-and-down"}),a("el-main",[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{md:12}},[a("el-row",[a("el-col",{attrs:{md:10}},[a("img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Round&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Pale",width:"180px"}})]),a("el-col",{attrs:{md:14}},[a("el-form",{ref:"loginform",attrs:{model:t.loginForm},nativeOn:{submit:function(e){e.preventDefault(),t.doLogin()}}},[a("el-form-item",[a("el-input",{attrs:{required:"",placeholder:"Your username"},model:{value:t.loginFormData.username,callback:function(e){t.$set(t.loginFormData,"username",e)},expression:"loginFormData.username"}})],1),a("el-form-item",[a("el-input",{attrs:{type:"password",required:"",placeholder:"Your password"},model:{value:t.loginFormData.password,callback:function(e){t.$set(t.loginFormData,"password",e)},expression:"loginFormData.password"}})],1),t.loginFormData.reqErr?a("el-form-item",[a("el-alert",{attrs:{type:"error",description:t.loginFormData.reqErr,closable:!1,"show-icon":""}})],1):t._e(),a("el-form-item",[a("el-button",{attrs:{type:"success","native-type":"submit",size:"medium"}},[t._v("Login")]),a("el-button",{attrs:{type:"info","native-type":"reset",size:"medium"},on:{click:function(e){t.$refs.loginForm.reset()}}},[t._v("Cancel")])],1)],1)],1)],1)],1)],1)],1),a("el-footer")],1)],1)},O=[],U={name:"Login",data:function(){return{loginForm:null,loginFormData:{username:"",password:"",reqErr:null}}},methods:{doLogin:function(){var t=this;console.log(this.loginFormData);var e={method:"POST",headers:{"Content-type":"application/json"}},a={username:this.loginFormData.username,password:this.loginFormData.password};this.$auth.login(a,e).then(function(e){200===e.status&&(t.loading=!1,window.localStorage.user=JSON.stringify(e.data.user),window.location="/")},function(e){404===e.response.status&&(t.loading=!1,t.loginFormData.reqErr="Sorry, could not find that username"),400===e.response.status&&(t.loading=!1,t.loginFormData.reqErr=e.response.data.msg)})}},created:function(){this.$auth.isAuthenticated()&&this.$router.push("/")}},A=U,E=(a("d6db"),Object(c["a"])(A,j,O,!1,null,null,null));E.options.__file="Login.vue";var H=E.exports;o["default"].use(w["a"]);var q=new w["a"]({mode:"history",routes:[{path:"/",name:"home",component:N},{path:"/login",name:"login",component:H,meta:{public:!0,role:"both"}}]});q.beforeEach(function(t,e,a){t.meta.public||q.app.$auth.isAuthenticated()?a():a("/login")});var L=q,B=a("ba38"),M=a("bc3a"),I=a.n(M),R=a("a7fe"),W=a.n(R),Y=a("2ead"),K=a.n(Y),V=a("5c96"),G=a.n(V),Q=(a("0fae"),a("b2d6")),X=a.n(Q);o["default"].use(G.a,{locale:X.a});var Z="http://127.0.0.1:8000";console.log(Z),I.a.defaults.headers.post["Content-Type"]="application/json",I.a.defaults.baseURL=Z,o["default"].use(W.a,I.a),o["default"].use(B["a"],{baseUrl:Z,tokenName:"access_token",storageType:"cookieStorage"}),o["default"].config.productionTip=!1,o["default"].use(K.a),o["default"].filter("humanizeTime",function(t){var e="";if("string"===typeof t)e=t.split("+")[0];else{if("number"!==typeof t)return"Not available";e=t}return o["default"].moment.utc(e).local().fromNow()}),o["default"].filter("calendarTime",function(t){var e="";if("string"===typeof t)e=t.split("+")[0];else{if("number"!==typeof t)return"Not available";e=t}return o["default"].moment.utc(e).local().calendar()}),new o["default"]({router:L,render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,e,a){},"7dbb":function(t,e,a){},a9e7:function(t,e,a){},d6db:function(t,e,a){"use strict";var o=a("a9e7"),r=a.n(o);r.a}});
//# sourceMappingURL=app.68672ea7.js.map