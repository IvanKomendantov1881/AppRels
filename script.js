const tg = window.Telegram.WebApp;
tg.expand();
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    
    navigation: {
        nextEl: ".ButtonNext",
    },
    
    cardsEffect: {
        perSlideOffset: 8, 
        perSlideRotate: 2, 
        slideShadows: false, 
    },
});