(this["webpackJsonpgithub.io-webdevelopment"]=this["webpackJsonpgithub.io-webdevelopment"]||[]).push([[0],[,,,function(e,t,s){e.exports={post:"Post_post__273UB",head:"Post_head__1Nc-y",content:"Post_content__bMGpN",imageFrame:"Post_imageFrame__2t0BZ",interactions:"Post_interactions__nicrJ",buttons:"Post_buttons__3_qxr",likes:"Post_likes__WTokm",comments:"Post_comments__1yEfu",ago:"Post_ago__-96Ou",addComment:"Post_addComment__1A7Zw"}},function(e,t,s){e.exports={posts:"Profile_posts__3CyNI",prof:"Profile_prof__XhQHH",head:"Profile_head__3-RCA",intro:"Profile_intro__N0xMw",attributes:"Profile_attributes__12DHI",weak:"Profile_weak__3YRhe"}},function(e,t,s){e.exports={container:"NewPost_container__2eoJ-",photo:"NewPost_photo__1sefv",dropArea:"NewPost_dropArea__oXMv0",dragging:"NewPost_dragging__3XjS9",message:"NewPost_message__qsa-Q",image:"NewPost_image__wmqx3",desc:"NewPost_desc__bzDrO",actions:"NewPost_actions__1xPLa",error:"NewPost_error__M3XsG"}},,,function(e,t,s){e.exports={navbar:"Navbar_navbar__3XhbN",navItem:"Navbar_navItem__2jpla"}},function(e,t,s){e.exports={header:"Header_header__4QMNh"}},function(e,t,s){e.exports={square:"PostThumbnail_square__1dE-V",content:"PostThumbnail_content__1J1TU",image:"PostThumbnail_image__2Fumv"}},,function(e,t,s){e.exports={container:"App_container__1ow-O",content:"App_content__13JYD"}},,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(13),o=s.n(r),c=(s(22),s(6)),i=s(2),d=s(9),l=s.n(d),u=function(e){return(e.startsWith("data:image")?"":"/yyf916999/github.io-webdevelopment")+e},j=s(0);var h=function(){return Object(j.jsxs)("div",{className:l.a.header,children:[Object(j.jsx)("div",{className:l.a.headerItem,children:Object(j.jsx)("button",{children:Object(j.jsx)("img",{src:u("/assets/camera.svg"),alt:"Home"})})}),Object(j.jsx)("div",{className:l.a.headerItem,children:Object(j.jsx)("button",{children:Object(j.jsx)("img",{src:u("/assets/logo.png"),alt:"Explore"})})}),Object(j.jsx)("div",{className:l.a.headerItem,children:Object(j.jsx)("button",{children:Object(j.jsx)("img",{src:u("/assets/message.svg"),alt:"Home"})})})]})},p=s(8),m=s.n(p);var b=function(e){function t(t){e.onNavChange&&e.onNavChange(t)}return Object(j.jsxs)("nav",{className:m.a.navbar,children:[Object(j.jsx)("div",{className:m.a.navItem,children:Object(j.jsx)("button",{onClick:function(e){return t("home")},children:Object(j.jsx)("img",{src:u("/assets/home.svg"),alt:"Home"})})}),Object(j.jsx)("div",{className:m.a.navItem,children:Object(j.jsx)("button",{onClick:function(e){return t("explore")},children:Object(j.jsx)("img",{src:u("/assets/explore.svg"),alt:"Explore"})})}),Object(j.jsx)("div",{className:m.a.navItem,children:Object(j.jsx)("button",{onClick:function(e){return t("newpost")},children:Object(j.jsx)("img",{src:u("/assets/newpost.svg"),alt:"Home"})})}),Object(j.jsx)("div",{className:m.a.navItem,children:Object(j.jsx)("button",{onClick:function(e){return t("activity")},children:Object(j.jsx)("img",{src:u("/assets/activity.svg"),alt:"Explore"})})}),Object(j.jsx)("div",{className:m.a.navItem,children:Object(j.jsx)("button",{onClick:function(e){return t("profile")},children:Object(j.jsx)("img",{src:u("/assets/profile.svg"),alt:"Home"})})})]})};s(24);var f=function(e){var t=e.userId,s=(e.desc,e.comments.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:e.userId})," ",e.text]})})));return Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:t})," ",e.desc]}),s]})},O=s(3),g=s.n(O),v=function(e){var t=Math.floor((new Date-new Date(e))/1e3),s=Math.floor(t/31556926);return s>=1?s+" years":(s=Math.floor(t/2592e3))>=1?s+" months":(s=Math.floor(t/86400))>=1?s+" days":(s=Math.floor(t/3600))>=1?s+" hours":(s=Math.floor(t/60))>=1?s+" minutes":Math.floor(t)+" seconds"};var x=function(e){var t=Object(n.useState)(""),s=Object(i.a)(t,2),a=s[0],r=s[1],o=Object(n.useState)(!1),c=Object(i.a)(o,2),d=c[0],l=c[1];return Object(j.jsxs)("div",{className:g.a.post,children:[Object(j.jsxs)("div",{className:g.a.head,children:[Object(j.jsx)("img",{src:u(e.user.photo),alt:"icon"}),Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:e.user.id})})]}),Object(j.jsxs)("div",{className:g.a.content,children:[Object(j.jsx)("div",{className:g.a.imageFrame,children:Object(j.jsx)("img",{src:u(e.post.photo),alt:"pic"})}),Object(j.jsxs)("div",{className:g.a.interactions,children:[Object(j.jsxs)("div",{className:g.a.buttons,children:[Object(j.jsx)("button",{children:e.likes.self?Object(j.jsx)("img",{src:u("/assets/unlike.svg"),onClick:function(){e.onUnlike(e.post.id)},alt:"Like"}):Object(j.jsx)("img",{src:u("/assets/like.svg"),onClick:function(){e.onLike(e.post.id)},alt:"unLike"})}),Object(j.jsx)("button",{onClick:function(e){return l(!d)},children:Object(j.jsx)("img",{src:u("/assets/comment.svg"),alt:"Comment"})})]}),Object(j.jsx)("div",{className:g.a.likes,children:Object(j.jsx)("p",{children:Object(j.jsxs)("strong",{children:[e.likes.count," likes"]})})}),Object(j.jsx)("div",{className:g.a.comments,children:Object(j.jsx)(f,{userId:e.post.userId,desc:e.post.desc,comments:e.comments})}),Object(j.jsxs)("p",{className:g.a.ago,children:[v(e.post.datetime)," ago"]}),d&&Object(j.jsxs)("form",{className:g.a.addComment,onSubmit:function(t){console.log(e.post.id,a),e.onComment(e.post.id,a),r(""),l(!1),t.preventDefault()},children:[Object(j.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:a,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Post"})]})]})]})]})};var _=function(e){var t=e.store;function s(e,t){return t.users.find((function(t){return t.id===e.userId}))}function n(e,t){return t.comments.filter((function(t){return t.postId===e.id}))}function a(e,t){var s=t.likes.filter((function(t){return t.postId===e.id}));return{self:s.some((function(e){return e.userId===t.currentUserId})),count:s.length}}return Object(j.jsx)("div",{children:t.posts.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(r){return Object(j.jsx)(x,{user:s(r,t),post:r,comments:n(r,t),likes:a(r,t),onLike:e.onLike,onUnlike:e.onUnlike},r.id)}))})};var I=function(){return Object(j.jsx)("div",{children:"Explore"})};var k=function(){return Object(j.jsx)("div",{children:"Activity"})},N=s(5),w=s.n(N),D=s(14),y=s(15),P=s(7),T=s(17),C=s(16),S=function(e){Object(T.a)(s,e);var t=Object(C.a)(s);function s(e){var n;return Object(D.a)(this,s),(n=t.call(this,e)).handleDragEnter=n.handleDragEnter.bind(Object(P.a)(n)),n.handleDrop=n.handleDrop.bind(Object(P.a)(n)),n.handleDragOver=n.handleDragOver.bind(Object(P.a)(n)),n.handleDragLeave=n.handleDragLeave.bind(Object(P.a)(n)),n}return Object(y.a)(s,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=a.a.Children.only(this.props.children);return a.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),s}(n.PureComponent);var L=function(e){var t=Object(n.useState)(!1),s=Object(i.a)(t,2),a=s[0],r=s[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),d=c[0],l=c[1],u=Object(n.useState)(null),h=Object(i.a)(u,2),p=h[0],m=h[1],b=Object(n.useState)(""),f=Object(i.a)(b,2),O=f[0],g=f[1];return Object(j.jsxs)("div",{className:w.a.container,children:[Object(j.jsxs)("div",{className:w.a.photo,children:[p?Object(j.jsx)("img",{src:p,alt:"New Post"}):Object(j.jsx)("div",{className:w.a.message,children:"Drop your image"}),Object(j.jsx)(S,{onDragEnter:function(e){r(!0)},onDragLeave:function(e){r(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var s=new FileReader;s.onloadend=function(e){m(e.target.result)},s.readAsDataURL(t)}}r(!1)}},children:Object(j.jsx)("div",{className:[w.a.dropArea,a?w.a.dragging:null].join(" ")})})]}),Object(j.jsx)("div",{className:w.a.desc,children:Object(j.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:d,onChange:function(e){return function(e){l(e)}(e.target.value)}})}),Object(j.jsx)("div",{className:w.a.error,children:O}),Object(j.jsxs)("div",{className:w.a.actions,children:[Object(j.jsx)("button",{onClick:function(){e.cancelPost()},children:"Cancel"}),Object(j.jsx)("button",{onClick:function(t){t.preventDefault(),null!==p?(e.addPost(p,d),g("")):g("Upload failed.")},children:"Share"})]})]})},U=s(10),Z=s.n(U);var E=function(e){return Object(j.jsx)("div",{className:Z.a.square,children:Object(j.jsx)("div",{className:Z.a.content,children:Object(j.jsx)("img",{className:Z.a.image,src:u(e.props.photo),alt:"Post Thumbnail"})})})},F=s(4),M=s.n(F);var H=function(e){var t=e.store,s=t.users.find((function(e){return e.id===t.currentUserId}));function n(){return t.posts.filter((function(e){return e.userId===t.currentUserId}))}return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsxs)("div",{className:M.a.upper,children:[Object(j.jsxs)("div",{className:M.a.prof,children:[Object(j.jsxs)("div",{className:M.a.head,children:[Object(j.jsx)("img",{src:u(s.photo),alt:"bigFace"}),Object(j.jsx)("h2",{children:s.id})]}),Object(j.jsxs)("div",{className:M.a.intro,children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:s.name})}),Object(j.jsx)("p",{children:s.bio})]})]}),Object(j.jsxs)("div",{className:M.a.attributes,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:n().length})}),Object(j.jsx)("p",{className:M.a.weak,children:"posts"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:t.followers.filter((function(e){return e.userId===t.currentUserId})).length})}),Object(j.jsx)("p",{className:M.a.weak,children:"followers"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:t.followers.filter((function(e){return e.followerId===t.currentUserId})).length})}),Object(j.jsx)("p",{className:M.a.weak,children:"following"})]})]})]}),Object(j.jsx)("div",{className:M.a.lower,children:Object(j.jsx)("div",{className:M.a.posts,children:n().map((function(e){return Object(j.jsx)(E,{props:e})}))})})]})},A={currentUserId:"judy",users:[{id:"judy",email:"judy@bc.edu",photo:"/assets/user1.png",name:"Judy Hopps",bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species."},{id:"nick",email:"nick@bc.edu",photo:"/assets/user2.png",name:"Nick Wilde",bio:"Nick is a charming, small-time, con artist fox with a big mouth and a lot of opinions. But when a rabbit cop outsmarts him, he finds himself actually helping her solve a mystery."},{id:"flash",email:"flash@bc.edu",photo:"/assets/user3.png",name:"Flash Slothmore",bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles."}],followers:[{userId:"nick",followerId:"judy"},{userId:"judy",followerId:"nick"},{userId:"judy",followerId:"flash"}],posts:[{id:"post-1",userId:"judy",photo:"/assets/post1.png",desc:"#zootopia #excited",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"nick",photo:"/assets/post2.png",desc:"#happy #selfie with Judy",datetime:"2020-02-06T22:45:28Z"},{id:"post-3",userId:"flash",photo:"/assets/post3.png",desc:"Don't worry I got this",datetime:"2020-02-03T22:45:28Z"},{id:"post-4",userId:"judy",photo:"/assets/post4.png",desc:"Just trying to make a #friend",datetime:"2020-02-06T22:45:28Z"},{id:"post-5",userId:"judy",photo:"/assets/post5.png",desc:"I am now the first rabbit officer!",datetime:"2020-02-06T22:45:28Z"},{id:"post-6",userId:"judy",photo:"/assets/post6.png",desc:"Having #goodtimes with folks here",datetime:"2020-02-06T22:45:28Z"}],comments:[{userId:"nick",postId:"post-1",text:"Welcome to Zootopia!",datetime:"2020-02-09T22:51:40Z"},{userId:"judy",postId:"post-1",text:"Thanks!\ud83d\ude01Looking forward to meeting you!",datetime:"2020-02-09T22:52:01Z"},{userId:"flash",postId:"post-2",text:"Looking good you two! \ud83d\udc30\ud83e\udd8a",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"judy",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"nick",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"flash",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"judy",postId:"post-3",datetime:"2020-02-09T22:53:40Z"}]},J=s(12),q=s.n(J);var B=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),s=0;s<1e7&&!((new Date).getTime()-t>e);s++);}(1),e?e+t:t};var X=function(e){var t=Object(n.useState)("home"),s=Object(i.a)(t,2),a=s[0],r=s[1],o=Object(n.useState)(A),d=Object(i.a)(o,2),l=d[0],u=d[1];function p(e){var t={userId:l.currentUserId,postId:e,datetime:(new Date).toISOString()};u(Object(c.a)(Object(c.a)({},l),{},{likes:l.likes.concat(t)}))}function m(e){u(Object(c.a)(Object(c.a)({},l),{},{likes:l.likes.filter((function(t){return!(t.userId===l.currentUserId&&t.postId===e)}))}))}function f(e,t){var s={userId:l.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};u(Object(c.a)(Object(c.a)({},l),{},{comments:l.comments.concat(s)}))}function O(e,t){var s={id:B("post"),userId:l.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};u(Object(c.a)(Object(c.a)({},l),{},{posts:l.posts.concat(s)})),r("home")}function g(){r("home")}return Object(j.jsxs)("div",{className:q.a.container,children:[Object(j.jsx)(h,{}),Object(j.jsx)("main",{className:q.a.content,children:function(e){switch(e){case"home":return Object(j.jsx)(_,{store:l,onLike:p,onUnlike:m,onComment:f});case"explore":return Object(j.jsx)(I,{});case"newpost":return Object(j.jsx)(L,{store:l,addPost:O,cancelPost:g});case"activity":return Object(j.jsx)(k,{});case"profile":return Object(j.jsx)(H,{store:l});default:return Object(j.jsx)(_,{})}}(a)}),Object(j.jsx)(b,{onNavChange:r})]})},R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,26)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;s(e),n(e),a(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(X,{})}),document.getElementById("root")),R()}],[[25,1,2]]]);
//# sourceMappingURL=main.cd307342.chunk.js.map