function tabuada(){
   var num = window.document.getElementById("num")
   var end = window.document.getElementById("end")
   var res = window.document.getElementById("resposta")
   var n = Number(num.value) 
   var e = Number(end.value)
   x = 0
  
   if(n == "" || e == ""){
    window.alert("Preencha as informações!!!")
   }else{
    res.innerHTML = `A tabuada do ${n} é: <br>`
    do{
       r  = n * x
       res.innerHTML += `${n} X ${x} = ${r} <br>`
       x++
    }while(x <= e)
   }

}