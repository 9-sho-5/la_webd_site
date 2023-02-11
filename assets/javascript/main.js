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

//「開く」がクリックされた場合
$(document).on('click', '.ham_menu', function () {
    if ($('body').css('overflow-y') == 'auto') {
        $('.ham_menu[data-state="inactive"]').attr('data-state', 'active');
        $('.window-fixed').css('opacity', '1');
        $('.window-fixed').css('pointer-events', 'all');
        $('.window-fixed').css('transform', 'translateX(0%)');
        $('body').css('overflow-y', 'hidden');  // 本文の縦スクロールを無効s
    } else if ($('body').css('overflow-y') == 'hidden') {
        $('.ham_menu[data-state="active"]').attr('data-state', 'inactive'); // モーダルウィンドウを非表示
        $('.window-fixed').css('opacity', '0');
        $('.window-fixed').css('pointer-events', 'none');
        $('.window-fixed').css('transform', 'translateX(100%)');
        $('body').css('overflow-y', 'auto');     // 本文の縦スクロールを有効
    };
});