(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){e.exports=a.p+"static/media/tardos.16d3c46f.jpg"},103:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),o=(a(51),a(5)),i=a(6),s=a(8),u=a(7),m=a(9),d=a(129),b=a(130),h=a(23),p=a.n(h),E=(a(32),a(13)),g=(a(55),a(112)),f=(a(73),a(12)),v=a.n(f),N=(a(81),a(83),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",redirect:!1},a.onSelect=function(e){a.setState(Object(E.a)({},a.state,{value:e,redirect:!0}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.redirect?(this.setState(Object(E.a)({},this.state,{redirect:!1})),l.a.createElement(g.a,{to:{pathname:"/bex/"+this.state.value,state:{search:this.state.value}}})):l.a.createElement(v.a,{onSelect:this.onSelect},l.a.createElement(v.a.Toggle,null),l.a.createElement(v.a.Nav,{defaultSelected:"home"},l.a.createElement(f.NavItem,{eventKey:""},l.a.createElement(f.NavIcon,null,l.a.createElement("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.75em"}})),l.a.createElement(f.NavText,null,"Home")),l.a.createElement(f.NavItem,{eventKey:"createlisting"},l.a.createElement(f.NavIcon,null,l.a.createElement("i",{className:"fa fa-fw fa-plus",style:{fontSize:"1.75em"}})),l.a.createElement(f.NavText,null,"Create Listing")),l.a.createElement(f.NavItem,{eventKey:"settings"},l.a.createElement(f.NavIcon,null,l.a.createElement("i",{className:"fa fa-fw fa-cogs",style:{fontSize:"1.75em"}})),l.a.createElement(f.NavText,null,"Settings")),l.a.createElement(f.NavItem,{eventKey:"login"},l.a.createElement(f.NavIcon,null,l.a.createElement("i",{className:"fa fa-fw fa-sign-in",style:{fontSize:"1.75em"}})),l.a.createElement(f.NavText,null,"Sign In"))))}}]),t}(l.a.Component)),j=a(16),O=a(113),y=a(107),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",redirect:!1},a.onChange=function(e){a.setState(Object(E.a)({},a.state,{value:e.target.value}))},a.onKeyPress=function(e){"Enter"==e.key&&(console.log(a.state.value),a.setState(Object(E.a)({},a.state,{redirect:!0})))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return this.state.redirect?l.a.createElement(y.a,{to:{pathname:"/bex/results",search:"?utm="+this.state.value,state:{search:this.state.value}}}):l.a.createElement("div",{id:"custom-search"},l.a.createElement(O.a,(e={value:this.state.value,small:!1,light:!0,type:"submit",name:""},Object(j.a)(e,"value",this.state.value),Object(j.a)(e,"placeHolderText","Search"),Object(j.a)(e,"onChange",this.onChange),Object(j.a)(e,"onKeyPress",this.onKeyPress),Object(j.a)(e,"id","search-1"),Object(j.a)(e,"type","text"),e)))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).onSubmit=function(){},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h1",null,"Find a textbook"),l.a.createElement(T,null)))}}]),t}(n.Component),C=a(128),w=a(116),k=a(39),S=a.n(k),A=a(1),_=a.n(A),I=C.a.TableContainer,R=C.a.Table,F=C.a.TableHead,B=C.a.TableRow,P=C.a.TableBody,L=C.a.TableCell,U=C.a.TableHeader,D=C.a.TableToolbarSearch,K=(C.a.TableToolbar,C.a.TableToolbarContent,function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).redirectToTarget=function(){a.context.router.history.push("/createlisting")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=S.a.map([{isbn_number:1234567890,id:"1234",title:"Algorithm Design",author:"Kleinberg Tardos",edition:"3rd",price:100,location:"UofT Downtown",condition:"Excellent"},{isbn_number:1234567890,id:"3421",title:"Algorithm Design",author:"Kleinberg Tardos",edition:"2nd",price:102,location:"UofT Downtown",condition:"Excellent"},{isbn_number:1234567890,id:"7891",title:"Algorithm Design",author:"Kleinberg Tardos",edition:"3rd",price:99,location:"Uwaterloo",condition:"Excellent"},{isbn_number:1234567890,id:"78191",title:"An Introduction to Psychological Science",author:"Krause, Smith, Corts & Dolderman",edition:"2nd",price:99,location:"UofT Scarborough",condition:"Great"},{isbn_number:9780521861243,id:"315121",title:"How To Prove It, A Structured Approach",author:"Velleman, Daniel J.",edition:"2nd",price:200,location:"UofT Scarborough",condition:"Usable"},{isbn_number:9780132122719,id:"231311",title:"Discrete Mathematics for Computer Scientists",author:"Stein, Drysdale and Bogart",edition:"1st",price:124,location:"UofT Scarborough",condition:"Good"}],function(e){return Object(E.a)({},e,{listing_id:l.a.createElement(w.a,{to:{pathname:"/bex/listing",state:{id:e.id,title:e.title,author:e.author,isbnNumber:e.isbn_number,edition:e.edition,price:e.price,location:e.location}}}," ",e.id," ")})}),t=l.a.createElement(C.a,{rows:e,headers:[{header:"Listing Id",key:"listing_id"},{header:"ISBN Number",key:"isbn_number"},{header:"Title",key:"title"},{header:"Author",key:"author"},{header:"Edition",key:"edition"},{header:"Price",key:"price"},{header:"Location",key:"location"},{header:"Condition",key:"condition"}],render:function(e){var t=e.rows,a=e.headers,n=e.getHeaderProps,r=e.onInputChange;return l.a.createElement(I,{title:"Results for Algorithm Design"},l.a.createElement(D,{onChange:r}),l.a.createElement("br",null),l.a.createElement(R,null,l.a.createElement(F,null,l.a.createElement(B,null,a.map(function(e){return l.a.createElement(U,n({header:e}),e.header)}))),l.a.createElement(P,null,t.map(function(e){return l.a.createElement(B,{key:e.id},e.cells.map(function(e){return l.a.createElement(L,{key:e.id},e.value)}))}))))}});return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h1",null,"Results")),l.a.createElement("center",null,t))}}]),t}(n.Component));K.contextTypes={router:_.a.object};var z=K,H=a(21),G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={selectedLanguage:null,selectedFont:null,selectedFontSize:null,selectedBackgroundColour:null,selectedTextColour:null},a.handleLanguageChange=function(e){a.setState(Object(E.a)({},a.state,{selectedLanguage:e}))},a.handleFontChange=function(e,t){a.setState(Object(E.a)({},a.state,{selectedFont:e})),t(e)},a.handleFontSizeChange=function(e){a.setState({selectedFontSize:e})},a.handleBackgroundColourChange=function(e){a.setState(Object(E.a)({},a.state,{selectedBackgroundColour:e}))},a.handleTextColourChange=function(e){a.setState(Object(E.a)({},a.state,{selectedTextColour:e}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.selectedLanguage,n=t.selectedFont,r=t.selectedBackgroundColour,c=t.selectedTextColour,o=this.props.onFontChange;return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h1",null,"Settings"),l.a.createElement("div",{id:"accessibility"},l.a.createElement("p",null,"Language"),l.a.createElement("div",{style:{width:200}},l.a.createElement(H.a,{value:a,onChange:this.handleLanguageChange,options:[{value:"english",label:"English - EN"},{value:"spanish",label:"Spanish - ES"},{value:"french",label:"French - FE"}]})),l.a.createElement("p",null,"Font"),l.a.createElement("div",{style:{width:200}},l.a.createElement(H.a,{value:n,onChange:function(t){return e.handleFontChange(t,o)},options:[{value:"tnr12pt",label:"Times New Roman - 12pt"},{value:"tnr13pt",label:"Times New Roman - 13pt"},{value:"tnr14pt",label:"Times New Roman - 14pt"},{value:"tnr15pt",label:"Times New Roman - 15pt"}]})),l.a.createElement("p",null,"Background Colour"),l.a.createElement("div",{style:{width:200}},l.a.createElement(H.a,{value:r,onChange:this.handleBackgroundColourChange,options:[{value:"blue",label:"Blue"},{value:"white",label:"White"},{value:"pink",label:"Pink"},{value:"black",label:"Black"}]})),l.a.createElement("p",null,"Text Colour"),l.a.createElement("div",{style:{width:200}},l.a.createElement(H.a,{value:c,onChange:this.handleTextColourChange,options:[{value:"black",label:"Black"},{value:"yellow",label:"Yellow"}]})),l.a.createElement("br",null),l.a.createElement("button",null,"Submit Changes"))))}}]),t}(n.Component),W=(a(94),a(100),a(102)),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.location.state,t=(e.id,e.title),a=e.author,n=e.edition,r=e.isbnNumber,c=e.price,o=e.location,i=this.props.className;return l.a.createElement("div",{id:"listing",className:"wrapper"},l.a.createElement("center",null,l.a.createElement("h1",null,t),l.a.createElement("div",{id:"image",className:"leftcolumn"},l.a.createElement("img",{src:W,height:"400px",width:"400px"})),l.a.createElement("div",{id:"information",className:"rightcolumn"},l.a.createElement("p",{align:"left",className:i},l.a.createElement("b",null,"Price:")," ",c),l.a.createElement("p",{align:"left",className:i},l.a.createElement("b",null,"Title:")," ",t),l.a.createElement("p",{align:"left",className:i},l.a.createElement("b",null,"Author:")," ",a),l.a.createElement("p",{align:"left",className:i},l.a.createElement("b",null,"Edition:")," ",n),l.a.createElement("p",{align:"left",className:i},l.a.createElement("b",null,"ISBN Number:")," ",r),l.a.createElement("p",{align:"left",className:i},l.a.createElement("b",null,"Condition:")," Good"),l.a.createElement("p",{align:"left",className:i},l.a.createElement("b",null,"Location:")," ",o),l.a.createElement("p",{align:"left",className:i},l.a.createElement("b",null,"Seller:")," ",l.a.createElement("a",{href:""},"wgma")," "),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("button",null,"Contact Seller by Email")),l.a.createElement("td",null," ",l.a.createElement("button",null,"Contact Seller by Messenger"))))))))}}]),t}(n.Component),Y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("center",null,l.a.createElement("div",{id:"login"},l.a.createElement("h3",null,"Login"),l.a.createElement("p",null,"Email: ",l.a.createElement("input",null)),l.a.createElement("p",null,"Password: ",l.a.createElement("input",null)," "),l.a.createElement("button",null,"reset password"),l.a.createElement("button",null,"link facebook")))}}]),t}(n.Component),M=(a(103),a(117)),V=a(118),X=a(119),q=a(120),Q=a(121),$=a(122),Z=a(123),ee=a(124),te=a(125),ae=a(126),ne=a(127),le=a(115),re=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={selectedSchool:null,textbookTitle:null,authors:null,selectedCondition:null,price:null,image:null,isbnNumber:null},a.handleSelectedSchoolChange=function(e){a.setState({selectedSchool:e})},a.onClick=function(){alert("Your textbook has been listed!")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.selectedSchool,e.textbookTitle,e.authors,e.selectedCondition,e.price,e.image,e.isbnNumber,{className:"some-class"});return l.a.createElement("div",{className:"container"},l.a.createElement(M.a,null,l.a.createElement("center",null,l.a.createElement(V.a,{className:"some-class",legendText:"Create Listing"},l.a.createElement(X.a,Object.assign({},{className:"some-class"},{id:"select-1",defaultValue:"placeholder-item"}),l.a.createElement(q.a,{disabled:!0,hidden:!0,value:"placeholder-item",text:"Choose a school"}),l.a.createElement(q.a,{value:"University of Toronto",text:"University of Toronto"}),l.a.createElement(q.a,{value:"University of Waterloo",text:"University of Waterloo"})),l.a.createElement(Q.a,{className:"some-class",id:"test1",labelText:"Textbook Title",placeholder:"Textbook title"}),l.a.createElement(Q.a,{className:"some-class",id:"test2",labelText:"Authors",placeholder:"Authors"}),l.a.createElement($.a,{className:"some-class",id:"number-input-1",label:"Edition number",min:0,max:100,value:1,step:1}),l.a.createElement(Q.a,{className:"some-class",id:"test4",labelText:"Course code which required textbook",placeholder:"Course code"}),l.a.createElement(Q.a,{className:"some-class",id:"test3",labelText:"Price",placeholder:"Price"}),l.a.createElement(V.a,{className:"some-class",legendText:"Price negotiable?"},l.a.createElement(Z.a,{name:"radio-button-group",defaultSelected:"default-selected"},l.a.createElement(ee.a,Object.assign({value:"standard1",id:"radio-1",labelText:"Yes"},t)),l.a.createElement(ee.a,Object.assign({value:"standard2",labelText:"No",id:"radio-2"},t)))),l.a.createElement(Q.a,{className:"some-class",id:"test5",labelText:"ISBN Number",placeholder:"ISBN Number"})),l.a.createElement(V.a,{className:"some-class",legendText:"Textbook Condition"},l.a.createElement(Z.a,{name:"radio-button-group",defaultSelected:"default-selected"},l.a.createElement(ee.a,Object.assign({value:"standard1",id:"radio-1",labelText:"Excellent"},t)),l.a.createElement(ee.a,Object.assign({value:"standard2",labelText:"Great",id:"radio-2"},t)),l.a.createElement(ee.a,Object.assign({value:"standard3",labelText:"Good",id:"radio-3"},t)),l.a.createElement(ee.a,Object.assign({value:"standard4",labelText:"Usable",id:"radio-4"},t)),l.a.createElement(ee.a,Object.assign({value:"standard5",labelText:"Poor",id:"radio-5"},t)))),l.a.createElement(V.a,{className:"some-class",legendText:"Image Uploader"},l.a.createElement(te.a,Object.assign({},{buttonLabel:"Add images",className:"some-class"},{id:"file-1",labelDescription:"Upload images of your textbook. Cover of textbook is highly recommended"}))),l.a.createElement(V.a,{className:"some-class",legendText:"Contact and meetup"},l.a.createElement(V.a,{className:"some-class",legendText:"Show contact Information"},l.a.createElement(ae.a,Object.assign({},{className:"some-class",labelText:"Phone"},{id:"checkbox-0"})),l.a.createElement(ae.a,Object.assign({},{className:"some-class",labelText:"Email"},{id:"checkbox-1"})),l.a.createElement(ae.a,Object.assign({},{className:"some-class",labelText:"Facebook"},{id:"checkbox-2"})))),l.a.createElement(ne.a,{labelText:"Additional Notes for buyer",className:"some-class",placeholder:"Additional Information",id:"test5",cols:50,rows:4}),l.a.createElement(le.a,{onClick:this.onClick},"Create Listing"))))}}]),t}(n.Component),ce=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={font:null},a.onFontChange=function(e){a.setState({font:e.value})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=function(e){switch(e){case"tnr12pt":return p.a.timesNewRoman12pt;case"tnr13pt":return p.a.timesNewRoman13pt;case"tnr14pt":return p.a.timesNewRoman14pt;case"tnr15pt":return p.a.timesNewRoman15pt;default:return null}}(this.state.font);return l.a.createElement(d.a,null,l.a.createElement("div",{id:"App",className:"container-fluid"},l.a.createElement("div",null,l.a.createElement(N,null)),l.a.createElement("div",{className:"content-wrapper padding"},l.a.createElement(b.a,{exact:!0,path:"/bex/",component:x}),l.a.createElement(b.a,{path:"/bex/results",component:z}),l.a.createElement(b.a,{path:"/bex/settings",render:function(t){return l.a.createElement(G,Object.assign({},t,{onFontChange:e.onFontChange}))}}),l.a.createElement(b.a,{path:"/bex/listing",render:function(e){return l.a.createElement(J,Object.assign({},e,{className:t}))}}),l.a.createElement(b.a,{path:"/bex/createlisting",component:re}),l.a.createElement(b.a,{path:"/bex/login",component:Y}),this.props.children)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e,t,a){e.exports={App:"App_App__2ba_c","inline-block-element":"App_inline-block-element__gcjE3",timesNewRoman12pt:"App_timesNewRoman12pt__fys3w",timesNewRoman13pt:"App_timesNewRoman13pt__3XRFI",timesNewRoman14pt:"App_timesNewRoman14pt__14DQh",timesNewRoman15pt:"App_timesNewRoman15pt__2J2wX"}},46:function(e,t,a){e.exports=a(106)},51:function(e,t,a){},73:function(e,t,a){}},[[46,2,1]]]);
//# sourceMappingURL=main.1c3cabb7.chunk.js.map