(function(){"use strict";var e={7650:function(e,n,o){var t=o(9242),s=o(3396);function a(e,n,o,t,a,r){const l=(0,s.up)("NavBar"),c=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l),(0,s.Wm)(c)],64)}o(8052);const r={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container"},c=(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarText"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},d={class:"nav-item"},p={class:"nav-item"},f={class:"nav-item"},m={class:"navbar-nav"},v={class:"nav-item"},_={class:"nav-item"};function w(e,n,o,t,a,w){const b=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",r,[(0,s._)("div",l,[(0,s.Wm)(b,{class:"navbar-brand",to:{name:"home"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Myspace")])),_:1}),c,(0,s._)("div",i,[(0,s._)("ul",u,[(0,s._)("li",d,[(0,s.Wm)(b,{class:"nav-link",to:{name:"home"}},{default:(0,s.w5)((()=>[(0,s.Uk)("首页")])),_:1})]),(0,s._)("li",p,[(0,s.Wm)(b,{class:"nav-link",to:{name:"userlist"}},{default:(0,s.w5)((()=>[(0,s.Uk)("好友列表")])),_:1})]),(0,s._)("li",f,[(0,s.Wm)(b,{class:"nav-link",to:{name:"userprofile",params:{userId:2}}},{default:(0,s.w5)((()=>[(0,s.Uk)("用户动态")])),_:1})])]),(0,s._)("ul",m,[(0,s._)("li",v,[(0,s.Wm)(b,{class:"nav-link",to:{name:"login"}},{default:(0,s.w5)((()=>[(0,s.Uk)("登录")])),_:1})]),(0,s._)("li",_,[(0,s.Wm)(b,{class:"nav-link",to:{name:"register"}},{default:(0,s.w5)((()=>[(0,s.Uk)("注册")])),_:1})])])])])])}var b={name:"NavBar"},g=o(89);const y=(0,g.Z)(b,[["render",w]]);var h=y,k={name:"App",components:{NavBar:h}};const C=(0,g.Z)(k,[["render",a]]);var U=C,j=o(2483);function P(e,n,o,t,a,r){const l=(0,s.up)("ContentBase");return(0,s.wg)(),(0,s.j4)(l,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" 首页 ")])),_:1})}const I={class:"home"},B={class:"container"},x={class:"card"},D={class:"card-body"};function N(e,n,o,t,a,r){return(0,s.wg)(),(0,s.iD)("div",I,[(0,s._)("div",B,[(0,s._)("div",x,[(0,s._)("div",D,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])])])])}var O={name:"ContentBase"};const W=(0,g.Z)(O,[["render",N],["__scopeId","data-v-7e568339"]]);var Z=W,H={name:"HomeView",components:{ContentBase:Z}};const T=(0,g.Z)(H,[["render",P]]);var S=T,q=o(7139);const z={class:"card-body"},M={class:"row"},V={class:"col-1"},F=["src"],Y={class:"col-11"},A={class:"username"},K={class:"follower-count"};function L(e,n,o,t,a,r){const l=(0,s.up)("ContentBase");return(0,s.wg)(),(0,s.j4)(l,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.users.slice(2),(e=>((0,s.wg)(),(0,s.iD)("div",{class:"card",key:e.id},[(0,s._)("div",z,[(0,s._)("div",M,[(0,s._)("div",V,[(0,s._)("img",{class:"img-fluid",src:e.photo,alt:""},null,8,F)]),(0,s._)("div",Y,[(0,s._)("div",A,(0,q.zw)(e.username),1),(0,s._)("div",K,(0,q.zw)(e.followerCount),1)])])])])))),128))])),_:1})}var E=o(7387),R=o.n(E),$=o(4870),G={name:"UserList",components:{ContentBase:Z},setup(){let e=(0,$.iH)([]);return R().ajax({url:"https://app165.acapp.acwing.com.cn/myspace/userlist/",type:"get",success(n){e.value=n}}),{users:e}}};const J=(0,g.Z)(G,[["render",L],["__scopeId","data-v-464a7e42"]]);var Q=J;const X={class:"row"},ee={class:"col-3"},ne={class:"col-9"};function oe(e,n,o,t,a,r){const l=(0,s.up)("UserProfileInfo"),c=(0,s.up)("UserProfileWrite"),i=(0,s.up)("UserProfilePosts"),u=(0,s.up)("ContentBase");return(0,s.wg)(),(0,s.j4)(u,null,{default:(0,s.w5)((()=>[(0,s._)("div",X,[(0,s._)("div",ee,[(0,s.Wm)(l,{onFollow123:t.follow,onUnfollow1234:t.unfollow,user:t.user},null,8,["onFollow123","onUnfollow1234","user"]),(0,s.Wm)(c,{onPost_a_post:t.post_a_post},null,8,["onPost_a_post"])]),(0,s._)("div",ne,[(0,s.Wm)(i,{posts:t.posts},null,8,["posts"])])])])),_:1})}o(541);const te=e=>((0,s.dD)("data-v-393776ac"),e=e(),(0,s.Cn)(),e),se={class:"card"},ae={class:"card-body"},re={class:"row"},le=te((()=>(0,s._)("div",{class:"col-3"},[(0,s._)("img",{class:"img-fluid",src:"https://cdn.acwing.com/media/user/profile/photo/85624_lg_b45329694d.jpeg",alt:""})],-1))),ce={class:"col-9"},ie={class:"username"},ue={class:"fans"};function de(e,n,o,t,a,r){return(0,s.wg)(),(0,s.iD)("div",se,[(0,s._)("div",ae,[(0,s._)("div",re,[le,(0,s._)("div",ce,[(0,s._)("div",ie,(0,q.zw)(t.fullName),1),(0,s._)("div",ue,"粉丝: "+(0,q.zw)(o.user.followerCount),1),o.user.is_followed?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:n[0]||(n[0]=(...e)=>t.follow&&t.follow(...e)),type:"button",class:"btn btn-secondary btn-sm"},"+关注")),o.user.is_followed?((0,s.wg)(),(0,s.iD)("button",{key:1,onClick:n[1]||(n[1]=(...e)=>t.unfollow&&t.unfollow(...e)),type:"button",class:"btn btn-secondary btn-sm"},"已关注")):(0,s.kq)("",!0)])])])])}var pe={name:"UserProfileInfo",props:{user:{type:Object,required:!0}},setup(e,n){let o=(0,s.Fl)((()=>e.user.lastName+" "+e.user.firstName));const t=()=>{n.emit("follow123")},a=()=>{n.emit("unfollow1234")};return{fullName:o,follow:t,unfollow:a}}};const fe=(0,g.Z)(pe,[["render",de],["__scopeId","data-v-393776ac"]]);var me=fe;const ve={class:"card"},_e={class:"card-body"},we={class:"card single-post"},be={class:"card-body"};function ge(e,n,o,t,a,r){return(0,s.wg)(),(0,s.iD)("div",ve,[(0,s._)("div",_e,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.posts.posts,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id},[(0,s._)("div",we,[(0,s._)("div",be,(0,q.zw)(e.content),1)])])))),128))])])}var ye={name:"UserProfilePosts",props:{posts:{type:Object,required:!0}}};const he=(0,g.Z)(ye,[["render",ge],["__scopeId","data-v-72d02b2f"]]);var ke=he;const Ce=e=>((0,s.dD)("data-v-31b9f289"),e=e(),(0,s.Cn)(),e),Ue={class:"card edit-field"},je={class:"card-body"},Pe=Ce((()=>(0,s._)("label",{for:"edit-post",class:"form-label"},"编辑帖子",-1)));function Ie(e,n,o,a,r,l){return(0,s.wg)(),(0,s.iD)("div",Ue,[(0,s._)("div",je,[Pe,(0,s.wy)((0,s._)("textarea",{"onUpdate:modelValue":n[0]||(n[0]=e=>a.content=e),class:"form-control",id:"edit-post",rows:"3"},null,512),[[t.nr,a.content]]),(0,s._)("button",{onClick:n[1]||(n[1]=(...e)=>a.post_a_post&&a.post_a_post(...e)),type:"button",class:"btn btn-primary btn-sm"},"发帖")])])}var Be={name:"UserProfileWrite",setup(e,n){let o=(0,$.iH)("");const t=()=>{n.emit("post_a_post",o.value),o.value=""};return{content:o,post_a_post:t}}};const xe=(0,g.Z)(Be,[["render",Ie],["__scopeId","data-v-31b9f289"]]);var De=xe,Ne={name:"UserProfile",components:{ContentBase:Z,UserProfileInfo:me,UserProfilePosts:ke,UserProfileWrite:De},setup(){const e=(0,j.yj)(),n=e.params.userId;console.log(e.params.userId),console.log(n);const o=(0,$.qj)({id:1,username:"shenyanxin",lastName:"Shen",firstName:"Yanxin666",followerCount:0,is_followed:!1}),t=(0,$.qj)({count:3,posts:[{id:1,userId:1,content:"今天真开心"},{id:2,userId:1,content:"今天更开心了"},{id:3,userId:1,content:"今天开心极了"}]}),s=()=>{o.is_followed||(o.is_followed=!0,o.followerCount++)},a=()=>{o.is_followed&&(o.is_followed=!1,o.followerCount--)},r=e=>{t.count++,t.posts.unshift({id:t.count,userId:1,content:e})};return{user:o,follow:s,unfollow:a,posts:t,post_a_post:r}}};const Oe=(0,g.Z)(Ne,[["render",oe]]);var We=Oe;const Ze=e=>((0,s.dD)("data-v-0b85b5b6"),e=e(),(0,s.Cn)(),e),He={class:"row justify-content-md-center"},Te={class:"col-3"},Se={class:"mb-3"},qe=Ze((()=>(0,s._)("label",{for:"username",class:"form-label"},"用户名",-1))),ze={class:"mb-3"},Me=Ze((()=>(0,s._)("label",{for:"password",class:"form-label"},"密码",-1))),Ve={class:"error-message"},Fe=Ze((()=>(0,s._)("button",{type:"submit",class:"btn btn-primary"},"登录",-1)));function Ye(e,n,o,a,r,l){const c=(0,s.up)("ContentBase");return(0,s.wg)(),(0,s.j4)(c,null,{default:(0,s.w5)((()=>[(0,s._)("div",He,[(0,s._)("div",Te,[(0,s._)("form",{onSubmit:n[2]||(n[2]=(0,t.iM)(((...e)=>a.login&&a.login(...e)),["prevent"]))},[(0,s._)("div",Se,[qe,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>a.username=e),type:"text",class:"form-control",id:"username"},null,512),[[t.nr,a.username]])]),(0,s._)("div",ze,[Me,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>a.password=e),type:"password",class:"form-control",id:"password"},null,512),[[t.nr,a.password]])]),(0,s._)("div",Ve,(0,q.zw)(a.error_message),1),Fe],32)])])])),_:1})}var Ae={name:"LoginView",components:{ContentBase:Z},setup(){let e=(0,$.iH)(""),n=(0,$.iH)(""),o=(0,$.iH)("");const t=()=>{console.log(e.value,n.value)};return{username:e,password:n,error_message:o,login:t}}};const Ke=(0,g.Z)(Ae,[["render",Ye],["__scopeId","data-v-0b85b5b6"]]);var Le=Ke;function Ee(e,n,o,t,a,r){const l=(0,s.up)("ContentBase");return(0,s.wg)(),(0,s.j4)(l,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" 注册 ")])),_:1})}var Re={name:"RegisterView",components:{ContentBase:Z}};const $e=(0,g.Z)(Re,[["render",Ee]]);var Ge=$e;function Je(e,n,o,t,a,r){const l=(0,s.up)("ContentBase");return(0,s.wg)(),(0,s.j4)(l,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" 404 ")])),_:1})}var Qe={name:"NotFound",components:{ContentBase:Z}};const Xe=(0,g.Z)(Qe,[["render",Je]]);var en=Xe;const nn=[{path:"/",name:"home",component:S},{path:"/userlist/",name:"userlist",component:Q},{path:"/userprofile/:userId",name:"userprofile",component:We},{path:"/login/",name:"login",component:Le},{path:"/register/",name:"register",component:Ge},{path:"/404/",name:"404",component:en},{path:"/:catchAll(.*)",redirect:"/404/"}],on=(0,j.p7)({history:(0,j.r5)(""),routes:nn});var tn=on,sn=o(65),an=(0,sn.MT)({state:{user:{username:"",id:"",firstName:"",lastName:""}},getters:{fullName(e){return e.user.firstName+e.user.lastName}},mutations:{updateUser(e,n){e.user.username=n.username}},actions:{},modules:{}});(0,t.ri)(U).use(an).use(tn).mount("#app")}},n={};function o(t){var s=n[t];if(void 0!==s)return s.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(n,t,s,a){if(!t){var r=1/0;for(u=0;u<e.length;u++){t=e[u][0],s=e[u][1],a=e[u][2];for(var l=!0,c=0;c<t.length;c++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](t[c])}))?t.splice(c--,1):(l=!1,a<r&&(r=a));if(l){e.splice(u--,1);var i=s();void 0!==i&&(n=i)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,s,a]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var s,a,r=t[0],l=t[1],c=t[2],i=0;if(r.some((function(n){return 0!==e[n]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(c)var u=c(o)}for(n&&n(t);i<r.length;i++)a=r[i],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},t=self["webpackChunkmyspace"]=self["webpackChunkmyspace"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(7650)}));t=o.O(t)})();
//# sourceMappingURL=app.d75acd78.js.map