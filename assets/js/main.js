let menu = document.querySelector('#menu-btn');
let menu2 = document.querySelector('.menu-btn');
let navbar = document.querySelector('.nav');
let closeMenu = document.querySelector('.menu_toggle');

menu.onclick = () =>{
    closeMenu.classList.toggle('menuActive');
    navbar.classList.toggle('active');
}
menu2.onclick = () =>{
    closeMenu.classList.toggle('menuActive');
    navbar.classList.toggle('active');
}

$(document).ready(function(){
  $(this).scrollTop(0);
});

// let section = document.querySelectorAll('section');
// let navLink = document.querySelectorAll('.header .nav a');

// window.onscroll = () =>{

//     if(window.scrollY > 0){
//         document.querySelector('.header').classList.add('active');
//     }
//     else{
//         document.querySelector('.header').classList.remove('active');
//     }

//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');

//     section.forEach(sec =>{
         
//         let top = window.scrollY;
//         let height = sec.offsetHeight;
//         let offset = sec.offsetTop - 150;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLink.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header .nav a[href*='+id+']').classList.add('active');
//             });
//         }; 
//     });
// }

let SC = document.querySelector('.scrolldown');

window.onscroll = () =>{

  if(window.scrollY > 0 && SC.style.opacity == "1"){
    document.querySelector('.header').classList.add('active');
  }
  else{
    document.querySelector('.header').classList.remove('active');
  }

  // let bgColorChange = [...document.querySelectorAll('.project')];
  
  if(window.scrollY > window.innerHeight / .3){
    document.body.classList.add('bgNytroRed')
  }
  else{
    document.body.classList.remove('bgNytroRed')
  }

}


// social Media Hover Animation //


let socialIcons = document.querySelectorAll('.media ul li a');
let wrapper = document.querySelector('.wrapper');
let socialContainer = document.querySelector('.social-section');

socialIcons.forEach(element => {
    element.addEventListener('mouseover', function(event){
        let color = event.target.getAttribute('data-color');
        wrapper.style.background = color;
        socialContainer.style.top = '0%';
    });
    element.addEventListener('mouseout', function(event){
        
        wrapper.style.background = 'transparent';
        wrapper.style.backgroundImage = "url('/assets/img/bg_dots.png')";
        socialContainer.style.top = '99%';
    })
})

$(document).ready(function(){
    $('.media ul .face').hover(
    function(){
        $('#face').css("opacity","1");
        $('#face').css("top","0px");
    },
    function(){
        $('#face').css("opacity","0");
        $('#face').css("top","-150px");
    }
);
$('.media ul .link').hover(
    function(){
        $('#link').css("opacity","1");
        $('#link').css("top","0px");
    },
    function(){
        $('#link').css("opacity","0");
        $('#link').css("top","-150px");
    }
);
$('.media ul .inst').hover(
    function(){
        $('#inst').css("opacity","1");
        $('#inst').css("top","0px");
    },
    function(){
        $('#inst').css("opacity","0");
        $('#inst').css("top","-150px");
    }
);
});

