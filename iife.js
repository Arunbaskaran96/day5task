 //Sum of all numbers in an array
var x= function(array){
    var addition =0;
    for(var val of array){
        addition+=val;
    }
    console.log(addition)
}
x([10,8])

//Convert all the strings to title caps in a string array

  var y = function(str){
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }
  console.log(y("this is my project"))

  //Print odd numbers in an array

  var z = function (array1){
    for(let i=0; i<array1.length; i++){
        if(i %2!==0){
            console.log([i])

        }
    }
  }

  z([1,2,3,4,5])


  //Return all the prime numbers in an array

  const array =[2,3,4,5,6,7,8,9,10]

  var prime = function(num){
    for(let start=2;num>start;start++){
        if(num%start==0){
            return false
        }
    }
    return num >1;
  }

  console.log(prime(array))


  //Return median of two sorted arrays of the same size.

  var median =function (arr1, arr2) {

    var arr3 = arr1.concat(arr2);
    console.log(arr3);
    
    arr3 = arr3.sort(function (a,b) {return a-b});
    
    var length = arr3.length;
    if(length %2==1){
        console.log(arr3(length/2)-.5)
        return arr3[(length/2)-.5]
    }
    else{
        console.log((arr3[length/2]+arr3[(length/2)-1])/2)
        return(arr3[length/2]+arr3[(length/2)-1])/2
    }
    
    }
    
    median([10,20,30], [40,50,60]);

    //Remove duplicates from an array

    var arr = ["apple", "mango","apple", "orange", "mango", "mango"];

    var dup =function(arr) {
    var unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}

console.log(dup(arr));

//Rotate an array by k times


var rotate = function (arr, numberOfShifts) {
    let tmp = 0;
    const leng = arr.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
       tmp = arr.pop();
       arr.unshift(tmp);
    }
   return arr;
  };

  console.log(rotate([1,3,4,5,6,7,8], 3))


  //

  var palindrome =function(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome(["madam"]))





