(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3690:(e,t,a)=>{Promise.resolve().then(a.bind(a,4643))},4643:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>I});var r=a(5155),s=a(2115),l=a(1487),n=a.n(l),i=a(9110),c=a.n(i),o=a(7358);let m=e=>{let{currentPosition:t,onScrollChange:a}=e,l=(0,s.useRef)(null),[n,i]=(0,s.useState)(!1),m=(0,s.useRef)(null),_=(e,t)=>{let r=(t-e)/9,s=0;m.current&&clearInterval(m.current),m.current=setInterval(()=>{a(Math.min(Math.max(e+r*++s,0),1)),s>=9&&(clearInterval(m.current),m.current=null)},16.666666666666668)},d=e=>{let a=Math.min(Math.max(t+(e.deltaY>0?.1:-.1),0),1);_(t,a)},u=e=>{if(n&&l.current){let t=l.current.getBoundingClientRect();a(Math.min(Math.max((e.clientY-t.top)/t.height,0),1))}},x=()=>{i(!1)};(0,s.useEffect)(()=>(n&&(document.addEventListener("mousemove",u),document.addEventListener("mouseup",x)),()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",x)}),[n]),(0,s.useEffect)(()=>{let e=l.current;return e&&e.addEventListener("wheel",d),()=>{e&&e.removeEventListener("wheel",d)}},[t]);let v=o.env.GITHUB_PAGES?"/cosmos-portfolio/":"./";return(0,r.jsxs)("div",{className:c().scrollBarContainer,ref:l,onClick:e=>{let a=l.current;if(a){let r=a.getBoundingClientRect();_(t,Math.min(Math.max((e.clientY-r.top)/r.height,0),1))}},children:[(0,r.jsx)("div",{className:c().bar}),(0,r.jsx)("img",{src:"".concat(v,"/images/star.svg"),alt:"Star",className:c().indicator,style:{top:"".concat(90*t+5,"%")},onMouseDown:e=>{i(!0),m.current&&clearInterval(m.current),e.preventDefault()}})]})};var _=a(5555),d=a.n(_),u=a(7358);let x=e=>{let{image:t}=e,a=u.env.GITHUB_PAGES?"/cosmos-portfolio/":"./";return(0,r.jsxs)("div",{className:d().artBoard,children:[(0,r.jsx)("div",{className:d().title,children:t.title}),(0,r.jsx)("div",{className:d().artFrame,children:(0,r.jsx)("img",{src:a+t.path,alt:t.title,className:d().image})})]})};var v=a(9478),h=a.n(v);let p=e=>{let{imageList:t,currentPosition:a,onScrollChange:l}=e,n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=n.current;if(e){let t=e.scrollWidth-e.clientWidth;e.scrollTo({left:t*a,behavior:"smooth"})}},[a]),(0,s.useEffect)(()=>{let e=n.current;if(e){let t=!1,a=0,r=r=>{r.preventDefault(),a+=r.deltaY,l(e.scrollLeft/(e.scrollWidth-e.clientWidth)),t||(t=!0,s())},s=()=>{e&&(e.scrollBy({left:a/5}),Math.abs(a*=.85)>.5?requestAnimationFrame(s):(t=!1,a=0))};return document.addEventListener("wheel",r),()=>{document.removeEventListener("wheel",r)}}},[]),(0,r.jsxs)("div",{className:h().galleryWrapper,ref:n,children:[(0,r.jsx)("div",{className:h().space}),t.map((e,t)=>(0,r.jsx)("div",{className:h().imageContainer,children:(0,r.jsx)("img",{src:e.path,alt:e.title,className:h().image})},t))]})};var g=a(204),j=a.n(g),f=a(3641),k=a.n(f);let S=e=>{let{onClick:t,children:a,isActive:s=!1}=e;return(0,r.jsx)("button",{onClick:()=>t(),className:"".concat(k().LineText," ").concat(s?k().active:""),children:a})};var B=a(7634),C=a.n(B);let N=e=>{let{isActive:t}=e;return(0,r.jsx)("div",{className:"".concat(C().Line," ").concat(t?C().active:"")})},y=e=>{let{pageType:t,setPageType:a}=e,[l,n]=(0,s.useState)(!1),[i,c]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{"Gallery"==t&&(c(!1),n(!0)),"Contact"==t&&(c(!0),n(!1))},[t]),(0,r.jsxs)("div",{className:j().mainSection,children:[(0,r.jsxs)("button",{onClick:()=>a("artBoard"),className:j().Title,children:["cosmos",(0,r.jsx)("br",{}),"gallery"]}),(0,r.jsxs)("div",{className:j().TextFrame,children:[(0,r.jsx)(S,{onClick:()=>a("Gallery"),isActive:l,children:"works"}),(0,r.jsx)(N,{isActive:l})]}),(0,r.jsxs)("div",{className:j().TextFrame,children:[(0,r.jsx)(S,{onClick:()=>a("Contact"),isActive:i,children:"contact"}),(0,r.jsx)(N,{isActive:i})]})]})};var E=a(5573),L=a.n(E),b=a(6145),A=a.n(b),T=a(7358);let w=e=>{let{PlatForm:t,userId:a,url:s}=e,l=T.env.GITHUB_PAGES?"/cosmos-portfolio/":"./";return(0,r.jsxs)("a",{href:s,className:A().linkBox,target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)("span",{className:A().platform,children:t}),(0,r.jsx)("span",{className:A().userId,children:a}),(0,r.jsx)("img",{src:"".concat(l,"images/arrow.svg"),alt:"arrow",className:A().arrow})]})},G=e=>{let{pageType:t,galleryType:a,setGalleryType:l}=e,[n,i]=(0,s.useState)(!0),[c,o]=(0,s.useState)(!1),[m,_]=(0,s.useState)(!1),[d,u]=(0,s.useState)(!1),x=e=>{i("All"===e),o("FanArt"===e),_("Original"===e),u("Work"===e)};return(0,s.useEffect)(()=>{x(a)},[a]),(0,r.jsx)("div",{children:"artBoard"===t?(0,r.jsx)("div",{}):"Gallery"===t?(0,r.jsxs)("div",{className:L().subSection,children:[(0,r.jsx)(S,{onClick:()=>l("All"),isActive:n,children:"all"}),(0,r.jsx)(S,{onClick:()=>l("FanArt"),isActive:c,children:"fan art"}),(0,r.jsx)(S,{onClick:()=>l("Original"),isActive:m,children:"original"}),(0,r.jsx)(S,{onClick:()=>l("Work"),isActive:d,children:"work"})]}):"Contact"===t?(0,r.jsxs)("div",{className:L().subSection,children:[(0,r.jsx)(w,{PlatForm:"X",userId:"@cos_mos_f",url:"https://x.com/cos_mos_f"}),(0,r.jsx)(w,{PlatForm:"Pixiv",userId:"こすもす",url:"https://www.pixiv.net/users/56797770"}),(0,r.jsx)(w,{PlatForm:"Email",userId:"".concat("cos.mos.f.works@gmail.com"),url:"".concat("mailto:cos.mos.f.works@gmail.com/")})]}):void 0})},P=[{title:"Image 1",path:"/images/fan_arts/main/2024.12.63.02.jpg"},{title:"Image 2",path:"/images/fan_arts/main/2024.12.64.1.jpg"},{title:"Image 3",path:"/images/fan_arts/main/2024.12.65.1.jpg"},{title:"Image 4",path:"/images/fan_arts/main/2024.12.86.jpg"}];function I(){let[e,t]=(0,s.useState)(0),[a,l]=(0,s.useState)(0),[i,c]=(0,s.useState)("artBoard"),[o,_]=(0,s.useState)(0),[d,u]=(0,s.useState)("All");(0,s.useEffect)(()=>{"artBoard"===i?_(e):"Gallery"===i&&_(a)},[i,e,a]);let v=Math.round(e*(P.length-1));return(0,r.jsxs)("div",{className:n().container,children:[(0,r.jsxs)("div",{className:n().main,children:[(0,r.jsx)(m,{currentPosition:o,onScrollChange:e=>{"artBoard"===i?t(e):"Gallery"===i&&l(e),_(e)}}),(0,r.jsx)(y,{pageType:i,setPageType:c}),(0,r.jsx)(G,{pageType:i,galleryType:d,setGalleryType:u})]}),(0,r.jsx)("div",{className:n().back,children:"artBoard"===i?(0,r.jsx)(x,{image:P[v]}):"Gallery"===i?(0,r.jsx)(p,{imageList:P,currentPosition:a,onScrollChange:e=>{l(e)}}):"Contact"===i?(0,r.jsx)("div",{}):void 0})]})}},5555:e=>{e.exports={artBoard:"ArtBoard_artBoard__XRCJ3",artFrame:"ArtBoard_artFrame__W_P8D",image:"ArtBoard_image__kOdyJ",title:"ArtBoard_title__mln2v"}},9478:e=>{e.exports={galleryWrapper:"Gallery_galleryWrapper__a0CS_",imageContainer:"Gallery_imageContainer__Ky1E0",image:"Gallery_image__PcXje",space:"Gallery_space__6Qx3S"}},1487:e=>{e.exports={container:"Home_container__XXbpJ",main:"Home_main__9U9PE",back:"Home_back__D2jTy"}},7634:e=>{e.exports={Line:"Line_Line__sDGsC",active:"Line_active__iWX0q"}},3641:e=>{e.exports={LineText:"LineText_LineText__o_KsS",active:"LineText_active__6WkDm"}},6145:e=>{e.exports={linkBox:"LinkBox_linkBox__P40mU",platform:"LinkBox_platform__nzYS_",arrow:"LinkBox_arrow__HD_GM"}},204:e=>{e.exports={mainSection:"mainSection_mainSection__5_Pbo",Title:"mainSection_Title__4ZHvF",TextFrame:"mainSection_TextFrame__PdOkh"}},9110:e=>{e.exports={scrollBarContainer:"scrollBar_scrollBarContainer___7gMp",bar:"scrollBar_bar__gkUKH",indicator:"scrollBar_indicator__VsACM"}},5573:e=>{e.exports={subSection:"subSection_subSection__iOyvr"}}},e=>{var t=t=>e(e.s=t);e.O(0,[226,441,517,358],()=>t(3690)),_N_E=e.O()}]);