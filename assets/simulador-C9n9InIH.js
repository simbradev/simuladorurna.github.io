import{C as e,D as t,E as n,O as r,S as i,T as a,_ as o,a as s,b as c,c as l,d as u,f as d,g as f,h as p,i as m,k as h,l as g,m as _,n as v,p as y,s as ee,t as b,u as x,v as S,w as C,x as te,y as ne}from"./_plugin-vue_export-helper-C8cY0uTz.js";var w=Object.create,re=Object.defineProperty,T=Object.getOwnPropertyDescriptor,ie=Object.getOwnPropertyNames,E=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,O=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),k=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=ie(t),a=0,o=i.length,s;a<o;a++)s=i[a],!D.call(e,s)&&s!==n&&re(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=T(t,s))||r.enumerable});return e},ae=(e,t,n)=>(n=e==null?{}:w(E(e)),k(t||!e||!e.__esModule||!D.call(e,`default`)?re(n,`default`,{value:e,enumerable:!0}):n,e));function A(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function oe(e){if(Array.isArray(e))return e}function se(e){if(Array.isArray(e))return A(e)}function j(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,L(r.key),r)}}function ce(e,t,n){return t&&M(e.prototype,t),n&&M(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function N(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=z(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function P(e,t,n){return(t=L(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ue(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function de(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fe(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?pe(Object(n),!0).forEach(function(t){P(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function me(e,t){return oe(e)||ue(e,t)||z(e,t)||de()}function I(e){return se(e)||le(e)||z(e)||fe()}function he(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function L(e){var t=he(e,`string`);return typeof t==`symbol`?t:t+``}function R(e){"@babel/helpers - typeof";return R=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},R(e)}function z(e,t){if(e){if(typeof e==`string`)return A(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}var B=function(){},ge={},_e={},ve=null,ye={mark:B,measure:B};try{typeof window<`u`&&(ge=window),typeof document<`u`&&(_e=document),typeof MutationObserver<`u`&&(ve=MutationObserver),typeof performance<`u`&&(ye=performance)}catch{}var be=(ge.navigator||{}).userAgent,xe=be===void 0?``:be,V=ge,H=_e,Se=ve,U=ye;V.document;var W=!!H.documentElement&&!!H.head&&typeof H.addEventListener==`function`&&typeof H.createElement==`function`,Ce=~xe.indexOf(`MSIE`)||~xe.indexOf(`Trident/`),we,Te=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Ee=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,De={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Oe={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},G=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],K=`classic`,ke=`duotone`,Ae=`sharp`,je=`sharp-duotone`,Me=`chisel`,Ne=`etch`,Pe=`graphite`,Fe=`jelly`,Ie=`jelly-duo`,Le=`jelly-fill`,Re=`mosaic`,ze=`notdog`,Be=`notdog-duo`,Ve=`pixel`,He=`slab`,Ue=`slab-duo`,We=`slab-press`,q=`slab-press-duo`,Ge=`thumbprint`,Ke=`utility`,qe=`utility-duo`,Je=`utility-fill`,Ye=`vellum`,Xe=`whiteboard`,Ze=`Classic`,Qe=`Duotone`,$e=`Sharp`,et=`Sharp Duotone`,tt=`Chisel`,nt=`Etch`,rt=`Graphite`,it=`Jelly`,at=`Jelly Duo`,ot=`Jelly Fill`,st=`Mosaic`,ct=`Notdog`,lt=`Notdog Duo`,ut=`Pixel`,dt=`Slab`,ft=`Slab Duo`,pt=`Slab Press`,mt=`Slab Press Duo`,ht=`Thumbprint`,gt=`Utility`,_t=`Utility Duo`,vt=`Utility Fill`,yt=`Vellum`,bt=`Whiteboard`,xt=[K,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,q,Ge,Ke,qe,Je,Ye,Xe];we={},P(P(P(P(P(P(P(P(P(P(we,K,Ze),ke,Qe),Ae,$e),je,et),Me,tt),Ne,nt),Pe,rt),Fe,it),Ie,at),Le,ot),P(P(P(P(P(P(P(P(P(P(we,Re,st),ze,ct),Be,lt),Ve,ut),He,dt),Ue,ft),We,pt),q,mt),Ge,ht),Ke,gt),P(P(P(P(we,qe,_t),Je,vt),Ye,yt),Xe,bt);var St={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Ct={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},wt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Tt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Et=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Dt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Ot=[`kit`];P(P({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var kt={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},At={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},jt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Mt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Nt,Pt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ft=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Nt={},P(P(P(P(P(P(P(P(P(P(Nt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),P(P(P(P(P(P(P(P(P(P(Nt,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),P(P(P(P(Nt,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),P(P({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var It={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Lt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Rt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},zt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Ft,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Bt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Vt=[1,2,3,4,5,6,7,8,9,10],Ht=Vt.concat([11,12,13,14,15,16,17,18,19,20]),Ut=[].concat(I(Object.keys(Lt)),Bt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Pt.GROUP,Pt.SWAP_OPACITY,Pt.PRIMARY,Pt.SECONDARY],Vt.map(function(e){return`${e}x`}),Ht.map(function(e){return`w-${e}`})),Wt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},Gt=`___FONT_AWESOME___`,Kt=16,qt=`fa`,Jt=`svg-inline--fa`,Yt=`data-fa-i2svg`,Xt=`data-fa-pseudo-element`,Zt=`data-fa-pseudo-element-pending`,Qt=`data-prefix`,$t=`data-icon`,en=`fontawesome-i2svg`,tn=`async`,nn=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],rn=[`::before`,`::after`,`:before`,`:after`],an=function(){try{return!0}catch{return!1}}();function on(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[K]}})}var sn=F({},De);sn[K]=F(F(F(F({},{"fa-duotone":`duotone`}),De[K]),Dt.kit),Dt[`kit-duotone`]);var cn=on(sn),ln=F({},Tt);ln[K]=F(F(F(F({},{duotone:`fad`}),ln[K]),Mt.kit),Mt[`kit-duotone`]);var un=on(ln),dn=F({},Rt);dn[K]=F(F({},dn[K]),jt.kit);var fn=on(dn),pn=F({},It);pn[K]=F(F({},pn[K]),kt.kit),on(pn);var mn=Te,hn=`fa-layers-text`,gn=Ee;on(F({},St));var _n=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],vn=Oe,yn=[].concat(I(Ot),I(Ut)),bn=V.FontAwesomeConfig||{};function xn(e){var t=H.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Sn(e){return e===``?!0:e===`false`?!1:e===`true`||e}H&&typeof H.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=me(e,2),n=t[0],r=t[1],i=Sn(xn(n));i!=null&&(bn[r]=i)});var Cn={styleDefault:`solid`,familyDefault:K,cssPrefix:qt,replacementClass:Jt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bn.familyPrefix&&(bn.cssPrefix=bn.familyPrefix);var wn=F(F({},Cn),bn);wn.autoReplaceSvg||(wn.observeMutations=!1);var J={};Object.keys(Cn).forEach(function(e){Object.defineProperty(J,e,{enumerable:!0,set:function(t){wn[e]=t,Tn.forEach(function(e){return e(J)})},get:function(){return wn[e]}})}),Object.defineProperty(J,"familyPrefix",{enumerable:!0,set:function(e){wn.cssPrefix=e,Tn.forEach(function(e){return e(J)})},get:function(){return wn.cssPrefix}}),V.FontAwesomeConfig=J;var Tn=[];function En(e){return Tn.push(e),function(){Tn.splice(Tn.indexOf(e),1)}}var Dn=Kt,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function On(e){if(e&&W){var t=H.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=H.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return H.head.insertBefore(t,r),e}}var kn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function An(){for(var e=12,t=``;e-->0;)t+=kn[Math.random()*62|0];return t}function jn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Mn(e){return e.classList?jn(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Nn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Pn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Nn(e[n])}" `},``).trim()}function Fn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function In(e){return e.size!==Y.size||e.x!==Y.x||e.y!==Y.y||e.rotate!==Y.rotate||e.flipX||e.flipY}function Ln(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Rn(e){var t=e.transform,n=e.width,r=n===void 0?Kt:n,i=e.height,a=i===void 0?Kt:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&Ce?`translate(${t.x/Dn-r/2}em, ${t.y/Dn-a/2}em) `:s?`translate(calc(-50% + ${t.x/Dn}em), calc(-50% + ${t.y/Dn}em)) `:`translate(${t.x/Dn}em, ${t.y/Dn}em) `,c+=`scale(${t.size/Dn*(t.flipX?-1:1)}, ${t.size/Dn*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var zn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Bn(){var e=qt,t=Jt,n=J.cssPrefix,r=J.replacementClass,i=zn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Vn=!1;function Hn(){J.autoAddCss&&!Vn&&(On(Bn()),Vn=!0)}var Un={mixout:function(){return{dom:{css:Bn,insertCss:Hn}}},hooks:function(){return{beforeDOMElementCreation:function(){Hn()},beforeI2svg:function(){Hn()}}}},Wn=V||{};Wn[Gt]||(Wn[Gt]={}),Wn[Gt].styles||(Wn[Gt].styles={}),Wn[Gt].hooks||(Wn[Gt].hooks={}),Wn[Gt].shims||(Wn[Gt].shims=[]);var X=Wn[Gt],Gn=[],Kn=function(){H.removeEventListener(`DOMContentLoaded`,Kn),qn=1,Gn.map(function(e){return e()})},qn=!1;W&&(qn=(H.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(H.readyState),qn||H.addEventListener(`DOMContentLoaded`,Kn));function Jn(e){W&&(qn?setTimeout(e,0):Gn.push(e))}function Yn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Nn(e):`<${t} ${Pn(r)}>${a.map(Yn).join(``)}</${t}>`}function Xn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Zn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Qn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Zn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function $n(e){return I(e).length===1?e.codePointAt(0).toString(16):null}function er(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function tr(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=er(t);typeof X.hooks.addPack==`function`&&!r?X.hooks.addPack(e,er(t)):X.styles[e]=F(F({},X.styles[e]||{}),i),e===`fas`&&tr(`fa`,t)}var nr=X.styles,rr=X.shims,ir=Object.keys(fn),ar=ir.reduce(function(e,t){return e[t]=Object.keys(fn[t]),e},{}),or=null,sr={},cr={},lr={},ur={},dr={};function fr(e){return~yn.indexOf(e)}function pr(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!fr(i)?i:null}var mr=function(){var e=function(e){return Qn(nr,function(t,n,r){return t[r]=Qn(n,e,{}),t},{})};sr=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),cr=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),dr=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in nr||J.autoFetchSvg,n=Qn(rr,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});lr=n.names,ur=n.unicodes,or=Cr(J.styleDefault,{family:J.familyDefault})};En(function(e){or=Cr(e.styleDefault,{family:J.familyDefault})}),mr();function hr(e,t){return(sr[e]||{})[t]}function gr(e,t){return(cr[e]||{})[t]}function _r(e,t){return(dr[e]||{})[t]}function vr(e){return lr[e]||{prefix:null,iconName:null}}function yr(e){var t=ur[e],n=hr(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function br(){return or}var xr=function(){return{prefix:null,iconName:null,rest:[]}};function Sr(e){var t=K,n=ir.reduce(function(e,t){return e[t]=`${J.cssPrefix}-${t}`,e},{});return xt.forEach(function(r){(e.includes(n[r])||e.some(function(e){return ar[r].includes(e)}))&&(t=r)}),t}function Cr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?K:t,r=cn[n][e];if(n===ke&&!e)return`fad`;var i=un[n][e]||un[n][r],a=e in X.styles?e:null;return i||a||null}function wr(e){var t=[],n=null;return e.forEach(function(e){var r=pr(J.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Tr(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Er=zt.concat(Et);function Dr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=Tr(e.filter(function(e){return Er.includes(e)})),a=Tr(e.filter(function(e){return!Er.includes(e)})),o=me(i.filter(function(e){return r=e,!G.includes(e)}),1)[0],s=o===void 0?null:o,c=Sr(i),l=F(F({},wr(a)),{},{prefix:Cr(s,{family:c})});return F(F(F({},l),jr({values:e,family:c,styles:nr,config:J,canonical:l,givenPrefix:r})),Or(n,r,l))}function Or(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?vr(i):{},o=_r(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!nr.far&&nr.fas&&!J.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var kr=xt.filter(function(e){return e!==K||e!==ke}),Ar=Object.keys(Rt).filter(function(e){return e!==K}).map(function(e){return Object.keys(Rt[e])}).flat();function jr(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===ke,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&kr.includes(n)&&(Object.keys(s).find(function(e){return Ar.includes(e)})||l.autoFetchSvg)&&(r.prefix=wt.get(n).defaultShortPrefixId,r.iconName=_r(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=br()||`fas`),r}var Mr=function(){function e(){j(this,e),this.definitions={}}return ce(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=F(F({},e.definitions[n]||{}),t[n]),tr(n,t[n]);var r=fn[K][n];r&&tr(r,t[n]),mr()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Nr=[],Pr={},Fr={},Ir=Object.keys(Fr);function Lr(e,t){var n=t.mixoutsTo;return Nr=e,Pr={},Object.keys(Fr).forEach(function(e){Ir.indexOf(e)===-1&&delete Fr[e]}),Nr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),R(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Pr[e]||(Pr[e]=[]),Pr[e].push(r[e])})}e.provides&&e.provides(Fr)}),n}function Rr(e,t){var n=[...arguments].slice(2);return(Pr[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function zr(e){var t=[...arguments].slice(1);(Pr[e]||[]).forEach(function(e){e.apply(null,t)})}function Br(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Fr[e]?Fr[e].apply(null,t):void 0}function Vr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||br();if(t)return t=_r(n,t)||t,Xn(Hr.definitions,n,t)||Xn(X.styles,n,t)}var Hr=new Mr,Z={noAuto:function(){J.autoReplaceSvg=!1,J.observeMutations=!1,zr(`noAuto`)},config:J,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(zr(`beforeI2svg`,e),Br(`pseudoElements2svg`,e),Br(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;J.autoReplaceSvg===!1&&(J.autoReplaceSvg=!0),J.observeMutations=!0,Jn(function(){Ur({autoReplaceSvgRoot:t}),zr(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(R(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:_r(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Cr(e[0]);return{prefix:n,iconName:_r(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${J.cssPrefix}-`)>-1||e.match(mn))){var r=Dr(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||br(),iconName:_r(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=br();return{prefix:i,iconName:_r(i,e)||e}}}},library:Hr,findIconDefinition:Vr,toHtml:Yn},Ur=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?H:e;(Object.keys(X.styles).length>0||J.autoFetchSvg)&&W&&J.autoReplaceSvg&&Z.dom.i2svg({node:t})};function Wr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Yn(e)})}}),Object.defineProperty(e,"node",{get:function(){if(W){var t=H.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Gr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(In(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Fn(F(F({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Kr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${J.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:F(F({},i),{},{id:o}),children:r}]}]}function qr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Jr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[J.replacementClass,a?`${J.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:F(F({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!qr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Yt]=``);var _=F(F({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:F({},l.styles)}),v=r.found&&n.found?Br(`generateAbstractMask`,_)||{children:[],attributes:{}}:Br(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,ee=v.attributes;return _.children=y,_.attributes=ee,s?Kr(_):Gr(_)}function Yr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=F(F({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Yt]=``);var l=F({},a.styles);In(i)&&(l.transform=Rn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Fn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Xr(e){var t=e.content,n=e.extra,r=F(F({},n.attributes),{},{class:n.classes.join(` `)}),i=Fn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Zr=X.styles;function Qr(e){var t=e[0],n=e[1],r=me(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${J.cssPrefix}-${vn.GROUP}`},children:[{tag:`path`,attributes:{class:`${J.cssPrefix}-${vn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${J.cssPrefix}-${vn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var $r={found:!1,width:512,height:512};function ei(e,t){!an&&!J.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function ti(e,t){var n=t;return t===`fa`&&J.styleDefault!==null&&(t=br()),new Promise(function(r,i){if(n===`fa`){var a=vr(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Zr[t]&&Zr[t][e]){var o=Zr[t][e];return r(Qr(o))}ei(e,t),r(F(F({},$r),{},{icon:J.showMissingIcons&&e&&Br(`missingIconAbstract`)||{}}))})}var ni=function(){},ri=J.measurePerformance&&U&&U.mark&&U.measure?U:{mark:ni,measure:ni},ii=`FA "7.3.1"`,ai=function(e){return ri.mark(`${ii} ${e} begins`),function(){return oi(e)}},oi=function(e){ri.mark(`${ii} ${e} ends`),ri.measure(`${ii} ${e}`,`${ii} ${e} begins`,`${ii} ${e} ends`)},si={begin:ai,end:oi},ci=function(){};function li(e){return typeof(e.getAttribute?e.getAttribute(Yt):null)==`string`}function ui(e){var t=e.getAttribute?e.getAttribute(Qt):null,n=e.getAttribute?e.getAttribute($t):null;return t&&n}function di(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(J.replacementClass)}function fi(){return J.autoReplaceSvg===!0?_i.replace:_i[J.autoReplaceSvg]||_i.replace}function pi(e){return H.createElementNS(`http://www.w3.org/2000/svg`,e)}function mi(e){return H.createElement(e)}function hi(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?pi:mi:t;if(typeof e==`string`)return H.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(hi(e,{ceFn:n}))}),r}function gi(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var _i={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(hi(e),t)}),t.getAttribute(Yt)===null&&J.keepOriginalSource){var n=H.createComment(gi(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~Mn(t).indexOf(J.replacementClass))return _i.replace(e);var r=RegExp(`${J.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===J.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Yn(e)}).join(`
`);t.setAttribute(Yt,``),t.innerHTML=a}};function vi(e){e()}function yi(e,t){var n=typeof t==`function`?t:ci;if(e.length===0)n();else{var r=vi;J.mutateApproach===tn&&(r=V.requestAnimationFrame||vi),r(function(){var t=fi(),r=si.begin(`mutate`);e.map(t),r(),n()})}}var bi=!1;function xi(){bi=!0}function Si(){bi=!1}var Ci=null;function wi(e){if(Se&&J.observeMutations){var t=e.treeCallback,n=t===void 0?ci:t,r=e.nodeCallback,i=r===void 0?ci:r,a=e.pseudoElementsCallback,o=a===void 0?ci:a,s=e.observeMutationsRoot,c=s===void 0?H:s;Ci=new Se(function(e){if(!bi){var t=br();jn(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!li(e.addedNodes[0])&&(J.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&J.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&li(e.target)&&~_n.indexOf(e.attributeName)){if(e.attributeName===`class`&&ui(e.target)){var r=Dr(Mn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Qt,a||t),s&&e.target.setAttribute($t,s)}else di(e.target)&&i(e.target)}})}}),W&&Ci.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ti(){Ci&&Ci.disconnect()}function Ei(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Di(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Dr(Mn(e));return i.prefix||=br(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=gr(i.prefix,e.innerText)||hr(i.prefix,$n(e.innerText))),!i.iconName&&J.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Oi(e){return jn(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function ki(){return{iconName:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Di(e),r=n.iconName,i=n.prefix,a=n.rest,o=Oi(e),s=Rr(`parseNodeAttributes`,{},e);return F({iconName:r,prefix:i,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Ei(e):[],attributes:o}},s)}var ji=X.styles;function Mi(e){var t=J.autoReplaceSvg===`nest`?Ai(e,{styleParser:!1}):Ai(e);return~t.extra.classes.indexOf(hn)?Br(`generateLayersText`,e,t):Br(`generateSvgReplacementMutation`,e,t)}function Ni(){return[].concat(I(Et),I(zt))}function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();var n=H.documentElement.classList,r=function(e){return n.add(`${en}-${e}`)},i=function(e){return n.remove(`${en}-${e}`)},a=J.autoFetchSvg?Ni():G.concat(Object.keys(ji));a.includes(`fa`)||a.push(`fa`);var o=[`.${hn}:not([${Yt}])`].concat(a.map(function(e){return`.${e}:not([${Yt}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=jn(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=si.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Mi(t);n&&e.push(n)}catch(e){an||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){yi(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mi(e).then(function(e){e&&yi([e],t)})}function Ii(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Vr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Vr(i||{}),e(r,F(F({},n),{},{mask:i}))}}var Li=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Y:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Wr(F({type:`icon`},e),function(){return zr(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Jr({icons:{main:Qr(v),mask:s?Qr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:F(F({},Y),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Ri={mixout:function(){return{icon:Ii(Li)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Pi,e.nodeCallback=Fi,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?H:t,r=e.callback;return Pi(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([ti(n,r),o.iconName?ti(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=me(o,2),u=l[0],d=l[1];t([e,Jr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Fn(a);o.length>0&&(n.style=o);var s;return In(i)&&(s=Br(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},zi={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Wr({type:`layer`},function(){zr(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${J.cssPrefix}-layers`].concat(I(r)).join(` `)},children:n}]})}}}},Bi={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Wr({type:`counter`,content:e},function(){return zr(`beforeDOMElementCreation`,{content:e,params:t}),Xr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${J.cssPrefix}-layers-counter`].concat(I(a))}})})}}}},Vi={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Y:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Wr({type:`text`,content:e},function(){return zr(`beforeDOMElementCreation`,{content:e,params:t}),Yr({content:e,transform:F(F({},Y),r),extra:{attributes:s,styles:l,classes:[`${J.cssPrefix}-layers-text`].concat(I(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Ce){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Yr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Hi=RegExp(`"`,`ug`),Ui=[1105920,1112319],Wi=F(F(F(F({},{FontAwesome:{normal:`fas`,400:`fas`}}),Ct),Wt),At),Gi=Object.keys(Wi).reduce(function(e,t){return e[t.toLowerCase()]=Wi[t],e},{}),Ki=Object.keys(Gi).reduce(function(e,t){var n=Gi[t];return e[t]=n[900]||I(Object.entries(n))[0][1],e},{});function qi(e){return $n(I(e.replace(Hi,``))[0]||``)}function Ji(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Hi,``),r=n.codePointAt(0),i=r>=Ui[0]&&r<=Ui[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Yi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Gi[n]||{})[i]||Ki[n]}function Xi(e,t){var n=`${Zt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=jn(e.children).filter(function(e){return e.getAttribute(Xt)===t})[0],o=V.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(gn),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Yi(s,l),p=qi(d),m=c[0].startsWith(`FontAwesome`),h=Ji(o),g=hr(f,p),_=g;if(m){var v=yr(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Qt)!==f||a.getAttribute($t)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=ki(),ee=y.extra;ee.attributes[Xt]=t,ti(g,f).then(function(i){var a=Jr(F(F({},y),{},{icons:{main:i,mask:xr()},prefix:f,iconName:_,extra:ee,watchable:!0})),o=H.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Yn(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Zi(e){return Promise.all([Xi(e,`::before`),Xi(e,`::after`)])}function Qi(e){return e.parentNode!==document.head&&!~nn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var $i=function(e){return!!e&&rn.some(function(t){return e.includes(t)})},ea=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=N(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if($i(a)){var o=rn.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function ta(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(W){var n;if(t)n=e;else if(J.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=N(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=N(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=N(ea(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){J.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=jn(n).filter(Qi).map(Zi),i=si.begin(`searchPseudoElements`);xi(),Promise.all(r).then(function(){i(),Si(),e()}).catch(function(){i(),Si(),t()})})}}var na={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=ta,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?H:t;J.searchPseudoElements&&ta(n)}}},ra=!1,ia={mixout:function(){return{dom:{unwatch:function(){xi(),ra=!0}}}},hooks:function(){return{bootstrap:function(){wi(Rr(`mutationObserverCallbacks`,{}))},noAuto:function(){Ti()},watch:function(e){var t=e.observeMutationsRoot;ra?Si():wi(Rr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},aa=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},oa={mixout:function(){return{parse:{transform:function(e){return aa(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=aa(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:F({},a.outer),children:[{tag:`g`,attributes:F({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:F(F({},t.icon.attributes),a.path)}]}]}}}},sa={x:0,y:0,width:`100%`,height:`100%`};function ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function la(e){return e.tag===`g`?e.children:[e]}Lr([Un,Ri,zi,Bi,Vi,na,ia,oa,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Dr(n.split(` `).map(function(e){return e.trim()})):xr();return r.prefix||=br(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Ln({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:F(F({},sa),{},{fill:`white`})},p=c.children?{children:c.children.map(ca)}:{},m={tag:`g`,attributes:F({},d.inner),children:[ca(F({tag:c.tag,attributes:F(F({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:F({},d.outer),children:[m]},g=`mask-${a||An()}`,_=`clip-${a||An()}`,v={tag:`mask`,attributes:F(F({},sa),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:la(u)},v]};return t.push(y,{tag:`rect`,attributes:F({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},sa)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;V.matchMedia&&(t=V.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:F(F({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=F(F({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:F(F({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:F(F({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:F(F({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:F(F({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:F(F({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:F(F({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:F(F({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Z}),Z.noAuto;var ua=Z.config;Z.library,Z.dom;var da=Z.parse;Z.findIconDefinition,Z.toHtml;var fa=Z.icon;Z.layer;var pa=Z.text;Z.counter;function ma(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ha(e){if(Array.isArray(e))return ma(e)}function Q(e,t,n){return(t=Ca(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ga(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function _a(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?va(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):va(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ya(e,t){if(e==null)return{};var n,r,i=ba(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ba(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function xa(e){return ha(e)||ga(e)||Ta(e)||_a()}function Sa(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ca(e){var t=Sa(e,`string`);return typeof t==`symbol`?t:t+``}function wa(e){"@babel/helpers - typeof";return wa=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},wa(e)}function Ta(e,t){if(e){if(typeof e==`string`)return ma(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ma(e,t):void 0}}function Ea(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Q({},e,t):{}}function Da(e){var t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},n=(Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto),`fa-canvas-square`,e.canvasSquare),`fa-canvas-roomy`,e.canvasRoomy),`fa-flip-360`,e.flip360),`fa-buzz`,e.buzz),`fa-float`,e.float),`fa-jello`,e.jello),Q(Q(Q(Q(Q(t,`fa-spin-snap`,e.spinSnap),`fa-spin-snap-4`,e.spinSnap4),`fa-spin-snap-8`,e.spinSnap8),`fa-swing`,e.swing),`fa-wag`,e.wag));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var Oa=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},ka={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(Oa)})(ka);var Aa=ka.exports,ja=[`gradientFill`],Ma=[`class`,`style`],Na=[`type`,`stops`,`id`];function Pa(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=Aa.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function Fa(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function Ia(e,t){return f(`stop`,$({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function La(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(La);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?$($({},e),{},{attributes:$($({},e.attributes),{},{fill:void 0}),children:t}):$($({},e),{},{children:t})}function Ra(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=ya(t,ja),o=i||`fill`in n?La(e):e,s=(o.children||[]).map(function(e){return Ra(e,{},{})}),c=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=Fa(n);break;case`style`:e.style=Pa(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var l=n.style,u=l===void 0?{}:l,d=ya(n,Ma);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var p=i.type,m=i.stops,h=m===void 0?[]:m,g=i.id,_=ya(i,Na),v=f(p===`linear`?`linearGradient`:`radialGradient`,$($({},_),{},{id:g}),h.map(Ia));return f(o.tag,$($($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),{},{fill:`url(#${g})`}),[v].concat(xa(s)))}return f(e.tag,$($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),s)}var za=!1;try{za=!0}catch{}function Ba(){if(!za&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function Va(e){if(e&&wa(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(da.icon)return da.icon(e);if(e===null)return null;if(wa(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var Ha=p({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},canvasSquare:{type:Boolean,default:!1},canvasRoomy:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=g(function(){return Va(e.icon)}),a=g(function(){return Ea(`classes`,Da(e))}),o=g(function(){return Ea(`transform`,typeof e.transform==`string`?da.transform(e.transform):e.transform)}),s=g(function(){return Ea(`mask`,Va(e.mask))}),c=g(function(){var t=$($($($({},a.value),o.value),s.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,fa(r.value,t)});i(c,function(e){if(!e)return Ba(`Could not find one or more icon(s)`,r.value,s.value)},{immediate:!0}),e.gradientFill&&e.symbol&&Ba(`gradientFill is not supported when symbol is true and will be ignored`);var l=g(function(){return c.value?Ra(c.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},n):null});return function(){return l.value}}});p({name:`FontAwesomeLayers`,props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=ua.familyPrefix,i=g(function(){return[`${r}-layers`].concat(xa(e.fixedWidth?[`${r}-fw`]:[]))});return function(){return f(`div`,{class:i.value},n.default?n.default():[])}}}),p({name:`FontAwesomeLayersText`,props:{value:{type:[String,Number],default:``},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return[`bottom-left`,`bottom-right`,`top-left`,`top-right`].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,r=ua.familyPrefix,i=g(function(){return Ea(`classes`,[].concat(xa(e.counter?[`${r}-layers-counter`]:[]),xa(e.position?[`${r}-layers-${e.position}`]:[])))}),a=g(function(){return Ea(`transform`,typeof e.transform==`string`?da.transform(e.transform):e.transform)}),o=g(function(){var t=pa(e.value.toString(),$($({},a.value),i.value)).abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace(`fa-layers-text`,``)),t[0]}),s=g(function(){return Ra(o.value,{},n)});return function(){return s.value}}});var Ua={prefix:`fab`,iconName:`pix`,icon:[512,512,[],`e43a`,`M242.4 292.5c5.4-5.4 14.7-5.4 20.1 0l77 77c14.2 14.2 33.1 22 53.1 22l15.1 0-97.1 97.1c-30.3 29.5-79.5 29.5-109.8 0l-97.5-97.4 9.3 0c20 0 38.9-7.8 53.1-22l76.7-76.7zm20.1-73.6c-6.4 5.5-14.6 5.6-20.1 0l-76.7-76.7c-14.2-15.1-33.1-22-53.1-22l-9.3 0 97.4-97.4c30.4-30.3 79.6-30.3 109.9 0l97.2 97.1-15.2 0c-20 0-38.9 7.8-53.1 22l-77 77zM112.6 142.7c13.8 0 26.5 5.6 37.1 15.4l76.7 76.7c7.2 6.3 16.6 10.8 26.1 10.8 9.4 0 18.8-4.5 26-10.8l77-77c9.8-9.7 23.3-15.3 37.1-15.3l37.7 0 58.3 58.3c30.3 30.3 30.3 79.5 0 109.8l-58.3 58.3-37.7 0c-13.8 0-27.3-5.6-37.1-15.4l-77-77c-13.9-13.9-38.2-13.9-52.1 .1l-76.7 76.6c-10.6 9.8-23.3 15.4-37.1 15.4l-31.8 0-58-58c-30.3-30.3-30.3-79.5 0-109.8l58-58.1 31.8 0z`]},Wa={prefix:`fab`,iconName:`ko-fi`,icon:[512,512,[],`e856`,`M249.8 75c89.8 0 113 1.1 146.3 4.4 78.1 7.8 123.6 56 123.6 125.2l0 8.9c0 64.3-47.1 116.9-110.8 122.4-5 16.6-12.8 33.2-23.3 49.9-24.4 37.7-73.1 85.3-162.9 85.3l-17.7 0c-73.1 0-129.7-31.6-163.5-89.2-29.9-50.4-33.8-106.4-33.8-181.2 0-73.7 44.4-113.6 96.4-120.2 39.3-5 88.1-5.5 145.7-5.5zm0 41.6c-60.4 0-103.6 .5-136.3 5.5-46 6.7-64.3 32.7-64.3 79.2l.2 25.7c1.2 57.3 7.1 97.1 27.5 134.5 26.6 49.3 74.8 68.2 129.7 68.2l17.2 0c72 0 107-34.9 126.3-65.4 9.4-15.5 17.7-32.7 22.2-54.3l3.3-13.8 19.9 0c44.3 0 82.6-36 82.6-82l0-8.3c0-51.5-32.2-78.7-88.1-85.3-31.6-2.8-50.4-3.9-140.2-3.9zM267 169.2c38.2 0 64.8 31.6 64.8 67 0 32.7-18.3 61-42.1 83.1-15 15-39.3 30.5-55.9 40.5-4.4 2.8-10 4.4-16.7 4.4-5.5 0-10.5-1.7-15.5-4.4-16.6-10-41-25.5-56.5-40.5-21.8-20.8-39.2-46.9-41.3-77l-.2-6.1c0-35.5 25.5-67 64.3-67 22.7 0 38.8 11.6 49.3 27.7 11.6-16.1 27.2-27.7 49.9-27.7zm122.5-3.9c28.3 0 43.8 16.6 43.8 43.2s-15.5 42.7-43.8 42.7c-8.9 0-13.8-5-13.8-11.7l0-62.6c0-6.7 5-11.6 13.8-11.6z`]},Ga=O(((e,t)=>{t.exports=function(){return typeof Promise==`function`&&Promise.prototype&&Promise.prototype.then}})),Ka=O((e=>{var t,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw Error(`"version" cannot be null or undefined`);if(e<1||e>40)throw Error(`"version" should be in range from 1 to 40`);return e*4+17},e.getSymbolTotalCodewords=function(e){return n[e]},e.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if(typeof e!=`function`)throw Error(`"toSJISFunc" is not a valid function.`);t=e},e.isKanjiModeEnabled=function(){return t!==void 0},e.toSJIS=function(e){return t(e)}})),qa=O((e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`l`:case`low`:return e.L;case`m`:case`medium`:return e.M;case`q`:case`quartile`:return e.Q;case`h`:case`high`:return e.H;default:throw Error(`Unknown EC Level: `+t)}}e.isValid=function(e){return e&&e.bit!==void 0&&e.bit>=0&&e.bit<4},e.from=function(n,r){if(e.isValid(n))return n;try{return t(n)}catch{return r}}})),Ja=O(((e,t)=>{function n(){this.buffer=[],this.length=0}n.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=n})),Ya=O(((e,t)=>{function n(e){if(!e||e<1)throw Error(`BitMatrix size must be defined and greater than 0`);this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}n.prototype.set=function(e,t,n,r){let i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=n})),Xa=O((e=>{var t=Ka().getSymbolSize;e.getRowColCoords=function(e){if(e===1)return[];let n=Math.floor(e/7)+2,r=t(e),i=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let e=1;e<n-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},e.getPositions=function(t){let n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)e===0&&t===0||e===0&&t===i-1||e===i-1&&t===0||n.push([r[e],r[t]]);return n}})),Za=O((e=>{var t=Ka().getSymbolSize,n=7;e.getPositions=function(e){let r=t(e);return[[0,0],[r-n,0],[0,r-n]]}})),Qa=O((e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(e){return e!=null&&e!==``&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){let n=e.size,r=0,i=0,a=0,o=null,s=null;for(let c=0;c<n;c++){i=a=0,o=s=null;for(let l=0;l<n;l++){let n=e.get(c,l);n===o?i++:(i>=5&&(r+=t.N1+(i-5)),o=n,i=1),n=e.get(l,c),n===s?a++:(a>=5&&(r+=t.N1+(a-5)),s=n,a=1)}i>=5&&(r+=t.N1+(i-5)),a>=5&&(r+=t.N1+(a-5))}return r},e.getPenaltyN2=function(e){let n=e.size,r=0;for(let t=0;t<n-1;t++)for(let i=0;i<n-1;i++){let n=e.get(t,i)+e.get(t,i+1)+e.get(t+1,i)+e.get(t+1,i+1);(n===4||n===0)&&r++}return r*t.N2},e.getPenaltyN3=function(e){let n=e.size,r=0,i=0,a=0;for(let t=0;t<n;t++){i=a=0;for(let o=0;o<n;o++)i=i<<1&2047|e.get(t,o),o>=10&&(i===1488||i===93)&&r++,a=a<<1&2047|e.get(o,t),o>=10&&(a===1488||a===93)&&r++}return r*t.N3},e.getPenaltyN4=function(e){let n=0,r=e.data.length;for(let t=0;t<r;t++)n+=e.data[t];return Math.abs(Math.ceil(n*100/r/5)-10)*t.N4};function n(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw Error(`bad maskPattern:`+t)}}e.applyMask=function(e,t){let r=t.size;for(let i=0;i<r;i++)for(let a=0;a<r;a++)t.isReserved(a,i)||t.xor(a,i,n(e,a,i))},e.getBestMask=function(t,n){let r=Object.keys(e.Patterns).length,i=0,a=1/0;for(let o=0;o<r;o++){n(o),e.applyMask(o,t);let r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),r<a&&(a=r,i=o)}return i}})),$a=O((e=>{var t=qa(),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,r){switch(r){case t.L:return n[(e-1)*4+0];case t.M:return n[(e-1)*4+1];case t.Q:return n[(e-1)*4+2];case t.H:return n[(e-1)*4+3];default:return}},e.getTotalCodewordsCount=function(e,n){switch(n){case t.L:return r[(e-1)*4+0];case t.M:return r[(e-1)*4+1];case t.Q:return r[(e-1)*4+2];case t.H:return r[(e-1)*4+3];default:return}}})),eo=O((e=>{var t=new Uint8Array(512),n=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)t[r]=e,n[e]=r,e<<=1,e&256&&(e^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),e.log=function(e){if(e<1)throw Error(`log(`+e+`)`);return n[e]},e.exp=function(e){return t[e]},e.mul=function(e,r){return e===0||r===0?0:t[n[e]+n[r]]}})),to=O((e=>{var t=eo();e.mul=function(e,n){let r=new Uint8Array(e.length+n.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<n.length;a++)r[i+a]^=t.mul(e[i],n[a]);return r},e.mod=function(e,n){let r=new Uint8Array(e);for(;r.length-n.length>=0;){let e=r[0];for(let i=0;i<n.length;i++)r[i]^=t.mul(n[i],e);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r},e.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let i=0;i<n;i++)r=e.mul(r,new Uint8Array([1,t.exp(i)]));return r}})),no=O(((e,t)=>{var n=to();function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw Error(`Encoder not initialized`);let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},t.exports=r})),ro=O((e=>{e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}})),io=O((e=>{var t=`[0-9]+`,n=`[A-Z $%*+\\-./:]+`,r=`(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+`;r=r.replace(/u/g,`\\u`);var i=`(?:(?![A-Z0-9 $%*+\\-./:]|`+r+`)(?:.|[\r
]))+`;e.KANJI=new RegExp(r,`g`),e.BYTE_KANJI=RegExp(`[^A-Z0-9 $%*+\\-./:]+`,`g`),e.BYTE=new RegExp(i,`g`),e.NUMERIC=new RegExp(t,`g`),e.ALPHANUMERIC=new RegExp(n,`g`);var a=RegExp(`^`+r+`$`),o=RegExp(`^[0-9]+$`),s=RegExp(`^[A-Z0-9 $%*+\\-./:]+$`);e.testKanji=function(e){return a.test(e)},e.testNumeric=function(e){return o.test(e)},e.testAlphanumeric=function(e){return s.test(e)}})),ao=O((e=>{var t=ro(),n=io();e.NUMERIC={id:`Numeric`,bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:`Alphanumeric`,bit:2,ccBits:[9,11,13]},e.BYTE={id:`Byte`,bit:4,ccBits:[8,16,16]},e.KANJI={id:`Kanji`,bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,n){if(!e.ccBits)throw Error(`Invalid mode: `+e);if(!t.isValid(n))throw Error(`Invalid version: `+n);return n>=1&&n<10?e.ccBits[0]:n<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw Error(`Invalid mode`)},e.isValid=function(e){return e&&e.bit&&e.ccBits};function r(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`numeric`:return e.NUMERIC;case`alphanumeric`:return e.ALPHANUMERIC;case`kanji`:return e.KANJI;case`byte`:return e.BYTE;default:throw Error(`Unknown mode: `+t)}}e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch{return n}}})),oo=O((e=>{var t=Ka(),n=$a(),r=qa(),i=ao(),a=ro(),o=7973,s=t.getBCHDigit(o);function c(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function l(e,t){return i.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach(function(e){let r=l(e.mode,t);n+=r+e.getBitsLength()}),n}function d(t,n){for(let r=1;r<=40;r++)if(u(t,r)<=e.getCapacity(r,n,i.MIXED))return r}e.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,r,o){if(!a.isValid(e))throw Error(`Invalid QR Code version`);o===void 0&&(o=i.BYTE);let s=(t.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,r))*8;if(o===i.MIXED)return s;let c=s-l(o,e);switch(o){case i.NUMERIC:return Math.floor(c/10*3);case i.ALPHANUMERIC:return Math.floor(c/11*2);case i.KANJI:return Math.floor(c/13);case i.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(e,t){let n,i=r.from(t,r.M);if(Array.isArray(e)){if(e.length>1)return d(e,i);if(e.length===0)return 1;n=e[0]}else n=e;return c(n.mode,n.getLength(),i)},e.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error(`Invalid QR Code version`);let n=e<<12;for(;t.getBCHDigit(n)-s>=0;)n^=o<<t.getBCHDigit(n)-s;return e<<12|n}})),so=O((e=>{var t=Ka(),n=1335,r=21522,i=t.getBCHDigit(n);e.getEncodedBits=function(e,a){let o=e.bit<<3|a,s=o<<10;for(;t.getBCHDigit(s)-i>=0;)s^=n<<t.getBCHDigit(s)-i;return(o<<10|s)^r}})),co=O(((e,t)=>{var n=ao();function r(e){this.mode=n.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);let i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,i*3+1))},t.exports=r})),lo=O(((e,t)=>{var n=ao(),r=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`.split(``);function i(e){this.mode=n.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t+2<=this.data.length;t+=2){let n=r.indexOf(this.data[t])*45;n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},t.exports=i})),uo=O(((e,t)=>{var n=ao();function r(e){this.mode=n.BYTE,this.data=typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e)}r.getBitsLength=function(e){return e*8},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},t.exports=r})),fo=O(((e,t)=>{var n=ao(),r=Ka();function i(e){this.mode=n.KANJI,this.data=e}i.getBitsLength=function(e){return e*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t=0;for(;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error(`Invalid SJIS character: `+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},t.exports=i})),po=O(((e,t)=>{var n={single_source_shortest_paths:function(e,t,r){var i={},a={};a[t]=0;var o=n.PriorityQueue.make();o.push(t,0);for(var s,c,l,u,d,f,p,m,h;!o.empty();)for(l in s=o.pop(),c=s.value,u=s.cost,d=e[c]||{},d)d.hasOwnProperty(l)&&(f=d[l],p=u+f,m=a[l],h=a[l]===void 0,(h||m>p)&&(a[l]=p,o.push(l,p),i[l]=c));if(r!==void 0&&a[r]===void 0){var g=[`Could not find a path from `,t,` to `,r,`.`].join(``);throw Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,t,r){var i=n.single_source_shortest_paths(e,t,r);return n.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var t=n.PriorityQueue,r={},i;for(i in e||={},t)t.hasOwnProperty(i)&&(r[i]=t[i]);return r.queue=[],r.sorter=e.sorter||t.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t!==void 0&&(t.exports=n)})),mo=O((e=>{var t=ao(),n=co(),r=lo(),i=uo(),a=fo(),o=io(),s=Ka(),c=po();function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,n){let r=[],i;for(;(i=e.exec(n))!==null;)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function d(e){let n=u(o.NUMERIC,t.NUMERIC,e),r=u(o.ALPHANUMERIC,t.ALPHANUMERIC,e),i,a;return s.isKanjiModeEnabled()?(i=u(o.BYTE,t.BYTE,e),a=u(o.KANJI,t.KANJI,e)):(i=u(o.BYTE_KANJI,t.BYTE,e),a=[]),n.concat(r,i,a).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,o){switch(o){case t.NUMERIC:return n.getBitsLength(e);case t.ALPHANUMERIC:return r.getBitsLength(e);case t.KANJI:return a.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function p(e){return e.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function m(e){let n=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case t.NUMERIC:n.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:n.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:n.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:n.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return n}function h(e,n){let r={},i={start:{}},a=[`start`];for(let o=0;o<e.length;o++){let s=e[o],c=[];for(let e=0;e<s.length;e++){let l=s[e],u=``+o+e;c.push(u),r[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===l.mode?(i[o][u]=f(r[o].lastCount+l.length,l.mode)-f(r[o].lastCount,l.mode),r[o].lastCount+=l.length):(r[o]&&(r[o].lastCount=l.length),i[o][u]=f(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,n))}}a=c}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}function g(e,o){let c,l=t.getBestModeForData(e);if(c=t.from(o,l),c!==t.BYTE&&c.bit<l.bit)throw Error(`"`+e+`" cannot be encoded with mode `+t.toString(c)+`.
 Suggested mode is: `+t.toString(l));switch(c===t.KANJI&&!s.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new n(e);case t.ALPHANUMERIC:return new r(e);case t.KANJI:return new a(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce(function(e,t){return typeof t==`string`?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},e.fromString=function(t,n){let r=h(m(d(t,s.isKanjiModeEnabled())),n),i=c.find_path(r.map,`start`,`end`),a=[];for(let e=1;e<i.length-1;e++)a.push(r.table[i[e]].node);return e.fromArray(p(a))},e.rawSplit=function(t){return e.fromArray(d(t,s.isKanjiModeEnabled()))}})),ho=O((e=>{var t=Ka(),n=qa(),r=Ja(),i=Ya(),a=Xa(),o=Za(),s=Qa(),c=$a(),l=no(),u=oo(),d=so(),f=ao(),p=mo();function m(e,t){let n=e.size,r=o.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],a=r[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||n<=i+t))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(t>=0&&t<=6&&(r===0||r===6)||r>=0&&r<=6&&(t===0||t===6)||t>=2&&t<=4&&r>=2&&r<=4?e.set(i+t,a+r,!0,!0):e.set(i+t,a+r,!1,!0))}}function h(e){let t=e.size;for(let n=8;n<t-8;n++){let t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}function g(e,t){let n=a.getPositions(t);for(let t=0;t<n.length;t++){let r=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)t===-2||t===2||n===-2||n===2||t===0&&n===0?e.set(r+t,i+n,!0,!0):e.set(r+t,i+n,!1,!0)}}function _(e,t){let n=e.size,r=u.getEncodedBits(t),i,a,o;for(let t=0;t<18;t++)i=Math.floor(t/3),a=t%3+n-8-3,o=(r>>t&1)==1,e.set(i,a,o,!0),e.set(a,i,o,!0)}function v(e,t,n){let r=e.size,i=d.getEncodedBits(t,n),a,o;for(a=0;a<15;a++)o=(i>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(r-15+a,8,o,!0),a<8?e.set(8,r-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(r-8,8,1,!0)}function y(e,t){let n=e.size,r=-1,i=n-1,a=7,o=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;o<t.length&&(r=(t[o]>>>a&1)==1),e.set(i,s-n,r),a--,a===-1&&(o++,a=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function ee(e,n,i){let a=new r;i.forEach(function(t){a.put(t.mode.bit,4),a.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(a)});let o=(t.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,n))*8;for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);let s=(o-a.getLengthInBits())/8;for(let e=0;e<s;e++)a.put(e%2?17:236,8);return b(a,e,n)}function b(e,n,r){let i=t.getSymbolTotalCodewords(n),a=i-c.getTotalCodewordsCount(n,r),o=c.getBlocksCount(n,r),s=o-i%o,u=Math.floor(i/o),d=Math.floor(a/o),f=d+1,p=u-d,m=new l(p),h=0,g=Array(o),_=Array(o),v=0,y=new Uint8Array(e.buffer);for(let e=0;e<o;e++){let t=e<s?d:f;g[e]=y.slice(h,h+t),_[e]=m.encode(g[e]),h+=t,v=Math.max(v,t)}let ee=new Uint8Array(i),b=0,x,S;for(x=0;x<v;x++)for(S=0;S<o;S++)x<g[S].length&&(ee[b++]=g[S][x]);for(x=0;x<p;x++)for(S=0;S<o;S++)ee[b++]=_[S][x];return ee}function x(e,n,r,a){let o;if(Array.isArray(e))o=p.fromArray(e);else if(typeof e==`string`){let t=n;if(!t){let n=p.rawSplit(e);t=u.getBestVersionForData(n,r)}o=p.fromString(e,t||40)}else throw Error(`Invalid data`);let c=u.getBestVersionForData(o,r);if(!c)throw Error(`The amount of data is too big to be stored in a QR Code`);if(!n)n=c;else if(n<c)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);let l=ee(n,r,o),d=new i(t.getSymbolSize(n));return m(d,n),h(d),g(d,n),v(d,r,0),n>=7&&_(d,n),y(d,l),isNaN(a)&&(a=s.getBestMask(d,v.bind(null,d,r))),s.applyMask(a,d),v(d,r,a),{modules:d,version:n,errorCorrectionLevel:r,maskPattern:a,segments:o}}e.create=function(e,r){if(e===void 0||e===``)throw Error(`No input text`);let i=n.M,a,o;return r!==void 0&&(i=n.from(r.errorCorrectionLevel,n.M),a=u.from(r.version),o=s.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),x(e,a,i,o)}})),go=O((e=>{function t(e){if(typeof e==`number`&&(e=e.toString()),typeof e!=`string`)throw Error(`Color should be defined as hex string`);let t=e.slice().replace(`#`,``).split(``);if(t.length<3||t.length===5||t.length>8)throw Error(`Invalid hex color: `+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),t.length===6&&t.push(`F`,`F`);let n=parseInt(t.join(``),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:`#`+t.slice(0,6).join(``)}}e.getOptions=function(e){e||={},e.color||(e.color={});let n=e.margin===void 0||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:n,color:{dark:t(e.color.dark||`#000000ff`),light:t(e.color.light||`#ffffffff`)},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},e.getImageWidth=function(t,n){let r=e.getScale(t,n);return Math.floor((t+n.margin*2)*r)},e.qrToImageData=function(t,n,r){let i=n.modules.size,a=n.modules.data,o=e.getScale(i,r),s=Math.floor((i+r.margin*2)*o),c=r.margin*o,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=(e*s+n)*4,d=r.color.light;if(e>=c&&n>=c&&e<s-c&&n<s-c){let t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);d=l[+!!a[t*i+r]]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),_o=O((e=>{var t=go();function n(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||={},t.height=n,t.width=n,t.style.height=n+`px`,t.style.width=n+`px`}function r(){try{return document.createElement(`canvas`)}catch{throw Error(`You need to specify a canvas element`)}}e.render=function(e,i,a){let o=a,s=i;o!==void 0||i&&i.getContext||(o=i,i=void 0),i||(s=r()),o=t.getOptions(o);let c=t.getImageWidth(e.modules.size,o),l=s.getContext(`2d`),u=l.createImageData(c,c);return t.qrToImageData(u.data,e,o),n(l,s,c),l.putImageData(u,0,0),s},e.renderToDataURL=function(t,n,r){let i=r;i!==void 0||n&&n.getContext||(i=n,n=void 0),i||={};let a=e.render(t,n,i),o=i.type||`image/png`,s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}})),vo=O((e=>{var t=go();function n(e,t){let n=e.a/255,r=t+`="`+e.hex+`"`;return n<1?r+` `+t+`-opacity="`+n.toFixed(2).slice(1)+`"`:r}function r(e,t,n){let r=e+t;return n!==void 0&&(r+=` `+n),r}function i(e,t,n){let i=``,a=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!o&&(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?r(`M`,l+n,.5+u+n):r(`m`,a,0),a=0,o=!1),l+1<t&&e[c+1]||(i+=r(`h`,s),s=0)):a++}return i}e.render=function(e,r,a){let o=t.getOptions(r),s=e.modules.size,c=e.modules.data,l=s+o.margin*2,u=o.color.light.a?`<path `+n(o.color.light,`fill`)+` d="M0 0h`+l+`v`+l+`H0z"/>`:``,d=`<path `+n(o.color.dark,`stroke`)+` d="`+i(c,s,o.margin)+`"/>`,f=`viewBox="0 0 `+l+` `+l+`"`,p=`<svg xmlns="http://www.w3.org/2000/svg" `+(o.width?`width="`+o.width+`" height="`+o.width+`" `:``)+f+` shape-rendering="crispEdges">`+u+d+`</svg>
`;return typeof a==`function`&&a(null,p),p}})),yo=ae(O((e=>{var t=Ga(),n=ho(),r=_o(),i=vo();function a(e,r,i,a,o){let s=[].slice.call(arguments,1),c=s.length,l=typeof s[c-1]==`function`;if(!l&&!t())throw Error(`Callback required as last argument`);if(l){if(c<2)throw Error(`Too few arguments provided`);c===2?(o=i,i=r,r=a=void 0):c===3&&(r.getContext&&o===void 0?(o=a,a=void 0):(o=a,a=i,i=r,r=void 0))}else{if(c<1)throw Error(`Too few arguments provided`);return c===1?(i=r,r=a=void 0):c===2&&!r.getContext&&(a=i,i=r,r=void 0),new Promise(function(t,o){try{t(e(n.create(i,a),r,a))}catch(e){o(e)}})}try{let t=n.create(i,a);o(null,e(t,r,a))}catch(e){o(e)}}e.create=n.create,e.toCanvas=a.bind(null,r.render),e.toDataURL=a.bind(null,r.renderToDataURL),e.toString=a.bind(null,function(e,t,n){return i.render(e,n)})}))()),bo={class:`donation-dialog`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`donation-title`},xo=[`aria-label`],So={id:`donation-title`},Co={class:`support-methods`},wo=[`src`,`alt`],To={class:`pix-code`},Eo={key:1,class:`donation-error`},Do=[`title`],Oo=b({__name:`DonationButton`,props:{pixKey:{type:String,required:!0},locale:{type:String,default:`pt`},merchantName:{type:String,default:`ALGORITMO`},merchantCity:{type:String,default:`BRASIL`}},setup(e){let r=e,i=C(!1),a=C(!1),o=C(``),s=C(``),f=C(``),p=g(()=>r.locale===`en`),m=g(()=>p.value?`Copy PIX code`:`Copiar código PIX`);function v(e,t){return`${e}${String(t.length).padStart(2,`0`)}${t}`}function b(e){let t=65535;for(let n=0;n<e.length;n+=1){t^=e.charCodeAt(n)<<8;for(let e=0;e<8;e+=1)t=t&32768?t<<1^4129:t<<1}return(t&65535).toString(16).toUpperCase().padStart(4,`0`)}let S=g(()=>{let e=v(`00`,`br.gov.bcb.pix`)+v(`01`,r.pixKey),t=v(`00`,`01`)+v(`26`,e)+v(`52`,`0000`)+v(`53`,`986`)+v(`58`,`BR`)+v(`59`,r.merchantName)+v(`60`,r.merchantCity)+v(`62`,v(`05`,`***`))+`6304`;return t+b(t)});async function te(){i.value=!0,f.value=``,s.value=``;try{o.value=await yo.toDataURL(S.value,{errorCorrectionLevel:`M`,margin:1,width:220})}catch{o.value=``,s.value=p.value?`Unable to generate the QR Code. Use the PIX code below.`:`Não foi possível gerar o QR Code. Use o código PIX abaixo.`}}function ne(e){f.value=e}async function w(){try{await navigator.clipboard.writeText(S.value),a.value=!0,window.setTimeout(()=>{a.value=!1},2e3)}catch{s.value=p.value?`Copy the PIX code shown below.`:`Copie o código PIX exibido abaixo.`}}return(e,r)=>(c(),d(l,null,[x(`button`,{type:`button`,class:`donation-button`,onClick:te},[r[4]||=x(`span`,{"aria-hidden":`true`},`♥`,-1),y(` `+h(p.value?`Support`:`Apoiar`),1)]),i.value?(c(),d(`div`,{key:0,class:`donation-backdrop`,onClick:r[3]||=ee(e=>i.value=!1,[`self`])},[x(`section`,bo,[x(`button`,{type:`button`,class:`donation-close`,"aria-label":p.value?`Close support dialog`:`Fechar apoio`,onClick:r[0]||=e=>i.value=!1},`x`,8,xo),x(`h3`,So,h(p.value?`Support the simulator`:`Apoie o simulador`),1),x(`p`,null,h(p.value?`Choose how you would like to support this work.`:`Escolha como você deseja apoiar este trabalho.`),1),x(`div`,Co,[x(`button`,{type:`button`,class:t({active:f.value===`pix`}),onClick:r[1]||=e=>ne(`pix`)},[_(n(Ha),{icon:n(Ua)},null,8,[`icon`]),r[5]||=y(` PIX`,-1)],2),x(`button`,{type:`button`,class:t({active:f.value===`kofi`}),onClick:r[2]||=e=>ne(`kofi`)},[_(n(Ha),{icon:n(Wa)},null,8,[`icon`]),r[6]||=y(` Ko-fi`,-1)],2)]),f.value===`pix`?(c(),d(l,{key:0},[x(`p`,null,h(p.value?`Scan the QR Code or copy the PIX code.`:`Escaneie o QR Code ou copie o código PIX.`),1),o.value?(c(),d(`img`,{key:0,class:`donation-qr`,src:o.value,alt:p.value?`PIX support QR Code`:`QR Code PIX para apoio`},null,8,wo)):u(``,!0),x(`code`,To,h(S.value),1),s.value?(c(),d(`small`,Eo,h(s.value),1)):u(``,!0),x(`button`,{type:`button`,class:`donation-copy`,onClick:w},h(a.value?p.value?`Code copied`:`Código copiado`:m.value),1)],64)):f.value===`kofi`?(c(),d(`iframe`,{key:1,class:`kofi-widget`,src:`https://ko-fi.com/C0C2CZ59M/?hidefeed=true&widget=true&embed=true`,title:p.value?`Support this project on Ko-fi`:`Apoie este projeto no Ko-fi`,loading:`lazy`},null,8,Do)):u(``,!0)])])):u(``,!0)],64))}},[[`__scopeId`,`data-v-6f5901bc`]]),ko={class:`simulator-panel`},Ao={class:`mini-header-actions`},jo={class:`language-select`},Mo=[`aria-label`],No={class:`simulator-notice`},Po={class:`simulator-explanation`},Fo={class:`candidate-editor`},Io=[`aria-label`,`disabled`,`onClick`],Lo={key:0,class:`color-modal`},Ro=[`disabled`,`onClick`,`title`],zo=[`onUpdate:modelValue`,`aria-label`,`aria-invalid`,`disabled`],Bo=[`value`,`aria-label`,`disabled`,`onInput`],Vo=[`disabled`,`onClick`],Ho=[`placeholder`,`aria-label`,`disabled`],Uo=[`disabled`],Wo={class:`plan-panel`},Go={key:0,class:`timeline-control`},Ko={class:`plan-actions`},qo={class:`playback-speed`},Jo=[`disabled`,`aria-label`],Yo=[`disabled`,`aria-label`],Xo=[`disabled`],Zo=[`onUpdate:modelValue`,`disabled`,`onInput`],Qo={key:1,class:`plan-status`},$o={class:`result-panels`},es={class:`percentage-panel`},ts={class:`received-percentages`},ns={key:0},rs={key:1},is={class:`attraction-panel`},as=[`onUpdate:modelValue`,`disabled`],os=2e8,ss=1e8,cs=65,ls=740,us=`algoritmo:simulador:v1`,ds=48,fs=b({__name:`Simulator`,setup(n){let f={blank:`#f8fafc`,nullVote:`#64748b`},p=C(`pt`),v={pt:{language:`Idioma`,title:`Simulador de redirecionamento`,hypothetical:`Cenário hipotético.`,disclaimer:`Não representa uma urna real, não altera dados oficiais e não constitui evidência de fraude.`,explanation:`Cada taxa de redirecionamento atrai votos de todas as outras origens — candidatos, branco e nulo.`,candidates:`Candidatos`,name:`Nome do candidato`,number:`Número de {name}`,newCandidate:`Nome do novo candidato`,add:`Adicionar candidato`,remove:`Remover`,plan:`Plano de entradas`,planNote:`Votos de entrada por candidato. Máximo de 100.000.000 por candidato e 200.000.000 por execução.`,progress:`Apuração`,eachBall:`Cada bolinha representa um voto.`,slow:`Desacelerar apuração`,fast:`Acelerar apuração`,speed:`Velocidade`,stop:`Parar execução`,calculating:`Calculando...`,pause:`Pausar`,continue:`Continuar`,execute:`Executar {count} {vote}`,inputVotes:`votos de entrada`,received:`Votos recebidos`,total:`Total`,valid:`Válidos`,overall:`Geral`,invalid:`Não válido`,probability:`Probabilidade de redirecionamento`,blank:`Branco`,nullVote:`Nulo`,standard:`Padrão`,vote:`voto`,votes:`votos`},en:{language:`Language`,title:`Vote redirection simulator`,hypothetical:`Hypothetical scenario.`,disclaimer:`It does not represent a real voting machine, does not alter official data, and is not evidence of fraud.`,explanation:`Each redirection rate attracts votes from every other source — candidates, blank, and null.`,candidates:`Candidates`,name:`Candidate name`,number:`{name} number`,newCandidate:`New candidate name`,add:`Add candidate`,remove:`Remove`,plan:`Input plan`,planNote:`Input votes per candidate. Maximum 100,000,000 per candidate and 200,000,000 per run.`,progress:`Counting`,eachBall:`Each ball represents one vote.`,slow:`Slow down counting`,fast:`Speed up counting`,speed:`Speed`,stop:`Stop run`,calculating:`Calculating...`,pause:`Pause`,continue:`Continue`,execute:`Run {count} {vote}`,inputVotes:`input votes`,received:`Received votes`,total:`Total`,valid:`Valid`,overall:`Overall`,invalid:`Invalid`,probability:`Redirection probability`,blank:`Blank`,nullVote:`Null`,standard:`Standard`,vote:`vote`,votes:`votes`},es:{language:`Idioma`,title:`Simulador de redirección de votos`,hypothetical:`Escenario hipotético.`,disclaimer:`No representa una urna electoral real, no modifica datos oficiales y no constituye evidencia de fraude.`,explanation:`Cada tasa de redirección atrae votos de todas las demás fuentes: candidatos, votos en blanco y nulos.`,candidates:`Candidatos`,name:`Nombre del candidato`,number:`Número de {name}`,newCandidate:`Nombre del nuevo candidato`,add:`Añadir candidato`,remove:`Eliminar`,plan:`Plan de entradas`,planNote:`Votos de entrada por candidato. Máximo de 100.000.000 por candidato y 200.000.000 por ejecución.`,progress:`Recuento`,eachBall:`Cada bolita representa un voto.`,slow:`Reducir velocidad`,fast:`Aumentar velocidad`,speed:`Velocidad`,stop:`Detener ejecución`,calculating:`Calculando...`,pause:`Pausar`,continue:`Continuar`,execute:`Ejecutar {count} {vote}`,inputVotes:`votos de entrada`,received:`Votos recibidos`,total:`Total`,valid:`Válidos`,overall:`General`,invalid:`No válido`,probability:`Probabilidad de redirección`,blank:`Blanco`,nullVote:`Nulo`,standard:`Estándar`,vote:`voto`,votes:`votos`},fr:{language:`Langue`,title:`Simulateur de redirection des votes`,hypothetical:`Scénario hypothétique.`,disclaimer:`Il ne représente pas une urne réelle, ne modifie aucune donnée officielle et ne constitue pas une preuve de fraude.`,explanation:`Chaque taux de redirection attire des votes de toutes les autres sources : candidats, votes blancs et nuls.`,candidates:`Candidats`,name:`Nom du candidat`,number:`Numéro de {name}`,newCandidate:`Nom du nouveau candidat`,add:`Ajouter un candidat`,remove:`Retirer`,plan:`Plan des entrées`,planNote:`Votes entrants par candidat. Maximum de 100 000 000 par candidat et 200 000 000 par exécution.`,progress:`Dépouillement`,eachBall:`Chaque bille représente un vote.`,slow:`Ralentir le dépouillement`,fast:`Accélérer le dépouillement`,speed:`Vitesse`,stop:`Arrêter l’exécution`,calculating:`Calcul...`,pause:`Pause`,continue:`Continuer`,execute:`Exécuter {count} {vote}`,inputVotes:`votes entrants`,received:`Votes reçus`,total:`Total`,valid:`Valides`,overall:`Global`,invalid:`Non valide`,probability:`Probabilité de redirection`,blank:`Blanc`,nullVote:`Nul`,standard:`Standard`,vote:`vote`,votes:`votes`}};function b(e,t={}){return(v[p.value][e]||e).replace(/\{(\w+)\}/g,(e,n)=>t[n]??``)}let w=a([]),re=C(null),T=C([{id:`candidate-1`,label:`Candidato 1`,code:`101`,color:`#dc2626`},{id:`candidate-2`,label:`Candidato 2`,code:`202`,color:`#2563eb`}]),ie=[{id:`blank`,label:`Branco`,code:``,color:f.blank},{id:`null-vote`,label:`Nulo`,code:``,color:f.nullVote}],E=C(Fe()),D=C(Fe()),O=C(Fe()),k=C({"candidate-1":0,"candidate-2":0}),ae=C(``),A=C(``),oe=C(null),se=C(null),j=C(!1),M=C(!1),ce=C(!1),N=C(``),P=C(0),le=a([]),ue=C(0),de=C(0),fe=C(1),pe=[.25,.5,1,2,4,8,16,32,64,128],F=0,me=0,I=0,he=0,L=0,R=0,z=null,B=0,ge=0,_e=new Worker(new URL(`/simuladorurna.github.io/assets/timeline-worker-Divts2dT.js`,``+import.meta.url),{type:`module`}),ve=new WeakMap,ye=[`#1c0a10`,`#3b1725`,`#73172d`,`#b4202a`,`#df3e23`,`#fa6a0a`,`#f9a31b`,`#ffd541`,`#221c1a`,`#322b28`,`#71413b`,`#bb7547`,`#dba463`,`#f4d29c`,`#fad6b8`,`#fef3c0`,`#422433`,`#5b3138`,`#8e5252`,`#ba756a`,`#e86a73`,`#f5a097`,`#e9b5a3`,`#fdeee4`,`#14291b`,`#24523b`,`#1a7a3e`,`#14a02e`,`#59c135`,`#9cdb43`,`#d6f264`,`#f0fbc4`,`#10302a`,`#23674e`,`#328464`,`#5daf8d`,`#20d6c7`,`#92dcba`,`#cdf7e2`,`#e9fdf4`,`#0d1b33`,`#143464`,`#285cc4`,`#249fde`,`#6fc6ee`,`#9adcf0`,`#c5e9f8`,`#e3e6ff`,`#201a2c`,`#403353`,`#5a2f66`,`#793a80`,`#bc4a9b`,`#b48ae0`,`#d5aded`,`#f0dcf7`,`#060608`,`#333941`,`#4a5462`,`#6d758d`,`#8b93af`,`#b3b9d1`,`#dae0ea`,f.blank,f.nullVote],be=g(()=>ye.filter(e=>!Object.values(f).includes(e))),xe=C(null);_e.onmessage=({data:e})=>{e.type===`progress`&&rt(e.progress)};let V=g(()=>[...T.value,...ie]);function H(e){return e.id===`blank`?b(`blank`):e.id===`null-vote`?b(`nullVote`):e.label}function Se(e,t){return!T.value.some(n=>n.id!==e&&n.color===t)}let U=e=>String(e||``).trim().toLocaleLowerCase(`pt-BR`),W=e=>String(e||``).trim(),Ce=g(()=>new Set(T.value.filter(e=>{let t=U(e.label);return t&&T.value.filter(e=>U(e.label)===t).length>1}).map(e=>e.id))),we=g(()=>new Set(T.value.filter(e=>{let t=W(e.code);return t&&T.value.filter(e=>W(e.code)===t).length>1}).map(e=>e.id))),Te=g(()=>!Ce.value.size&&!we.value.size),Ee=g(()=>Object.values(D.value).reduce((e,t)=>e+t,0)),De=g(()=>T.value.reduce((e,t)=>e+(D.value[t.id]||0),0)),Oe=g(()=>Object.values(O.value).reduce((e,t)=>e+Math.min(ss,Math.max(0,Math.floor(Number(t)||0))),0));g(()=>T.value.reduce((e,t)=>e+(Number(k.value[t.id])||0),0));let G=g(()=>j.value||ce.value),K=g(()=>({pt:`pt-BR`,en:`en-US`,es:`es-ES`,fr:`fr-FR`})[p.value]||`pt-BR`),ke=g(()=>ce.value?b(`calculating`):j.value?M.value?b(`pause`):b(`continue`):b(`execute`,{count:Oe.value.toLocaleString(K.value),vote:Oe.value===1?b(`vote`):b(`votes`)})),Ae=g(()=>Re()),je=g(()=>Math.max(290,(V.value.length+1)*54));function Me(e){let t=String(e||``).replace(`#`,``);if(!/^[0-9a-f]{6}$/i.test(t))return`#f8fafc`;let n=[0,2,4].map(e=>parseInt(t.slice(e,e+2),16)/255).map(e=>e<=.03928?e/12.92:((e+.055)/1.055)**2.4),r=n[0]*.2126+n[1]*.7152+n[2]*.0722;return 1.05/(r+.05)>=(r+.05)/.05?`#f8fafc`:`#0f172a`}function Ne(e,t,n){let r=String(t||``);if(e.measureText(r).width<=n)return r;let i=r.length;for(;i&&e.measureText(`${r.slice(0,i)}...`).width>n;)--i;return i?`${r.slice(0,i)}...`:`...`}let Pe=e=>Me(e.color);function Fe(){return Object.fromEntries([...T.value,...ie].map(e=>[e.id,0]))}function Ie(e,t){let n=V.value.findIndex(t=>t.id===e);return ds+(t-ds)*((n+1)/(V.value.length+1))}function Le(e){return V.value.find(t=>t.id===e)}function Re(){let e=T.value.filter(e=>(Number(k.value[e.id])||0)>0),t=e.reduce((e,t)=>e+(Number(k.value[t.id])||0),0),n=t>100?100/t:1,r=0,i=e.map(e=>{let t=r;return r+=(Number(k.value[e.id])||0)*n,{id:e.id,label:e.label,color:e.color,start:t,end:r}});return r<100&&i.push({id:`unchanged`,label:b(`standard`),color:`#475569`,start:r,end:100}),i}function ze(e){let t=e.target.closest(`.simulator-panel button`);if(!t)return;let n=performance.now();n-(ve.get(t)??-1/0)<450?(e.preventDefault(),e.stopImmediatePropagation()):ve.set(t,n)}function Be(){E.value=Fe(),D.value=Fe()}function Ve(e){return Object.fromEntries(V.value.map(t=>[t.id,Math.max(0,Math.floor(Number(e?.[t.id])||0))]))}function He(e){return Object.fromEntries(V.value.map(t=>[t.id,Math.min(ss,Math.max(0,Math.floor(Number(e?.[t.id])||0)))]))}function Ue(){try{localStorage.setItem(us,JSON.stringify({candidates:T.value,transferRates:k.value,cast:E.value,received:D.value,plannedVotes:O.value}))}catch{}}function We(){try{let e=JSON.parse(localStorage.getItem(us)||`null`);if(!e||!Array.isArray(e.candidates)||e.candidates.length<2)return;let t=new Set,n=new Set,r=e.candidates.filter(e=>e&&typeof e.id==`string`&&!t.has(e.id)&&(t.add(e.id)||!0)).map((e,t)=>{let r=be.value.includes(e.color)?e.color:null,i=r&&!n.has(r)?r:be.value.find(e=>!n.has(e))||be.value[t%be.value.length];return n.add(i),{id:e.id,label:String(e.label||`Candidato`).slice(0,64),code:String(e.code||``).replace(/\D/g,``).slice(0,5),color:i}});if(r.length<2)return;T.value=r,k.value=Object.fromEntries(r.map(t=>[t.id,Math.min(100,Math.max(0,Number(e.transferRates?.[t.id])||0))])),E.value=Ve(e.cast),D.value=Ve(e.received),O.value=He(e.plannedVotes)}catch{}}function q(){let e=re.value;if(!e)return;let t=e.getBoundingClientRect();if(!t.width||!t.height)return;let n=window.devicePixelRatio||1,r=Math.round(t.width*n),i=Math.round(t.height*n);(e.width!==r||e.height!==i)&&(e.width=r,e.height=i);let a=e.getContext(`2d`);a.setTransform(n,0,0,n,0,0),a.clearRect(0,0,t.width,t.height);let o=Math.min(145,t.width*.23),s=t.width-o-2,c=t.width*.5,l=ds+(t.height-ds)*.5;a.strokeStyle=`#475569`,a.lineWidth=2;for(let e of V.value){let n=Ie(e.id,t.height);a.beginPath(),a.moveTo(2+o,n),a.lineTo(c,l),a.lineTo(s,n),a.stroke()}for(let e of V.value){let n=Ie(e.id,t.height);for(let[t,r]of[[2,E.value[e.id]||0],[s,D.value[e.id]||0]])a.fillStyle=e.color,a.fillRect(t,n-21,o,42),a.strokeStyle=`#94a3b8`,a.lineWidth=2,a.strokeRect(t,n-21,o,42),a.fillStyle=Pe(e),a.font=`700 11px system-ui`,a.textAlign=`left`,a.textBaseline=`middle`,a.fillText(Ne(a,H(e),o-62),t+9,n-(e.code?7:0)),e.code&&(a.font=`800 12px system-ui`,a.fillText(e.code,t+9,n+9)),a.fillStyle=Pe(e),a.font=r>999999?`800 8px system-ui`:`800 11px system-ui`,a.textAlign=`right`,a.fillText(Number(r).toLocaleString(`pt-BR`),t+o-8,n)}let u=le.value.length?de.value:performance.now();for(let e of w.value){if(u<e.startAt)continue;let n=Ie(e.source,t.height),r=Ie(e.received,t.height),i=u<e.centerAt,d=Math.min(i?(u-e.startAt)/(e.centerAt-e.startAt):(u-e.centerAt)/(e.finishAt-e.centerAt),1),f=i?2+o+(c-2-o)*d:c+(s-c)*d,p=i?n+(l-n)*d:l+(r-l)*d,m=Le(!i&&e.intercepted?e.received:e.source);a.beginPath(),a.arc(f,p,9,0,Math.PI*2),a.fillStyle=m.color,a.fill(),a.strokeStyle=e.intercepted&&!i?`#fbbf24`:`#1f2937`,a.lineWidth=1,a.stroke(),m.code&&(a.fillStyle=Pe(m),a.font=`800 8px system-ui`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(m.code,f,p))}let d=A.value?Le(A.value):null,f=l-62,p=c-23,m=f-23,h=se.value,g=h?.segments||Ae.value;if(g.length){let e=Math.min(500,t.width*.82),n=c-e/2,r=g.map(e=>`${e.label} ${(e.end-e.start).toLocaleString(`pt-BR`,{minimumFractionDigits:2,maximumFractionDigits:2})}%`).join(`  |  `),i=9;do a.font=`${i}px system-ui`,--i;while(a.measureText(r).width>e&&i>=6);a.fillStyle=`#cbd5e1`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(r,c,15);for(let t of g){let r=n+t.start/100*e;a.fillStyle=t.color,a.fillRect(r,24,(t.end-t.start)/100*e,8)}if(a.strokeStyle=`#cbd5e1`,a.lineWidth=1,a.strokeRect(n,24,e,8),h){let t=n+h.drawValue/100*e;a.fillStyle=`#f8fafc`,a.beginPath(),a.moveTo(t-5,19),a.lineTo(t+5,19),a.lineTo(t,26),a.closePath(),a.fill()}}oe.value!=null&&(a.fillStyle=`#f8fafc`,a.font=`800 12px system-ui`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(`${oe.value.toLocaleString(`pt-BR`,{minimumFractionDigits:2,maximumFractionDigits:2})}%`,c,m-12)),a.strokeStyle=d?d.color:`#fbbf24`,a.lineWidth=3,a.beginPath(),a.moveTo(c,f+23),a.lineTo(c,l),a.stroke(),a.beginPath(),a.moveTo(p+9,m),a.lineTo(p+46-9,m),a.quadraticCurveTo(p+46,m,p+46,m+9),a.lineTo(p+46,m+46-9),a.quadraticCurveTo(p+46,m+46,p+46-9,m+46),a.lineTo(p+9,m+46),a.quadraticCurveTo(p,m+46,p,m+46-9),a.lineTo(p,m+9),a.quadraticCurveTo(p,m,p+9,m),a.closePath(),a.save(),a.shadowColor=d?d.color:`transparent`,a.shadowBlur=d?22:0,d&&(a.fillStyle=d.color,a.fill()),a.strokeStyle=d?`#ffffff`:`#fbbf24`,a.lineWidth=d?5:3,a.stroke(),a.restore(),a.fillStyle=d?Pe(d):`#cbd5e1`;for(let[e,t]of[[-.22,-.22],[.22,-.22],[0,0],[-.22,.22],[.22,.22]])a.beginPath(),a.arc(c+46*e,f+46*t,4.5,0,Math.PI*2),a.fill();w.value.length&&!j.value&&(I=requestAnimationFrame(q))}function Ge(e,t=Math.random){let n=t()*100,r=Ae.value.map(e=>({...e})),i=r.find(e=>e.id!==`unchanged`&&n>=e.start&&n<e.end),a=!!(i&&i.id!==e),o=e;return i&&(o=i.id),{received:o,intercepted:a,drawValue:n,segments:r}}function Ke(){let e=ae.value.trim().slice(0,64);if(!e){let t=T.value.length+1;do e=`Candidato ${t++}`;while(T.value.some(t=>U(t.label)===U(e)))}if(T.value.some(t=>U(t.label)===U(e))){N.value=`Nome de candidato já utilizado.`;return}let t=`candidate-${Date.now()}`,n=be.value.find(e=>Se(t,e))||be.value[0];T.value=[...T.value,{id:t,label:e,code:``,color:n}],k.value={...k.value,[t]:0},E.value={...E.value,[t]:0},D.value={...D.value,[t]:0},O.value={...O.value,[t]:0},ae.value=``,requestAnimationFrame(q)}function qe(e,t){e.code=String(t.target.value||``).replace(/\D/g,``).slice(0,5),q()}function Je(e){if(T.value.length<=2)return;T.value=T.value.filter(t=>t.id!==e);let{[e]:t,...n}=k.value;k.value=n;let{[e]:r,...i}=E.value,{[e]:a,...o}=D.value,{[e]:s,...c}=O.value;E.value=i,D.value=o,O.value=c,me+=1,w.value=[],requestAnimationFrame(q)}function Ye(){he+=1,_e.postMessage({type:`stop`}),j.value=!1,ce.value=!1,me+=1,A.value=``,oe.value=null,se.value=null,cancelAnimationFrame(I),I=0,w.value=[],z=null,cancelAnimationFrame(B),B=0,ge=0,M.value=!1,cancelAnimationFrame(0),clearTimeout(0),le.value=[],P.value=0,ue.value=0,de.value=0,L=0,R=0,Be(),requestAnimationFrame(q)}function Xe(){G.value&&(he+=1,_e.postMessage({type:`stop`}),me+=1,j.value=!1,ce.value=!1,A.value=``,oe.value=null,se.value=null,w.value=[],z=null,cancelAnimationFrame(B),B=0,ge=0,cancelAnimationFrame(I),M.value=!1,cancelAnimationFrame(0),clearTimeout(0),le.value=[],P.value=0,ue.value=0,de.value=0,L=0,R=0,I=0,N.value=`Execução interrompida.`,requestAnimationFrame(q))}function Ze(e){return()=>{let t=e+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Qe(e=P.value,t=!1){let n=ue.value*Math.max(0,Math.min(100,Number(e)||0))/100,r=le.value;if(t||n<de.value){for(L=0,R=0;L<r.length&&r[L].startAt<=n;)L+=1;for(;R<r.length&&r[R].finishAt<=n;)R+=1;let e=Fe(),t=Fe();for(let t=0;t<L;t+=1){let n=r[t];e[n.source]+=n.weight}for(let e=0;e<R;e+=1){let n=r[e];t[n.received]+=n.weight}E.value=e,D.value=t}else{let e=E.value,t=D.value,i=!1,a=!1;for(;L<r.length&&r[L].startAt<=n;){i||=(e={...e},!0);let t=r[L];e[t.source]+=t.weight,L+=1}for(;R<r.length&&r[R].finishAt<=n;){a||=(t={...t},!0);let e=r[R];t[e.received]+=e.weight,R+=1}i&&(E.value=e),a&&(D.value=t)}let i=r.slice(R,L),a=``,o=null,s=null;for(let e of i)n>=e.centerAt&&n<e.centerAt+e.flashDuration&&(o=e.drawValue,s={drawValue:e.drawValue,segments:e.segments},e.intercepted&&(a=e.received));w.value=i,A.value=a,oe.value=o,se.value=s,de.value=n,requestAnimationFrame(q)}function $e(e,t){if(!e.remainingTotal)return null;let n=e.random()*e.remainingTotal,r=e.entries.at(-1);for(let t of e.entries){if(n<t.remaining){r=t;break}n-=t.remaining}--r.remaining,--e.remainingTotal;let i=Ge(r.id,e.random);return{id:++F,source:r.id,...i,started:!1,centered:!1,startAt:e.nextAt,centerAt:e.nextAt+340/ls*t,finishAt:e.nextAt+t}}function et(){if(!M.value||!z)return;let e=performance.now(),t=z,n=[...w.value],r=ls/fe.value,i=e+r;for(;t.remainingTotal&&t.nextAt<=i;){let e=$e(t,r);n.push(e),t.nextAt+=cs/fe.value}let a=E.value,o=D.value,s=!1,c=!1,l=[];for(let r of n)!r.started&&e>=r.startAt&&(r.started=!0,s||=(a={...a},!0),a[r.source]+=1),!r.centered&&e>=r.centerAt&&(r.centered=!0,oe.value=r.drawValue,se.value={drawValue:r.drawValue,segments:r.segments},r.intercepted&&(A.value=r.received)),e>=r.finishAt?(c||=(o={...o},!0),o[r.received]+=1,t.finished+=1):l.push(r);s&&(E.value=a),c&&(D.value=o),w.value=l,P.value=t.finished/t.total*100,de.value=e,oe.value=l.some(t=>t.centered&&e<t.centerAt+260)?oe.value:null,A.value=l.some(t=>t.centered&&t.intercepted&&e<t.centerAt+260)?A.value:``,q(),!t.remainingTotal&&!l.length?(M.value=!1,j.value=!1,z=null,B=0,N.value=`Plano concluído.`):B=requestAnimationFrame(et)}function tt(){j.value&&(M.value=!1,_e.postMessage({type:`stop`}),cancelAnimationFrame(0),cancelAnimationFrame(B),B=0,ge=performance.now(),N.value=`Execução pausada.`)}function nt(){if(j.value){if(z&&ge){let e=performance.now()-ge;z.nextAt+=e,w.value=w.value.map(t=>({...t,startAt:t.startAt+e,centerAt:t.centerAt+e,finishAt:t.finishAt+e})),ge=0}M.value=!0,N.value=`Processando plano...`,z?B=requestAnimationFrame(et):_e.postMessage({type:`start`,duration:ue.value,progress:P.value,speed:fe.value})}}function rt(e){M.value&&(P.value=Math.min(100,e),Qe(),P.value>=100&&(M.value=!1,j.value=!1,_e.postMessage({type:`stop`}),N.value=`Plano concluído.`))}function it(e){let t=pe.indexOf(fe.value),n=Math.max(0,Math.min(pe.length-1,t+e));n!==t&&(fe.value=pe[n],M.value&&(z&&tt(),nt()))}async function at(){if(!Oe.value)return;if(j.value){M.value?tt():nt();return}if(ce.value)return;if(!Te.value){N.value=Ce.value.size?`Os nomes dos candidatos devem ser únicos.`:`Os números dos candidatos devem ser únicos.`;return}if(Oe.value>os){N.value=`O plano aceita no máximo ${os.toLocaleString(`pt-BR`)} votos por execução.`;return}ce.value=!0,N.value=`Calculando...`,await o(),await new Promise(e=>requestAnimationFrame(e)),Ye(),ce.value=!0;let e=Ze(0),t=V.value.map(e=>{let t=Math.min(ss,Math.max(0,Math.floor(Number(O.value[e.id])||0)));return{id:e.id,total:t,remaining:t}}).filter(e=>e.total),n=t.reduce((e,t)=>e+t.total,0);z={entries:t,total:n,remainingTotal:n,finished:0,nextAt:performance.now(),random:e},le.value=[],ue.value=0,P.value=0,ce.value=!1,j.value=!0,nt()}return i([T,k,E,D,O],Ue,{deep:!0}),i(p,e=>{localStorage.setItem(`algoritmo:simulador:locale`,e),document.title=b(`title`),requestAnimationFrame(q)}),ne(()=>{let e=localStorage.getItem(`algoritmo:simulador:locale`);p.value=Object.hasOwn(v,e)?e:`pt`,We(),window.addEventListener(`resize`,q),window.addEventListener(`click`,ze,!0),requestAnimationFrame(q)}),S(()=>{_e.terminate(),cancelAnimationFrame(I),clearTimeout(0),window.removeEventListener(`resize`,q),window.removeEventListener(`click`,ze,!0)}),(n,i)=>(c(),d(`section`,ko,[x(`header`,null,[x(`div`,null,[x(`h2`,null,h(b(`title`)),1)]),x(`div`,Ao,[x(`label`,jo,[x(`span`,null,h(b(`language`)),1),e(x(`select`,{"onUpdate:modelValue":i[0]||=e=>p.value=e,"aria-label":b(`language`)},[...i[4]||=[x(`option`,{value:`en`},`English`,-1),x(`option`,{value:`es`},`Español`,-1),x(`option`,{value:`fr`},`Français`,-1),x(`option`,{value:`pt`},`Português`,-1)]],8,Mo),[[m,p.value]])]),_(Oo,{"pix-key":`0533d2eb-72b6-4f53-8f38-a1661290d2d4`,locale:p.value},null,8,[`locale`])])]),x(`div`,No,[x(`strong`,null,h(b(`hypothetical`)),1),y(` `+h(b(`disclaimer`)),1)]),x(`p`,Po,h(b(`explanation`)),1),x(`div`,Fo,[x(`strong`,null,h(b(`candidates`)),1),(c(!0),d(l,null,te(T.value,n=>(c(),d(`div`,{key:n.id,class:`candidate-row`},[x(`button`,{type:`button`,class:`color-button`,style:r({backgroundColor:n.color}),"aria-label":`Escolher cor de ${n.label}`,disabled:G.value,onClick:e=>xe.value=xe.value===n.id?null:n.id},null,12,Io),xe.value===n.id?(c(),d(`div`,Lo,[(c(!0),d(l,null,te(be.value,e=>(c(),d(`button`,{key:e,class:`color-swatch`,style:r({backgroundColor:e}),disabled:G.value||!Se(n.id,e),onClick:t=>{n.color=e,xe.value=null,q()},title:e},null,12,Ro))),128))])):u(``,!0),e(x(`input`,{"onUpdate:modelValue":e=>n.label=e,maxlength:`64`,class:t([`candidate-name`,{"candidate-input-error":Ce.value.has(n.id)}]),"aria-label":b(`name`),"aria-invalid":Ce.value.has(n.id),disabled:G.value,onInput:q},null,42,zo),[[s,n.label]]),x(`input`,{value:n.code,class:`candidate-code`,type:`text`,inputmode:`numeric`,pattern:`[0-9]*`,maxlength:`5`,placeholder:`Nº`,"aria-label":`Número de ${n.label}`,disabled:G.value,onInput:e=>qe(n,e)},null,40,Bo),T.value.length>2?(c(),d(`button`,{key:1,disabled:G.value,onClick:e=>Je(n.id)},h(b(`remove`)),9,Vo)):u(``,!0)]))),128)),x(`form`,{onSubmit:ee(Ke,[`prevent`])},[e(x(`input`,{"onUpdate:modelValue":i[1]||=e=>ae.value=e,maxlength:`64`,placeholder:b(`newCandidate`),"aria-label":b(`newCandidate`),disabled:G.value},null,8,Ho),[[s,ae.value]]),x(`button`,{disabled:G.value},h(b(`add`)),9,Uo)],32)]),x(`section`,Wo,[j.value?(c(),d(`div`,Go,[x(`span`,null,h(b(`progress`))+`: `+h(P.value.toLocaleString(p.value===`pt`?`pt-BR`:`en-US`,{minimumFractionDigits:2,maximumFractionDigits:2}))+`%`,1),x(`small`,null,h(b(`eachBall`)),1)])):u(``,!0),x(`header`,null,[x(`div`,null,[x(`strong`,null,h(b(`plan`)),1),x(`small`,null,h(b(`planNote`)),1)]),x(`div`,Ko,[x(`span`,qo,[x(`button`,{type:`button`,disabled:fe.value===pe[0],"aria-label":b(`slow`),onClick:i[2]||=e=>it(-1)},`-`,8,Jo),x(`strong`,null,h(b(`speed`))+`: `+h(fe.value)+`x`,1),x(`button`,{type:`button`,disabled:fe.value===pe.at(-1),"aria-label":b(`fast`),onClick:i[3]||=e=>it(1)},`+`,8,Yo)]),j.value?(c(),d(`button`,{key:0,class:`plan-stop`,onClick:Xe},h(b(`stop`)),1)):u(``,!0),x(`button`,{class:`plan-play`,disabled:ce.value||!j.value&&(!Oe.value||!Te.value),onClick:at},h(ke.value),9,Xo)])]),(c(!0),d(l,null,te(V.value,t=>(c(),d(`label`,{key:t.id,class:`plan-row`},[x(`span`,null,[x(`i`,{style:r({backgroundColor:t.color})},null,4),y(h(H(t)),1)]),e(x(`input`,{"onUpdate:modelValue":e=>O.value[t.id]=e,type:`number`,min:`0`,max:ss,step:`1`,inputmode:`numeric`,disabled:G.value,onInput:e=>O.value[t.id]=Math.min(ss,Math.max(0,Math.floor(Number(O.value[t.id])||0)))},null,40,Zo),[[s,O.value[t.id],void 0,{number:!0}]]),x(`small`,null,h(b(`inputVotes`)),1)]))),128)),N.value?(c(),d(`small`,Qo,h(N.value),1)):u(``,!0)]),x(`div`,{class:`simulator`,style:r({height:`${je.value}px`})},[x(`canvas`,{ref_key:`simulatorCanvas`,ref:re,"aria-label":`Animação do redirecionamento de votos`},null,512)],4),x(`div`,$o,[x(`section`,es,[x(`header`,null,[x(`div`,null,[x(`strong`,null,h(b(`received`)),1),x(`small`,null,h(b(`total`))+`: `+h(Ee.value.toLocaleString(p.value===`pt`?`pt-BR`:`en-US`))+` · `+h(b(`valid`))+`: `+h(De.value.toLocaleString(p.value===`pt`?`pt-BR`:`en-US`)),1)])]),(c(!0),d(l,null,te(V.value,e=>(c(),d(`div`,{key:e.id,class:`percentage-row`},[x(`div`,null,[x(`span`,null,[x(`i`,{style:r({backgroundColor:e.color})},null,4),y(h(H(e)),1)]),x(`strong`,null,h((D.value[e.id]||0).toLocaleString(`pt-BR`))+` votos`,1)]),x(`div`,ts,[x(`span`,null,h(b(`overall`))+`: `+h(Ee.value?((D.value[e.id]||0)/Ee.value*100).toLocaleString(`pt-BR`,{minimumFractionDigits:1,maximumFractionDigits:1}):`0,0`)+`%`,1),T.value.some(t=>t.id===e.id)?(c(),d(`span`,ns,h(b(`valid`))+`: `+h(De.value?((D.value[e.id]||0)/De.value*100).toLocaleString(`pt-BR`,{minimumFractionDigits:1,maximumFractionDigits:1}):`0,0`)+`%`,1)):(c(),d(`span`,rs,h(b(`invalid`)),1))]),x(`b`,null,[x(`i`,{style:r({width:`${Ee.value?(D.value[e.id]||0)/Ee.value*100:0}%`,backgroundColor:e.color})},null,4)])]))),128))]),x(`section`,is,[x(`header`,null,[x(`div`,null,[x(`strong`,null,h(b(`probability`)),1)])]),(c(!0),d(l,null,te(T.value,t=>(c(),d(`label`,{key:t.id,class:`attraction-row`},[x(`span`,null,[x(`i`,{style:r({backgroundColor:t.color})},null,4),y(h(t.label),1)]),e(x(`input`,{"onUpdate:modelValue":e=>k.value[t.id]=e,type:`range`,min:`0`,max:`100`,step:`0.01`,disabled:G.value,onInput:q},null,40,as),[[s,k.value[t.id],void 0,{number:!0}]]),x(`strong`,null,h((k.value[t.id]||0).toLocaleString(`pt-BR`,{minimumFractionDigits:2,maximumFractionDigits:2}))+`%`,1)]))),128))])])]))}},[[`__scopeId`,`data-v-c792071b`]]),ps={class:`simulador-embed`};v(b({__name:`SimulatorApp`,setup(e){return(e,t)=>(c(),d(`main`,ps,[_(fs)]))}},[[`__scopeId`,`data-v-7bb48c14`]])).mount(`#app`);