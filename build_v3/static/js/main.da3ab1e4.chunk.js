(this.webpackJsonpcar_insurance=this.webpackJsonpcar_insurance||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/bmw.4ba23c0f.svg"},55:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/ferrari.2f6002da.svg"},56:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/lamborghini.d48c04a6.svg"},57:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/mercedes.d55c56ff.svg"},58:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/lightning.31448471.png"},59:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/car.553b4b23.png"},60:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/coins.8cd4f3e8.png"},61:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(22),s=c.n(a),i=(c(27),c(2)),r=c(6),l=(c(28),c(0));var d=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(r.b,{className:"navbar-brand",to:"/",children:"Xpress"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav ml-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-link",to:"/about",children:"About"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-link",to:"/getquote",children:"Get Quote"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-link",to:"/contact",children:"Contact"})})]})})]})})})},j=(c(30),c(31),c(7)),o=c.n(j),h=c(12),b=c(5),O=c(13),x=c.n(O),u=(c(51),c.p+"static/media/car-wheel.031b05d4.png"),m=c.p+"static/media/TestDrive_app_phone_2x.1ad81701.webp",p=(c(52),c(53),function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"heading",children:Object(l.jsxs)("div",{className:"animate__flash",children:[Object(l.jsx)("span",{children:"VIN No."}),Object(l.jsx)("h3",{children:e.details[0]})]})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h2",{children:"Don't worry we got you covered ! \ud83d\ude04"})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"Vehicle_data",children:[Object(l.jsx)("div",{className:"upperBar",children:"General Info : "}),Object(l.jsxs)("table",{className:"table",children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"MODEL YEAR :"}),Object(l.jsx)("td",{children:e.details[1]}),Object(l.jsx)("th",{children:"MAKE :"}),Object(l.jsx)("td",{children:e.details[2]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"MODEL :"}),Object(l.jsx)("td",{children:e.details[3]}),Object(l.jsx)("th",{children:"TRIM :"}),Object(l.jsx)("td",{children:e.details[4]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"BODY TYPE :"}),Object(l.jsx)("td",{children:e.details[5]}),Object(l.jsx)("th",{children:"ENGINE SIZE :"}),Object(l.jsx)("td",{children:e.details[6]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"DOORS :"}),Object(l.jsx)("td",{children:e.details[7]}),Object(l.jsx)("th",{children:"SEATS :"}),Object(l.jsx)("td",{children:e.details[8]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"CYCLINDERS :"}),Object(l.jsx)("td",{children:e.details[9]}),Object(l.jsx)("th",{children:"COLOR :"}),Object(l.jsx)("td",{children:"White"})]})]})]})]})}),v=function(){var e=Object(n.useState)({vin:"",modelYear:"",make:"",model:"",trim:"",bodyType:"",engineSize:"",doors:"",seats:"",cyclinders:""}),t=Object(b.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)("home"),r=Object(b.a)(i,2),d=r[0],j=r[1],O=Object(n.useState)(""),v=Object(b.a)(O,2),g=v[0],f=v[1],N=Object(n.useState)({success:!1,token:""}),y=Object(b.a)(N,2),w=y[0],S=y[1];if(!0===w.success){var D={headers:{Authorization:"Bearer ".concat(w.token)}},C={requestId:"string",callerCode:"200",vin:g};x.a.post("https://vehicleapi.xadatahub.com/api/v1/Vehicles/DetailsByVIN",C,D).then((function(e){s({vin:e.data.VehicleDetails.General.Vin,modelYear:e.data.VehicleDetails.General.ModelYear,make:e.data.VehicleDetails.General.MakeName,model:e.data.VehicleDetails.General.ModelName,trim:e.data.VehicleDetails.General.TrimName,bodyType:e.data.VehicleDetails.General.BodyTypeName,engineSize:e.data.VehicleDetails.General.EngineSizeName,doors:e.data.VehicleDetails.General.Doors,seats:e.data.VehicleDetails.General.Seats,cyclinders:e.data.VehicleDetails.General.EngineCylinders})}))}var k={logoBmw:c(54).default,logoFerrari:c(55).default,logoLamborghini:c(56).default,logoMercedes:c(57).default},E={iconSpark:c(58).default,iconCarFront:c(59).default,iconMoney:c(60).default};return Object(l.jsxs)(l.Fragment,{children:["home"===d&&Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"headings",children:[Object(l.jsxs)("h1",{children:["Smarter Car Insurance\u200b in ",Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"60 Seconds"})]}),Object(l.jsx)("h5",{children:"Get an instant quote"}),Object(l.jsx)("div",{className:"input",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j("renderShowData")},method:"POST",children:[Object(l.jsx)("input",{type:"text",maxlength:"17",value:g,onChange:function(e){f(e.target.value)},required:!0}),Object(l.jsx)("button",{onClick:function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(h.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("https://vehicleapi.xadatahub.com/api/v1/Token?Username=dev%40xagroup.com&Password=X4DaTa%2312%2134");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=Object(h.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e().then((function(e){S({success:!0,token:e.data.AccessToken})}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()},children:"Quote in 30 seconds"})]})}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)("a",{href:"",children:"Where can I find my chassis/vin number?\u200b "}),Object(l.jsx)("a",{href:"",children:"Don\u2019t have a chassis/ vin number? Click here to manually select\u200b"})]})]}),Object(l.jsx)("img",{src:u,className:"img",alt:"rotating_tyre"})]}),Object(l.jsxs)("div",{className:"innerContainer",children:[Object(l.jsx)("h2",{children:"OUR PARTNERS"}),Object(l.jsxs)("div",{className:"contents",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:k.logoBmw,alt:"bmw_logo",width:"30%"}),Object(l.jsx)("p",{children:"BMW"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:k.logoFerrari,alt:"ferrari_logo",width:"30%"}),Object(l.jsx)("p",{children:"FERRARI"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:k.logoLamborghini,alt:"lamborghini_logo",width:"30%"}),Object(l.jsx)("p",{children:"LAMBORGHINI"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:k.logoMercedes,alt:"mercedes_logo",width:"30%"}),Object(l.jsx)("p",{children:"MERCEDES"})]})]})]}),Object(l.jsxs)("div",{className:"innerContainer",id:"innerContainer",children:[Object(l.jsx)("h2",{children:"Car insurance for good drivers"}),Object(l.jsx)("h5",{children:"Savings made simple."}),Object(l.jsxs)("div",{className:"contents",id:"contents",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:E.iconSpark,alt:"spark_icon",width:"60%"}),Object(l.jsx)("h5",{children:"Quote"}),Object(l.jsx)("p",{children:"We use your iPhone or Android phone to measure your driving behavior. Better driving = more savings."})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:E.iconCarFront,alt:"carFront_icon",width:"60%"}),Object(l.jsx)("h5",{children:"Drive"}),Object(l.jsx)("p",{children:"We use your iPhone or Android phone to measure your driving behavior. Better driving = more savings."})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:E.iconMoney,alt:"money_icon",width:"50%"}),Object(l.jsx)("h5",{children:"Save"}),Object(l.jsx)("p",{children:"Choose a recommended auto insurance plan or create your own. Then pay for your personalized policy \u2014 all in the app."})]})]})]}),Object(l.jsxs)("div",{className:"innerContainer",id:"phone_container",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:m,alt:"phone",width:"100%"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{id:"h4",children:"We do insurance the fair way"}),Object(l.jsx)("br",{}),Object(l.jsx)("h5",{children:"Good drivers save more."}),Object(l.jsx)("br",{}),Object(l.jsx)("h5",{children:"Drive with the Root app. While you drive, we gather and analyze data from your smartphone\u2019s sensors. After a few weeks, you can get a car insurance quote based primarily on how you drive."})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"#",id:"button",children:"Learn More"})})]}),"renderShowData"===d&&Object(l.jsx)(p,{details:[a.vin,a.modelYear,a.make,a.model,a.trim,a.bodyType,a.engineSize,a.doors,a.seats,a.cyclinders]})]})},g=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{children:"I'm CONTACT PAGE"})})},f=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{children:"I'm ABOUT PAGE"})})},N=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{children:"I'm GetQuote PAGE"})})};var y=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"App-header",children:[Object(l.jsx)(d,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/",element:Object(l.jsx)(v,{})}),Object(l.jsx)(i.a,{exact:!0,path:"/contact",element:Object(l.jsx)(g,{})}),Object(l.jsx)(i.a,{exact:!0,path:"/about",element:Object(l.jsx)(f,{})}),Object(l.jsx)(i.a,{exact:!0,path:"/getquote",element:Object(l.jsx)(N,{})})]})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};s.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(y,{})})}),document.getElementById("root")),w()}},[[61,1,2]]]);
//# sourceMappingURL=main.da3ab1e4.chunk.js.map