const e=navigator.userAgent,t=/(iPad).*OS\s([\d_]+)/.test(e),r=/(iPod)(.*OS\s([\d_]+))?/.test(e),a=!t&&/(iPhone\sOS)\s([\d_]+)/.test(e),s=t||r||a,o=/(Android);?[\s\/]+([\d.]+)?/.test(e),n=/micromessenger/i.test(e),i=/QQ\/([\d\.]+)/.test(e),c=/Qzone\//.test(e),l=/MQQBrowser/i.test(e)&&!n&&!i,h=/UCBrowser/i.test(e),u=/mobile.*baidubrowser/i.test(e),d=/SogouMobileBrowser/i.test(e);/baiduboxapp/i.test(e);const p=/360 Aphone Browser|QHBrowser/i.test(e);function m(){}function f(e,t=m){const r=document.getElementsByTagName("script")[0],a=document.createElement("script");a.src=e,a.async=!0,r.parentNode.insertBefore(a,r),a.onload=t}function g(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(e),a=1;a<arguments.length;a++){var s=arguments[a];if(null!=s)for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(r[o]=s[o])}return r}function S(e){if(s)location.href=e;else{var t=document.createElement("iframe");t.style.display="none",t.src=e,document.body.appendChild(t),setTimeout((function(){t&&t.parentNode&&t.parentNode.removeChild(t)}),2e3)}}function w(e,t=!1){const r=[];for(let a in e)t?r.push(`${a}=${encodeURIComponent(e[a])}`):r.push(`${a}=${e[a]}`);return r.join("&")}const _={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,r,a,s,o,n,i,c="",l=0;for(e=_._utf8_encode(e);l<e.length;)s=(t=e.charCodeAt(l++))>>2,o=(3&t)<<4|(r=e.charCodeAt(l++))>>4,n=(15&r)<<2|(a=e.charCodeAt(l++))>>6,i=63&a,isNaN(r)?n=i=64:isNaN(a)&&(i=64),c=c+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(n)+this._keyStr.charAt(i);return c},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var a=e.charCodeAt(r);a<128?t+=String.fromCharCode(a):a>127&&a<2048?(t+=String.fromCharCode(a>>6|192),t+=String.fromCharCode(63&a|128)):(t+=String.fromCharCode(a>>12|224),t+=String.fromCharCode(a>>6&63|128),t+=String.fromCharCode(63&a|128))}return t}};const b=document.querySelector("meta[name=description]"),q=document.querySelector("link[rel*=icon]");var y={link:location.href,title:document.title,desc:Object(b).content||"",icon:Object(q).href||`${location.protocol}//${location.hostname}/favicon.ico`,from:"",success:m,fail:m,trigger:m};function D(e){return w({share_id:924053302,url:_.encode(e.link),title:_.encode(e.title),description:_.encode(e.desc),previewimageUrl:_.encode(e.icon),image_url:_.encode(e.icon)})}function k(){S(`${s?"mqqapi://share/to_fri?src_type=web&version=1&file_type=news":"mqqapi://share/to_fri?src_type=isqqBrowser&version=1&file_type=news"}&${D(y)}`)}function C(){S(`${s?"mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A":"mqqapi://share/to_qzone?src_type=isqqBrowser&version=1&file_type=news&req_type=1"}&${D(y)}`)}function x(){const e={url:y.link,title:y.title,pic:y.icon,desc:y.desc};location.href=`http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?${w(e,!0)}`}function v(){const e={url:y.link,title:y.title,pic:y.icon};location.href=`http://service.weibo.com/share/share.php?${w(e,!0)}`}class M{_shareData=y;_config={syncDescToTag:!1,syncIconToTag:!1,syncTitleToTag:!1};constructor(e){this.setConfig(e)}getShareData(){return g({},this._shareData)}setShareData(e={}){var t,r;g(this._shareData,e),this._config.syncDescToTag&&(t=this._shareData.desc,b?b.content=t:document.head.insertAdjacentHTML("beforeend",`<meta name="description" content="${t}">`)),this._config.syncIconToTag&&(r=this._shareData.icon,q?q.href=r:document.head.insertAdjacentHTML("beforeend",`<link rel="shortcut icon" href="${r}">`)),this._config.syncTitleToTag&&function(e){document.title=e}(this._shareData.title)}setConfig(e={}){g(this._config,e)}getConfig(){return g({},this._config)}}class T extends M{static commamdMap={wechattimeline:8,wechatfriend:1,qqfriend:4,qzone:3,weibo:11,copyurl:10,more:5,generateqrcode:7,default:void 0};constructor(e){super(e),f("https://jsapi.qq.com/get?api=app.share")}call(e="default",t){this.setShareData(t);const r=this.getShareData(),a=this.constructor.commamdMap[String(e).toLowerCase()];browser.app.share({title:r.title,description:r.desc,url:r.link,img_url:r.icon,from:r.from,to_app:a})}}class A extends M{static commamdMap={wechattimeline:"kWeixinFriend",wechatfriend:"kWeixin",qqfriend:"kQQ",qzone:"kQZone",weibo:"kSinaWeibo",default:void 0};constructor(e){super(e)}call(e="default",t){this.setShareData(t);const r=this.getShareData(),a=this.constructor.commamdMap[String(e).toLowerCase()];ucbrowser.web_shareEX?ucbrowser.web_shareEX(JSON.stringify({title:r.title,content:r.desc,sourceUrl:r.link,imageUrl:r.icon,source:r.from,target:a})):ucbrowser.web_share(title,desc,link,a,"",from,"")}}class Q extends M{static commamdMap={wechattimeline:"WechatTimeline",wechatfriend:"WechatFriends",qqfriend:"QQ",qzone:"Qzone",weibo:"SinaWeibo",default:""};constructor(e){super(e)}call(e="default",t){this.setShareData(t);const r=this.getShareData(),a=this.constructor.commamdMap[String(e).toLowerCase()];ucweb.startRequest("shell.page_share",[r.title,r.desc,r.link,a,"",r.from,r.icon])}}class j extends M{constructor(e){super(e)}call(e,t){this.setShareData(t);const r=this.getShareData();_flyflowNative.exec("bd_utils","shareWebPage",JSON.stringify({title:r.title,content:r.desc,landurl:r.link,imageurl:r.icon,shareSource:r.from}),"")}}class B extends M{constructor(e){super(e)}call(e,t){this.setShareData(t);const r=this.getShareData();location.href="baidubrowserapp://bd_utils?action=shareWebPage&params="+encodeURIComponent(JSON.stringify({title:r.title,content:r.desc,imageurl:r.icon,landurl:r.link,mediaType:0,share_type:"webpage"}))}}class N extends M{constructor(e){super(e)}call(e,t){this.setShareData(t);const r=this.getShareData();SogouMse.Utility.shareWithInfo({shareTitle:r.title,shareContent:r.desc,shareImageUrl:r.icon,shareUrl:r.link})}}class $ extends M{constructor(e){super(e)}call(e,t){throw alert("SogouAndroidBrowser"),new Error("the browser may not support share!")}}class O extends M{constructor(e){super(e)}call(e,t){const r=this.getShareData(),{title:a="",icon:s="",link:o=""}=r;let n={type:8,url:o,title:a,caller:"h5_share_peas",imgPath:s};alert("AndroidBrowser360"),console.log("shareParams$WXFriend="+btoa(encodeURIComponent(JSON.stringify(n)))+"&onShareCallback")}}class W extends M{constructor(e){super(e),this.setConfig(e)}call(e,t){this.setShareData(t)}setConfig(e){super.setConfig(e),this.init(this.getConfig().wechatConfig)}init(e){e&&f("https://res.wx.qq.com/open/js/jweixin-1.4.0.js",(()=>{wx.config(g({debug:!1,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","updateAppMessageShareData","updateTimelineShareData"]},e));const t=this._shareData,r={};Object.defineProperty(r,"trigger",{get:()=>(...e)=>{g(r,{title:t.title,desc:t.desc,link:t.link,imgUrl:t.icon,success:t.success,fail:t.fail,cancel:t.fail}),t.trigger(...e)},set(e){t.trigger=e},enumerable:!0}),wx.ready((()=>{wx.onMenuShareAppMessage(r),wx.onMenuShareQQ(r),wx.onMenuShareQZone(r),wx.onMenuShareWeibo(r),wx.onMenuShareTimeline(r),wx.updateAppMessageShareData(r),wx.updateTimelineShareData(r)}))}))}}class z extends M{constructor(e){super(e)}call(e="default",t){if(this.setShareData(t),!navigator.share){if("weibo"!==(e=String(e).toLowerCase()))throw"qqfriend"===e?k():"qzone"===e&&C(),alert("other Error"),new Error(`the browser may not support command ${e}!`);return alert("weibo"),void v()}const r=this.getShareData(),a={url:r.link,title:r.title,text:r.desc};alert("then-catch"),navigator.share(a).then(r.success).catch(r.fail)}}class U extends M{constructor(e){super(e),this.init()}call(e="default",t){this.setShareData(t),mqq.ui.showShareMenu()}init(){f("https://open.mobile.qq.com/sdk/qqapi.js",(()=>{const e=this._shareData;mqq.ui.setOnShareHandler((t=>{mqq.ui.shareMessage({back:!0,share_type:t,title:e.title,desc:e.desc,share_url:e.link,image_url:e.icon,sourceName:e.from},(t=>{0===t.retCode?e.success(t):e.fail(t)}))}))}))}}class E extends M{constructor(e){super(e),this.init()}setShareData(e){super.setShareData(e);const t=this.getShareData();(function(e){const t=document.createElement("a");return t.href=e,t.hostname})(t.link)!==location.hostname&&(t.link=location.href,console.warn("安卓的QQ自带浏览器分享url必须跟页面url同一个域名，已自动为你设置为当前页面的url"));try{mqq.data.setShareInfo({share_url:t.link,title:t.title,desc:t.desc,image_url:t.icon},(e=>{!0!==e&&console.warn(e)}))}catch(e){}}call(e="default",t){this.setShareData(t),mqq.ui.showShareMenu()}init(){f("https://open.mobile.qq.com/sdk/qqapi.js",(()=>{this.setShareData()}))}}class P extends M{constructor(e){super(e),this.init()}call(e="default",t){this.setShareData(t);const r=this.getShareData(),a=[],s=[],o=[],n=[];for(let e=0;e<5;e++)a.push(r.icon),n.push(r.link),s.push(r.title),o.push(r.desc);QZAppExternal.setShare((({code:e})=>{0!=e&&(this.hasSomethingWrong=!0)}),{type:"share",image:a,title:s,summary:o,shareURL:n})}setShareData(e){try{this.call("default",e)}catch(e){}}init(){f("https://qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js",(()=>{this.call("default")}))}}let I;const L=navigator.userAgent;p?(alert("360"+p+"and"+/360 Aphone Browser/i.test(L)+"ios"+/QHBrowser/i.test(L)),I=O):d&&o?(alert("isSogouMBrowser"),I=$):n?I=W:i&&s?I=U:i&&o?I=E:c?I=P:l?I=T:h&&s?I=A:h&&o?I=Q:u&&o?I=j:u&&s?I=B:d&&s?I=N:(alert("other"),I=z),window.NativeShare=I;var H=I;export{O as AndroidBrowser360,j as BaiduAndroidBrowser,B as BaiduIosBrowser,z as Others,E as QQAndroid,U as QQIos,T as QQMobileBrowser,P as QZone,M as Share,$ as SogouAndroidBrowser,N as SogouIosBrowser,Q as UCAndroidBrowser,A as UCIosBrowser,W as Wechat,H as default,k as shareToQQ,C as shareToQZone,x as shareToQZone4Web,v as shareToWeibo4Web};
