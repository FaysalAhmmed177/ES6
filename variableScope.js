var name = "Faysal";//variable global Scope

function myFun(){
    console.log(name);

    var a = 10;//variable local scope
    console.log(a);
}

myFun();