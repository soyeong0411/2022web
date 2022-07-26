
$(".itemWrap>li").click(function(){
    console.log($(this).index());

    let i = $(this).index();
    $("#image>p").hide();
    $("#image>p").eq(i).show();

    // 주어가 같으면 같이 써도 괜찮음$("#image>p").hide().eq(i).show();
})

let current = 0;
$(".right").click(function(){
    current++;
    if(current==3){
        current=0
    }
    console.log(current);

    let value = current * -760;
    //$(".itemWrap").css("left",current*-760)    //dom.css("left",value).css() / dom.css({"left":value})
    $(".itemWrap").animate({"left":value},300)

})

$(".left").click(function(){
    current--;
    if(current<0){
        current=2
    }
    let value = current * -760;
    $(".itemWrap").animate({"left":value},300)
})



$(".right").click(function(){
    current++;
    viewCurrent(current)
})
$(".left").click(function(){
    current--;
    viewCurrent(current)
})

function viewCurrent(count){
    console.log(count)
}