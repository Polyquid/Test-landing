document.querySelectorAll(".header-bottom__link").forEach((function(o){o.onclick=function(o){o.preventDefault();var e=this.getAttribute("href"),t=document.querySelector(e).offsetTop-100;window.scrollTo({top:t,behavior:"smooth"})}}));