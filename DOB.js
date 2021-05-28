function getAge(birth) {
 
    var today = new Date();
    var nowYear = today.getFullYear();
    var nowMonth = today.getMonth();
    var nowday = today.getDate();
 
    var birthYear = birth.getFullYear();
    var birthMonth = birth.getMonth();
    var birthDay = birth.getDate();
 
    var age = nowYear - birthYear;
    var age_month = nowMonth - birthMonth;
    var age_day = nowday - birthDay;
    
    if(age_month < 0 || (age_month == 0 && age_day <0)) {
            age = parseInt(age) -1;
        }
    alert(age);
    
    if (age >=18 && age <= 44) {
        a.href ="https://selfregistration.cowin.gov.in";
    }
    else {
        alert("you are not eligible");
    }
 
}