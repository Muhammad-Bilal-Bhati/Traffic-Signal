let red = document.querySelector(".circle1")
let yellow = document.querySelector(".circle2")
let green = document.querySelector(".circle3")

async function applySignal(){
    while(true){
    await signal("red",5000)
    await signal("yellow",2000)
    await signal("green",3000)
    }
}


function signal(color,delay){
    return new Promise((resolve,reject) => { 

        red.style.backgroundColor = "rgb(43, 6, 6)";
        yellow.style.backgroundColor = "rgb(61, 61, 7)"
        green.style.backgroundColor =  "rgb(9, 43, 9)"

        if(color == "red"){
            red.style.backgroundColor = "red"
        }
        else if(color == "yellow"){
            yellow.style.backgroundColor = "yellow"
        }
        else if(color == "green"){
            green.style.backgroundColor = "green"
        }
        
        setTimeout(reject, delay);
     })
}

applySignal()