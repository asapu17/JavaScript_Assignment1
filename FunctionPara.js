function FamilyName(){
    return "Asapu";
}

function Members(member,fun){

    var msg=fun();
    console.log(`${msg} ${member}`);
}
Members(prompt("Enter your name"),FamilyName);