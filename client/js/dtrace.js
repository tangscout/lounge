var a=window;a.dT_?a.console&&a.console.log("Duplicate agent injection detected, turning off redundant initConfig."):navigator.cookieEnabled&&(window.dT_||(window.dT_={cfg:"app=5785AF5A0EE6DF5C|cors=1|srms=1;1;;;|bp2=1|featureHash=A2SVfqr|dpvc=1|lastModification=1539979256734|dtVersion=10153180914150608|reportUrl=https://bf34451bua.bf.dynatrace.com/bf|tp=500,50,0,1|rdnt=1|featureHash=A2SVfqr|agentUri=https://js-cdn.dynatrace.com/jstag/1658b155923/ruxitagent_A2SVfqr_10153180914150608.js|auto=|domain=|rid=RID_|rpid=|app=5785AF5A0EE6DF5C"}));
(function(){function xb(){try{yb.apply(e.parent,arguments)}catch(a){}}function zb(){try{Ab.apply(e.top,arguments)}catch(a){}}function Bb(a){var b=Array.prototype.slice.call(arguments,1);try{Cb.apply(a,b)}catch(c){}}function Db(a){var b=Array.prototype.slice.call(arguments,1);try{Eb.apply(a,b)}catch(c){}}function q(){var a=0;try{a=e.performance.timing.navigationStart+Math.floor(e.performance.now())}catch(b){}return 0>=a||isNaN(a)||!isFinite(a)?(new Date).getTime():a}function va(a,b){for(var c=2;c<
arguments.length;c++);return"apply"in da?da.apply(e,arguments):da(a,b)}function l(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];a.push.apply(a,b)}function Sa(a){l(wa,a)}function Fb(){return wa}function Gb(a,b){return Ta(a,b)}function Hb(a,b){a=new Ib([a],{type:b});return Jb(a)}function Kb(a,b){return T?new T(a,b):void 0}function Lb(a){"function"===typeof a&&l(ea,a)}function Mb(){return ea}function Nb(){return xa}function Ob(){return H}function U(){var a="currentCookie: "+v(w),b=(0===
h?-1*V(2,21)+"$":"")+ya(32);e.JSAgentTestFrameworkAPI&&e.JSAgentTestFrameworkAPI.notifyAssertOK("Created dtCookie: "+(a+(", newCookie: "+b)));return b}function Pb(){return p}function Qb(){fa(function(){ga()||za(U());p=ha()||""})}function Ua(a,b){b=ia(b);for(var c=!1,d=0;d<b.length;d++)b[d].frameId===H&&(b[d].g=a,c=!0);c||l(b,{frameId:H,g:a});Aa(b)}function Aa(a,b){var c="";if(a){for(var c=[],d=0;d<a.length;d++)"-"!==a[d].g&&(0<d&&0<c.length&&l(c,"p"),0===h&&(l(c,p),l(c,"$")),l(c,a[d].frameId),l(c,
	"h"),l(c,a[d].g));0===h&&(c.length||(I&&(ja(0,!0),Ba(!1)),p=ha()||"",l(c,p),l(c,"$"),l(c,H),l(c,"h-")),l(c,"v"),l(c,b||Ca()));c=c.join("")}c||(c="-",0===h&&(I&&(ja(0,!0),Ba(!1)),p=ha()||"",c=p+"$"+H+"h-v"+(b||Ca())));a=c;try{"undefined"!==typeof e.DynatraceJsBridge&&"undefined"!==typeof e.DynatraceJsBridge.setDtPc&&e.DynatraceJsBridge.setDtPc(a)}catch(oc){}J(K,a,void 0,g("ssc"))}function ia(a){var b=v(K),c=[];if(b&&"-"!==b)for(var b=b.split("p"),d=0;d<b.length;d++){var e=b[d].split("h");if(2===e.length&&
	e[0]&&e[1]){var f=e[0];if(0===h&&(f&&0<=m(f,"$")&&(f=f.split("$")[1]),0<=m(e[1],"v"))){var g=e[1].split("v");if(2===g.length){var n=g[1];e[1]=g[0]}}if(!(g=a)){var g=L(f.split("_")[0]),k=q()%Da;k<g&&(k+=Da);g=g+9E5>k}g&&l(c,{frameId:f,g:e[1]})}}if(0===h)for(a=0;a<c.length;a++)c[a].visitId=n;return c}function Ca(){return Ea()||ja(0,!0)}function Ea(){var a=ia(!0);if(!(M()<=q())){ka(!1);if(a&&1<=a.length)return a[0].visitId;(a=Fa(B))||(a=la(B));return a||""}return""}function ka(a){var b=q(),c=ma().j;
	a&&(c=b);na(b+Va+"|"+c);Wa()}function Xa(a){a||(a=V(1,1E6));var b=ga()||"";b||(b=U(),za(b),b=ga(b)||"");a=""+a;for(var c=a.length,d=[],e=0;e<b.length;e++)d[e]=String.fromCharCode(65+Math.abs((b.charCodeAt(e)^a.charCodeAt(e%c))%26));b=d.join("");for(a=0;a<N.length;a++)N[a](b);return b}function Ga(a){var b=ia(!1);Aa(b,a);O(B,a);ka(!0)}function ja(a,b){b&&(W=!0);a=Xa(q());Ga(a);return a}function Rb(a){N.push(a)}function Wa(){P&&clearTimeout(P);P=va(Ya,M()-q())}function Ya(){if(M()<=q()&&X()){var a=Xa(q());
	Ga(a);return!0}fa(Wa);return!1}function na(a){J(r,a,void 0,g("ssc"));O(r,a)}function O(a,b){if(g("dpvc")||g("pVO"))oa(a,b),Za(a);else{try{e.localStorage&&e.localStorage.setItem(a,b)}catch(c){}Ha(a)}}function $a(a){var b=v(a);b||(b=Fa(a)||"")||(b=la(a)||"");return b}function ab(){var a=Ea()||"";O(B,a);a=$a(r);na(a)}function ma(){var a={m:0,j:0},b=$a(r);if(b)try{var c=b.split("|");2===c.length&&(a.m=parseInt(c[0],10),a.j=parseInt(c[1],10))}catch(d){}return a}function M(){var a=ma();return Math.min(a.m,
	a.j+bb)}function Sb(a){Va=a}function Ba(a){void 0===a&&(a=!0);I=a}function Tb(){var a=W;W=!1;return a}function Ub(){Ya()||ka(!1)}function Ia(){var a=v(k);if(!a||a.length&&a.length!==Q)a=la(k),a&&a.length===Q||(cb=!0,a=q()+"",a+=ya(Q-a.length));var b=a;if(!g("dpvc")&&!g("pVO")){var c=new Date;c.setFullYear(c.getFullYear()+2)}J(k,b,c,g("ssc"));oa(k,b);return a}function Vb(){return cb}function Wb(a){var b=v(k);t(k);Ha(k);J(k,b);f.pVO=!0;if(a)try{e.localStorage&&e.localStorage.setItem(Ja,"1")}catch(c){}ab()}
	function Xb(){Za(Ja);g("pVO")&&(f.pVO=!1,Ia());ab()}function X(){return!g("coo")||g("cooO")||db}function fa(a){X()?a():(x||(x=[]),l(x,a))}function pa(a,b){if(X()&&(!y().v||db))return a.apply(this,b||[])}function Yb(a){return pa(a)}function Zb(){for(var a=0;a<x.length;a++)va(x[a],0);x=[];f.cooO=!0}function $b(){f.cooO=!1;t(w);t(K);t(qa);t("dtSa");t(eb);0===h&&(t(k),t(r));try{0===h&&D.removeItem(k),D.removeItem(w),Ka.removeItem(La())}catch(a){}}function L(a,b){return parseInt(a,b||10)}function la(a){try{if(D)return D.getItem(a)}catch(b){}return null}
	function oa(a,b){try{D.setItem(a,b)}catch(c){}}function Ha(a){try{D.removeItem(a)}catch(b){}}function m(a,b){var c=-1;b&&a&&a.indexOf&&(c=a.indexOf(b));return c}function t(a){document.cookie=a+'="";path=/'+(n("domain")?";domain="+n("domain"):"")+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}function fb(a,b,c){var d=1,e=0;do document.cookie=a+'=""'+(b?";domain="+b:"")+";path="+c.substr(0,d)+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;",d=c.indexOf("/",d),e++;while(-1!==d&&5>e)}function gb(a){a=encodeURIComponent(a);
		var b=[];if(a)for(var c=0;c<a.length;c++){var d=a.charAt(c);l(b,ac[d]||d)}return b.join("")}function J(a,b,c,d){pa(bc,[a,b,c,d])}function bc(a,b,c,d){b||0===b?(b=(""+b).replace(/[;\n\r]/g,"_"),b="DTSA"===a.toUpperCase()?gb(b):b,a=a+"="+b+";path=/"+(n("domain")?";domain="+n("domain"):""),c&&(a+=";expires="+c.toUTCString()),d&&(a+=";Secure"),document.cookie=a):t(a)}function v(a){for(var b=document.cookie.split(";"),c=0;c<b.length;c++){var d=m(b[c],"="),e=b[c].substring(0,d),d=b[c].substring(d+1),e=
		e.replace(/^\s+|\s+$/g,"");if(e===a)return"DTSA"===a.toUpperCase()?decodeURIComponent(d):d}return""}function hb(a){var b=/^[0-9A-Za-z_=:\$\+\/\.\-\*%\|]*$/.test(a);return 0===h&&(0>=m(a,"$")&&-1===m(a,"=srv=")||a&&2<a.split("$").length)?!1:b}function ib(){var a=v(w);return a&&hb(a)?a:""}function za(a){J(w,a,void 0,g("ssc"))}function Y(a){return 32===a.length||12>=a.length?a:""}function jb(a){return!isNaN(a)&&3>=a.length?a:""}function kb(a){var b={sessionId:"",b:""},c=m(a,"|"),d=a;-1!==c&&(d=a.substring(0,
		c));c=m(d,"$");-1!==c?(b.sessionId=Y(d.substring(c+1)),b.b=jb(d.substring(0,c))):b.sessionId=Y(d);return b}function lb(a){var b={sessionId:"",b:""};a=a.split("=");if(2<a.length&&!(a.length%2)){var c=Number(a[1]);if(isNaN(c)||3>c)return b;for(var c={},d=2;d<a.length;d++)c[a[d]]=a[d+1],d++;b.sessionId=Y(c.sn);c.srv&&(b.b=jb(c.srv));"1"===c.ol&&(oa("dtDisabled","true"),y().disabled=!0,y().v=!0)}return b}function mb(a){return(a=a||ib())?m(a,"=")?kb(a):lb(a):{sessionId:"",b:""}}function ha(a){try{if("undefined"!==
		typeof e.DynatraceJsBridge&&"undefined"!==typeof e.DynatraceJsBridge.getServerId())return e.DynatraceJsBridge.getServerId()||""}catch(b){}return mb(a).b}function ga(a){return mb(a).sessionId}function V(a,b){return isNaN(a)||isNaN(b)?0:Math.floor(Math.random()*(b-a+1))+a}function ya(a){if(!a)return"";var b=e.crypto||e.msCrypto;if(b){var c=new Int8Array(a);b.getRandomValues(c)}else for(c=[],b=0;b<a;b++)c.push(V(0,nb));a=[];for(b=0;b<c.length;b++){var d=Math.abs(c[b]%nb);a.push(String.fromCharCode(d+
		(9>=d?48:55)))}return a.join("")}function ob(a){return document.getElementsByTagName(a)}function pb(a){var b=a.length;if("number"===typeof b)a=b;else{for(var b=0,c=2048;a[c-1];)b=c,c+=c;for(var d=7;1<c-b;)d=(c+b)/2,a[d-1]?b=d:c=d;a=a[d]?c:b}return a}function Fa(a){try{if(e.localStorage)return e.localStorage.getItem(a)}catch(b){}return null}function Za(a){try{e.localStorage&&e.localStorage.removeItem(a)}catch(b){}}function qb(a){var b={};a=a.split("|");for(var c=0;c<a.length;c++){var d=a[c].split("=");
		2===d.length&&(b[d[0]]=decodeURIComponent(d[1].replace(/\+/g," ")))}return b}function La(){var a=n("csu");return(a.indexOf("dbg")===a.length-3?a.substr(0,a.length-3):a)+"_"+n("app")+"_Store"}function Z(a,b,c){b=b||{};a=a.split("|");for(var d=0;d<a.length;d++){var e=a[d],f=m(a[d],"=");-1===f?b[e]="1":(e=a[d].substring(0,f),b[e]=a[d].substring(f+1,a[d].length))}!c&&(c=b,a=c.spc)&&(d=document.createElement("textarea"),d.innerHTML=a,c.spc=d.value);return b}function aa(a){return a in f?f[a]:ra[a]}function g(a){a=
		aa(a);return"false"===a||"0"===a?!1:!!a}function sa(a){var b=L(aa(a));isNaN(b)&&(b=ra[a]);return b}function n(a){return String(aa(a)||"")}function cc(a,b){f[a]=b}function dc(a){return f=a}function rb(a){var b=location.hostname;return b&&a?b===a||-1!==b.indexOf("."+a,b.length-("."+a).length):!0}function ec(){return w}function fc(){return sb}function gc(){return tb}function hc(){return qa}function ic(){return eb}function jc(){return K}function Ma(a){f[a]=0>m(f[a],"#"+a.toUpperCase())?f[a]:""}function ub(a){var b=
		a.agentUri;b&&-1<m(b,"_")&&(b=/([a-zA-Z]*)[0-9]{0,4}_([a-zA-Z_0-9]*)_[0-9]+/g.exec(b)||[],a.csu=b[1],a.featureHash=b[2])}function vb(a,b){rb(f.domain||"")||(f.domainOverride=location.hostname+","+f.domain,delete f.domain);f.pVO&&(a.pVO=f.pVO);b||(a.bp=a.bp||ra.bp,1===h&&a.bp1&&(a.bp=1),a.bp2&&(a.bp=2),4!==a.bp||e.JSON||(a.bp=1))}function kc(){return f}function E(a){var b=document.cookie?document.cookie.split(a).length-1:0;if(1<b){var c=n("domain")||e.location.hostname,d=e.location.hostname,f=e.location.pathname,
		g=0,h=0;C.push(a);do{var l=d.substr(g);if(l!==c||"/"!==f){fb(a,l===c?"":l,f);var m=document.cookie?document.cookie.split(a).length-1:0;m<b&&(C.push(l),b=m)}g=d.indexOf(".",g)+1;h++}while(g&&10>h&&1<b);n("domain")&&1<b&&fb(a,"",f)}}function lc(){E(K);E(w);E(qa);E(r);Sa(function(a,b,c,d){0<C.length&&!b&&(a.a(d,"dCN","duplicateCookieNames",function(){return C.join(",")},function(){return C.slice()}),C=[])})}function Na(a,b,c,d){var e=document.createElement("script");e.setAttribute("src",a);b&&e.setAttribute("defer",
		"true");c&&(e.onload=c);d&&(e.onerror=d);e.setAttribute("crossorigin","anonymous");a=document.getElementsByTagName("script")[0];a.parentElement.insertBefore(e,a)}function Oa(a,b){return R+"/"+(b||F)+"_"+a+"_"+(sa("buildNumber")||y().version)+".js"}function y(){return e.dT_}var z=window;if(!z.dT_||!z.dT_.cfg||"string"!=typeof z.dT_.cfg||z.dT_.initialized)z.console&&z.console.log("Initconfig not found or agent already initialized! This is an injection issue.");else if(!(navigator.userAgent&&0<=navigator.userAgent.indexOf("RuxitSynthetic"))){var e=
		window,da,Ta,Cb=e.postMessage,T=e.Worker,Ib=e.Blob,Jb=e.URL&&e.URL.createObjectURL,Eb=e.Worker&&e.Worker.prototype.postMessage,yb=e.parent.postMessage,Ab=e.top.postMessage,D=e.sessionStorage,wa,ea=[],xa,ra,H,Da=6E8,p,B="rxvisitid",P,Va=18E5,bb=216E5,W=!1,N=[],I=!1,k="rxVisitor",Ja="dt-pVO",Q=45,cb=!1,db=!!navigator.userAgent&&0<=navigator.userAgent.indexOf("RuxitSynthetic"),x=[],nb=32,ac=new (function(){return function(){this["!"]="%21";this["~"]="%7E";this["*"]="%2A";this["("]="%28";this[")"]="%29";
		this["'"]="%27";this.$="%24";this[";"]="%3B";this[","]="%2C"}}()),f={},K="dtPC",w="dtCookie",sb="x-dtpc",tb="x-dtreferer",qa="dtLatC",r="rxvt",eb="dtAdk";try{var Ka=e.localStorage}catch(a){}var C=[],wb,R,F,mc={childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0},nc=["_DT_RENDERING_"],h;(function(a){try{h=a;da=e.setTimeout;Ta=e.setInterval;if(!navigator.cookieEnabled)return!1;e.dT_={version:"10153180914150608",cfg:e.dT_?e.dT_.cfg:"",ica:1,disabled:!1,v:!1,mp:xb,mtp:zb,mi:Bb,mw:Db,gAST:Nb,ww:Kb,
		stu:Hb,nw:q,apush:l,st:va,si:Gb,aBPSL:Sa,gBPSL:Fb,aBPSCC:Lb,gBPSCC:Mb,buildType:0===h?"dynatrace":"appmon",gSSV:la,sSSV:oa,rSSV:Ha,pn:L,iVSC:hb,p3SC:lb,pLSC:kb,io:m,dC:t,sC:J,esc:gb,gSId:ha,gDtc:ga,gSC:ib,sSC:za,gC:v,cRN:V,cRS:ya,gEL:pb,gEBTN:ob,gSCN:ec,gPCHN:fc,gRHN:gc,gPCCN:jc,gLCN:hc,gMSIDCN:ic,cfgO:kc,pCfg:qb,pCSAA:Z,cFHFAU:ub,sCD:vb,bcv:g,ncv:sa,scv:n,stcv:cc,rplC:dc,cLSCK:La,gFId:Ob,gBAU:Oa,iS:Na,eWE:fa,oEIE:Yb,oEIEWA:pa,eA:Zb,dA:$b,gcSId:Pb,iNV:Vb,gVID:Ia,dPV:Wb,ePV:Xb,sVIdUP:Ba,sVTT:Sb,sVID:Ga,
		rVID:Ea,gVI:Ca,gNVId:ja,gARnVF:Tb,cAUV:Ub,uVT:ka,aNVL:Rb,gPC:ia,cPC:Ua,sPC:Aa};xa=q();wa=[];H=xa%Da+"_"+L(V(0,1E3)+"");ra={ade:"",agentLocation:"",agentname:"",agentUri:"",app:"",async:!1,auto:!1,bandwidth:"300",bp1:!1,bp2:!1,bp:0===h?1:2,bs:!1,buildNumber:0,coo:!1,cooO:!1,cors:!1,csu:"",cux:!1,dataDtConfig:"",debugName:"",disableCookieManager:!1,disableLogging:!1,dmo:!1,dpvc:!1,disableXhrFailures:!1,domain:"",domainOverride:"",doNotDetect:"",dsndb:!1,dsss:!1,euf:!1,evl:"",extblacklist:"",exteventsoff:!1,
		fa:!1,featureHash:"",ffi:!1,hvt:216E5,imm:!1,initializedModules:"",ign:"",instr:"",lab:!1,legacy:!1,lmut:!0,lzwd:!1,lzwe:!1,md:"",name:"",mdn:5E3,mepp:10,moa:30,mrt:3,msl:3E4,mhl:4E3,ncw:!1,ntd:!1,oat:180,ote:!1,pui:!1,pVO:!1,rdnt:0,reportUrl:"dynaTraceMonitor",rid:"",ridPath:"",rpid:"",rt:0===h?1E4:0,rtl:0===h?0:100,rtp:0===h?2:1,rtt:1E3,rtu:200,rx_visitID:"",sl:100,sosi:!1,spc:"",srbw:!0,srad:!0,srmr:100,srsr:1E5,srtd:1,srtr:500,ssc:!1,st:3E3,svNB:!1,syntheticConfig:!1,tp:"500,50,3",tvc:3E3,uam:!1,
		useNewCookies:!1,vcfi:!1,WST:!1,xb:"",xmut:!0,xt:0};a:{f={reportUrl:"dynaTraceMonitor",initializedModules:"",csu:"dtagent",dataDtConfig:y().cfg};y().cfg=f;0===h&&(f.csu="ruxitagentjs");var b=f.dataDtConfig;b&&-1===m(b,"#CONFIGSTRING")&&(Z(b,f),Ma("domain"),Ma("auto"),Ma("app"),ub(f));var c=ob("script"),d=pb(c),k=-1===m(f.dataDtConfig||"","#CONFIGSTRING")?f:null;if(0<d)for(a=0;a<d;a++)b:{var b=void 0,p=c[a],r=k;if(p.attributes){var x=f.csu+"_bootstrap.js",C=/.*\/jstag\/.*\/.*\/(.*)_bs.js$/,z=r,G=p.src,
		B=G&&G.indexOf(x),E=p.attributes.getNamedItem("data-dtconfig");if(E){var ta=G,I=E.value,u={};f.legacy=!0;if(ta){var S=/([a-zA-Z]*)[0-9]{0,4}_([a-zA-Z_0-9]*)_([0-9]+)/g.exec(ta);S&&S.length&&(u.csu=S[1],u.featureHash=S[2],0===h&&(u.agentLocation=ta.substr(0,m(ta,S[1])-1),u.buildNumber=S[3]))}I&&Z(I,u,!0);rb(u.domain)||(u.domainOverride=location.hostname+","+u.domain,delete u.domain);b=u;if(!r)z=b;else if(!b.syntheticConfig){k=b;break b}}b||(b=f);if(B&&0<=B){var M=B+x.length+5;b.app=G.length>M?G.substr(M):
		"Default%20Application"}else if(G){var N=C.exec(G);N&&(b.app=N[1])}k=z}else k=r}if(k)for(var O in k)k.hasOwnProperty(O)&&(c=O,f[c]=k[c]);f.rx_visitID&&(y().rx_visitID=f.rx_visitID);var W=La();try{var P=Ka&&Ka.getItem(W);if(P){var ba=qb(P),X=Z(ba.config||"",ba).lastModification||"",Q=f.lastModification||"",Y=L(X.substr(0,13)),aa=L(Q.substr(0,13));if(!Q||Y>=aa)for(var ua in ba)if(ba.hasOwnProperty(ua)){var k=ua,Pa=ba[k]||"";"name"===ua?f.agentname=Pa:"config"===ua?Z(Pa,f):f[k]=Pa}}}catch(Qa){}vb(f);
		try{var T=f.ign;if(T&&(new RegExp(T)).test(e.location.href)){document.dT_=e.dT_=void 0;var ca=!1;break a}}catch(Qa){}f.useNewCookies&&0===h&&(K="rxpc",w="rxsession",qa="rxlatency",sb="x-rxpc",tb="x-rxreferer");ca=!0}if(!ca)return!1;lc();try{wb=y().disabled||!!D.getItem("dtDisabled")}catch(Qa){}R=n("agentLocation");if(!R)if(document.currentScript){var A=document.currentScript.src;if(A){var ea=-1===m(A,"_bs")&&-1===m(A,"_bootstrap")&&-1===m(A,"_complete")?1:2,Ra=A.lastIndexOf("/");for(ca=0;ca<ea&&-1!==
	Ra;ca++)A=A.substr(0,Ra),Ra=A.lastIndexOf("/")}R=A}else R="";F=n("agentname")||n("csu")||(0===h?"ruxitagentjs":"dtagent");"true"===v("dtUseDebugAgent")?0>F.indexOf("dbg")&&(F=n("debugName")||F+"dbg"):F=n("name")||F;if(!g("auto")&&!g("legacy")&&!wb){var U=n("agentUri")||Oa(n("featureHash"));g("async")?Na(U,g("async")):document.write('<script type="text/javascript" src="'+U+'">\x3c/script>')}var ma=e.location.href;0===h&&-1!==m(ma,"_DT_RENDERING_")&&(y().RMOD={conf:mc,ignore:nc,ID:"_DT_RENDERING_"},
	R&&Na(Oa("R"),!0));v(w)&&(f.cooO=!0);Qb();if(0===h){var na=!!Fa(Ja);f.pVO=na;fa(Ia)}0===h&&sa("hvt")&&(bb=sa("hvt"));pa(Ua,[1])}catch(Qa){return!1}return!0})(0)||(delete e.dT_,e.console&&e.console.log("JsAgent initCode initialization failed!"))}})();

