var num1=prompt("First number");
var num2=prompt("Second number");
var num3=prompt("Third number");
let largest;
if(num1>num2 && num1>num3){
    largest=num1;
}
else if(num2>num1 && num2>num3){
    largest=num2;
}
else{
    largest=num3;
}
console.log("the largest number is "+largest);