/* Seasonal theme for Newcastle Tidy Towns — changes automatically by date.
   Adds a greeting ribbon and a seasonal hero motif (leaves / snow / blossom)
   or photo (summer / christmas). Decorative only; respects reduced motion. */
(function(){
  function season(){
    var d=new Date(), m=d.getMonth()+1, day=d.getDate();
    if(m===12 && day<=27) return "christmas";
    if(m===12 || (m===1 && day<=6)) return "newyear";
    if(m===1 || m===2) return "winter";
    if(m>=3 && m<=5) return "spring";
    if(m>=6 && m<=8) return "summer";
    return "autumn";
  }
  var GREET={
    autumn:"Happy autumn from Newcastle Tidy Towns",
    winter:"Winter greetings from Newcastle Tidy Towns",
    christmas:"Merry Christmas from Newcastle Tidy Towns",
    newyear:"Happy New Year from Newcastle Tidy Towns",
    spring:"Happy spring from Newcastle Tidy Towns",
    summer:"Happy summer from Newcastle Tidy Towns"
  };
  var key=season();
  document.documentElement.setAttribute("data-season", (key==="newyear")?"winter":key);
  function build(){
    if(!document.querySelector(".season-greet")){
      var g=document.createElement("div");
      g.className="season-greet";
      g.textContent=GREET[key]||GREET.autumn;
      document.body.insertBefore(g, document.body.firstChild);
    }
    var hero=document.querySelector(".hero,.page-hero");
    if(hero && !hero.querySelector(".season-fx")){
      var photo=document.createElement("div");
      photo.className="season-photo"; photo.setAttribute("aria-hidden","true");
      photo.innerHTML='<div class="s-bg"></div><div class="s-ov"></div>';
      var fx=document.createElement("div");
      fx.className="season-fx"; fx.setAttribute("aria-hidden","true");
      fx.innerHTML=new Array(11).join("<span></span>");
      hero.insertBefore(fx, hero.firstChild);
      hero.insertBefore(photo, hero.firstChild);
    }
  }
  if(document.readyState!=="loading") build();
  else document.addEventListener("DOMContentLoaded", build);
})();
