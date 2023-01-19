var numbers = [
 
    {
      "arr1" : [1,2,3,4,5,6,7,8,9,10]
    },
    {
      "arr2" : [1,2,3,4,5,6,7,8,9,10,11]
    },
    {
      "arr3" : [1,2,3,4,5,6,7,8,9,10]
    },
    {
      "strings" : ["a","b","c","i","o","u"]
    }
  ] 

  
// Q.s 1  from arr1 print the sqaure of even number 

for(var i=0; i<numbers.length; i++){
    // console.log(numbers[i]);
    // console.log(numbers[i].arr1);
    for(var j=0; j<numbers[0].arr1.length; j++){
      // console.log(numbers[i].arr1[j]);
      if(numbers[i].arr1[j]%2==0){
        var ans=numbers[i].arr1[j]**2;
        console.log(ans);
      } 
     } 



// Q.s 2  from arr2 print the cube of odd number

// console.log(numbers[1].arr2) 
for(var z=0; z<numbers[1].arr2.length; z++){
      var res2=(numbers[1].arr2[z]);
    if(res2%2!==0){
        var result=res2**3; 
        console.log(result);
    }
}


// Q.s 3  find product of all element present in arr3 

var product=1;
for(var k=0; k<numbers[2].arr3.length; k++){
    var ele=numbers[2].arr3[k];
    var product=product*ele; 
} 

console.log(product);

// Q.s 2 from above dataset print the string which is not a vowel 

// console.log(numbers[3].strings)
for(var m=0; m<numbers[3].strings.length; m++){
    var str=numbers[3].strings[m] 
    if(str=="a"||str=="e"||str=="i"||str=="o"||str=="u"){
      //  console.log(str);
      continue;
     }
     else{
      console.log(str);
     }
    
}

}

