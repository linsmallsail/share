const e=navigator.userAgent,t=/(iPad).*OS\s([\d_]+)/.test(e),r=/(iPod)(.*OS\s([\d_]+))?/.test(e),a=!t&&/(iPhone\sOS)\s([\d_]+)/.test(e),s=t||r||a,i=/(Android);?[\s\/]+([\d.]+)?/.test(e),o=/micromessenger/i.test(e),n=/QQ\/([\d\.]+)/.test(e),c=/Qzone\//.test(e),l=/MQQBrowser/i.test(e)&&!o&&!n,h=/UCBrowser/i.test(e),u=/mobile.*baidubrowser/i.test(e),d=/SogouMobileBrowser/i.test(e);function p(){}function f(e,t=p){const r=document.getElementsByTagName("script")[0],a=document.createElement("script");a.src=e,a.async=!0,r.parentNode.insertBefore(a,r),a.onload=t}function m(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(e),a=1;a<arguments.length;a++){var s=arguments[a];if(null!=s)for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(r[i]=s[i])}return r}function g(e){if(s)location.href=e;else{var t=document.createElement("iframe");t.style.display="none",t.src=e,document.body.appendChild(t),setTimeout((function(){t&&t.parentNode&&t.parentNode.removeChild(t)}),2e3)}}function S(e,t=!1){const r=[];for(let a in e)t?r.push(`${a}=${encodeURIComponent(e[a])}`):r.push(`${a}=${e[a]}`);return r.join("&")}/baiduboxapp/i.test(e);const w={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,r,a,s,i,o,n,c="",l=0;for(e=w._utf8_encode(e);l<e.length;)s=(t=e.charCodeAt(l++))>>2,i=(3&t)<<4|(r=e.charCodeAt(l++))>>4,o=(15&r)<<2|(a=e.charCodeAt(l++))>>6,n=63&a,isNaN(r)?o=n=64:isNaN(a)&&(n=64),c=c+this._keyStr.charAt(s)+this._keyStr.charAt(i)+this._keyStr.charAt(o)+this._keyStr.charAt(n);return c},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var a=e.charCodeAt(r);a<128?t+=String.fromCharCode(a):a>127&&a<2048?(t+=String.fromCharCode(a>>6|192),t+=String.fromCharCode(63&a|128)):(t+=String.fromCharCode(a>>12|224),t+=String.fromCharCode(a>>6&63|128),t+=String.fromCharCode(63&a|128))}return t}};const q=document.querySelector("meta[name=description]"),_=document.querySelector("link[rel*=icon]");var b={link:location.href,title:document.title,desc:Object(q).content||"",icon:Object(_).href||`${location.protocol}//${location.hostname}/favicon.ico`,from:"",success:p,fail:p,trigger:p};function y(e){return S({share_id:924053302,url:w.encode(e.link),title:w.encode(e.title),description:w.encode(e.desc),previewimageUrl:w.encode(e.icon),image_url:w.encode(e.icon)})}function D(){g(`${s?"mqqapi://share/to_fri?src_type=web&version=1&file_type=news":"mqqapi://share/to_fri?src_type=isqqBrowser&version=1&file_type=news"}&${y(b)}`)}function C(){g(`${s?"mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A":"mqqapi://share/to_qzone?src_type=isqqBrowser&version=1&file_type=news&req_type=1"}&${y(b)}`)}function k(){const e={url:b.link,title:b.title,pic:b.icon,desc:b.desc};location.href=`http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?${S(e,!0)}`}function M(){const e={url:b.link,title:b.title,pic:b.icon};location.href=`http://service.weibo.com/share/share.php?${S(e,!0)}`}class Q{_shareData=b;_config={syncDescToTag:!1,syncIconToTag:!1,syncTitleToTag:!1};constructor(e){this.setConfig(e)}getShareData(){return m({},this._shareData)}setShareData(e={}){var t,r;m(this._shareData,e),this._config.syncDescToTag&&(t=this._shareData.desc,q?q.content=t:document.head.insertAdjacentHTML("beforeend",`<meta name="description" content="${t}">`)),this._config.syncIconToTag&&(r=this._shareData.icon,_?_.href=r:document.head.insertAdjacentHTML("beforeend",`<link rel="shortcut icon" href="${r}">`)),this._config.syncTitleToTag&&function(e){document.title=e}(this._shareData.title)}setConfig(e={}){m(this._config,e)}getConfig(){return m({},this._config)}}class x extends Q{static commamdMap={wechattimeline:8,wechatfriend:1,qqfriend:4,qzone:3,weibo:11,copyurl:10,more:5,generateqrcode:7,default:void 0};constructor(e){super(e),alert("super"),f("https://jsapi.qq.com/get?api=app.share")}call(e="default",t){this.setShareData(t);const r=this.getShareData(),a=this.constructor.commamdMap[String(e).toLowerCase()];if(!JSON.stringify(browser.app.share))throw new Error("the browser may not support!");browser.app.share({title:r.title,description:r.desc,url:r.link,img_url:r.icon,from:r.from,to_app:a})}}class v extends Q{static commamdMap={wechattimeline:"kWeixinFriend",wechatfriend:"kWeixin",qqfriend:"kQQ",qzone:"kQZone",weibo:"kSinaWeibo",default:void 0};constructor(e){super(e)}call(e="default",t){this.setShareData(t);const r=this.getShareData(),a=this.constructor.commamdMap[String(e).toLowerCase()];ucbrowser.web_shareEX?ucbrowser.web_shareEX(JSON.stringify({title:r.title,content:r.desc,sourceUrl:r.link,imageUrl:r.icon,source:r.from,target:a})):ucbrowser.web_share(title,desc,link,a,"",from,"")}}class T extends Q{static commamdMap={wechattimeline:"WechatTimeline",wechatfriend:"WechatFriends",qqfriend:"QQ",qzone:"Qzone",weibo:"SinaWeibo",default:""};constructor(e){super(e)}call(e="default",t){this.setShareData(t);const r=this.getShareData(),a=this.constructor.commamdMap[String(e).toLowerCase()];ucweb.startRequest("shell.page_share",[r.title,r.desc,r.link,a,"",r.from,r.icon])}}class A extends Q{constructor(e){super(e)}call(e,t){this.setShareData(t);const r=this.getShareData();_flyflowNative.exec("bd_utils","shareWebPage",JSON.stringify({title:r.title,content:r.desc,landurl:r.link,imageurl:r.icon,shareSource:r.from}),"")}}class j extends Q{constructor(e){super(e)}call(e,t){this.setShareData(t);const r=this.getShareData();location.href="baidubrowserapp://bd_utils?action=shareWebPage&params="+encodeURIComponent(JSON.stringify({title:r.title,content:r.desc,imageurl:r.icon,landurl:r.link,mediaType:0,share_type:"webpage"}))}}class B extends Q{constructor(e){super(e)}call(e,t){this.setShareData(t);const r=this.getShareData();SogouMse.Utility.shareWithInfo({shareTitle:r.title,shareContent:r.desc,shareImageUrl:r.icon,shareUrl:r.link})}}class N extends Q{constructor(e){super(e),this.setConfig(e)}call(e,t){this.setShareData(t)}setConfig(e){super.setConfig(e),this.init(this.getConfig().wechatConfig)}init(e){e&&f("https://res.wx.qq.com/open/js/jweixin-1.4.0.js",(()=>{wx.config(m({debug:!1,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","updateAppMessageShareData","updateTimelineShareData"]},e));const t=this._shareData,r={};Object.defineProperty(r,"trigger",{get:()=>(...e)=>{m(r,{title:t.title,desc:t.desc,link:t.link,imgUrl:t.icon,success:t.success,fail:t.fail,cancel:t.fail}),t.trigger(...e)},set(e){t.trigger=e},enumerable:!0}),wx.ready((()=>{wx.onMenuShareAppMessage(r),wx.onMenuShareQQ(r),wx.onMenuShareQZone(r),wx.onMenuShareWeibo(r),wx.onMenuShareTimeline(r),wx.updateAppMessageShareData(r),wx.updateTimelineShareData(r)}))}))}}class O extends Q{constructor(e){super(e)}call(e="default",t){if(this.setShareData(t),!navigator.share){if("weibo"!==(e=String(e).toLowerCase()))throw"qqfriend"===e?D():"qzone"===e&&C(),alert("other Error"),new Error(`the browser may not support command ${e}!`);return alert("weibo"),void M()}const r=this.getShareData(),a={url:r.link,title:r.title,text:r.desc};alert("then-catch"),navigator.share(a).then(r.success).catch(r.fail)}}class $ extends Q{constructor(e){super(e),this.init()}call(e="default",t){this.setShareData(t),mqq.ui.showShareMenu()}init(){f("https://open.mobile.qq.com/sdk/qqapi.js",(()=>{const e=this._shareData;mqq.ui.setOnShareHandler((t=>{mqq.ui.shareMessage({back:!0,share_type:t,title:e.title,desc:e.desc,share_url:e.link,image_url:e.icon,sourceName:e.from},(t=>{0===t.retCode?e.success(t):e.fail(t)}))}))}))}}class U extends Q{constructor(e){super(e),this.init()}setShareData(e){super.setShareData(e);const t=this.getShareData();(function(e){const t=document.createElement("a");return t.href=e,t.hostname})(t.link)!==location.hostname&&(t.link=location.href,console.warn("安卓的QQ自带浏览器分享url必须跟页面url同一个域名，已自动为你设置为当前页面的url"));try{mqq.data.setShareInfo({share_url:t.link,title:t.title,desc:t.desc,image_url:t.icon},(e=>{!0!==e&&console.warn(e)}))}catch(e){}}call(e="default",t){this.setShareData(t),mqq.ui.showShareMenu()}init(){f("https://open.mobile.qq.com/sdk/qqapi.js",(()=>{this.setShareData()}))}}class W extends Q{constructor(e){super(e),this.init()}call(e="default",t){this.setShareData(t);const r=this.getShareData(),a=[],s=[],i=[],o=[];for(let e=0;e<5;e++)a.push(r.icon),o.push(r.link),s.push(r.title),i.push(r.desc);QZAppExternal.setShare((({code:e})=>{0!=e&&(this.hasSomethingWrong=!0)}),{type:"share",image:a,title:s,summary:i,shareURL:o})}setShareData(e){try{this.call("default",e)}catch(e){}}init(){f("https://qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js",(()=>{this.call("default")}))}}let z;alert(888),o?(alert("isWechat"),z=N):n&&s?(alert("isQQ && isIos"),z=$):n&&i?(alert("isQQ && isAndroid"),z=U):c?(alert("isQZone"),z=W):l?(alert("isQQMBrowser"),z=x):h&&s?(alert("isUCMBrowser && isIos"),z=v):h&&i?(alert("isUCMBrowser && isAndroid"),z=T):u&&i?(alert("isBaiduMBrowser && isAndroid"),z=A):u&&s?(alert("isBaiduMBrowser && isIos"),z=j):d&&s?(alert("isSogouMBrowser && isIos"),z=B):(alert("other"),z=O),window.NativeShare=z;var E=z;export{A as BaiduAndroidBrowser,j as BaiduIosBrowser,O as Others,U as QQAndroid,$ as QQIos,x as QQMobileBrowser,W as QZone,Q as Share,B as SogouIosBrowser,T as UCAndroidBrowser,v as UCIosBrowser,N as Wechat,E as default,D as shareToQQ,C as shareToQZone,k as shareToQZone4Web,M as shareToWeibo4Web};
