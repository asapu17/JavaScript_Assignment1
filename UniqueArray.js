function difference(arr1,arr2) {
  
    var a1= uni(arr1,true);
    var a2= uni(arr2,true);
    
   var a=[], diff=[];
    for(var i=0;i< a1.length;i++){
      
        a[a1[i]]=false;
    }
    for(i=0;i< a2.length;i++){
    if(a[a2[i]]===true) 
    { 
        delete a[a2[i]];
    }
      else {
         
        a[a2[i]]=true;
      }
    for(var k in a){
      
        diff.push(k);
    }
    return diff;   
    }
  
  var uni = function(a, shallow,r){
    if(!r){ 
        r = [];
    }
  if (shallow) {
    
    return r.concat.apply(r,a);
    }  
     for(i=0; i< a.length; i++){
          
        if(a[i].constructor == Array){
              
            uni(a[i],shallow,r);
          }
          else{

             r.push(a[i]);
          }
      }
      return r;
  };
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
