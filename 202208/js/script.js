$(".cont-2st .btn-group div").click(function(){
    let i = $(this).index();
    $(".cont-2st .btn-group div").removeClass("active");
    $(this).addClass("active");

    let $selector = $(this).attr("data-filter")

    $(".cont-2st .view").isotope({
        filter: $selector
        //filter: $(this).attr("data-filter")
    })

})

//window가 onload 될 때 실행하라
window.onload = function(){
    $(".cont-2st .btn-group div").eq(0).trigger("click")
}

window.addEventListener("load",function(){
    $(".cont-2st .btn-group div").eq(0).trigger("click")
})

$("#oslide1").owlCarousel({
    loop:true,
    autoplay:true,
    margin:30,
    responsive:{
        0:{items:1},
        760:{items:4},
    }
})
