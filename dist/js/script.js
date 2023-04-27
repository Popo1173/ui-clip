window.addEventListener("DOMContentLoaded",()=>
  {
    const o = document.getElementById("modal"),
    e = document.querySelectorAll(".modalOpen"),
    t = document.querySelectorAll(".modalClose"),
    n = new Swiper(".swiper",
      { 
        loop:!0,navigation: { 
          nextEl:".swiper-button-next",
          prevEl:".swiper-button-prev"
        },spaceBetween: 30
      });
      
      e.forEach( t => { 
        t.addEventListener("click",()=> { 
          console.log("click");
          var e = t.getAttribute("data-modal");
          n.slideTo(e), o.classList.add("is-active")
        }
      )}),t.forEach( e => { 
        e.addEventListener("click",() => {
          o.classList.remove("is-active")
        })
    })
  });