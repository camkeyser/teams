(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/null.78fa6609.jpg"},function(e,t,a){e.exports=a.p+"static/media/f.bd513b58.png"},function(e,t,a){e.exports=a.p+"static/media/t.54bcdd89.png"},function(e,t,a){e.exports=a.p+"static/media/i.55617ac9.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=(a(15),a(5)),m=a(6),o=a(9),u=a(8),i=a(1),p=a.n(i),d=a(7),E=a(2);function f(){document.querySelector(".button").style.display="block","null"===document.querySelector(".leagueList").value&&(document.querySelector(".button").style.display="none")}function b(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),c=t[0],l=t[1],s=Object(n.useState)([]),m=Object(E.a)(s,2),o=m[0],u=m[1],i=function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://www.thesportsdb.com/api/v1/json/1/searchteams.php?l=".concat(c),e.prev=2,e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,u(r.teams),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form",onSubmit:i,onChange:f},r.a.createElement("div",{className:"select"},r.a.createElement("select",{id:"format",className:"leagueList",name:"query",value:c,onChange:function(e){return l(e.target.value)}},r.a.createElement("option",{value:"null"},"Select League"),r.a.createElement("option",{value:"NFL"},"NFL"),r.a.createElement("option",{value:"NBA"},"NBA"),r.a.createElement("option",{value:"NHL"},"NHL"),r.a.createElement("option",{value:"MLB"},"MLB"))),r.a.createElement("button",{className:"button",type:"submit",style:{display:"none"}},"Submit")),r.a.createElement("div",{className:"card-list"},o.map((function(e){return r.a.createElement("div",{className:"card",key:e.idTeam},r.a.createElement("img",{className:"teamLogo",src:e.strTeamBadge,alt:""}),r.a.createElement("h3",{className:"teamName"},e.strTeam),r.a.createElement("p",{className:"est"},"Founded: "+e.intFormedYear),r.a.createElement("img",{className:"stadiumPic",src:e.strStadiumThumb,width:"185px",alt:""}),null==e.strStadiumThumb&&r.a.createElement("img",{className:"stadiumPic",src:a(17),width:"185px",alt:""}),r.a.createElement("p",{className:"stadiumName"},e.strStadium),r.a.createElement("p",{className:"stadiumLocation"},e.strStadiumLocation),r.a.createElement("div",{className:"socials"},null!=e.strFacebook&&r.a.createElement("a",{href:"https://"+e.strFacebook,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:a(18),alt:""})),null!=e.strTwitter&&r.a.createElement("a",{href:"https://"+e.strTwitter,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:a(19),alt:""})),null!=e.strInstagram&&r.a.createElement("a",{href:"https://"+e.strInstagram,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:a(20),alt:""}))))}))))}function h(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"credits"},r.a.createElement("a",{href:"https://www.thesportsdb.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://www.thesportsdb.com/images/logo_new-medium.png",alt:""}))))}var g=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"React.js Team Search"),r.a.createElement(b,null)),r.a.createElement(h,null))}}]),a}(r.a.Component);l.a.render(r.a.createElement(g,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.2a98e5de.chunk.js.map