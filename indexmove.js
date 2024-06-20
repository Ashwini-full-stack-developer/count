let number=0;
let incrementNum=document.getElementById("But_Increment");
incrementNum.onclick=()=>{
            
    number=number+1
    document.getElementById("display").innerHTML=number
    }

let dicrementNum=document.getElementById("But_Dicrement");
dicrementNum.onclick=()=>{
    number=number-1
    document.getElementById("display").innerHTML=number
    }

let ResetNum=document.getElementById("But_Reset");
ResetNum.onclick=()=>{
    number=null
    document.getElementById("display").innerHTML=number
    }