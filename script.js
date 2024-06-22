const h2= document.createElement("h2");
h2.textContent = "content  by Java Script";
document.querySelector("body").appendChild(h2);
//sticky navbar
window.addEventListener("scroll" , function(){
const navbar = this.document.querySelector(' .navbar');
navbar.classList.toggle('sticky' , window.scrollY> 0);
}
);
// smooth scrolling for anchorlinks
document.querySelectorAll('a[href^="#"]') .forEach(anchor =>{
     addEventListener('click' , function (e) ){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')) .scrollintoview({
            behaviour: 'smooth'
        });

     };
});