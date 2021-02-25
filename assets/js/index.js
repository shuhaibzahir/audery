// sticky nav bar
 window.addEventListener("scroll", function(){
    var header = document.querySelector("#head");
    if(overlay.classList.contains("active")){
        document.querySelector("#head").classList.remove("sticky")
    }else{
        header.classList.toggle("sticky", window.scrollY > 0     );
    }
   
})

// navbar 
var navbar = document.querySelector(".nav");
var overlay = document.querySelector(".overlay");
var menu = document.querySelector(".menu");
navbar.addEventListener("click", function(){
    if(navbar.classList.contains("active")){
        navbar.classList.remove("fa-times");
    navbar.classList.add("fa-bars");
    }else{
    navbar.classList.remove("fa-bars");
    navbar.classList.add("fa-times");
    }
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    if(overlay.classList.contains("active")){
        document.querySelector("#head").classList.remove("sticky")
    }
    menu.classList.toggle("active");
})

var menus = document.querySelectorAll(".menus");
for(let menu of menus){
    menu.addEventListener("click",()=>{
        overlay.classList.remove("active");
        document.querySelector(".menu").classList.remove("active");
        navbar.classList.remove("fa-times");
        navbar.classList.add("fa-bars");
        document.querySelector(".nav").classList.remove("active");
    })
}

// counting
$('.num').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});