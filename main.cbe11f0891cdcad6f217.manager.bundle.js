(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{126:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return IFrame}));__webpack_require__(106);var templateObject_1,templateObject_2,templateObject_3,react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_storybook_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},IFrame=function IFrame(_a){var config=_a.config,_b=_a.defer,defer=void 0!==_b&&_b,_c=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(defer?void 0:config.url),url=_c[0],setUrl=_c[1],_d=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),loaded=_d[0],setLoaded=_d[1];return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){if(defer){var handle=requestAnimationFrame((function(){setUrl(config.url)}));return function(){return cancelAnimationFrame(handle)}}}),[defer,config.url]),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){setLoaded(!1)}),[url]),Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.l)("div",{css:$container},!loaded&&Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.l)(_storybook_components__WEBPACK_IMPORTED_MODULE_3__.n,{css:$loading},"Loading..."),Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.l)("iframe",{css:$iframe,src:url,allowFullScreen:config.allowFullscreen,onLoad:function onLoad(){return setLoaded(!0)}}))},$container=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.h)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: hidden;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: hidden;\n"]))),$loading=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.h)(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"],["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"]))),$iframe=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.h)(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n\n  z-index: 1;\n"],["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n\n  z-index: 1;\n"])))},410:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return figmaURLPattern})),__webpack_require__.d(__webpack_exports__,"a",(function(){return Figma}));__webpack_require__(15);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_IFrame__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(126),figmaURLPattern=/https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,Figma=function Figma(_a){var config=_a.config,iframeConfig=Object(react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var isValid=function isFigmaURL(url){return figmaURLPattern.test(url)}(config.url);if(!isValid)return console.warn("[storybook-addon-designs] The URL you specified is not valid Figma URL.\nThe addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>."),config;var embedHost=config.embedHost||location.hostname;return{url:"https://www.figma.com/embed?embed_host=".concat(embedHost,"&url=").concat(config.url),allowFullscreen:config.allowFullscreen}}),[config.url,config.allowFullscreen,config.embedHost]);return Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.l)(_IFrame__WEBPACK_IMPORTED_MODULE_3__.a,{defer:!0,config:iframeConfig})}},412:function(module){module.exports=JSON.parse('{"name":"storybook-addon-designs","version":"7.0.0-beta.0","description":"Storybook addon for embedding your design preview in addon panel","main":"cjs/index.js","module":"esm/index.js","types":"esm/index.d.ts","repository":"git@github.com:pocka/storybook-addon-designs.git","homepage":"https://github.com/pocka/storybook-addon-designs","author":"pocka <pockawoooh@gmail.com>","license":"MIT","files":["esm","cjs","blocks.js","blocks.d.ts","register.js","register-tab.js","preset.js"],"dependencies":{"@figspec/react":"^1.0.0"},"devDependencies":{"@figspec/components":"^1.0.0","@storybook/addon-docs":"6.5.9","@storybook/addons":"6.5.9","@storybook/api":"6.5.9","@storybook/client-api":"6.5.9","@storybook/components":"6.5.9","@storybook/core-events":"6.5.9","@storybook/theming":"6.5.9","@types/react":"^17.0.0","@types/react-dom":"^17.0.0","@types/webpack-env":"^1.13.9","figma-js":"^1.13.0","typescript":"^4.7.3"},"peerDependencies":{"@storybook/addon-docs":"^6.4.0","@storybook/addons":"^6.4.0","@storybook/api":"^6.4.0","@storybook/components":"^6.4.0","@storybook/theming":"^6.4.0","react":"^16.8.0 || ^17.0.0 || ^18.0.0","react-dom":"^16.8.0 || ^17.0.0 || ^18.0.0"},"peerDependenciesMeta":{"react":{"optional":true},"react-dom":{"optional":true}},"scripts":{"dev":"tsc --watch --preserveWatchOutput","build":"npm run build:esm && npm run build:cjs","build:esm":"tsc","build:cjs":"tsc --module commonjs --outDir cjs","test":"echo \'No tests\' && exit 0","clean":"rm -r esm cjs","prepublishOnly":"cp ../../README.md ./ && npm run build"},"keywords":["storybook-addon","design","figma"],"storybook":{"icon":"https://raw.githubusercontent.com/pocka/storybook-addon-designs/master/packages/assets/logo.png","displayName":"Designs"}}')},432:function(module,exports,__webpack_require__){__webpack_require__(433),__webpack_require__(790),__webpack_require__(788),__webpack_require__(787),__webpack_require__(789),module.exports=__webpack_require__(791)},479:function(module,exports){},787:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(203),__webpack_require__(35);var _extendStatics,templateObject_1,templateObject_2,Image_templateObject_1,Image_templateObject_2,templateObject_3,LinkPanel_templateObject_1,esm=__webpack_require__(419),types=__webpack_require__(127),dist_esm=__webpack_require__(7),index_b45716e8=__webpack_require__(2),theming_dist_esm=__webpack_require__(1),AddonName="STORYBOOK_ADDON_DESIGNS",PanelName=AddonName+"/panel",react=(__webpack_require__(784),__webpack_require__(785),__webpack_require__(0)),__extends=(_extendStatics=function extendStatics(d,b){return _extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(d[p]=b[p])},_extendStatics(d,b)},function(d,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function __(){this.constructor=d}_extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),ErrorBoundary_ErrorBoundary=function(_super){function ErrorBoundary(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.state={hasError:!1},_this}return __extends(ErrorBoundary,_super),ErrorBoundary.getDerivedStateFromError=function(error){return{hasError:!0,error:error}},ErrorBoundary.prototype.componentDidCatch=function(error,info){console.group("An error occurred during rendering Addon panel of storybook-addon-designs"),console.log("--- Error ---"),console.error(error),console.log("--- React Component Stack ---"),console.error(info.componentStack),console.groupEnd()},ErrorBoundary.prototype.render=function(){return this.state.hasError?Object(theming_dist_esm.l)(index_b45716e8.n,null,Object(theming_dist_esm.l)(react.Fragment,null,"Failed to render addon UI"),Object(theming_dist_esm.l)(react.Fragment,null,Object(theming_dist_esm.l)("p",null,"Sorry, this addon has crashed due to the below error has thrown during rendering the addon UI."),Object(theming_dist_esm.l)("pre",null,String(this.state.error)),Object(theming_dist_esm.l)("p",null,"See console log for more details. To clear the error state, please reload the page."," ",Object(theming_dist_esm.l)(index_b45716e8.j,{href:"https://github.com/pocka/storybook-addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"Bug report")))):this.props.children},ErrorBoundary}(react.Component),Figma=(__webpack_require__(32),__webpack_require__(29),__webpack_require__(15),__webpack_require__(56),__webpack_require__(10),__webpack_require__(18),__webpack_require__(14),__webpack_require__(17),__webpack_require__(43),__webpack_require__(410)),IFrame=__webpack_require__(126),__spreadArray=(__webpack_require__(106),function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Pan_Pan=function Pan(_a){var children=_a.children,className=_a.className,style=_a.style,defaultValue=_a.defaultValue,value=_a.value,onChange=_a.onChange,_b=Object(react.useState)([0,0]),offset=_b[0],move=_b[1];Object(react.useEffect)((function(){move(defaultValue||(value||[0,0]))}),[defaultValue]);var panHandlers=function usePan(cb,deps){var _a=Object(react.useState)([0,0]),savePosition=(_a[0],_a[1]),_b=Object(react.useState)(!1),isPanning=_b[0],setPanState=_b[1],onMouseDown=Object(react.useCallback)((function(ev){0===ev.button&&(savePosition([ev.screenX,ev.screenY]),setPanState(!0))}),[setPanState,savePosition]),onTouchStart=Object(react.useCallback)((function(ev){var touch=ev.touches[0];savePosition([touch.screenX,touch.screenY]),setPanState(!0)}),[setPanState,savePosition]),move=Object(react.useCallback)((function(p){isPanning&&savePosition((function(prev){return cb([p[0]-prev[0],p[1]-prev[1]]),p}))}),__spreadArray([savePosition,isPanning],deps,!0)),onMouseMove=Object(react.useCallback)((function(ev){var screenX=ev.screenX,screenY=ev.screenY;move([screenX,screenY])}),[move]),onTouchMove=Object(react.useCallback)((function(ev){var _a=ev.touches[0],screenX=_a.screenX,screenY=_a.screenY;move([screenX,screenY])}),__spreadArray([savePosition,isPanning],deps,!0)),clear=Object(react.useCallback)((function(){savePosition([0,0]),setPanState(!1)}),[setPanState,savePosition]);return{onMouseDown:onMouseDown,onMouseMove:onMouseMove,onMouseUp:clear,onMouseLeave:clear,onTouchStart:onTouchStart,onTouchMove:onTouchMove,onTouchCancel:clear,onTouchEnd:clear}}((function(delta){onChange&&onChange(delta),move((function(prev){return[prev[0]+delta[0],prev[1]+delta[1]]}))}),[move,onChange]),transform=Object(react.useMemo)((function(){var vec=value||offset;return{transform:"translate(".concat(vec[0],"px, ").concat(vec[1],"px)")}}),[value,offset]);return Object(theming_dist_esm.l)("div",__assign({css:$container,className:className,style:style},panHandlers),Object(theming_dist_esm.l)("div",{css:$transformLayer,style:transform},children))},$container=Object(theming_dist_esm.h)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n\n  &:active {\n    cursor: move;\n  }\n"],["\n  position: relative;\n  overflow: hidden;\n\n  &:active {\n    cursor: move;\n  }\n"]))),$transformLayer=Object(theming_dist_esm.h)(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]))),ZoomButtons_ZoomButtons=function ZoomButtons(_a){var onZoomIn=_a.onZoomIn,onZoomOut=_a.onZoomOut,onReset=_a.onReset;return Object(theming_dist_esm.l)(react.Fragment,null,Object(theming_dist_esm.l)(index_b45716e8.t,{onClick:onZoomIn},Object(theming_dist_esm.l)(index_b45716e8.c,{icon:"zoom"})),Object(theming_dist_esm.l)(index_b45716e8.t,{onClick:onZoomOut},Object(theming_dist_esm.l)(index_b45716e8.c,{icon:"zoomout"})),Object(theming_dist_esm.l)(index_b45716e8.t,{onClick:onReset},Object(theming_dist_esm.l)(index_b45716e8.c,{icon:"zoomreset"})))},Image_makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},Image_ImagePreview=function ImagePreview(_a){var config=_a.config,zoom=function useZoom(initialValue,deps){var _a=Object(react.useState)(1),scale=_a[0],setScale=_a[1];return Object(react.useEffect)((function(){setScale(initialValue)}),deps),{scale:scale,zoomIn:Object(react.useCallback)((function(){setScale((function(prevScale){return prevScale+.1}))}),[setScale]),zoomOut:Object(react.useCallback)((function(){setScale((function(prevScale){return Math.max(prevScale-.1,.1)}))}),[setScale]),resetZoom:Object(react.useCallback)((function(){setScale(1)}),[setScale])}}(config.scale||1,[config.scale]),imageStyles=Object(react.useMemo)((function(){return{transform:"scale(".concat(zoom.scale,")")}}),[zoom.scale]);return Object(theming_dist_esm.l)("div",{css:Image_$container},Object(theming_dist_esm.l)(index_b45716e8.w,{border:!0},Object(theming_dist_esm.l)(react.Fragment,{key:"left"},Object(theming_dist_esm.l)("p",null,Object(theming_dist_esm.l)("b",null,"Image")),Object(theming_dist_esm.l)(index_b45716e8.v,null),Object(theming_dist_esm.l)(ZoomButtons_ZoomButtons,{onReset:zoom.resetZoom,onZoomIn:zoom.zoomIn,onZoomOut:zoom.zoomOut}))),Object(theming_dist_esm.l)(Pan_Pan,{css:$preview,defaultValue:config.offset},Object(theming_dist_esm.l)("img",{css:$image,src:config.url,style:imageStyles})))},Image_$container=Object(theming_dist_esm.h)(Image_templateObject_1||(Image_templateObject_1=Image_makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"]))),$preview=Object(theming_dist_esm.h)(Image_templateObject_2||(Image_templateObject_2=Image_makeTemplateObject(["\n  flex-grow: 1;\n"],["\n  flex-grow: 1;\n"]))),$image=Object(theming_dist_esm.h)(templateObject_3||(templateObject_3=Image_makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n\n  pointer-events: none;\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n\n  pointer-events: none;\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n"]))),LinkPanel_makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},LinkPanel_LinkPanel=function LinkPanel(_a){var _b,_c,_d,config=_a.config;return Object(theming_dist_esm.l)("div",{css:LinkPanel_$container},Object(theming_dist_esm.l)(index_b45716e8.j,{cancel:!1,href:config.url,target:null!==(_b=config.target)&&void 0!==_b?_b:"_blank",rel:null!==(_c=config.rel)&&void 0!==_c?_c:"noopener",withArrow:null===(_d=config.showArrow)||void 0===_d||_d},config.label||config.url))},LinkPanel_$container=Object(theming_dist_esm.h)(LinkPanel_templateObject_1||(LinkPanel_templateObject_1=LinkPanel_makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Sketch_assign=(__webpack_require__(61),__webpack_require__(19),__webpack_require__(174),function(){return Sketch_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},Sketch_assign.apply(this,arguments)}),Sketch_Sketch=function Sketch(_a){var config=_a.config,result=Object(react.useMemo)((function(){var parsed=function v1UrlParser(url){if("https:"!==url.protocol)return{valid:!1,error:Object(theming_dist_esm.l)(react.Fragment,null,"Expected HTTPS link, received ",Object(theming_dist_esm.l)("code",null,url.protocol),".")};if("www.sketch.com"!==url.hostname)return{valid:!1,error:Object(theming_dist_esm.l)(react.Fragment,null,"Expected a hostname ",Object(theming_dist_esm.l)("code",null,"www.sketch.com"),", received"," ",Object(theming_dist_esm.l)("code",null,url.hostname))};var malformedUrlErrorMessage=Object(theming_dist_esm.l)(react.Fragment,null,"Expected pathname ",Object(theming_dist_esm.l)("code",null,"/s/<string>/a/<string>"),", received"," ",Object(theming_dist_esm.l)("code",null,url.pathname),"."),pathSegments=url.pathname.split("/").slice(1);if(pathSegments.length<4)return{valid:!1,error:malformedUrlErrorMessage};if("embed"===pathSegments[0])return{valid:!0,data:{url:url.href,offscreen:!1}};var s=pathSegments[0],sid=pathSegments[1],a=pathSegments[2],aid=pathSegments[3];return"s"===s&&sid&&"a"===a&&aid?{valid:!0,data:{url:"https://www.sketch.com/embed/s/".concat(sid,"/a/").concat(aid),offscreen:!1}}:{valid:!1,error:malformedUrlErrorMessage}}(new URL(config.url));return parsed.valid?Sketch_assign(Sketch_assign({},parsed),{data:Sketch_assign(Sketch_assign({},config),parsed.data)}):parsed}),[config]);return result.valid?Object(theming_dist_esm.l)(IFrame.a,{defer:!0,config:result.data}):Object(theming_dist_esm.l)(index_b45716e8.n,null,Object(theming_dist_esm.l)(react.Fragment,null,"Invalid Sketch URL"),Object(theming_dist_esm.l)(react.Fragment,null,result.error))},Tabs_Tabs=function Tabs(_a){var tabs=_a.tabs,_b=_a.deps,deps=void 0===_b?[]:_b,_c=Object(react.useState)(tabs[0].id),selected=_c[0],setSelected=_c[1];return Object(react.useEffect)((function(){setSelected(tabs[0].id)}),deps),Object(theming_dist_esm.l)(index_b45716e8.r,{absolute:!0,selected:selected,actions:{onSelect:setSelected}},tabs.map((function(tab){return Object(theming_dist_esm.l)("div",{key:tab.id,id:tab.id,title:tab.name},tab.offscreen||selected===tab.id?tab.content:null)})))},Wrapper_assign=function(){return Wrapper_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},Wrapper_assign.apply(this,arguments)},Wrapper_spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},Figspec=Object(react.lazy)((function(){return Promise.all([__webpack_require__.e(6),__webpack_require__.e(10)]).then(__webpack_require__.bind(null,904))})),Wrapper_Wrapper=function Wrapper(_a){var config=_a.config;if(!config||"length"in config&&0===config.length)return Object(theming_dist_esm.l)(index_b45716e8.n,null,Object(theming_dist_esm.l)(react.Fragment,null,"No designs found"),Object(theming_dist_esm.l)(react.Fragment,null,"Learn how to"," ",Object(theming_dist_esm.l)(index_b45716e8.j,{href:"https://github.com/pocka/storybook-addon-designs#usage",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));var tabs=Wrapper_spreadArray([],config instanceof Array?config:[config],!0).map((function(cfg){var _a,_b,meta={id:JSON.stringify(cfg),name:cfg.name||(null===(_a=cfg.type)||void 0===_a?void 0:_a.toUpperCase())||"ERROR",offscreen:null===(_b=cfg.offscreen)||void 0===_b||_b};switch(cfg.type){case"iframe":return Wrapper_assign(Wrapper_assign({},meta),{content:Object(theming_dist_esm.l)(IFrame.a,{config:cfg})});case"figma":return Wrapper_assign(Wrapper_assign({},meta),{content:Object(theming_dist_esm.l)(Figma.a,{config:cfg}),offscreen:!1});case"sketch":return Wrapper_assign(Wrapper_assign({},meta),{content:Object(theming_dist_esm.l)(Sketch_Sketch,{config:cfg})});case"figspec":case"experimental-figspec":return"experimental-figspec"===cfg.type&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),Wrapper_assign(Wrapper_assign({},meta),{content:Object(theming_dist_esm.l)(react.Suspense,{fallback:"Preparing Figspec viewer..."},Object(theming_dist_esm.l)(Figspec,{config:cfg})),offscreen:!1});case"image":return Wrapper_assign(Wrapper_assign({},meta),{content:Object(theming_dist_esm.l)(Image_ImagePreview,{config:cfg})});case"link":return Wrapper_assign(Wrapper_assign({},meta),{content:Object(theming_dist_esm.l)(LinkPanel_LinkPanel,{config:cfg})})}return Wrapper_assign(Wrapper_assign({},meta),{content:Object(theming_dist_esm.l)(index_b45716e8.n,null,Object(theming_dist_esm.l)(react.Fragment,null,"Invalid config type"),Object(theming_dist_esm.l)(react.Fragment,null,"Config type you set is not supported. Please choose one from"," ",Object(theming_dist_esm.l)(index_b45716e8.j,{href:"https://github.com/pocka/storybook-addon-designs#available-types",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))})}));return 1===tabs.length?Object(theming_dist_esm.l)("div",null,tabs[0].content):Object(theming_dist_esm.l)(Tabs_Tabs,{tabs:tabs,deps:[config]})},containers_Wrapper_Wrapper=function Wrapper(_a){var active=_a.active,state=Object(dist_esm.k)(),config=Object(dist_esm.i)("design"),_b=Object(react.useState)(active),onceRevealed=_b[0],setOnceRevealed=_b[1];return Object(react.useEffect)((function(){setOnceRevealed(active)}),[config]),Object(react.useEffect)((function(){active&&setOnceRevealed(!0)}),[active]),onceRevealed?Object(theming_dist_esm.l)(Wrapper_Wrapper,{key:state.storyId,config:config}):null};!function register(renderTarget){esm.a.register(AddonName,(function(api){"tab"===renderTarget?esm.a.add(PanelName,{title:"Design",render:function render(_a){var active=_a.active,key=_a.key;return active?Object(theming_dist_esm.l)(ErrorBoundary_ErrorBoundary,{key:key},Object(theming_dist_esm.l)(containers_Wrapper_Wrapper,{active:!0})):Object(theming_dist_esm.l)("noscript",{key:key})},type:types.a.TAB,paramKey:"design",route:function route(_a){var storyId=_a.storyId;return"/design/".concat(storyId)},match:function match(_a){return"design"===_a.viewMode}}):esm.a.addPanel(PanelName,{title:function title(){var param=Object(dist_esm.i)("design");return param?Array.isArray(param)?param.length>0?"".concat("Design"," (").concat(param.length,")"):"Design":(param.name||"Design")+" (1)":"Design"},paramKey:"design",render:function render(_a){var active=_a.active,key=_a.key;return Object(theming_dist_esm.l)(index_b45716e8.x,{key:key,active:!!active},Object(theming_dist_esm.l)(ErrorBoundary_ErrorBoundary,null,Object(theming_dist_esm.l)(containers_Wrapper_Wrapper,{active:!!active})))}})}))}("panel")},790:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var esm=__webpack_require__(419),dist_esm=__webpack_require__(1),logo_with_text=__webpack_require__.p+"static/media/logo-with-text.79a9da84.svg",storybook_addon_designs_package=__webpack_require__(412);esm.a.setConfig({theme:Object(dist_esm.e)({brandTitle:"storybook-addon-designs",brandImage:logo_with_text,brandUrl:storybook_addon_designs_package.homepage}),showRoots:!0})}},[[432,3,4]]]);