function Calculation(a,b,...numbers){
console.log(numbers)
console.log(numbers[4]);
var sum = 0;
  for ( var i of numbers)
  {
      sum +=i;
  }
  console.log(sum);

}

Calculation(1,2,3,4,5,6,7,8,9);