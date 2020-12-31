var billGates = { shirt: true, shirtColor:"offWhite",smile:true,sweater:true, sweaterColor:"gray"}

console.log(billGates['shirt']);

var billGatesPro = { //nested object
    shirt:{
        color:"offwhite",
        quality:"good",
        price:"20$"
    },
    sweater:{
        color:"gray",
        quality:"good",
        price:"25USD",
        warm:"best"
    },
    face:{
        smile:"yes",
        chasma:"yes",
        teeth:"white"
    }
}

console.log(billGatesPro['sweater']['price']);
