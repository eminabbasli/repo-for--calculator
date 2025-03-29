let number01 = 0;
let number02 = 0;
let result = 0;

// 

function clearNumbers(){
   document.getElementById("res").innerHTML = "__";
   document.getElementById("Number01").value = "";
   document.getElementById("Number02").value = "";
}


function topla(){
   number01 = document.getElementById("Number01").value;
   number02 = document.getElementById("Number02").value;
   result = Number(number01) + Number(number02);
   document.getElementById("res").innerHTML = result;
}


function cıxma(){
   number01 = document.getElementById("Number01").value;
   number02 = document.getElementById("Number02").value;
   result = Number(number01) - Number(number02);
   document.getElementById("res").innerHTML = result;
}





function vurma(){
   number01 = document.getElementById("Number01").value;
   number02 = document.getElementById("Number02").value;
   result = Number(number01) * Number(number02);
   document.getElementById("res").innerHTML = result;
}




function bölmə(){
   number01 = document.getElementById("Number01").value;
   number02 = document.getElementById("Number02").value;
   result = Number(number01) / Number(number02);
   document.getElementById("res").innerHTML = result;
}
