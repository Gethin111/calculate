// Gethin Wu Guoxiang
function myFunction(){
    var a =document.getElementById("myText1").value//Get value of a
    var b =document.getElementById("myText2").value//Get value of b
    if(isNaN(a)|isNaN(b)){//Whether the input is a number?
    document.getElementById("demo").innerHTML = "type in number"
    }
    else{
        w=Number(a)+Number(b)
        document.getElementById("demo").innerHTML = "a+b= " +w
    }
}