(()=>{"use strict";const t=function(){var t=document.querySelector(".cards__wrapper"),e=t.querySelectorAll(".card"),a=window.getComputedStyle(t),n=parseFloat(a.paddingLeft)+parseFloat(a.paddingRight);return e.forEach((function(t){n+=t.offsetWidth;var e=window.getComputedStyle(t);n+=parseFloat(e.marginRight)})),n},e=function(){var e=document.querySelector(".cards__wrapper"),a=e.offsetLeft,n=t(),r=window.innerWidth;e.addEventListener("wheel",(function(t){!function(t){var i,o;t.preventDefault(),t.deltaY<0?a+70<=0&&(a+=70,e.style.transform="translateX(".concat(a,"px)")):a>=r-n&&(a-=70,e.style.transform="translateX(".concat(a,"px)")),i=t.deltaY,o=i>0?"forward":"backward",[].slice.call(document.querySelectorAll(".card.first-card")).forEach((function(t){t.classList.contains("animate-right")||t.classList.contains("animate-left")||("forward"===o?t.classList.add("animate-right"):t.classList.add("animate-left"),setTimeout((function(){t.classList.remove("animate-left"),t.classList.remove("animate-right")}),2e3))}))}(t)}))};window.addEventListener("load",(function(){window.innerWidth>768&&(e(),function(){if(window.width>768){var e=t();document.querySelector(".cards__wrapper").style.width="".concat(e,"px")}}())}))})();