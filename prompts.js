var str = "Hello";
var str2 = str;
//What is str2? "Hello"
// console.log(str2);

str.concat(" World");
// What is str? "Hello"
// console.log(str);
// What is str2 "Hello"
// console.log(str2);

str = str.concat(" World");
//What is str2? "Hello"
// console.log(str2);


var arr1 = [1,2,3,4,5];
var arr2 = arr1;
//What is arr2?  [1,2,3,4,5]
// console.log(arr2);

arr1.concat([6]);
// What is arr1? [1,2,3,4,5]
console.log(arr1);
// What is arr2 [1,2,3,4,5]
console.log(arr2);


var arr = [1,2,3,4,5];
var anotherArray = arr;
arr.push(6);
//What is arr? [1,2,3,4,5,6]
// console.log(arr);
//What is anotherArray? [1,2,3,4,5,6]
// console.log(anotherArray);

arr = [1,2,3,4,5,6,7];
// What is anotherArray? [1,2,3,4,5,6]
// console.log(anotherArray);

// Why is the function below considered impure? //because your mutating the input.
var addOne = function(numOrArray) {
  if(Array.isArray(numOrArray)) {
    numOrArray.push(1);
    return numOrArray;
  } else {
    numOrArray++;
    return numOrArray;
  }
};

var num = 5;
var array = [1,2,3];
addOne(num);
addOne(array);

// console.log(num); // 5
// console.log(array);  //[1,2,3,1]

//How do we make changes to an array without mutating it? Can you refactor addOne to make it a pure function?

var addOneNoMutation = function(numOrArray) {
  if(Array.isArray(numOrArray)) {
    var result = numOrArray.slice();
    result.push(1);
    return result;
  } else {
    numOrArray++;
    return numOrArray;
  }
};

var array = [1,2,3];
// console.log( addOneNoMutation(array) );
// console.log(array);
