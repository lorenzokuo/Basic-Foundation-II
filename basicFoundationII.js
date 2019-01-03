//1.Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(arr){
	for(var i=0; i<arr.length; i++){
		if(arr[i]>0){
			arr[i]="big";
		}
	}
  return arr;
}
//given
console.log(makeItBig([-1,3,5,-5]));

//2.Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr){
	let low=0;
	let high=0;
	for(var i=0;i<arr.length; i++){
		if(arr[i]<low){
			low=arr[i];
		}
		if(arr[i]>high){
			high=arr[i];
		}
	}
	console.log(low);
	return high;
}
//given
printLowReturnHigh([1,2,3,4,5,6,7]);

//3.Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.
function printAndReturn(arr){
	let counter=0;
	console.log(arr[arr.length-2]);
	for(var i=0; i<arr.length;i++){
		if(counter==0){
			if(arr[i]%2==1){
				counter++;
				return arr[i];
			}
		}
	}
}
//given
printAndReturn([2,2,2,4,5,6,7,8]);

//4.Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.
function doubleVision(arr){
	for(var i=0;i<arr.length; i++){
		arr[i]=arr[i]*arr[i];
	}
	return arr;
}
//given
console.log(doubleVision([1,2,3]))


//5.Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPos(arr){
	let counter=0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]>0){
			counter++;
		}
	}
	arr[arr.length-1]=counter;
	return arr;
}
//given
console.log(countPos([-1,1,1,1]));

//6.Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"
function evenAndOdd(arr){
	var oddCount=0;
	var evenCount=0;
	for(var i=0; i<arr.length; i++){
		if(arr[i]%2==1){
			oddCount++;
			evenCount=0;
			if(oddCount>=3){
				console.log("That's odd!")
			}
		}
		if(arr[i]%2==0){
			evenCount++;
			oddCount=0;
			if(evenCount>=3){
				console.log("Even more so!")
			}
		}
	}
}
//given
evenAndOdd([1,2,1,2,1,2,1,2,1]);
evenAndOdd([1,2,2,2,1,2,1,2,1]);
evenAndOdd([1,2,1,1,2,2,1,1,1]);


//7.Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.
function increSec(arr){
	for (var i=1; i<arr.length; i+=2){
		arr[i]+=1;
	}
	console.log(arr);
	return arr;
}
//given
increSec([1,1,1,1,1,1,1,1,1,1]);


//8.Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
function preLeng(arr) {
	for(var i=arr.length-1;i>0;i--){
		arr[i]=arr[i-1].length;
	}
	console.log(arr);
	return arr;
}
//given
preLeng(["hello", "dojo", "awesome"]);

//9.Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function addSeven(arr){
	let newArr=[];
	for (var i=1; i<arr.length; i++){
		newArr.push(arr[i]+7);
	}
	return newArr;
}
//given
console.log(addSeven([1,2,3,4,5,6,7,8]));

//10.Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseArry(arr){
	for(var i=0; i<arr.length/2;i++){
    let temp=arr[i];
		arr[i]=arr[arr.length-i-1];
		arr[arr.length-i-1]=temp;
	}
	return arr;
}
//given
console.log(reverseArry([3,1,6,4,2]));
console.log(reverseArry([1,2,3,4,5,6,7,8,9]));

//11.Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negAll(arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i]>0){
			arr[i]=arr[i]*-1;
		}
	}
  return arr;
}
//given
console.log(negAll([1,-3,5]));

//12.Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.
function alwaysHungry(arr){
	let count=0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]=="food"){
			console.log("yummy");
			count++;
		}
	}
	if(count==0){
		console.log("I'm hungry");
	}
}
//given
alwaysHungry(["food","food","fly,","flow"]);
alwaysHungry(["go","go","go"])

//13.Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swapCenter(arr){
	for(var i=0;i<arr.length/2;i+=2){
		let temp=arr[i];
		arr[i]=arr[arr.length-1-i];
		arr[arr.length-1-i]=temp;
	}
	return arr;
}
//given
console.log(swapCenter([1,2,3,4,5,6]));
console.log(swapCenter([true,42,"Ada",2,"pizza"]));

//14.Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].
function scaleArray(arr,num){
	for(var i=0;i<arr.length;i++){
		arr[i]*=num;
	}
	return arr;
}
//given
console.log(scaleArray([1,2,3],3));















