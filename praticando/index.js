var sec = 0
var min = 0
var hr = 0
var interval

function start(){
    console.log("Iniciou")
     interval = setInterval(watch,1)
}

function pause(){
    console.log("Pausou")
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    min = 0
    sec = 0
    hr = 0
    document.getElementById("watch").innerText ='00:00:00'
}

function twodigit(digit){
    if(digit<10){
        return('0'+ digit)


    }else{
        return(digit)
    }


}

function watch(){
    if(sec==60){
        min++
        sec = 0
        if(min ==60){
        hr++
        min=0
        }

    }
    sec++
    document.getElementById("watch").innerText= twodigit(hr) + ":" + twodigit(min) + ":" + twodigit(sec)

    
}