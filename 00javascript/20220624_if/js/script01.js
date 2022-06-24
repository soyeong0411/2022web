
var userInput = prompt("가위,바위,보를 입력하세요");
console.log(userInput)

var num = Math.floor(Math.random()*10);
console.log(num)

// 저장소를 미리 만들어 놔야함

var comInput=""
//comInput
    if(num < 3){
        comInput = "가위";
    }else if(num < 6){
        comInput = "바위";
    }else{
        comInput = "보";
    }

//result
if(userInput != "가위" && userInput != "바위"
    && userInput != "보"){
    alert("가위,바위,보 중 하나를 입력하세요")
    }
    if(userInput == "가위"){
        if(comInput=="가위"){
            result="비김"
        }else if(comInput=="바위"){
            result="컴 win"
        }else{
            result="me win"
        }
    }else if(userInput == "바위"){
        if(comInput=="가위"){
        result="me win"
        }else if(comInput=="바위"){
            result="비김"
        }else{
            result="컴 win"
        }

    }else(userInput == "보"){
        if(comInput=="가위"){
        result="컴 win"
        }else if(comInput=="바위"){
            result="me win"
        }else{
            result="비김"
        }
    }



    

console.log("내꺼 :"+userInput)
console.log("컴 :"+comInput)
console.log("결과 :" +result)
var result=""

// if(userInput != "가위" && userInput != "바위"
//     && userInput != "보"){
//     alert("가위,바위,보 중 하나를 입력하세요")

//     }







// if(userInput != "가위" && userInput != "바위"
//     && userInput != "보"){
//     alert("가위,바위,보 중 하나를 입력하세요")
// }else if(userInput == "가위"){
    
//     if(comInput == "가위"){
//         alert("비겼네요. 다음기회에")
//     }
//     if(comInput =="바위"){
//         alert("당신이 이겼네요. 축하합니다.")
//     }
//     if(comInput == "보"){
//         alert("컴터가 이겼습니다.")
//     }
// }else if(userInput == "바위"){
    
//     if(comInput == "바위"){
//         alert("비겼네요. 다음기회에")
//     }
//     if(comInput =="가위"){
//         alert("컴터가 이겼습니다.")
//     }
//     if(comInput == "보"){
//         alert("당신이 이겼네요. 축하합니다.")
//     }
// }else if(userInput == "보"){
    
//     if(comInput == "바위"){
//         alert("컴터가 이겼습니다.")
//     }
//     if(comInput =="가위"){
//         alert("당신이 이겼네요. 축하합니다.")
//     }
//     if(comInput == "보"){
//         alert("비겼네요. 다음기회에")
//     }
// }

// if(userInput != "가위" && userInput != "바위"
//     && userInput != "보"){
//     alert("가위,바위,보 중 하나를 입력하세요")
// }else{
    
//     if(userInput == "가위"){
//         alert("비겼네요. 다음기회에")
//     }
//     if(userInput =="바위"){
//         alert("당신이 이겼네요. 축하합니다.")
//     }
//     if(userInput == "보"){
//         alert("컴터가 이겼습니다.")
//     }
// }

// 외우기!
var num = Math.floor(Math.random()*10); //0 ~ 9 사이 값을 구함
// Math.random() 난수(0~1값)
// Math.floor() 소수점 버림 
console.log(num)

var comInput=""
if(num < 3){
    comInput = "가위";
}else if(num < 6){
    comInput = "바위"
}else{
    comInput = "보"
}
console.log(comInput)
