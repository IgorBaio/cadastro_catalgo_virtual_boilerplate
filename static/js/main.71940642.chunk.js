(this.webpackJsonpcatalogo_fabislacos_site=this.webpackJsonpcatalogo_fabislacos_site||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(17),r=a.n(i),o=(a(102),a(103),a(30)),s=a(18),l=a(19),d=a.n(l),u=a(25),j=a(14),p=a(176),b=a(164),m=a(175),h=a(166),g=a(165),f=a(159),x=a(162),O=a(53),v=a.n(O),y=a(48);a(111),a(112);y.a.initializeApp({apiKey:"AIzaSyBVw26Xr_I-ry6ejYxAaeOZ_01I4_oxKjE",authDomain:"catalogofabislacos.firebaseapp.com",projectId:"catalogofabislacos",storageBucket:"catalogofabislacos.appspot.com",messagingSenderId:"503577431829",appId:"1:503577431829:web:751b5ccb76f3331fbae31c"});var w=y.a.auth,C=y.a.firestore(),N=a(35),S=a(79),k=a.n(S),W=a(80),I=a.n(W),q=a(4),D=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(7),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.success.dark},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},link:{marginTop:25,color:"rgba(0,0,0,0.65)",textDecoration:"none",marginRight:"0%",alignSelf:"flex-end","&:hover":{color:"rgba(0,0,0,1)"}},moneyInput:{marginTop:12,padding:"0 0 10px 15px",paddingTop:15,color:"#666",width:"100%",height:30,borderWidth:"0 0 2px 0",fontSize:16,fontFamily:"Montserrat",fontWeight:800,"&:focus":{outline:"none"},"&::placeholder":{color:"#666",fontStyle:"italic",fontWeight:400,fontFamily:"Montserrat",padding:"0 0 5px 5px"}},styleInput:{fontFamily:"Montserrat"}}})),T=function(e){var t=e.value,a=e.onChange,n=(e.setPreco,e.preco,D()),c=I()(Object(N.a)({},{prefix:"R$ ",includeThousandsSeparator:!0,thousandsSeparatorSymbol:".",allowDecimal:!0,decimalSymbol:",",decimalLimit:2,requireDecimal:!1,allowNegative:!1,allowLeadingZeroes:!1}));return Object(q.jsx)(k.a,{mask:c,className:n.moneyInput,id:"price",onChange:a,value:t,label:"Pre\xe7o",placeholder:"R$ 00,00",onBlur:function(){}})},F=a.p+"static/media/uwn.3b97a0cc.png",M=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(7),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.success.dark},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},link:{marginTop:25,color:"rgba(0,0,0,0.65)",textDecoration:"none",marginRight:"0%",alignSelf:"flex-end","&:hover":{color:"rgba(0,0,0,1)"}},moneyInput:{marginTop:12,padding:"0 0 10px 15px",paddingTop:15,color:"#666",width:"100%",height:30,borderWidth:"0 0 2px 0",fontSize:16,fontFamily:"Montserrat",fontWeight:800,"&:focus":{outline:"none"},"&::placeholder":{color:"#666",fontStyle:"italic",fontWeight:400,fontFamily:"Montserrat",padding:"0 0 5px 5px"}},styleInput:{fontFamily:"Montserrat"}}}));function R(){var e=M(),t=Object(n.useState)(!0),a=Object(j.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(""),s=Object(j.a)(r,2),l=s[0],f=s[1],O=Object(n.useState)(""),w=Object(j.a)(O,2),N=w[0],S=w[1],k=Object(n.useState)(""),W=Object(j.a)(k,2),I=W[0],D=W[1],R=Object(n.useState)(""),E=Object(j.a)(R,2),L=E[0],A=E[1],V=Object(n.useState)(null),_=Object(j.a)(V,2),z=_[0],P=_[1],B=Object(n.useState)(null),Q=Object(j.a)(B,2),U=Q[0],X=Q[1],$=Object(n.useState)("Nada salvo na sess\xe3o ainda."),J=Object(j.a)($,2),K=J[0],Z=J[1];function G(){return(G=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.collection("produtos").add({produto:{nome:t.nome,preco:t.preco,descricao:t.descricao,quantidade:t.quantidade,categoria:t.categoria,file:t.file},created:y.a.firestore.FieldValue.serverTimestamp()}).then((function(){Z("Dado cadastrado com sucesso")})).catch((function(e){Z("Falha no cadastro")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c&&i(!1),Object(q.jsxs)(x.a,{component:"main",maxWidth:"xs",children:[Object(q.jsx)(b.a,{}),Object(q.jsxs)("div",{className:e.paper,children:[Object(q.jsx)("img",{style:{height:80,width:80},src:F}),Object(q.jsx)(g.a,{component:"h1",variant:"h5",children:"Cadastro Produto"}),Object(q.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(q.jsxs)(h.a,{container:!0,spacing:2,children:[Object(q.jsx)(h.a,{item:!0,xs:12,children:Object(q.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"name",value:l,label:"Nome",name:"name",autoComplete:"name",onChange:function(e){return f(e.target.value)},className:e.styleInput})}),Object(q.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(q.jsx)(m.a,{autoComplete:"quantidade",name:"quantidade",variant:"outlined",required:!0,fullWidth:!0,value:L,id:"quantidade",label:"Quantidade",onChange:function(e){return A(e.target.value)},className:e.styleInput})}),Object(q.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(q.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"categoria",value:I,label:"Categoria",name:"categoria",autoComplete:"categoria",onChange:function(e){return D(e.target.value)},className:e.styleInput})}),Object(q.jsx)(h.a,{item:!0,xs:12,children:Object(q.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,multiline:!0,id:"descricao",value:N,label:"Descri\xe7\xe3o",name:"descricao",autoComplete:"descricao",onChange:function(e){return S(e.target.value)},className:e.styleInput})}),Object(q.jsx)(h.a,{item:!0,xs:12,children:Object(q.jsx)(T,{onChange:function(e){X(e.target.value)},setPreco:X,preco:U,value:U})}),Object(q.jsxs)(h.a,{item:!0,xs:12,children:[Object(q.jsx)(v.a,{base64:!0,handleFiles:function(e){P({name:e.fileList[0].name,base64:e.base64})},children:Object(q.jsx)(p.a,{variant:"contained",component:"label",children:"Enviar arquivo"})}),z&&Object(q.jsx)(g.a,{children:z.name})]})]}),Object(q.jsx)(p.a,{fullWidth:!0,variant:"contained",color:"primary",preventDefault:!0,className:e.submit,onClick:function(e){!function(e){G.apply(this,arguments)}({nome:l,preco:U,descricao:N,quantidade:L,categoria:I,file:z}),f(""),X(null),S(""),D(""),A(""),P(null)},children:"Salvar"})]}),Object(q.jsxs)(g.a,{style:{margin:7},variant:"body1",children:["Status: ",K]}),Object(q.jsx)(o.b,{className:e.link,to:"/view",children:Object(q.jsx)(g.a,{align:"right",children:"Visualizar produtos no estoque \u27a4"})})]})]})}var E=a(170),L=a(174),A=a(173),V=a(169),_=a(171),z=a(172),P=a(167),B=a(68),Q=a.n(B),U=a(168),X=a(58),$=a(85),J=a.n($),K=Object(f.a)((function(e){return{table:{marginTop:15},avatar:{margin:e.spacing(1),backgroundColor:e.palette.success.dark},paper:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"10px",height:"100%",width:"99%",marginTop:e.spacing(7)},link:{marginTop:25,color:"rgba(0,0,0,0.65)",textDecoration:"none",marginLeft:"10%",alignSelf:"flex-start","&:hover":{color:"rgba(0,0,0,1)"}},header:{fontWeight:"bold",backgroundColor:"#CCC",boxShadow:"0 3px 5px 2px rgba(120, 120, 120, .3)"}}})),Z=J()()((function(e){var t=K(),a=Object(n.useState)([]),c=Object(j.a)(a,2),i=c[0],r=c[1],s=Object(n.useState)(!0),l=Object(j.a)(s,2),b=l[0],m=l[1],h=!0,f=Object(X.a)(C.collection("produtos").orderBy("created","desc").limit(500)),x=Object(j.a)(f,3),O=x[0];x[1],x[2];function v(){return(v=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),C.collection("produtos").doc(t).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){var e=(null===O||void 0===O?void 0:O.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{key:e.id})})).reverse())||[];r(e),console.log(e)}),[O]),b&&m(!1),i.length>0&&(h=!1);var y=function(e){!function(e){v.apply(this,arguments)}(e)};return e.containerWidth<=500?Object(q.jsxs)("div",{className:t.paper,children:[Object(q.jsx)("img",{style:{height:80,width:80},src:F}),Object(q.jsx)(g.a,{component:"h1",variant:"h5",children:"Lista de produtos"}),h?Object(q.jsx)(U.a,{}):Object(q.jsx)(V.a,{style:{width:"100vw",margin:"0 10px",display:"flex",justifyContent:"center",alignItems:"center"},component:P.a,children:Object(q.jsxs)(E.a,{className:t.table,"aria-label":"simple table",children:[Object(q.jsx)(_.a,{children:Object(q.jsx)(z.a,{children:Object(q.jsx)(A.a,{align:"center",className:t.header})})}),Object(q.jsx)(L.a,{children:null===i||void 0===i?void 0:i.map((function(e){return Object(q.jsx)(z.a,{children:Object(q.jsxs)(A.a,{align:"center",children:[Object(q.jsx)("img",{style:{height:100,width:100},src:e.produto.file.base64||e.produto.file}),Object(q.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(q.jsxs)(g.a,{style:{fontWeight:"bold",marginRight:10},children:["NOME:"," "]}),Object(q.jsx)(g.a,{children:" "+e.produto.nome})]}),Object(q.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(q.jsxs)(g.a,{style:{fontWeight:"bold",marginRight:10},children:["CATEGORIA:"," "]}),Object(q.jsx)(g.a,{children:" "+e.produto.categoria})]}),Object(q.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(q.jsxs)(g.a,{style:{fontWeight:"bold",marginRight:5},children:["DESCRI\xc7\xc3O:"," "]}),Object(q.jsx)(g.a,{children:" "+e.produto.descricao})]}),Object(q.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(q.jsxs)(g.a,{style:{fontWeight:"bold",marginRight:5},children:["QUANTIDADE:"," "]}),Object(q.jsx)(g.a,{children:" "+e.produto.quantidade})]}),Object(q.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(q.jsxs)(g.a,{style:{fontWeight:"bold",marginRight:5},children:["PRE\xc7O:"," "]}),Object(q.jsx)(g.a,{children:" "+e.produto.preco})]}),Object(q.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginRight:"30%",marginLeft:"30%"},children:[Object(q.jsx)(o.b,{to:{pathname:"/produto_view",state:e},id:e.produto.key,name:e.produto.nome,style:{display:"flex",flex:1},children:Object(q.jsx)(p.a,{fullWidth:!0,variant:"contained",color:"primary",preventDefault:!0,className:t.submit,onClick:function(){},children:Object(q.jsx)(Q.a,{})})}),Object(q.jsx)(p.a,{fullWidth:!0,variant:"contained",color:"primary",preventDefault:!0,className:t.submit,onClick:function(){return y(e.key)},style:{display:"flex",flex:1,marginLeft:"5%"},children:"X"})]})]})},e.produto.nome)}))})]})}),Object(q.jsx)(o.b,{className:t.link,to:"/add",children:Object(q.jsx)(g.a,{align:"left",children:"\u2b9c Voltar para o cadastro de produtos"})})]}):Object(q.jsxs)("div",{className:t.paper,children:[Object(q.jsx)("img",{style:{height:80,width:80},src:F}),Object(q.jsx)(g.a,{component:"h1",variant:"h5",children:"Lista de produtos"}),h?Object(q.jsx)(U.a,{}):Object(q.jsx)(V.a,{style:{width:"100vw",margin:"0 10px",display:"flex",justifyContent:"center",alignItems:"center"},component:P.a,children:Object(q.jsxs)(E.a,{className:t.table,"aria-label":"simple table",children:[Object(q.jsx)(_.a,{children:Object(q.jsxs)(z.a,{children:[Object(q.jsx)(A.a,{align:"center",className:t.header,children:"Nome"}),Object(q.jsx)(A.a,{align:"center",className:t.header,children:"Categoria"}),Object(q.jsx)(A.a,{align:"center",className:t.header,children:"Descri\xe7\xe3o"}),Object(q.jsx)(A.a,{align:"center",className:t.header,children:"Quantidade"}),Object(q.jsx)(A.a,{align:"center",className:t.header,children:"Imagem"}),Object(q.jsx)(A.a,{align:"center",className:t.header,children:"Pre\xe7o"}),Object(q.jsx)(A.a,{align:"center",className:t.header,children:"Editar"}),Object(q.jsx)(A.a,{align:"center",className:t.header,children:"Apagar"})]})}),Object(q.jsx)(L.a,{children:null===i||void 0===i?void 0:i.map((function(e){return Object(q.jsxs)(z.a,{children:[Object(q.jsx)(A.a,{align:"center",children:e.produto.nome}),Object(q.jsx)(A.a,{align:"center",children:e.produto.categoria}),Object(q.jsx)(A.a,{align:"center",children:e.produto.descricao}),Object(q.jsx)(A.a,{align:"center",children:e.produto.quantidade}),Object(q.jsx)(A.a,{align:"center",children:Object(q.jsx)("img",{style:{height:100,width:100},src:e.produto.file.base64||e.produto.file})}),Object(q.jsx)(A.a,{align:"center",children:e.produto.preco}),Object(q.jsx)(A.a,{align:"center",children:Object(q.jsx)(o.b,{to:{pathname:"/produto_view",state:e},id:e.produto.key,name:e.produto.nome,children:Object(q.jsx)(p.a,{fullWidth:!0,variant:"contained",color:"primary",preventDefault:!0,className:t.submit,onClick:function(){},children:Object(q.jsx)(Q.a,{})})})}),Object(q.jsx)(A.a,{align:"center",children:Object(q.jsx)(p.a,{fullWidth:!0,variant:"contained",color:"primary",preventDefault:!0,className:t.submit,onClick:function(){return y(e.key)},children:"X"})})]},e.produto.nome)}))})]})}),Object(q.jsx)(o.b,{className:t.link,to:"/add",children:Object(q.jsx)(g.a,{align:"left",children:"\xab Voltar para o cadastro de produtos"})})]})})),G=a(177),H=a(86),Y=a.n(H),ee=Object(f.a)((function(e){return{paper:{marginTop:e.spacing(7),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.success.dark},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"},link:{marginTop:25,color:"rgba(0,0,0,0.65)",textDecoration:"none",marginLeft:"10%",alignSelf:"flex-start","&:hover":{color:"rgba(0,0,0,1)"}},moneyInput:{marginTop:12,padding:"0 0 10px 15px",paddingTop:15,color:"#666",width:"100%",height:30,borderWidth:"0 0 2px 0",fontSize:16,fontFamily:"Montserrat",fontWeight:800,"&:focus":{outline:"none"},"&::placeholder":{color:"#666",fontStyle:"italic",fontWeight:400,fontFamily:"Montserrat",padding:"0 0 5px 5px"}},styleInput:{fontFamily:"Montserrat"}}})),te=function(){var e=Object(s.e)(),t=Object(n.useState)(e.state.key),a=Object(j.a)(t,2),c=a[0],i=(a[1],Object(n.useState)(e.state.produto.nome)),r=Object(j.a)(i,2),l=r[0],f=r[1],O=Object(n.useState)(e.state.produto.preco),w=Object(j.a)(O,2),N=w[0],S=w[1],k=Object(n.useState)(e.state.produto.descricao),W=Object(j.a)(k,2),I=W[0],D=W[1],F=Object(n.useState)(e.state.produto.categoria),M=Object(j.a)(F,2),R=M[0],E=M[1],L=Object(n.useState)(e.state.produto.quantidade),A=Object(j.a)(L,2),V=A[0],_=A[1],z=Object(n.useState)("Nada salvo na sess\xe3o ainda."),P=Object(j.a)(z,2),B=P[0],Q=P[1],U=Object(n.useState)(e.state.produto.file),X=Object(j.a)(U,2),$=X[0],J=X[1];function K(){return(K=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.collection("produtos").doc(t.id).update({produto:{nome:t.nome,preco:t.preco,descricao:t.descricao,quantidade:t.quantidade,categoria:t.categoria,file:t.file},created:y.a.firestore.FieldValue.serverTimestamp()}).then((function(){Q("Dado editado com sucesso")})).catch((function(e){Q("Falha na edi\xe7\xe3o")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=ee();return Object(q.jsxs)(x.a,{component:"main",maxWidth:"xs",children:[Object(q.jsx)(b.a,{}),Object(q.jsxs)("div",{className:Z.paper,children:[Object(q.jsx)(G.a,{className:Z.avatar,children:Object(q.jsx)(Y.a,{})}),Object(q.jsx)(g.a,{component:"h1",variant:"h5",children:"Atualiza\xe7\xe3o do Produto"}),Object(q.jsxs)("form",{className:Z.form,noValidate:!0,children:[Object(q.jsxs)(h.a,{container:!0,spacing:2,children:[Object(q.jsx)(h.a,{item:!0,xs:12,children:Object(q.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"name",value:l,label:"Nome",name:"name",autoComplete:"name",onChange:function(e){return f(e.target.value)},className:Z.styleInput})}),Object(q.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(q.jsx)(m.a,{autoComplete:"quantidade",name:"quantidade",variant:"outlined",required:!0,fullWidth:!0,value:V,id:"quantidade",label:"Quantidade",onChange:function(e){return _(e.target.value)},className:Z.styleInput})}),Object(q.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(q.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"categoria",value:R,label:"Categoria",name:"categoria",autoComplete:"categoria",onChange:function(e){return E(e.target.value)},className:Z.styleInput})}),Object(q.jsx)(h.a,{item:!0,xs:12,children:Object(q.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"descricao",value:I,label:"Descri\xe7\xe3o",name:"descricao",autoComplete:"descricao",onChange:function(e){return D(e.target.value)},className:Z.styleInput})}),Object(q.jsx)(h.a,{item:!0,xs:12,children:Object(q.jsx)(T,{onChange:function(e){return S(e.target.value)},value:N,preco:N,setPreco:S})}),Object(q.jsxs)(h.a,{item:!0,xs:12,children:[Object(q.jsx)(v.a,{base64:!0,handleFiles:function(e){J({name:e.fileList[0].name,base64:e.base64})},children:Object(q.jsx)(p.a,{variant:"contained",component:"label",children:"Enviar arquivo"})}),$&&Object(q.jsx)(g.a,{children:$.name})]})]}),Object(q.jsx)(p.a,{fullWidth:!0,variant:"contained",color:"primary",preventDefault:!0,className:Z.submit,onClick:function(e){!function(e){K.apply(this,arguments)}({id:c,nome:l,preco:N,descricao:I,quantidade:V,categoria:R,file:$}),f(""),S(""),D(""),E(""),_("")},children:"Atualizar"})]}),Object(q.jsxs)(g.a,{style:{margin:7},variant:"body1",children:["Status: ",B]})]}),Object(q.jsx)(o.b,{className:Z.link,to:"/view",children:Object(q.jsx)(g.a,{align:"left",children:"\u2b9c Voltar para visualizar produtos no estoque"})})]})};var ae={getMessages:function(){return Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.collection("messages").then((function(e){var t=[];return e.forEach((function(e){t.push(e.data())})),t})));case 1:case"end":return e.stop()}}),e)})))()},getProdutos:function(){return Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.collection("produtos").then((function(e){var t=[];return e.forEach((function(e){t.push(e.data())})),t})));case 1:case"end":return e.stop()}}),e)})))()},observeMessages:function(e){C.collection("messages").onSnapshot(e)},sendMessage:function(e){return Object(u.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=w().currentUser,C.collection("messages").add({user:{uid:a.uid,photo:a.photoURL,name:a.displayName,email:a.email},message:e,created:y.a.firestore.FieldValue.serverTimestamp()});case 2:case"end":return t.stop()}}),t)})))()}};a(119);var ne=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1];function i(){ae.sendMessage(a),c("")}return Object(q.jsxs)("div",{className:"MessageSender",children:[Object(q.jsx)("input",{type:"text",value:a,placeholder:"Insira sua mensagem aqui",onChange:function(e){return c(e.target.value)},onSubmit:i}),Object(q.jsx)("button",{onClick:i,children:"Enviar"})]})};a(120);var ce=function(e){var t=e.messages,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){a.current.scrollTop=a.current.scrollHeight}),[t]),Object(q.jsx)("div",{className:"Messages",ref:a,children:t.map((function(e){var t=w().currentUser,a=e.user.uid===t.uid?"outgoing":"incoming";return Object(q.jsx)("div",{className:"Message ".concat(a),children:Object(q.jsxs)("div",{className:a,children:[Object(q.jsx)("img",{src:e.user.photo,alt:e.user.displayName}),Object(q.jsx)("span",{children:e.message})]})},e.key)}))})};var ie=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],i=Object(X.a)(C.collection("messages").orderBy("created","desc").limit(500)),r=Object(j.a)(i,3),o=r[0],s=r[1],l=r[2];return Object(n.useEffect)((function(){var e=(null===o||void 0===o?void 0:o.docs.map((function(e){return Object(N.a)(Object(N.a)({},e.data()),{},{key:e.id})})).reverse())||[];c(e)}),[o]),{messages:a,loadingMessages:s,error:l}};a(121);var re=function(){var e=ie().messages;return Object(q.jsxs)("div",{className:"Chat",children:[Object(q.jsx)(ce,{messages:e}),Object(q.jsx)(ne,{})]})},oe=function(){return Object(q.jsxs)(o.a,{children:[Object(q.jsx)(s.a,{exact:!0,path:"/",component:Z}),Object(q.jsx)(s.a,{exact:!0,path:"/mess",component:re}),Object(q.jsx)(s.a,{exact:!0,path:"/add",component:R}),Object(q.jsx)(s.a,{exact:!0,path:"/view",component:Z}),Object(q.jsx)(s.a,{exact:!0,path:"/produto_view",component:te})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(q.jsx)(c.a.StrictMode,{children:Object(q.jsx)(oe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[122,1,2]]]);
//# sourceMappingURL=main.71940642.chunk.js.map