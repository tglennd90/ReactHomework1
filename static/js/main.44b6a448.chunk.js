(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],Array(20).concat([function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/captain1.3a3de63a.jpg"},function(e,t,a){e.exports=a.p+"static/media/captain2.f6bac945.jpg"},function(e,t,a){e.exports=a.p+"static/media/hawk1.74abee16.jpg"},function(e,t,a){e.exports=a.p+"static/media/hawk2.8c4403e6.jpg"},function(e,t,a){e.exports=a.p+"static/media/hulk1.18e80c6e.jpg"},function(e,t,a){e.exports=a.p+"static/media/hulk2.70c301cc.jpg"},function(e,t,a){e.exports=a.p+"static/media/iron1.9be6ff8d.jpg"},function(e,t,a){e.exports=a.p+"static/media/iron2.5b684353.jpg"},function(e,t,a){e.exports=a.p+"static/media/thor1.ba9aaa13.jpg"},function(e,t,a){e.exports=a.p+"static/media/thor2.6b48568e.jpg"},function(e,t,a){e.exports=a.p+"static/media/widow1.a5a57bd2.jpg"},function(e,t,a){e.exports=a.p+"static/media/widow2.6fc63c76.jpg"},,,,function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(7),r=a.n(i),s=(a(25),a(12)),o=a(13),p=a(18),l=a(16),d=a(45),u=a(48),m=a(46),f=a(47),g=(a(26),[{id:1,src:a(27)},{id:2,src:a(28)},{id:3,src:a(29)},{id:4,src:a(30)},{id:5,src:a(31)},{id:6,src:a(32)},{id:7,src:a(33)},{id:8,src:a(34)},{id:9,src:a(35)},{id:10,src:a(36)},{id:11,src:a(37)},{id:12,src:a(38)}]),h=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={avengers:g,clickedAvengers:[],score:0,topScore:0,info:["Choose an Avenger to begin"]},e.click=function(t){var a=e.state,c=a.clickedAvengers,n=a.score,i=a.avengers,r=a.topScore;c.includes(t)?(e.setState({info:"Thanos has arrived, death is upon you."}),c=[],n=0):(e.setState({info:"Keep building your team!"}),c.push(t),++n>=r&&(r=n));for(var s,o,p=i.length;p>0;)s=Math.floor(Math.random()*p),o=i[--p],i[p]=i[s],i[s]=o;e.setState({clickedAvengers:c,score:n,avengers:i,topScore:r})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(d.a,null,n.a.createElement(u.a,null,n.a.createElement(u.a.Text,{className:"navT"},"Avengers Clicky Game!"),n.a.createElement(u.a.Text,{className:"navT"},this.state.info),n.a.createElement(u.a.Text,{className:"navT"},"Score: ",this.state.score," | Top Score: ",this.state.topScore)),n.a.createElement(m.a,{fluid:!0},n.a.createElement("p",{className:"p1"},"Click an image to gain points! Don't click the same image twice, or game over!")),n.a.createElement(f.a,{className:"picRow"},this.state.avengers.map((function(t){return n.a.createElement("img",{onClick:function(){return e.click(t.id)},alt:"alt",key:t.id,src:t.src})}))))}}]),a}(c.Component);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root"))}]),[[20,1,2]]]);
//# sourceMappingURL=main.44b6a448.chunk.js.map