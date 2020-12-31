class parent {
 hello(){
    console.log("Hello i'm from function");
 }
 hello1(){
    console.log("Hello i'm from function2")
}
}

class child extends parent{
   hello1(){ //method override
       
    console.log("Hello");
   }

demo(){
    super.hello();
    super.hello1();
}
}

var obj = new child();
obj.hello();
obj.hello1();

obj.demo();

