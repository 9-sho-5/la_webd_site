var scroll = anime.timeline({
    direction: 'alternate',
    loop:true,
    easing:'easeInOutSine'
});
scroll
    .add({
        targets: '.line span',
        left: "120px",
        duration: 1000,
        delay: 1000
    })

// headerをページの100px以下になると表示しない
let target = document.querySelector("header").getBoundingClientRect();
let first_view_height = null;
if(document.querySelector("section.top")){
    first_view_height = document.querySelector("section.top").clientHeight;
    window.onscroll = function() {
        if(window.pageYOffset <= first_view_height - 100){
            document.querySelector("header").style.opacity = 0;
        } else {
            document.querySelector("header").style.opacity = 1;
        }
    }
}

// fadeIn animation
document.addEventListener("DOMContentLoaded", function(){
    new addAminateClass('.anime');
    new addAminateClass('.h_line');
})

class addAminateClass {
    constructor(property){
        const cb = function(entries, observer){
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('animated');
                }
            });
        }
        this.DOM = {};
        this.DOM.pps = document.querySelectorAll(property);
        this.DOM.io = new IntersectionObserver(cb);
        this.DOM.pps.forEach(pp => this.DOM.io.observe(pp));
    }
}