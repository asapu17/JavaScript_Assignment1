function celsiusFahrenheit(celsius){

    var temp=celsius;
    var cTof = temp * 9/5 + 32;
    console.log(temp +' celsius is '+ cTof + ' fahrenheit');
}

function fahrenheitCelsius(fahrenheit){
    var temp=fahrenheit;
    var fToc=(temp-32)*5/9;
    console.log(temp + ' fahrenheit is '+ fToc + ' celsius');
}
celsiusFahrenheit(prompt("enter celsius temp to convert"));
fahrenheitCelsius(prompt("enter fahrenheit temp to convert"));
