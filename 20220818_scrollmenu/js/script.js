let $oneTop = $("#v01").offset().top;
let $twoTop = $("#v02").offset().top;
let $threeTop = $("#v03").offset().top;
//$는 제이쿼리변수라는 뜻

// $(".menuWrap>a").eq(0).click(function(e){
//     e.preventDefault();
//     $(".menuWrap>a").removeClass("active");
//     $(this).addClass("active");
//     $("html,body").stop().animate({scrollTop:$oneTop})
// })

// $(".menuWrap>a").eq(1).click(function(e){
//     e.preventDefault();
//     $(".menuWrap>a").removeClass("active");
//     $(this).addClass("active");
//     $("html,body").stop().animate({scrollTop:$twoTop})
// })

// $(".menuWrap>a").eq(2).click(function(e){
//     e.preventDefault();
//     $(".menuWrap>a").removeClass("active");
//     $(this).addClass("active");
//     $("html,body").stop().animate({scrollTop:$threeTop})
// })

$(".menuWrap>a").click(function(e){
    e.preventDefault();
    $(".menuWrap>a").removeClass("active");
    $(this).addClass("active");

    let st = $(".scene").eq($(this).index()).offset().top;
    $("html,body").stop().animate({scrollTop:st})
})

$(window).on("scroll",function(){
    let scrollY = $(window).scrollTop();
    console.log(scrollY)
    //if(scrollY >= oneTop)
    // #1
    // if($oneTop <= scrollY){
    //     $(".menuWrap a").removeClass("active").eq(0).addClass("active")
    // }
    // if($twoTop <= scrollY){
    //     $(".menuWrap a").removeClass("active").eq(1).addClass("active")
    // }
    // if($threeTop <= scrollY){
    //     $(".menuWrap a").removeClass("active").eq(2).addClass("active")
    // }

    for(let i=0;i<$(".scene").length;i++){
        if( $(".scene").eq($(this).index()).offset().top <= scrollY){
            $(".menuWrap a").removeClass("active").eq($(this).index()).addClass("active")
        }
    }

    $(".scene").each(function(index){
        if( $(this).offset().top <= scrollY){
            $(".menuWrap a").removeClass("active").eq(index).addClass("active")
        }
    })
})