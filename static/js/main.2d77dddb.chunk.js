(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(82)},47:function(e,t,a){},49:function(e,t,a){},70:function(e,t,a){},81:function(e,t,a){e.exports=a.p+"static/media/tardos.16d3c46f.jpg"},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),i=(a(47),a(5)),o=a(6),u=a(9),s=a(7),m=a(10),d=a(90),h=a(91),b=(a(49),a(51),a(33)),p=a(86),E=(a(70),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){return l.a.createElement(b.slide,null,l.a.createElement(p.a,{to:"/"},"Home"),l.a.createElement(p.a,{to:"/settings"},"Settings"))}}]),t}(l.a.Component)),g=a(14),v=a(18),f=a(87),j=a(92),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",redirect:!1},a.onChange=function(e){a.setState(Object(v.a)({},a.state,{value:e.target.value}))},a.onKeyPress=function(e){"Enter"==e.key&&(console.log(a.state.value),a.setState(Object(v.a)({},a.state,{redirect:!0})))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return this.state.redirect?l.a.createElement(j.a,{to:{pathname:"/results",search:"?utm="+this.state.value,state:{search:this.state.value}}}):l.a.createElement("div",{id:"custom-search"},l.a.createElement(f.a,(e={value:this.state.value,small:!1,light:!0,type:"submit",name:""},Object(g.a)(e,"value",this.state.value),Object(g.a)(e,"placeHolderText","Search"),Object(g.a)(e,"onChange",this.onChange),Object(g.a)(e,"onKeyPress",this.onKeyPress),Object(g.a)(e,"id","search-1"),Object(g.a)(e,"type","text"),e)))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).onSubmit=function(){},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("p",null,"Find a textbook"),l.a.createElement(y,null)))}}]),t}(n.Component),w=a(89),C=a(34),k=a.n(C),S=w.a.TableContainer,T=w.a.Table,F=w.a.TableHead,B=w.a.TableRow,A=w.a.TableBody,N=w.a.TableCell,L=w.a.TableHeader,x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=k.a.map([{isbn_number:1234567890,id:"1234",title:"Algorithm Design",author:"Kleinberg Tardos",edition:"3rd",price:100,location:"UofT Downtown"},{isbn_number:1234567890,id:"3421",title:"Algorithm Design",author:"Kleinberg Tardos",edition:"2nd",price:102,location:"UofT Downtown"},{isbn_number:1234567890,id:"7891",title:"Algorithm Design",author:"Kleinberg Tardos",edition:"3rd",price:99,location:"Uwaterloo"}],function(e){return Object(v.a)({},e,{listing_id:l.a.createElement(p.a,{to:{pathname:"/listing",state:{id:e.id,title:e.title,author:e.author,isbnNumber:e.isbn_number,edition:e.edition,price:e.price,location:e.location}}}," ",e.id," ")})}),t=l.a.createElement(w.a,{rows:e,headers:[{header:"Listing Id",key:"listing_id"},{header:"ISBN Number",key:"isbn_number"},{header:"Title",key:"title"},{header:"Author",key:"author"},{header:"Edition",key:"edition"},{header:"Price",key:"price"},{header:"Location",key:"location"}],render:function(e){var t=e.rows,a=e.headers,n=e.getHeaderProps;return l.a.createElement(S,{title:"Results for Tardos"},l.a.createElement(T,null,l.a.createElement(F,null,l.a.createElement(B,null,a.map(function(e){return l.a.createElement(L,n({header:e}),e.header)}))),l.a.createElement(A,null,t.map(function(e){return l.a.createElement(B,{key:e.id},e.cells.map(function(e){return l.a.createElement(N,{key:e.id},e.value)}))}))))}});return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("p",null,"results")),l.a.createElement("center",null,t))}}]),t}(n.Component),P=a(19),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={selectedLanguage:null,selectedFont:null,selectedFontSize:null,selectedBackgroundColour:null},a.handleLanguageChange=function(e){a.setState({selectedLanguage:e})},a.handleFontChange=function(e){a.setState({selectedFont:e})},a.handleFontSizeChange=function(e){a.setState({selectedFontSize:e})},a.handleBackgroundColourChange=function(e){a.setState({selectedBackgroundColor:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.selectedLanguage,a=e.selectedFont,n=e.selectedFontSize,r=e.selectedBackgroundColour;return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h1",null,"Settings"),l.a.createElement("div",{id:"accessibility"},l.a.createElement("p",null,"Language"),l.a.createElement("div",{style:{width:200}},l.a.createElement(P.a,{value:t,onChange:this.handleLanguageChange,options:[{value:"english",label:"English - EN"},{value:"spanish",label:"Spanish - ES"},{value:"french",label:"French - FE"}]})),l.a.createElement("p",null,"Font"),l.a.createElement("div",{style:{width:200}},l.a.createElement(P.a,{value:a,onChange:this.handleFontChange,options:[{value:"Times New Roman",label:"Times New Roman"},{value:"Arial",label:"Arial"},{value:"Arial Black",label:"Arial Black"},{value:"Comic Sans",label:"Comic Sans"},{value:"Wingdings",label:"Wingdings"}]})),l.a.createElement("p",null,"Font Size"),l.a.createElement("div",{style:{width:200}},l.a.createElement(P.a,{value:n,onChange:this.handleFontSizeChange,options:[{value:"12",label:"12pt"},{value:"13",label:"13pt"},{value:"14",label:"14pt"},{value:"15",label:"15pt"}]})),l.a.createElement("p",null,"Background Colour"),l.a.createElement("div",{style:{width:200}},l.a.createElement(P.a,{value:r,onChange:this.handleBackgroundColourChange,options:[{value:"blue",label:"Blue"},{value:"white",label:"White"}]}))),l.a.createElement("div",{id:"login"},l.a.createElement("h3",null,"Login"),l.a.createElement("p",null,"Email: ",l.a.createElement("input",null)),l.a.createElement("p",null,"Password: ",l.a.createElement("input",null)," "),l.a.createElement("button",null,"reset password"),l.a.createElement("button",null,"link facebook"))))}}]),t}(n.Component),z=a(81),D=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.location.state,t=(e.id,e.title),a=e.author,n=e.edition,r=e.isbnNumber,c=e.price,i=e.location;return l.a.createElement("div",{id:"listing"},l.a.createElement("center",null,l.a.createElement("h1",null,t),l.a.createElement("img",{src:z,height:"400px",width:"400px"}),l.a.createElement("p",null,l.a.createElement("b",null,"Price:")," ",c),l.a.createElement("p",null,l.a.createElement("b",null,"Title:")," ",t),l.a.createElement("p",null,l.a.createElement("b",null,"Author:")," ",a),l.a.createElement("p",null,l.a.createElement("b",null,"Edition:")," ",n),l.a.createElement("p",null,l.a.createElement("b",null,"ISBN Number:")," ",r),l.a.createElement("p",null,l.a.createElement("b",null,"Condition:")," Good"),l.a.createElement("p",null,l.a.createElement("b",null,"Location:")," ",i),l.a.createElement("p",null,l.a.createElement("b",null,"Seller:")," ",l.a.createElement("a",{href:""},"wgma")," "),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement("button",null,"Contact Seller by Email")),l.a.createElement("td",null," ",l.a.createElement("button",null,"Contact Seller by Messenger")))))))}}]),t}(n.Component),K=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{id:"App",className:"container-fluid"},l.a.createElement("div",null,l.a.createElement(E,null)),l.a.createElement("div",{className:"content-wrapper padding"},l.a.createElement(h.a,{exact:!0,path:"/",component:O}),l.a.createElement(h.a,{path:"/settings",component:_}),l.a.createElement(h.a,{path:"/results",component:x}),l.a.createElement(h.a,{path:"/listing",component:D}),this.props.children)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.2d77dddb.chunk.js.map