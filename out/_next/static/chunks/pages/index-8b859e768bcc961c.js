(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2285)}])},6541:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let r=i(8754),n=i(1757),s=i(5893),a=n._(i(7294)),o=r._(i(3935)),l=r._(i(7828)),c=i(7367),d=i(7903),u=i(4938);i(1997);let h=i(9953),f=r._(i(6663)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,i,r,n,s,a){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function m(e){let[t,i]=a.version.split(".",2),r=parseInt(t,10),n=parseInt(i,10);return r>18||18===r&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let v=(0,a.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:n,height:o,width:l,decoding:c,className:d,style:u,fetchPriority:h,placeholder:f,loading:p,unoptimized:v,fill:j,onLoadRef:x,onLoadingCompleteRef:w,setBlurComplete:b,setShowAltText:y,sizesInput:S,onLoad:_,onError:C,...P}=e;return(0,s.jsx)("img",{...P,...m(h),loading:p,width:l,height:o,decoding:c,"data-nimg":j?"fill":"1",className:d,style:u,sizes:n,srcSet:r,src:i,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&g(e,f,x,w,b,v,S))},[i,f,x,w,b,C,v,S,t]),onLoad:e=>{g(e.currentTarget,f,x,w,b,v,S)},onError:e=>{y(!0),"empty"!==f&&b(!0),C&&C(e)}})});function j(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...m(i.fetchPriority)};return t&&o.default.preload?(o.default.preload(i.src,r),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let x=(0,a.forwardRef)((e,t)=>{let i=(0,a.useContext)(h.RouterContext),r=(0,a.useContext)(u.ImageConfigContext),n=(0,a.useMemo)(()=>{let e=p||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:o,onLoadingComplete:l}=e,g=(0,a.useRef)(o);(0,a.useEffect)(()=>{g.current=o},[o]);let m=(0,a.useRef)(l);(0,a.useEffect)(()=>{m.current=l},[l]);let[x,w]=(0,a.useState)(!1),[b,y]=(0,a.useState)(!1),{props:S,meta:_}=(0,c.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:x,showAltText:b});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{...S,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:w,setShowAltText:y,sizesInput:e.sizes,ref:t}),_.priority?(0,s.jsx)(j,{isAppRouter:!i,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),i(1997);let r=i(9919),n=i(7903);function s(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var i;let o,l,c,{src:d,sizes:u,unoptimized:h=!1,priority:f=!1,loading:p,className:g,quality:m,width:v,height:j,fill:x=!1,style:w,overrideSrc:b,onLoad:y,onLoadingComplete:S,placeholder:_="empty",blurDataURL:C,fetchPriority:P,layout:z,objectFit:I,objectPosition:N,lazyBoundary:E,lazyRoot:k,...R}=e,{imgConf:A,showAltText:O,blurComplete:M,defaultLoader:D}=t,T=A||n.imageConfigDefault;if("allSizes"in T)o=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);o={...T,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=R.loader||D;delete R.loader,delete R.srcSet;let B="__next_img_default"in L;if(B){if("custom"===o.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:i,...r}=t;return e(r)}}if(z){"fill"===z&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!u&&(u=t)}let F="",G=a(v),W=a(j);if("object"==typeof(i=d)&&(s(i)||void 0!==i.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,C=C||e.blurDataURL,F=e.src,!x){if(G||W){if(G&&!W){let t=G/e.width;W=Math.round(e.height*t)}else if(!G&&W){let t=W/e.height;G=Math.round(e.width*t)}}else G=e.width,W=e.height}}let U=!f&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:F)||d.startsWith("data:")||d.startsWith("blob:"))&&(h=!0,U=!1),o.unoptimized&&(h=!0),B&&d.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(h=!0),f&&(P="high");let q=a(m),V=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:N}:{},O?{}:{color:"transparent"},w),H=M||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:G,heightInt:W,blurWidth:l,blurHeight:c,blurDataURL:C||"",objectFit:V.objectFit})+'")':'url("'+_+'")',J=H?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},X=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:s,sizes:a,loader:o}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,r)=>o({config:t,src:i,quality:s,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:o({config:t,src:i,quality:s,width:l[d]})}}({config:o,src:d,unoptimized:h,width:G,quality:q,sizes:u,loader:L});return{props:{...R,loading:U?"lazy":p,fetchPriority:P,width:G,height:W,decoding:"async",className:g,style:{...V,...J},sizes:X.sizes,srcSet:X.srcSet,src:b||X.src},meta:{unoptimized:h,priority:f,placeholder:_,fill:x}}}},9919:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:s,objectFit:a}=e,o=r?40*r:t,l=n?40*n:i,c=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},5666:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},getImageProps:function(){return o}});let r=i(8754),n=i(7367),s=i(6541),a=r._(i(6663));function o(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let l=s.Image},6663:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},2285:function(e,t,i){"use strict";i.r(t);var r=i(5893),n=i(7294),s=i(9008),a=i.n(s),o=i(5675),l=i.n(o),c=i(1163);t.default=()=>{let e=(0,c.useRouter)(),t=[{image:"/images/ai-content-creator.jpg",name:"AI Content Creator",description:"Automate your content creation process with our AI-powered content creator, designed to generate high-quality articles, blog posts, and more."},{image:"/images/ai-image-enhancer.jpg",name:"AI Image Enhancer",description:"Enhance and upscale your images with our state-of-the-art AI image enhancer, perfect for photographers and designers."},{image:"/images/ai-data-analyzer.jpg",name:"AI Data Analyzer",description:"Leverage AI to analyze and interpret complex data sets with our intuitive AI data analyzer tool."}],[i,s]=n.useState(""),o=i?t.filter(e=>e.name.toLowerCase().includes(i.toLowerCase())):t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"SuperTools by Susan Ngatia - Discover the Best AI Tools"}),(0,r.jsx)("meta",{name:"description",content:"Explore a curated list of the best AI tools available, handpicked to enhance your productivity and creativity."})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("header",{children:(0,r.jsx)("nav",{"aria-label":"Main",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/",className:"/"===e.pathname?"active":"",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/gpts",className:"/gpts"===e.pathname?"active":"",children:"GPTs"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/top-picks",className:"/top-picks"===e.pathname?"active":"",children:"Top Picks"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/submit",className:"/submit"===e.pathname?"active":"",children:"Submit"})}),(0,r.jsxs)("li",{className:"dropdown",children:[(0,r.jsx)("a",{href:"#",className:"dropbtn",children:"Portfolio"}),(0,r.jsxs)("div",{className:"dropdown-content",children:[(0,r.jsx)("a",{href:"#",children:"Project 1"}),(0,r.jsx)("a",{href:"#",children:"Project 2"}),(0,r.jsx)("a",{href:"#",children:"Project 3"})]})]}),(0,r.jsx)("li",{className:"search-container",children:(0,r.jsxs)("form",{onSubmit:t=>{t.preventDefault(),e.push("/?search=".concat(encodeURIComponent(i)))},children:[(0,r.jsx)("input",{type:"text",placeholder:"Search tools...","aria-label":"Search tools",value:i,onChange:e=>s(e.target.value),className:"search-input"}),(0,r.jsx)("button",{type:"submit",className:"search-button","aria-label":"Submit search",children:(0,r.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",className:"svg-inline--fa fa-search fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,r.jsx)("path",{fill:"currentColor",d:"M505 442.7l-99.9-99.9c28.4-34.5 45.5-78.7 45.5-127.8 0-111.7-90.9-202.6-202.6-202.6S45.4 103.3 45.4 215S136.3 417.6 248 417.6c49.1 0 93.3-17.1 127.8-45.5l99.9 99.9c4.7 4.7 12.3 4.7 17 0l12.3-12.3c4.6-4.7 4.6-12.3 0-17zM248 369.6c-85.1 0-154.6-69.5-154.6-154.6S162.9 60.4 248 60.4s154.6 69.5 154.6 154.6-69.5 154.6-154.6 154.6z"})})}),i&&(0,r.jsx)("button",{type:"button",className:"reset-button","aria-label":"Reset search",onClick:()=>s(""),children:"Reset"})]})})]})})}),(0,r.jsx)("main",{children:(0,r.jsxs)("section",{className:"top-picks-container",children:[(0,r.jsx)("h1",{children:"⭐ Top Picks"}),o.map((e,t)=>(0,r.jsxs)("div",{className:"top-pick-card",children:[(0,r.jsx)(l(),{src:e.image,alt:"Image representing ".concat(e.name),width:500,height:300}),(0,r.jsx)("h2",{children:e.name}),(0,r.jsx)("p",{children:e.description})]},t))]})}),(0,r.jsxs)("footer",{children:[(0,r.jsx)("a",{href:"/privacy-policy",children:"Privacy Policy"}),(0,r.jsx)("a",{href:"/terms-conditions",children:"Terms & Conditions"}),(0,r.jsx)("p",{children:"\xa9 2024 susanngatia.africa. All rights reserved."}),(0,r.jsx)("a",{href:"https://twitter.com/susanngatia",className:"social-icon",children:(0,r.jsx)("img",{src:"/icons/twitter.svg",alt:"Twitter",width:"24",height:"24"})}),(0,r.jsx)("a",{href:"https://www.linkedin.com/in/susanngatia",className:"social-icon",children:(0,r.jsx)("img",{src:"/icons/linkedin.svg",alt:"LinkedIn",width:"24",height:"24"})})]})]})]})}},5675:function(e,t,i){e.exports=i(5666)},1163:function(e,t,i){e.exports=i(9090)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
//# sourceMappingURL=index-8b859e768bcc961c.js.map