function removeArrElemnet(a,b){for(var c=0;c<a.length;c++)a[c]==b&&a.splice(c,1)}!function(a){a.ztc=a.ztc||{};var b=function(a){var b=new XMLHttpRequest,c=a.url,d=a.method||"GET",e=a.async||!0,f=a.success||null,g=a.error||null,h=a.data||null;b.onreadystatechange=function(){4==b.readyState&&(200==b.status?f&&f(b.responseText):g&&g(b.status))},b.addEventListener("load",function(){},!1),b.addEventListener("error",function(){},!1),b.addEventListener("abort",function(){},!1),b.open(d,c,e),b.send(h)};a.ztc.ajax=b;var c=function(a,b,c,f){var g="cb_"+(new Date).getTime();a=a+(-1==a.indexOf("?")?"?":"&")+e(b)+"&callback="+g;var h=document.createElement("script");h.type="text/javascript",h.src=a,h.id="id_"+g,f=f||8e3;var i=0;window[g]=function(a){clearTimeout(i),d(g),c(a)};var j=document.getElementsByTagName("head");j&&j[0]&&(j[0].appendChild(h),i=setTimeout(function(){d(g),c()},f))},d=function(a){window[a]=void 0;var b=document.getElementById("id_"+a);b.parentNode.removeChild(b)},e=function(a){var b="";if("string"==typeof a)b=a;else if("object"==typeof a){var c=!1;for(var d in a)b+=(c?"&":"")+d+"="+encodeURIComponent("object"==typeof a[d]?JSON.stringify(a[d]):a[d]),c=!0}return b};a.ztc.jsonp=c}(window),function(){function a(a,c){var d=c||640,e=window.innerHeight/window.innerWidth,f=d*e,g=window.innerWidth/d;return a.css("width",d),a.css("height",f),a[0].style.transform="scale("+g+")",a[0].style.WebkitTransform="scale("+g+")",a[0].style.MsTransform="scale("+g+")",a[0].style.MozTransform="scale("+g+")",a[0].style.transformOrigin="0 0",a[0].style.WebkitTransformOrigin="0 0",a[0].style.MsTransformOrigin="0 0",a[0].style.MozTransformOrigin="0 0",b.scaleStageCallback&&b.scaleStageCallback(d,f),g}window.ztc=window.ztc||{},window.z=window.ztc;var b=b||{};b.setCookie=function(a,b,c){var d=new Date;c=c||14,d.setDate(d.getDate()+c),document.cookie=a+"="+b+"; expires="+d},b.getCookie=function(a){for(var b=document.cookie.split("; "),c=0;c<b.length;c++)if(arr2=b[c].split("="),arr2[0]==a)return arr2[1];return null},b.removeCookie=function(a){b.setCookie(a,1,-1)},b.setItem=function(a,b){localStorage.setItem(a,b)},b.getItem=function(a){return localStorage.getItem(a)},b.removeItem=function(a){localStorage.removeItem(a)},b.scaleToFixScreen=function(c,d){b.stageScale=a(c,d),window.addEventListener("resize",function(){a(c,d)})},b.scroll=function(a,b){new c(a,b)};var c=function(a,b){var c=this;c.ele=a,c.eh=b,c.isMouseDown=!1,c.lastPick={x:0,y:0},c.curPick={x:0,y:0},c.addEvents()};c.prototype.addEvents=function(){var a=this;a.eh.addEventListener("mousedown",function(b){a.md(b)}),a.eh.addEventListener("mousemove",function(b){a.mm(b)}),a.eh.addEventListener("mouseup",function(b){a.mu(b)}),a.eh.addEventListener("touchstart",function(b){a.md(b)}),a.eh.addEventListener("touchmove",function(b){a.mm(b)}),a.eh.addEventListener("touchend",function(b){a.mu(b)})},c.prototype.md=function(a){var b=this;b.lastPick.x=a.touches?a.touches[0].pageX:a.pageX,b.lastPick.y=a.touches?a.touches[0].pageY:a.pageY;var c=b.ele.getBoundingClientRect();b.lastPick.x>=c.left&&b.lastPick.x<=c.right&&b.lastPick.y>=c.top&&b.lastPick.y<=c.bottom&&(b.isMouseDown=!0,b.lastScrollTop=b.ele.scrollTop)},c.prototype.mm=function(a){var b=this;if(b.isMouseDown){b.curPick.x=a.touches?a.touches[0].pageX:a.pageX,b.curPick.y=a.touches?a.touches[0].pageY:a.pageY;var c=b.curPick.y-b.lastPick.y;b.ele.scrollTop=b.lastScrollTop-c}},c.prototype.mu=function(a){this.isMouseDown=!1},b.getPlatform=function(){for(var a=navigator.userAgent,b=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),c=!0,d="PC",e=!1,f=0;f<b.length;f++)if(a.indexOf(b[f])>0){c=!1,d=b[f],a.indexOf("MicroMessenger")>0&&(e=!0);break}return{isPC:c,isWX:e,platform:d}},b.getOrientationState=function(){var a=["shu",0];if(window.orientation)switch(window.orientation){case 0:a[0]="shu",a[1]=0;break;case 180:a[0]="shu",a[1]=180;break;case 90:a[0]="hen",a[1]=90;break;case-90:a[0]="hen",a[1]=-90}else a=null;return a},b.lookOrientationChange=function(a){window.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(){var c=b.getOrientationState();a(c)},!1)},b.wx=b.wx||{},b.wx.shareData={},b.wx.init=function(a){if(!ztc.jsonp)return void console.log("not have ztc and ztc.jsonp function.");if(!window.wx)return void console.log("not have wx sdk: http://res.wx.qq.com/open/js/jweixin-1.0.0.js");var c=a.server||"https://general-easyfrog.rhcloud.com/wx";b.wx.shareData=a.shareData||{title:"分享标题",desc:"分享描述",link:"http://baidu.com",imgUrl:"http://www.easyicon.net/api/resize_png_new.php?id=1185704&size=128",success:function(){},cancel:function(){}},a.url=a.url||b.wx.shareData.link,b.wx.isReady=!1,ztc.jsonp(c,{appName:a.appName||"zhixuan",url:a.url.split("#")[0]},function(c){wx.config({debug:a.debug||!1,appId:c.appId,timestamp:c.timestamp,nonceStr:c.nonceStr,signature:c.signature,jsApiList:a.jsApiList||["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage"].concat(a.appendApiList||[])}),wx.error(function(a){console.log("wx error:",a)}),wx.ready(function(){if(wx.onMenuShareTimeline(b.wx.shareData),wx.onMenuShareAppMessage(b.wx.shareData),a.appendFunctions)for(var c=0;c<a.appendFunctions.length;c++)a.appendFunctions[c](a);b.wx.isReady=!0}),a.callback&&a.callback(c)})},b.htmlui=b.htmlui||{},b.htmlui.input=function(a,b,c,d,e){var f=d||"text";a.$(b).html('<input type="'+f+'"" value="" id="'+c+'"/>');var g={"font-size":a.$(b).height()/2,width:"100%",height:"100%"};if(e)for(var h in e)g[h]=e[h];var i=a.$("#"+c);i.css(g),i.bind("blur",function(){document.body.scrollTop=0})},b.htmlui.textarea=function(a,b,c,d){a.$(b).html('<textarea value="" id="'+c+'"/>');var e={"font-size":24,width:"100%",height:"100%"};if(d)for(var f in d)e[f]=d[f];var g=a.$("#"+c);g.css(e),g.bind("blur",function(){document.body.scrollTop=0})},window.t=window.ztc.tools=window.ztc.tools||b}(),function(){function a(a){e.instance.mouseDown(a)}function b(a){e.instance.mouseMove(a)}function c(a){e.instance.mouseUp(a)}function d(a){return{x:a.touches?a.touches[0].pageX:a.pageX,y:a.touches?a.touches[0].pageY:a.pageY}}var e=function(){e.instance=this};e.prototype.addDragObject=function(a){a.dom.constraint=a.constraint,a.dom.limit=a.limit||"",a.dom.isMouseDown=!1,a.dom.lastPick={x:0,y:0},a.dom.currentPick={x:0,y:0},this.addEvents(a.dom)},e.prototype.removeDragObject=function(d){d.constraint=d.limit=d.isMouseDown=d.lastPick=d.currentPick=void 0,d.removeEventListener("mousedown",a),d.removeEventListener("mousemove",b),d.removeEventListener("mouseup",c),d.removeEventListener("touchstart",a),d.removeEventListener("touchmove",b),d.removeEventListener("touchend",c)},e.prototype.mouseDown=function(a){var b=d(a),c=a.currentTarget;c.isMouseDown=!0,c.lastPick=b},e.prototype.mouseMove=function(a){var b=d(a),c=a.currentTarget;if(c.isMouseDown){var e=b.x-c.lastPick.x,f=b.y-c.lastPick.y,g=c.offsetLeft+e,h=c.offsetTop+f;switch("in"==c.limit?(0>g&&(g=0),g>c.parentNode.offsetWidth-c.offsetWidth&&(g=c.parentNode.offsetWidth-c.offsetWidth),0>h&&(h=0),h>c.parentNode.offsetHeight-c.offsetHeight&&(h=c.parentNode.offsetHeight-c.offsetHeight)):"edge"==c.limit&&((g>0||g<c.parentNode.offsetWidth-c.offsetWidth)&&(g=c.offsetLeft),(h>0||h<c.parentNode.offsetHeight-c.offsetHeight)&&(h=c.offsetTop)),c.constraint){case"x":c.style.left=g+"px";break;case"y":c.style.top=h+"px";break;default:c.style.left=g+"px",c.style.top=h+"px"}c.lastPick=b}},e.prototype.mouseUp=function(a){var b=a.currentTarget;b.isMouseDown=!1},e.prototype.addEvents=function(d){d.addEventListener("mousedown",a),d.addEventListener("mousemove",b),d.addEventListener("mouseup",c),d.addEventListener("touchstart",a),d.addEventListener("touchmove",b),d.addEventListener("touchend",c)},window.drag=e}();var EU=function(a){var b=this;b.sym=a,b.config=void 0,b.animOver=!0,b.ignoreAnimOver=!0,b.currentIndex=0,b.nextIndex=0,b.lastIndex=0,b.changeLayerType="updown",b.isMouseDown=!1,b.lastPick={x:0,y:0},b.touchPick={x:0,y:0},b.thresholdDis=120,b.width=window.innerWidth,b.height=window.innerHeight,b.baseWidth=640,b.baseHeight=1008,b.preventEvents=!1,b.preventDefault=!0,b.currentPosition=0,b.slideReaction=!0,b.scale=1,console.log("eu created! version:1.0.20150513")};EU.prototype.setConfig=function(a){for(var b=0;b<a.length;b++){var c=a[b];c.instart=c.instart instanceof Array?c.instart:c.instart instanceof Function?[c.instart]:[],c.inover=c.inover instanceof Array?c.inover:c.inover instanceof Function?[c.inover]:[],c.outstart=c.outstart instanceof Array?c.outstart:c.outstart instanceof Function?[c.outstart]:[],c.outover=c.outover instanceof Array?c.outover:c.outover instanceof Function?[c.outover]:[]}this.config=a},EU.prototype.addLayerEvent=function(a,b,c){if(this.config&&this.config.length>0)try{var d=this.getLayer(a);d?d[b].push(c):console.log("NOT HAVE THIS LAYER: ",a)}catch(e){console.log("EU addLayerEvent ERROR: ",e)}},EU.prototype.removeLayerEvent=function(a,b,c){if(this.config&&this.config.lenght>0){var d=this.getLayer(a);d&&removeArrElemnet(d[b],c)}},EU.prototype.getLayer=function(a){if("number"==typeof a)return this.config[a];if("string"==typeof a)for(var b=0;b<this.config.length;b++)if(this.config[b].layer==a)return this.config[b];return null},EU.prototype.init=function(a){var b=this;if(void 0!=b.config&&b.config.length>1)for(var c=1;c<b.config.length;c++)b.sym.$(b.config[c].layer).hide();void 0==a&&(a=!0),a&&(b.scaleStage(),window.onresize=function(){b.scaleStage()}),b.addEvents()},EU.prototype.addEvents=function(){var a=this;a.sym.getSymbolElement()[0].addEventListener("mousedown",function(b){a.onMouseDown(b)}),a.sym.getSymbolElement()[0].addEventListener("mousemove",function(b){a.onMouseMove(b)}),a.sym.getSymbolElement()[0].addEventListener("mouseup",function(b){a.onMouseUp(b)}),a.sym.getSymbolElement()[0].addEventListener("touchstart",function(b){a.onMouseDown(b)}),a.sym.getSymbolElement()[0].addEventListener("touchmove",function(b){a.onMouseMove(b)}),a.sym.getSymbolElement()[0].addEventListener("touchend",function(b){a.onMouseUp(b)})},EU.prototype.changeLayer=function(a,b,c,d,e,f){var g=this;if(d=d||300,void 0==c&&(c=!0),e=e||"updown",g.animOver||g.ignoreAnimOver)switch(b.show(),g.animOver=!1,g.invoke(g.currentIndex,"instart"),g.invoke(g.lastIndex,"outstart"),e){case"fade":b.css("opacity",0),a.animate({opacity:0},{duration:d,step:function(a,c){b.css("opacity",1-a)},complete:function(){a.hide(),g.animOver=!0,f&&f(),g.invoke(g.lastIndex,"outover"),g.invoke(g.currentIndex,"inover")}});break;case"updown":var h=c?-g.baseHeight:g.baseHeight;b.css("top",-h),b.css("left",0),a.animate({top:h},{duration:d,step:function(a,c){b.css("top",a-h)},complete:function(){a.hide(),g.animOver=!0,f&&f(),g.invoke(g.lastIndex,"outover"),g.invoke(g.currentIndex,"inover")}});break;case"leftright":var h=c?-g.baseWidth:g.baseWidth;b.css("left",-h),b.css("top",0),a.animate({left:h},{duration:d,step:function(a,c){b.css("left",a-h)},complete:function(){a.hide(),g.animOver=!0,f&&f(),g.invoke(g.lastIndex,"outover"),g.invoke(g.currentIndex,"inover")}})}},EU.prototype.invoke=function(a,b){var c=this.config[a][b];if(c instanceof Array)for(var d=0;d<c.length;d++)c[d]();else c instanceof Function&&c()},EU.prototype.onMouseDown=function(a){var b=this;if(b.preventDefault&&a.preventDefault(),!b.preventEvents&&(b.animOver||b.ignoreAnimOver)){b.isMouseDown=!0;var c=b.getCurrentSymbol();c&&(b.currentPosition=c.getPosition()),b.lastPick.x=a.touches?a.touches[0].pageX:a.pageX,b.lastPick.y=a.touches?a.touches[0].pageY:a.pageY}},EU.prototype.onMouseMove=function(a){var b=this;if(b.preventDefault&&a.preventDefault(),!b.preventEvents&&(b.touchPick.x=a.touches?a.touches[0].pageX:a.pageX,b.touchPick.y=a.touches?a.touches[0].pageY:a.pageY,b.isMouseDown&&(b.animOver||b.ignoreAnimOver)&&b.slideReaction)){var c=b.getCurrentSymbol();if(c){var d=b.currentPosition,e=a.touches?a.touches[0].pageY:a.pageY,f=Math.abs(e-b.lastPick.y)/b.baseHeight*d;c.stop(d-f)}}},EU.prototype.onMouseUp=function(a){var b=this;if(b.isMouseDown=!1,b.preventDefault&&a.preventDefault(),!b.preventEvents&&(b.animOver||b.ignoreAnimOver)&&!(void 0==b.config||b.config.length<2)){var c=b.touchPick.y-b.lastPick.y;if(c>b.thresholdDis)if(b.currentIndex>0){b.nextIndex=b.currentIndex-1;var d=b.sym.$(b.config[b.nextIndex].layer),e=b.sym.$(b.config[b.currentIndex].layer);b.lastIndex=b.currentIndex,b.getCurrentSymbol(b.nextIndex).stop(0),b.currentIndex=b.nextIndex,b.changeLayer(e,d,!1,300,b.changeLayerType,function(){b.playSym()})}else b.playerCurrentSymbol();else if(c<-b.thresholdDis)if(b.currentIndex<b.config.length-1){b.nextIndex=b.currentIndex+1;var d=b.sym.$(b.config[b.nextIndex].layer),e=b.sym.$(b.config[b.currentIndex].layer);b.lastIndex=b.currentIndex,b.getCurrentSymbol(b.nextIndex).stop(0),b.currentIndex=b.nextIndex,b.changeLayer(e,d,!0,300,b.changeLayerType,function(){b.playSym()})}else b.playerCurrentSymbol();else Math.abs(c)>10&&b.playerCurrentSymbol()}},EU.prototype.slideLayer=function(a){var b=this;void 0==a&&(a=!0),b.nextIndex=b.currentIndex+(a?1:-1);var c=b.sym.$(b.config[b.nextIndex].layer),d=b.sym.$(b.config[b.currentIndex].layer);b.lastIndex=b.currentIndex,b.getCurrentSymbol(b.nextIndex).stop(0),b.currentIndex=b.nextIndex,b.changeLayer(d,c,!0,300,b.changeLayerType,function(){b.playSym()})},EU.prototype.playSym=function(){var a=this;a.animOver=!1;var b,c;a.config&&(b=a.sym.getSymbol(a.config[a.currentIndex].symbol),c=a.sym.getSymbol(a.config[a.lastIndex].symbol),c&&c.stop(0),b&&b.play(-1))},EU.prototype.getCurrentSymbol=function(a){var b=this;return a=a||b.currentIndex,b.sym.getSymbol(b.config[a].symbol)},EU.prototype.playerCurrentSymbol=function(a){var b=this,c=b.getCurrentSymbol();c&&c.play(a)},EU.prototype.scaleStage=function(a){var b=this;a=a||b.baseWidth;var c=b.sym.$("Stage"),d=window.innerHeight/window.innerWidth;b.baseHeight=a*d,b.scale=window.innerWidth/a,c.css("width",a),c.css("height",b.baseHeight),c.css("transform","scale("+b.scale+")"),c.css("-webkit-transform","scale("+b.scale+")"),c.css("-ms-transform","scale("+b.scale+")"),c.css("-moz-transform","scale("+b.scale+")"),c.css("transform-origin","0 0"),c.css("-webkit-transform-origin","0 0"),c.css("-ms-transform-origin","0 0"),c.css("-moz-transform-origin","0 0")},EU.prototype.setBaseWidth=function(a){this.baseWidth=a,this.scaleStage()},EU.prototype.getPick=function(a,b){b=b||0;var c={x:0,y:0};return c.x=a.touches?a.touches[b].pageX:a.pageX,c.y=a.touches?a.touches[b].pageY:a.pageY,c},EU.prototype.getPickX=function(a,b){return b=b||0,a.touches?a.touches[b].pageX:a.pageX},EU.prototype.getPickY=function(a,b){return b=b||0,a.touches?a.touches[b].pageY:a.pageY};