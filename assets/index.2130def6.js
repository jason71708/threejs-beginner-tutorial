import{S as L,P as M,W as S,T,M as w,a,b as z,c as g,d as P,A,e as l,B as G,f as h,g as K}from"./vendor.d7f688b1.js";const j=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}};j();const t=new L,r=new M(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=20;const f=new S({canvas:document.querySelector("#bg")});f.setPixelRatio(window.devicePixelRatio);f.setSize(window.innerWidth,window.innerHeight);f.render(t,r);const B=new T(10,2,240,100,5,9),O=new w({color:16776960}),y=new a(B,O);y.position.set(10,20,5);const u=new a(new z(5,2,32,100),new g({color:"#e18",wireframe:!0}));t.add(u);t.add(y);const x=new P(16777215);x.position.set(10,10,15);const R=new A("#444");t.add(x,R);function W(){const n=new h(.25,24,24),i=new w({color:16777215}),c=new a(n,i),[d,e,o]=Array(3).fill().map(()=>K.randFloatSpread(100));c.position.set(d,e,o),t.add(c)}Array(200).fill().forEach(W);const q=new l().load("./background.jpeg");t.background=q;const C=new l().load("./avatar.png"),m=new a(new G(10,20,20),new g({map:C}));m.position.set(-20,0,-10);const F=new l().load("./moon.jpeg"),N=new l().load("./normal.jpeg"),s=new a(new h(3,32,32),new w({map:F,normalMap:N}));s.position.set(-10,10,20);t.add(m);t.add(s);function b(){const n=document.body.getBoundingClientRect().top;s.rotation.x+=.05,s.rotation.y+=.01,s.rotation.z+=.05,m.rotation.y+=.01,m.rotation.z+=.001,r.position.z=20+n*-.01,r.position.x=n*-2e-4,r.rotation.y=n*-2e-4}document.body.onscroll=b;b();function v(){requestAnimationFrame(v),u.rotation.x+=.005,u.rotation.y+=.001,u.rotation.z+=.01,y.position.x+=.01,f.render(t,r)}v();
