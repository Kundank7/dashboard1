!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="63d31978-9815-4422-815d-01e7312b6ab2",e._sentryDebugIdIdentifier="sentry-dbid-63d31978-9815-4422-815d-01e7312b6ab2")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[645],{852:function(e,n,t){"use strict";t.d(n,{ClientClerkProvider:function(){return b}});var r=t(7770);t(4301);var i=t(2265),o=(0,i.createContext)(null);(0,i.createContext)(null);var u=t(9376);let a="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,l=i.createContext(void 0);l.displayName="ClerkNextOptionsCtx";let s=()=>i.useContext(l).value,c=e=>{let{children:n,options:t}=e;return i.createElement(l.Provider,{value:{value:t}},n)};var _=t(2627),d=t(8003),f=t.n(d);function E(e){let{publishableKey:n,clerkJSUrl:t,clerkJSVersion:o,clerkJSVariant:u,nonce:a}=s(),{domain:l,proxyUrl:c}=(0,r.ll)(),d={domain:l,proxyUrl:c,publishableKey:n,clerkJSUrl:t,clerkJSVersion:o,clerkJSVariant:u,nonce:a},E=(0,_.wE)(d),v="app"===e.router?"script":f();return i.createElement(v,{src:E,"data-clerk-js-script":!0,async:!0,defer:"pages"!==e.router&&void 0,crossOrigin:"anonymous",strategy:"pages"===e.router?"beforeInteractive":void 0,...(0,_.iv)(d)})}var v=t(40),p=t(7126),h=t(9775),R=t(5566);R.env.NEXT_PUBLIC_CLERK_JS_VERSION,R.env.NEXT_PUBLIC_CLERK_JS_URL,R.env.CLERK_API_VERSION,R.env.CLERK_SECRET_KEY,R.env.CLERK_ENCRYPTION_KEY,R.env.CLERK_API_URL||(e=>{var n;let t=null==(n=(0,p.nQ)(e))?void 0:n.frontendApi;return(null==t?void 0:t.startsWith("clerk."))&&h.mv.some(e=>null==t?void 0:t.endsWith(e))?h.Xv:h.iF.some(e=>null==t?void 0:t.endsWith(e))?h.Fo:h.cM.some(e=>null==t?void 0:t.endsWith(e))?h.Iq:h.Xv})("pk_live_Y2xlcmsucmVhY3Qtc2Fhcy5jb20k"),R.env.NEXT_PUBLIC_CLERK_DOMAIN,R.env.NEXT_PUBLIC_CLERK_PROXY_URL,(0,v.fQ)(R.env.NEXT_PUBLIC_CLERK_IS_SATELLITE),R.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL;let w={name:"@clerk/nextjs",version:"5.7.1",environment:"production"};(0,v.fQ)(R.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),(0,v.fQ)(R.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG);var g=t(5566);let L=e=>{var n;return{...e,publishableKey:e.publishableKey||"pk_live_Y2xlcmsucmVhY3Qtc2Fhcy5jb20k",clerkJSUrl:e.clerkJSUrl||g.env.NEXT_PUBLIC_CLERK_JS_URL,clerkJSVersion:e.clerkJSVersion||g.env.NEXT_PUBLIC_CLERK_JS_VERSION,proxyUrl:e.proxyUrl||g.env.NEXT_PUBLIC_CLERK_PROXY_URL||"",domain:e.domain||g.env.NEXT_PUBLIC_CLERK_DOMAIN||"",isSatellite:e.isSatellite||(0,v.fQ)(g.env.NEXT_PUBLIC_CLERK_IS_SATELLITE),signInUrl:e.signInUrl||"/sign-in",signUpUrl:e.signUpUrl||g.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL||"",signInForceRedirectUrl:e.signInForceRedirectUrl||g.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL||"",signUpForceRedirectUrl:e.signUpForceRedirectUrl||g.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL||"",signInFallbackRedirectUrl:e.signInFallbackRedirectUrl||g.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL||"",signUpFallbackRedirectUrl:e.signUpFallbackRedirectUrl||g.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL||"",afterSignInUrl:e.afterSignInUrl||g.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL||"",afterSignUpUrl:e.afterSignUpUrl||g.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL||"",telemetry:null!=(n=e.telemetry)?n:{disabled:(0,v.fQ)(g.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),debug:(0,v.fQ)(g.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG)},sdkMetadata:w}};t(3079);var C=(0,t(2119).$)("03914cbf8f95f0367bb0cd33a81d8d5a566bed9d");let U=e=>{var n;return null!=window.__clerk_internal_navigations||(window.__clerk_internal_navigations={}),null!=(n=window.__clerk_internal_navigations)[e]||(n[e]={}),window.__clerk_internal_navigations[e]},I=e=>{let{windowNav:n,routerNav:t,name:r}=e,o=(0,u.usePathname)(),[a,l]=(0,i.useTransition)();n&&(U(r).fun=(e,i)=>new Promise(o=>{var u,a;null!=(u=U(r)).promisesBuffer||(u.promisesBuffer=[]),null==(a=U(r).promisesBuffer)||a.push(o),l(()=>{var r,o,u;(null==(r=null==i?void 0:i.__internal_metadata)?void 0:r.navigationType)==="internal"?n((null!=(u=null==(o=window.next)?void 0:o.version)?u:"")<"14.1.0"?history.state:null,"",e):t(e)})}));let s=()=>{var e;null==(e=U(r).promisesBuffer)||e.forEach(e=>e()),U(r).promisesBuffer=[]};return(0,i.useEffect)(()=>(s(),s),[]),(0,i.useEffect)(()=>{a||s()},[o,a]),(0,i.useCallback)(e=>U(r).fun(e),[])},m=()=>{let e=(0,u.useRouter)();return I({windowNav:"undefined"!=typeof window?window.history.pushState.bind(window.history):void 0,routerNav:e.push.bind(e),name:"push"})},P=()=>{let e=(0,u.useRouter)();return I({windowNav:"undefined"!=typeof window?window.history.replaceState.bind(window.history):void 0,routerNav:e.replace.bind(e),name:"replace"})},S=()=>{let e=(0,u.useRouter)(),n=(0,u.usePathname)(),t="undefined"==typeof window?new URLSearchParams:(0,u.useSearchParams)(),r="undefined"!=typeof window&&window.next&&window.next.version>="14.1.0";return{mode:"path",name:"NextRouter",push:n=>e.push(n),replace:n=>r?window.history.replaceState(null,"",n):e.replace(n),shallowPush(n){r?window.history.pushState(null,"",n):e.push(n,{})},pathname:()=>n,searchParams:()=>t}},b=e=>{let{__unstable_invokeMiddlewareOnAuthStateChange:n=!0,children:t}=e,l=(0,u.useRouter)(),s=S(),_=m(),d=P(),[f,v]=(0,i.useTransition)();(0,i.useEffect)(()=>{var e;f||null==(e=window.__clerk_internal_invalidateCachePromise)||e.call(window)},[f]),a(()=>{window.__unstable__onBeforeSetActive=()=>new Promise(e=>{window.__clerk_internal_invalidateCachePromise=e,v(()=>{var e;(null==(e=window.next)?void 0:e.version)&&"string"==typeof window.next.version&&window.next.version.startsWith("13")?l.refresh():C()})}),window.__unstable__onAfterSetActive=()=>{if(n)return l.refresh()}},[]);let p=L({...e,routerPush:_,routerReplace:d});return i.createElement(c,{options:p},i.createElement(r.El,{...p},i.createElement(E,{router:"app"}),i.createElement(o.Provider,{value:s},t)))}},7679:function(e,n,t){"use strict";t.d(n,{AuthenticateWithRedirectCallback:function(){return r.vn},ClerkLoaded:function(){return r.a7},ClerkLoading:function(){return r.qI},RedirectToCreateOrganization:function(){return r.gM},RedirectToOrganizationProfile:function(){return r.yB},RedirectToSignIn:function(){return r.N1},RedirectToSignUp:function(){return r.C2},RedirectToUserProfile:function(){return r.sO}});var r=t(7770);t(2627)},1265:function(e,n,t){"use strict";t.d(n,{useAuth:function(){return r.aC},useClerk:function(){return r.ll},useEmailLink:function(){return r.E2},useOrganization:function(){return r.o8},useOrganizationList:function(){return r.eW},useSession:function(){return r.kP},useSessionList:function(){return r.xo},useSignIn:function(){return r.zq},useSignUp:function(){return r.QS},useUser:function(){return r.aF}});var r=t(7770);t(2605)},3841:function(e,n,t){"use strict";t.d(n,{CreateOrganization:function(){return f},GoogleOneTap:function(){return r.Kb},OrganizationList:function(){return r.Bg},OrganizationProfile:function(){return E},OrganizationSwitcher:function(){return r.Li},SignIn:function(){return v},SignInButton:function(){return r.$d},SignInWithMetamaskButton:function(){return r.qu},SignOutButton:function(){return r.AM},SignUp:function(){return p},SignUpButton:function(){return r.gX},UserButton:function(){return r.l8},UserProfile:function(){return d}});var r=t(7770),i=t(2265),o=t(2627),u=t(1350),a=t(2674);let l=()=>({pagesRouter:(0,a.useRouter)()}),s=(e,n,t,o=!0)=>{let a=i.useRef(0),{pagesRouter:s}=l(),{session:c,isLoaded:_}=(0,r.kP)();(0,u.rx)()||i.useEffect(()=>{if(!_||t&&"path"!==t||o&&!c)return;let r=new AbortController,i=()=>{let t=s?`${n}/[[...index]].tsx`:`${n}/[[...rest]]/page.tsx`;throw Error(`
Clerk: The <${e}/> component is not configured correctly. The most likely reasons for this error are:

1. The "${n}" route is not a catch-all route.
It is recommended to convert this route to a catch-all route, eg: "${t}". Alternatively, you can update the <${e}/> component to use hash-based routing by setting the "routing" prop to "hash".

2. The <${e}/> component is mounted in a catch-all route, but all routes under "${n}" are protected by the middleware.
To resolve this, ensure that the middleware does not protect the catch-all route or any of its children. If you are using the "createRouteMatcher" helper, consider adding "(.*)" to the end of the route pattern, eg: "${n}(.*)". For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware#create-route-matcher
`)};return s?s.pathname.match(/\[\[\.\.\..+]]/)||i():(async()=>{let n;if(a.current++,!(a.current>1)){try{let t=`${window.location.origin}${window.location.pathname}/${e}_clerk_catchall_check_${Date.now()}`;n=await fetch(t,{signal:r.signal})}catch(e){}(null==n?void 0:n.status)===404&&i()}})(),()=>{a.current>1&&r.abort()}},[_])},c=()=>{let e=i.useRef(),{pagesRouter:n}=l();if(n)return e.current||(e.current=n.pathname.replace(/\/\[\[\.\.\..*/,"")),e.current;let r=t(9376).usePathname,o=t(9376).useParams,u=(r()||"").split("/").filter(Boolean),a=Object.values(o()||{}).filter(e=>Array.isArray(e)).flat(1/0);return e.current||(e.current=`/${u.slice(0,u.length-a.length).join("/")}`),e.current};function _(e,n,t=!0){let r=c(),i=(0,o.EJ)(e,n,{path:r});return s(e,r,i.routing,t),i}let d=Object.assign(e=>i.createElement(r.Iw,{..._("UserProfile",e)}),{...r.Iw}),f=e=>i.createElement(r.Gp,{..._("CreateOrganization",e)}),E=Object.assign(e=>i.createElement(r.A,{..._("OrganizationProfile",e)}),{...r.A}),v=e=>i.createElement(r.cL,{..._("SignIn",e,!1)}),p=e=>i.createElement(r.Mo,{..._("SignUp",e,!1)})},2674:function(e,n,t){e.exports=t(3850)},2119:function(e,n,t){"use strict";Object.defineProperty(n,"$",{enumerable:!0,get:function(){return i}});let r=t(3079);function i(e){let{createServerReference:n}=t(6671);return n(e,r.callServer)}},3850:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useRouter",{enumerable:!0,get:function(){return o}});let r=t(2265),i=t(5523);function o(){return(0,r.useContext)(i.RouterContext)}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},2627:function(e,n,t){"use strict";t.d(n,{EJ:function(){return o},iv:function(){return i.iv},wE:function(){return i.wE}});var r=t(6548),i=t(3054);function o(e,n,t){let i=n.path||(null==t?void 0:t.path);return"path"===(n.routing||(null==t?void 0:t.routing)||"path")?i?{...t,...n,routing:"path"}:r.RM.throw((0,r.Gv)(e)):n.path?r.RM.throw((0,r.RE)(e)):{...t,...n,path:void 0}}}}]);