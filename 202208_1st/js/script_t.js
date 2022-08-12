$(".cont-2st .btn-group div").click(function(){
    
    $(".cont-2st .btn-group div").removeClass("active");
    $(this).addClass("active");

    let $selector = $(this).attr("data-filter");
    console.log($selector)

    $(".cont-2st .view").isotope({
        filter: $selector
    })
})

// window.onload = function(){
//     $(".cont-2st .btn-group div").eq(0).trigger("click")
// }

window.addEventListener("load",function(){
    $(".cont-2st .btn-group div").eq(0).trigger("click")
})

$("#oslide1").owlCarousel({
    loop:true,
    autoplay:true,
    margin:30,
    responsive:{
        0:{items:1},
        760:{items:2},
        990:{items:4}
    }
})

$("#oslide2").owlCarousel({
    // loop:true,
    center:true,
    dots:true,
    nav:true,
    autoplay:true,
    margin:30,
    navText:['<i class="fa-solid fa-circle-chevron-left dots prve"></i>','<i class="fa-solid fa-circle-chevron-right dots next"></i>'],
    responsive:{
        0:{items:1},
        760:{items:2},
        990:{items:4}
    }
})

$(".view .vPopup").magnificPopup({
    type:"image"
})

const lazyload = document.querySelectorAll(".lazy-load");
// 스크롤 내렸을 때 나타나는 것

console.log(window.innerHeight)  // this=window

window.addEventListener("scroll",function(){
   lazyload.forEach(function(item){  // item은 lazy-load
    const rect = item.getBoundingClientRect().top // viewport (급변)
    console.log(rect)

    if(rect <= window.innerHeight){ // innerHeight 브라우저크기
        item.classList.add("fade")
    }
    // 화면의 경계선과 컨텐츠 위치값이 만났을 떄



   })
})