// Detect the current page using the body class
if (!document.body.classList.contains('animate-page')) {
  // Remove GSAP animation for non-animated pages
  gsap.set(".animate", { clearProps: "all" }); // Reset GSAP styles

} else {


if(window.innerWidth > 567){
  var textWrapper = document.querySelector(".hero_section_heading");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline().add({
    targets: ".hero_section_heading .letter",
    translateY: [-200, 0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 4500 + 30 * i,
  });
}else{
  anime.timeline().add({
    targets: ".hero_section_heading",
    translateY: [-200, 0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 4500 + 30 * i,
  });
}



TweenMax.staggerFrom(
  ".hero_section > .block",
  2,
  {
    y: "110%",
    ease: Expo.easeInOut,
    delay: 1,
  },
  0.4
);
TweenMax.to(".overlay", 0.5, {
  x: "-200%",
  ease: Expo.easeInOut,
  delay: 3.2,
});

TweenMax.to(".hero_section", 2, {
  scale: "2",
  y: "70%",
  ease: Expo.easeInOut,
  delay: 3.5,
});

TweenMax.staggerFrom(
  ".header > div",
  1.6,
  {
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut,
    delay: 4,
  },
  0.08
);
TweenMax.staggerFrom(
  "#menu-btn > div",
  1,
  {
    opacity: 0,
    y: -100,
    ease: Power2.easeOut,
    delay: 4.5,
  },
  0.1
);
TweenMax.staggerFrom(
  ".logo",
  1,
  {
    opacity: 0,
    y: -100,
    ease: Power2.easeOut,
    delay: 5,
  },
  0.1
);
TweenMax.staggerFrom(
  "#contact-btn",
  1,
  {
    opacity: 0,
    y: -100,
    ease: Power2.easeOut,
    delay: 5.5,
  },
  0.1
);

TweenMax.staggerFrom(
    ".media",
    1,
    {
      opacity: 0,
      y: -100,
      ease: Power2.easeOut,
      delay: 5.5,
    },
    0.1
);

TweenMax.staggerFrom(
    ".scrolldown",
    1,
    {
        opacity: 0,
        y: -100,
        ease: Power2.easeOut,
        delay: 5.5,
    },
    0.1
);


// $(document).ready(function(){
//   function greet(){
//     if ($('.hero_section').css('transform') == 'translate(-50%, -50%) translate(0px, 80%) scale(2, 2)')
//   {
//     alert('done');
//   }else{
//     alert('error');
//   }
//   }
//   setTimeout(greet, 8000);
  
// });


// Home Scroll Animation //


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

// Animate From
// if (window.innerWidth > 1080){
//   $(".home").each(function (index) {
//     let triggerElement = $(this);
//     let targetElement = $(".hero_section");
//     let targetElement2 = $(".hero_section_text p");

//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: triggerElement,
//         // trigger element - viewport
//         start: "top top",
//         end: "-120% bottom",
//         scrub: 1,
        
//       }
//     });

//     tl.to(targetElement, {
//       x: "-85%",
//       y:'100%',
//       position: 'fixed',
//       top:'20%',
//       duration: 1
//     });
//     tl.to(targetElement2, {
//       y:'0%',
//       duration: 1
//     });
  
//   });

// }else{
//   $(".home").each(function (index) {
//     let triggerElement = $(this);
//     let targetElement = $(".hero_section");
//     let targetElement2 = $(".hero_section_text p");

//     let tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: triggerElement,
//         // trigger element - viewport
//         start: "top top",
//         end: "-120% bottom",
//         scrub: 1,
        
//       }
//     });

//     tl.to(targetElement, {
//       x: "-60%",
//       y:'100%',
//       scale:'1.5',
//       position: 'fixed',
//       top:'20%',
//       duration: 1
//     });
//     tl.to(targetElement2, {
//       y:'0%',
//       duration: 1
//     });
  
//   });
// }


// Animate From
$(".heading_move").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "-120% top",
      end: "bottom bottom",
      scrub: 1
    }
  });
  tl.to(targetElement, {
    y: "100%",
    duration: 1
  });
});

// Animate From To
$(".sticky_circle_wrapper").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".sticky_circle_animation");
  let targetElement1 = $(".ai-wave");
  // let targetElement2 = $(".hero_section_text p");
  let targetElement3 = $(".cmd_section");
  let targetElement4 = $(".skills_col");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "-10% top",
      end: "bottom 150%",
      scrub: 1
    }
  });
  tl.fromTo(targetElement1, {
      display: "flex",
    },
    {
      display:'none',
      // duration: 1
    }
  );
  tl.fromTo(targetElement, {
    width: "200px",
    height: "200px",
    borderRadius: "30em",
    background: 'transparent',
    },
    {
      width: "95vw",
      height: "90vh",
      borderRadius: "0em",
      background: '#eee',
      // Animation:'none',
      boxShadow:'none',
    
      duration: 1
    }
  );

  // tl.fromTo(targetElement1, {
  //   opacity: "1",
  //   display: "block",
  //   },
  //   {
  //     opacity: "0",
  //     display: "none",
  //     duration: 1
  //   }
  // );
  // tl.fromTo(targetElement2, {
  //   opacity: "1",
  //   display: "block",
  //   },
  //   {
  //     opacity: "0",
  //     display: "none",
  //     duration: 1
  //   }
  // );
  tl.fromTo(targetElement3, {
    display: "none",
    
    },
    {
      display: "grid",
      duration: 1
    }
  );
  tl.fromTo(targetElement4, {
    opacity: "0",
    x: "80%",
    },
    {
      opacity: "1",
      x: "0",
      duration: 1
    }
  );
});


