function Pal(str)
{
    var len=str.length;
    var mid=Math.floor(len/2);
    
    for(let i=0;i<mid;i++)
    {
        if(str[i]!==str[len-1-i]){
            alert("not a palindrome");
        }
    
    }
    alert("palindome");
}
var str=prompt("enter the value");
var result=Pal(str);
console.log(result);