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
        },20)
    }
});
tl.to('.line h2',{
    animationName: "loderAnime",
    opacity:1
});
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:2.7
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
// cursurAnimation()
locomativeAnimation()


function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272795162484913},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.5,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        gooey:true
    })
}

sheryAnimation()