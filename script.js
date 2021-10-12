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