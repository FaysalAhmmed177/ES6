class myClass{

constructor(a,b){
    this.firstNumber = a;
    this.secondNumber = b;
}
    add() {
        let result = this.firstNumber+this.secondNumber;
        console.log(result);
    }
    
}



var obj = new myClass(3,4);
obj.add();
