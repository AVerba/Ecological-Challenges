const e=new Swiper(".slider",{allowTouchMove:!1,on:{slideChange:function(){this.activeIndex,this.slides.length}}});document.querySelectorAll(".next-slide-button").forEach((n=>{n.addEventListener("click",(async function(n){n.preventDefault(),e.slideNext()}))}));
//# sourceMappingURL=index.6a6d5a26.js.map
