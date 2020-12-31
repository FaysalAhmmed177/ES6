//for in loop is best for object property found

var billGates = { shirt: true, shirtColor:"offWhite",smile:true,sweater:true, sweaterColor:"gray"}


for (let props in billGates){
    console.log(props+" = " + billGates[props]);
}