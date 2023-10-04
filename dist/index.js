!function(){"use strict";window.ca&&window.ca.addEventListener("bookingEvent",((...e)=>{console.log("Got booking event",...e)}));const e=document.currentScript.src,o=e.includes("localhost"),t=e=>e,n=window.self!==window.top;function r(){return[...document.querySelectorAll("iframe")].find((e=>e.src.includes("localhost")||e.src.includes("caspeco")&&e.src.includes("booking")))}function c(o){const t=r();t&&(t.contentWindow.postMessage("load "+e,"*"),t.contentWindow.postMessage(o,"*"))}let l;const s=document.location.href.includes("www.brodernas.nu/restauranger");function a(){const e=r();if(!e)return;const o=e.parentElement;e.remove(),o.style="",[...o.children].forEach((e=>e.style=""))}function i(){const e=document.querySelector("header");if(!e.children[2])return void setTimeout(i,10);e.children[2].remove();const o=document.createElement("div");o.style=t`
      color: white;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `;const n=document.createElement("button");n.style=t`
      width: 40px;
      height: 40px;
    `,n.onclick=()=>{return e="close",void window.parent.postMessage(e,"*");var e},o.appendChild(n);const r=document.createElement("div");r.className="fa fa-close",r.style=t`
      font-size: 20px;  
    `,n.appendChild(r),e.appendChild(o)}function d(e,o){const n=document.createElement("button");return n.style=t`all: revert;margin-right: 10px;margin-bottom: 10px`,n.innerHTML=e,n.onclick=o,n}(()=>{if(!s)return;[...document.querySelectorAll("a")].filter((e=>e.href.match(/^https:\/\/cloud\.caspeco\.se\/public\/webBooking/))).forEach((e=>{e.onclick=()=>{a();const n=e.href.match(/system=([a-z]*_[a-z]*)/)[1],r=e.href.match(/unitId=([0-9]*)/)[1];let c=o?"http://localhost:8080":"https://booking.dev.caspeco.net";const l=document.createElement("iframe");l.src=c+"/?system="+n+"&unitId="+r,l.style=t`
              border: 1px solid #9e9e9e;
              padding: 1px;
              padding-right: 2px;
              flex: 1;
            `;const s=e.parentElement.parentElement;for(let e=0;e<s.children.length;e++)s.children[e].style.display="none";return s.style.border="none",s.style.padding="0",s.style.display="flex",s.append(l),!1}}))})();var m={Default:{"--theme-colors-primary-wlv":"#4530C9","--theme-colors-primary-hover-wlv":"#3726A1","--theme-colors-primary-active-wlv":"#291D79","--theme-colors-on-primary-wlv":"#FFFFFF","--theme-colors-primary-container-wlv":"#ECEAFA","--theme-colors-on-primary-container-wlv":"#0C0656","--theme-colors-secondary-wlv":"#25AF72","--theme-colors-secondaryHover-wlv":"#1E8C5B","--theme-colors-secondaryActive-wlv":"#166944","--theme-colors-on-secondary-wlv":"#FFFFFF","--theme-colors-secondary-container-wlv":"#E5F5EE","--theme-colors-on-secondary-container-wlv":"#0F462E","--theme-colors-accent-wlv":"#0269FF","--theme-colors-accent-hover-wlv":"#0254CC","--theme-colors-accent-hover-alpha-wlv":"#0269FF1F","--theme-colors-accent-active-wlv":"#013F99","--theme-colors-accent-active-alpha-wlv":"#0269FF29","--theme-colors-on-accent-wlv":"#FFFFFF","--theme-colors-accent-container-wlv":"#E6F0FF","--theme-colors-on-accent-container-wlv":"#012A66","--theme-colors-background-wlv":"#FFFFFF","--theme-colors-on-background-wlv":"#0C0656","--theme-colors-on-background-border-wlv":"#0C06563D","--theme-colors-on-background-subdued-wlv":"#0C06567A","--theme-colors-background-disabled-wlv":"#0C06560F","--theme-colors-on-background-header-wlv":"#0C0656","--theme-colors-surface-wlv":"#FFFFFF","--theme-colors-on-surface-wlv":"#0C0656","--theme-colors-on-surface-border-wlv":"#0C06563D","--theme-colors-on-surface-subdued-wlv":"#0C06567A","--theme-colors-surface-disabled-wlv":"#0C06560F","--theme-colors-on-surface-header-wlv":"#0C0656","--theme-colors-info-wlv":"#0269FF","--theme-colors-info-hover-wlv":"#0254CC","--theme-colors-info-active-wlv":"#013F99","--theme-colors-on-info-wlv":"#FFFFFF","--theme-colors-info-container-wlv":"#E6F0FF","--theme-colors-on-info-container-wlv":"#012A66","--theme-colors-success-wlv":"#25AF72","--theme-colors-success-hover-wlv":"#1E8C5B","--theme-colors-success-active-wlv":"#166944","--theme-colors-on-success-wlv":"#FFFFFF","--theme-colors-success-container-wlv":"#E5F5EE","--theme-colors-on-success-container-wlv":"#0F462E","--theme-colors-warning-wlv":"#EEB765","--theme-colors-warning-hover-wlv":"#BE9251","--theme-colors-warning-active-wlv":"#8F6E3D","--theme-colors-on-warning-wlv":"#FFFFFF","--theme-colors-warning-container-wlv":"#FDF6ED","--theme-colors-on-warning-container-wlv":"#5F4928","--theme-colors-error-wlv":"#EE657A","--theme-colors-error-hover-wlv":"#BE5162","--theme-colors-error-active-wlv":"#8F3D49","--theme-colors-on-error-wlv":"#FFFFFF","--theme-colors-error-container-wlv":"#FDF0F2","--theme-colors-on-error-container-wlv":"#5F2831","--theme-colors-neutral-wlv":"#000000","--theme-colors-neutral-hover-wlv":"#2E2E2E","--theme-colors-neutral-active-wlv":"#454545","--theme-colors-on-neutral-wlv":"#FFFFFF","--theme-colors-neutral-container-wlv":"#F1F1F1","--theme-colors-on-neutral-container-wlv":"#000000"},Rainbow:{"--theme-colors-primary-wlv":"#008000","--theme-colors-primary-hover-wlv":"#006600","--theme-colors-primary-active-wlv":"#004D00","--theme-colors-on-primary-wlv":"#1AFF1A","--theme-colors-primary-container-wlv":"#EBFFEB","--theme-colors-on-primary-container-wlv":"#00BD00","--theme-colors-secondary-wlv":"#0000FF","--theme-colors-secondary-hover-wlv":"#0000CC","--theme-colors-secondary-active-wlv":"#000099","--theme-colors-on-secondary-wlv":"#00FFFF","--theme-colors-secondary-container-wlv":"#E5F3FF","--theme-colors-on-secondary-container-wlv":"#1F8FFF","--theme-colors-accent-wlv":"#802AA8","--theme-colors-accent-hover-wlv":"#60207E","--theme-colors-accent-hover-alpha-wlv":"#802AA81F","--theme-colors-accent-active-wlv":"#411556","--theme-colors-accent-active-alpha-wlv":"#802AA829","--theme-colors-on-accent-wlv":"#FF00FF","--theme-colors-accent-container-wlv":"#FF00FF","--theme-colors-on-accent-container-wlv":"#DD69DD","--theme-colors-background-wlv":"#FFEBEB","--theme-colors-on-background-wlv":"#FF0000","--theme-colors-on-background-border-wlv":"#FF00003D","--theme-colors-on-background-subdued-wlv":"#FF00007A","--theme-colors-background-disabled-wlv":"#FF00000F","--theme-colors-on-background-header-wlv":"#990000","--theme-colors-surface-wlv":"#FFF8EB","--theme-colors-on-surface-wlv":"#FFA500","--theme-colors-on-surface-border-wlv":"#FFA5003D","--theme-colors-on-surface-subdued-wlv":"#FFA5007A","--theme-colors-surface-disabled-wlv":"#FFA5000F","--theme-colors-on-surface-header-wlv":"#C27D00"},"Brödernas":{"--theme-colors-primary-wlv":"#111111","--theme-colors-primary-hover-wlv":"#111111","--theme-colors-primary-active-wlv":"#111111","--theme-colors-on-primary-wlv":"#fbf6f2","--theme-colors-primary-container-wlv":"#fbf6f2","--theme-colors-on-primary-container-wlv":"#fbf6f2","--theme-colors-secondary-wlv":"#111111","--theme-colors-secondaryHover-wlv":"#111111","--theme-colors-secondaryActive-wlv":"#111111","--theme-colors-on-secondary-wlv":"#fbf6f2","--theme-colors-secondary-container-wlv":"#efefef","--theme-colors-on-secondary-container-wlv":"#111111","--theme-colors-accent-wlv":"#111111","--theme-colors-accent-hover-wlv":"#111111","--theme-colors-accent-hover-alpha-wlv":"#111111","--theme-colors-accent-active-wlv":"#111111","--theme-colors-accent-active-alpha-wlv":"#0269FF29","--theme-colors-on-accent-wlv":"#efefef","--theme-colors-accent-container-wlv":"#111111","--theme-colors-on-accent-container-wlv":"#efefef","--theme-colors-background-wlv":"#fbf6f2","--theme-colors-on-background-wlv":"#000000","--theme-colors-on-background-border-wlv":"#0C06563D","--theme-colors-on-background-subdued-wlv":"#0C06567A","--theme-colors-background-disabled-wlv":"#0C06560F","--theme-colors-on-background-header-wlv":"#000000","--theme-colors-surface-wlv":"#fbf6f2","--theme-colors-on-surface-wlv":"#000000","--theme-colors-on-surface-border-wlv":"#0C06563D","--theme-colors-on-surface-subdued-wlv":"#0C06567A","--theme-colors-surface-disabled-wlv":"#0C06560F","--theme-colors-on-surface-header-wlv":"#000000","--theme-colors-info-wlv":"#000000","--theme-colors-info-hover-wlv":"#000000","--theme-colors-info-active-wlv":"#000000","--theme-colors-on-info-wlv":"#fbf6f2","--theme-colors-info-container-wlv":"#efefef","--theme-colors-on-info-container-wlv":"#000000","--theme-colors-success-wlv":"#25AF72","--theme-colors-success-hover-wlv":"#1E8C5B","--theme-colors-success-active-wlv":"#166944","--theme-colors-on-success-wlv":"#FFFFFF","--theme-colors-success-container-wlv":"#E5F5EE","--theme-colors-on-success-container-wlv":"#0F462E","--theme-colors-warning-wlv":"#EEB765","--theme-colors-warning-hover-wlv":"#BE9251","--theme-colors-warning-active-wlv":"#8F6E3D","--theme-colors-on-warning-wlv":"#FFFFFF","--theme-colors-warning-container-wlv":"#FDF6ED","--theme-colors-on-warning-container-wlv":"#5F4928","--theme-colors-error-wlv":"#EE657A","--theme-colors-error-hover-wlv":"#BE5162","--theme-colors-error-active-wlv":"#8F3D49","--theme-colors-on-error-wlv":"#FFFFFF","--theme-colors-error-container-wlv":"#FDF0F2","--theme-colors-on-error-container-wlv":"#5F2831","--theme-colors-neutral-wlv":"#000000","--theme-colors-neutral-hover-wlv":"#2E2E2E","--theme-colors-neutral-active-wlv":"#454545","--theme-colors-on-neutral-wlv":"#FFFFFF","--theme-colors-neutral-container-wlv":"#F1F1F1","--theme-colors-on-neutral-container-wlv":"#000000"}};function h(){v.innerHTML="",v.appendChild(function(){const e=document.createElement("div");return e.style="margin-bottom: 10px;",Object.keys(m).forEach((o=>{const t=document.createElement("button");t.style="all: revert;margin-right:10px;",t.innerHTML=o,t.addEventListener("click",(()=>{y(o)})),e.appendChild(t)})),e}()),v.appendChild(function(){const e=document.createElement("div"),o=document.createElement("button");o.style="all: revert; margin-right: 10px; margin-bottom: 10px;",o.innerHTML="Save",o.onclick=w,e.appendChild(o);const t=document.createElement("button");return t.style="all: revert; margin-bottom: 10px;",t.innerHTML="Load",t.onclick=p,e.appendChild(t),e}()),Object.keys(m.Default).map(u).forEach((e=>{v.appendChild(e)}))}const v=document.createElement("div");function u(e){const o=document.createElement("label");o.style="\n              display: flex;\n              align-items: center;\n          ";const t=document.createElement("input");t.type="color",t.value=F(e),t.addEventListener("input",(()=>{f(e,t.value,!1)})),o.appendChild(t);const n=document.createElement("span");return n.style="margin-left: 10px;",n.innerHTML=function(e){return e.replace("--theme-","").replace("colors-","").replace("-wlv","").replaceAll("-"," ")}(e),o.appendChild(n),o}function w(){const e={};Object.keys(m.Default).forEach((o=>{e[o]=F(o)}));const o=document.createElement("a"),t=JSON.stringify(e,null,"\t"),n="data:text/json;charset=utf-8,"+encodeURIComponent(t);o.setAttribute("href",n),o.setAttribute("download","theme.json"),o.click()}function p(){const e=document.createElement("input");e.type="file",e.onchange=()=>{const o=e.files[0],t=new FileReader;t.onload=()=>{const e=JSON.parse(t.result);Object.keys(e).forEach((o=>{f(o,e[o])}))},t.readAsText(o)},e.click()}function F(e){const o=document.querySelector(":root");let t=getComputedStyle(o).getPropertyValue(e);return t||(c(`get ${e}`),t=m.Default[e]),t}function f(e,o,t=!0){document.querySelector(":root").style.setProperty(e,o),t&&h(),c(`set ${e} ${o}`)}function y(e){const o=m[e];Object.keys(o).forEach((e=>{f(e,o[e],!1)})),h()}const E=document.createElement("div");function g(e,o){const n="zShow"+e,r=document.createElement("div");E.appendChild(r);let c=function(e){const o=localStorage.getItem(e);return o?JSON.parse(o):o}(n);const l=()=>{r.innerHTML="";const s=document.createElement("h1");s.innerHTML=e,s.style=t`
          all: revert;
          font-size: 20px;
          line-height: 1.5;
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          cursor: pointer;
        `,s.onclick=()=>{c=!c,function(e,o){localStorage.setItem(e,JSON.stringify(o))}(n,c),l()},r.appendChild(s);const a=document.createElement("div"),i=t`
            display: inline-block;
            width: 0; 
            height: 0; 
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid white;
            margin: 5px;
        `,d=t`
            display: inline-block;
            width: 0; 
            height: 0; 
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid white;
            margin: 5px;
        `;a.style=c?d:i,s.prepend(a);const m=document.createElement("div");m.style.display=c?"block":"none",m.appendChild(o()),r.appendChild(m)};l()}n&&function(){if(l)return;document.body.style="overflow: hidden;";const e=document.querySelector("#root").querySelector("div");l=new ResizeObserver((e=>{const o=Math.ceil(e[0].target.getBoundingClientRect().height);window.parent.postMessage("height "+o,"*")})),l.observe(e)}(),window.addEventListener("message",(o=>{const t=""+o.data;if("loaded"===t)c("load "+e),s&&(y("Brödernas"),c("addCloseButton"));else if(t.match(/^set/)){const[e,o,n]=t.split(" ");f(o,n)}else if(t.match(/^height/)){const e=r();e.height=t.split(" ")[1]+"px",e.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}else t.match(/^load/)||("close"===t?a():"addCloseButton"===t?i():o.data?.request)})),window.parent&&window.parent.postMessage("loaded","*");var b=["Green.css"];const C={};const x=F("--theme-colors-primary-wlv");if((r()||x)&&!n&&!s){let e=document.querySelector("zTools");e?e.innerHTML="":(e=document.createElement("zTools"),e.style=t`
          position: fixed;
          top: 100px;
          left: 100px;
          max-height: 50%;
          overflow: auto;

          z-index: 99999999999;
          padding: 40px;
          color: white;
          background: rgba(0, 0, 0, 0.8);
        `,function(e){function o(o){if(o.target!==e)return;o.preventDefault();let t=o.clientX||o.touches[0].clientX,n=o.clientY||o.touches[0].clientY;const r=o=>{const r=o.clientX||o.touches[0].clientX,c=o.clientY||o.touches[0].clientY;let l=r-t,s=c-n;e.style.left=e.offsetLeft+l+"px",e.style.top=e.offsetTop+s+"px",t=r,n=c};function c(){window.removeEventListener("mousemove",r),window.removeEventListener("touchmove",r),window.removeEventListener("mouseup",c),window.removeEventListener("touchend",c)}window.addEventListener("mousemove",r),window.addEventListener("touchmove",r),window.addEventListener("mouseup",c),window.addEventListener("touchend",c)}e.addEventListener("mousedown",o),e.addEventListener("touchstart",o)}(e),document.body.appendChild(e)),e.appendChild(function(){const e=document.createElement("a");e.style=t`
      display: inline-block;
      position: absolute;
      top: 10px;
      left: 10px;
      width: 20px;
      height: 20px;
      transform: rotate(45deg);
    `,e.onclick=o=>{o.preventDefault(),e.parentElement.remove()};const o=document.createElement("div");o.style=t`
        width: 20px;
        border: 2px solid white;
        border-radius: 2px;
        position: absolute;
        top: 8px;
        left: 0;
    `,e.appendChild(o);const n=document.createElement("div");return n.style=t`
        height: 20px;
        border: 2px solid white;
        border-radius: 2px;
        position: absolute;
        top: 0;
        left: 8px;
    `,e.appendChild(n),e}()),e.appendChild(d("Find Caspeco elements",(function(){const e=e=>console.log(e),o=[...[...document.querySelectorAll("script")].filter((e=>e.innerHTML.includes("caspeco"))),...[...document.querySelectorAll("*")].filter((e=>e.className.includes&&e.className.includes("caspeco")))];o.length?o.forEach(e):console.log("Could not find any Caspeco elements")}))),e.appendChild(E),g("Theme",(function(){return h(),v})),g("Css",(function(){const e=document.createElement("div");return b.forEach((t=>{const n=d(t,(()=>{if(o)window.z.loadFile(t);else{C[t]?.remove();const e=document.createElement("link");e.rel="stylesheet",e.href=`https://zyrica-caspeco.github.io/dist/css/${t}`,document.head.appendChild(e),C[t]=e}}));e.appendChild(n)})),e}))}}();
