
function navAnimation() {
  let nav = document.querySelector("nav")
  nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline()
    tl.to("#nav2", {
      height: "20vh",

    })
    tl.to(".nav-part2 h5", {
      display: "block",

    })
    tl.to(".nav-part2 h5 span", {
      y: 0,
      //  duration:0.3,
      stagger: {
        amount: 0.5
      }
    })
  })
  nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span", {
      y: 20,
      //  duration:0.3,
      stagger: {
        amount: 0.2
      }
    })
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1

    })
    tl.to("#nav2", {
      height: 0,
      duration: 0.2
    })
  })
}

function page2Animation() {
  let elements = document.querySelectorAll(".right-elem")
  elements.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      console.log(elem.getBoundingClientRect());
      
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1
      })
    }

  )
      elem.addEventListener("mouseleave", () => {
        gsap.to(elem.childNodes[3], {
          opacity: 0,
          scale: 0
        })
      }
    )
        elem.addEventListener("mousemove", (dets) => {
  
          gsap.to(elem.childNodes[3],{
          x:dets.x-elem.getBoundingClientRect().x-50,
          y:dets.y-elem.getBoundingClientRect().y-150
          })
           
          })
       
     
   
  })
}
function page3video(){
  let page3=document.querySelector(".page-center")
  let video=document.querySelector(" #page3 video")
  page3.addEventListener("click",() => {
    video.play()
    gsap.to("video",{
      opacity:1,
      transform:"scaleX(1) scaleY(1)"
    })
  }
  )
  video.addEventListener("click",() => {
    // e.stopPropagation()
    video.pause()
    gsap.to("video",{
      opacity:0,
      transform:"scaleX(0.7) scaleY(0)"
    })
  }
  )
}
function page4animations(){
  let elements=document.querySelectorAll("#page4 .section-2")
  elements.forEach((elem) => {
    elem.addEventListener("mouseenter",() => {
     elem.childNodes[3].style.opacity=1
     elem.childNodes[3].play()
  }
)
elem.addEventListener("mouseleave",() => {
  elem.childNodes[3].style.opacity=0
  elem.childNodes[3].load()
}
)
})
}

page4animations()
page3video()
navAnimation()
page2Animation()
let tl=gsap.timeline()
tl.from("#page1",{
  transform:"scaleX(0.5) scaleY(0) translateY(-50%)",
  duration:1,
  borderRadius:"100px",
  ease:"expo-out"
})
tl.from("nav",{
  opacity:0,
 
})
tl.from("#page1 h1,#page1 div, #page1 p",{
  opacity:0,
   transform:"translateY(-10%)",
  stagger:0.2,
  
})