const roundText = document.querySelector('.circle p');
roundText.innerHTML = roundText.innerText.split('').map(
  (char, i) =>
    `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');

// Animate From

$(".main_heading").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);
  // let targetElement2 = $('.main_heading::after');

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top 100%",
      end: "100% bottom",
      scrub: 1
    }
  });
  tl.from(targetElement, {
    x: "-100%",
    duration: 3
  });
  // tl.from(targetElement2,{
  //   left: "10%",
  //   duration: 1
  // })
});



// Animate From To
// $(".sticky_circle_wrapper").each(function (index) {
//   let triggerElement = $(this);
//   let targetElement = $("body");

//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: triggerElement,
//       // trigger element - viewport
//       start: "center top",
//       end: "center bottom",
//       scrub: 1
//     }
//   });
//   tl.fromTo(targetElement, {
//     background: "var(--dark)",
//     transition: '.6s all'
//     },
//     {
//       background: "var(--nytroRed)",
//       duration: 1
//     }
//   );
// });


// Project Scetion Animation //

let stickySection = [...document.querySelectorAll('.sticky_section')];

function animate(){
  for(let i = 0; i < stickySection.length; i++){
    let {top} = stickySection[i].parentElement.getBoundingClientRect();
    let transTop = top > 0 ? 0 : top * - .8;
    if(transTop >= 1000) transTop = 1000;

    if(top <= 0 && i !== stickySection.length - .8){
      stickySection[i].style.filter = `blur(${0 + (transTop * .02)}px)`;
      stickySection[i].style.transform = `scale3d(${1 - (transTop * 0.0005)}, ${1 - (transTop * 0.0005)}, 1)`;
      stickySection[i].style.opacity = 1 - (transTop * 0.0015);
    }
  }
  requestAnimationFrame(animate);
}

animate();

// let bgColorChange = document.querySelectorAll('.project');

// bgColorChange.forEach(element => {
//     element.addEventListener("mouseover", function(event){
//         let color = event.target.getAttribute('data-color');
//         document.body.style.background = color;
//     });
//     element.addEventListener('mouseout', function(event){
//       document.body.style.background = 'var(--dark)';
//     })
// })

const typedText = document.querySelector('.typed-text');
const typedText2 = document.querySelector('.typed-text2');
const typedText3 = document.querySelector('.typed-text3');
const texts = ["Html Css Bootstrap Tailwind css Javascript jQuery"];
const texts2 = ["WordPress Shopify Webflow Squarespace Wix GoHighLevel"];
const texts3 = ["Cpanel Hpanel Cyberpanel AWS"];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < texts[textIndex].length) {
    typedText.textContent += texts[textIndex].charAt(charIndex);
    typedText2.textContent += texts2[textIndex].charAt(charIndex);
    typedText3.textContent += texts3[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } 
  else {
    setTimeout(() => {
      typedText.textContent = "";
      typedText2.textContent = "";
      typedText3.textContent = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
      textIndex = (textIndex + 1) % texts2.length;
      textIndex = (textIndex + 1) % texts3.length;
      typeText();
    }, 3000);
  }
}

typeText();

document.addEventListener("DOMContentLoaded",function(){
	this.querySelector(".icon").addEventListener("click",function(){
		let waitClass = "waiting",
			runClass = "running",
			cl = this.classList;

		if (!cl.contains(waitClass) && !cl.contains(runClass)) {
			cl.add(waitClass);
			setTimeout(function(){
				cl.remove(waitClass);
				setTimeout(function(){
					cl.add(runClass);
					setTimeout(function(){
						cl.remove(runClass);
					}, 4000);
				}, 200);
			}, 1800);
		}
	});
});

// JavaScript code to download a PDF 4 seconds after button click

document.getElementById('download_btn').addEventListener('click', function() {
  setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/assets/cv/Zeeshan-Farooq(Web-Developer).pdf'; // Replace with the actual PDF file path
      link.download = 'file.pdf'; // Desired file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }, 4500); // 4500 milliseconds = 4.5 seconds
});

$(document).ready(function(){
  $('.project_gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows:false,
    speed: 300,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

}