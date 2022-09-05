//Sum of all numbers in an array
var sum =(array)=>{
    var addition =0;
    for(var val of array){
        addition+=val;
    }
    return addition
}

console.log(sum([10, 15]))


//Convert all the strings to title caps in a string array

var titleCase =(str) => {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }
  
  console.log(titleCase("this is my project"))


  //Print odd numbers in an array

  var printOdd = (array1) =>{
    for(let i=0; i<array1.length; i++){
        if(i %2!==0){
            console.log([i])

        }
    }
  }

  printOdd([1,2,3,4,5])


  //Return all the prime numbers in an array

  const array =[2,3,4,5,6,7,8,9,10]
  var isprime =(num)=>{
    for(let start=2;num>start;start++){
        if(num%start==0){
            return false
        }
    }
    return num >1;
  }

  console.log(array.filter(isprime))

  //Return all the palindromes in an array


  var palindrome= (str)=> {

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




