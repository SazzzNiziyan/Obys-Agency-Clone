function locomativeAnimation(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

} 
function loadingAnimation(){
    var tl = gsap.timeline()
tl.from(".line h1 ,#h1",{
    y:150,
    stagger:0.25,
    delay:0.5,
    duration:0.6
});
tl.from("#line1-part1 ",{
    opacity:0,
    onStart:function(){
        
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow = 0
        setInterval(function(){
         if(grow<100){
            h5timer.innerHTML = grow++
         }else{
            h5timer.innerHTML = grow
         }
        },28)
    }
});
tl.to('.line h2',{
    animationName: "loderAnime",
    opacity:1
});
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4
});
tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:Power4
})
tl.to("#loader",{
    display : "none"
})
tl.from("#nav",{
    opacity:0
})   
tl.from("#hero1 h1 ,#hero2 h1 ,#hero5 h2 ,#hero4 h1",{
    y:130,
    stagger:0.2
})
tl.from("#hero1 , #page2",{
    opacity:0,
},"-=1.2");
}
function cursurAnimation(){
    const crsr = document.querySelector('#crsr');
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
          left:dets.clientX,
           top:dets.clientY
        })
    
    })

Shery.makeMagnet("#nav-part2 h4");
}
loadingAnimation()
cursurAnimation()
locomativeAnimation()
