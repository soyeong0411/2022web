console.log("test")

// $(".navbar ul li").mouseover(function(){
//     let i = $(this).index();
//     console.log(i);

//     let value = i*240
//     $(".bar").css("left",value)
// })


$(".navbar ul li").mouseover(over);  //함수가 인자값으로 들어감 =콜백함수
$(".navbar ul li").mouseout(out);

function over(){
    let i = $(this).index();
    let value = i*240;
    $(".bar").css({left:value})
}