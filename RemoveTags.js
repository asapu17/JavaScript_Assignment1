function remove(str){
    if((str==null) || str==" "){
        console.log("string is empty");
    }
    else{
        
        str=str.toString();
        result=str.replace( /(<([^>]+)>)/ig,'');
        console.log(result);    
    }
}
console.log(remove(prompt("enter the string")));