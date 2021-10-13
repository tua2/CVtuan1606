const Nav_tongger=document.querySelector(".nav-toggler");
Nav_tongger.addEventListener("click", toggleNav);
function toggleNav(){
    document.querySelector(".nav-toggler").classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}
document.addEventListener("click",function(a){
    if(a.target.closest(".nav-item")){
        toggleNav();

    }
})
window.addEventListener("scroll",function(){
    if(this.pageYOffset>60){
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky")
    }
})
const skillsTabs=document.querySelector(".skills-taps");
skillsTabs.addEventListener("click",function(e){
    if(e.target.classList.contains("skills-tap-item")&& !e.target.classList.contains("active")){
        const target=e.target.getAttribute("data-target");
        skillsTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const skillsSection=document.querySelector(".skills-section");
        skillsSection.querySelector(".skills-tap-content.active").classList.remove("active");
        skillsSection.querySelector(target).classList.add("active");
    }
})

