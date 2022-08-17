
new Swiper(".swiper",{
    loop:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
})

$(".banner1 > .row > div").click(function(){
    console.log($(this).index())
    $(this).find(".card-img").removeClass("moon")
})

$(".banner1 > .row > div").hover(function(){
    $(this).find(".card-img").removeClass("moon")
},function(){
    $(".card-img").addClass("moon")
})