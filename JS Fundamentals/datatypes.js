/*
JavaScript has 2 types of data types. Primitive and complex data types.
Complex data types are objects.
JavaScript has Primitive datypes:
1.null
2.undefined
3.boolean
4.number
5.string
6.symbol
7.bigint

JS is dynamically typed language. It means that a variable doesn't
associate with a type, it can hold different types.

typeof operator is used to get current type of the value that the variable stores.


*/

/*
undefined type :-
The undefined type is a primitive data type that has only one value 
undefined. When a variable is not initialized, it is assigned the value of 
undefined by default. 
typeof operator returns undefined when called on a variable that hasn't 
been declared.
*/

let uninitializedVariable;
console.log("Value of uninitializedVariable is " + uninitializedVariable);
console.log("type of uninitializedVariable is " + typeof uninitializedVariable)
console.log("type of undeclaredVariable is " + typeof undeclaredVariable)

/*
null type:-
The null type is a primitive data type that has only one value null.
The typeof null is returned as object(known bug). It is not changed as 
it would break lot of existing sites.
JS defines null is equal to undefined.
*/

let nullObject = null;
console.log("Value of nullObject is " + nullObject);
console.log("Type of nullObject is " + typeof nullObject);
console.log("Result of null == undefined is " + (null == undefined));

/* 
number type:-
The number type is represent both integer and floating-point numbers.
JS converts floating-point number into integer if the number appears 
to be a whole number, to use less memory.
Number.MIN_VALUE, Number.MAX_VALUE are min and max values of number.
Infinity and -Infinity to represent the infinite number.

NaN stands for Not a Number. It is a special numeric value that indicates
an invalid number.
Any operation with NaN returns NaN. The NaN doesn't equal any value including itself.

use underscores (_) as the numeric separators to have better readability of group of digits.

Octal literals start with 0o followed by octal representation of number. It starts with just 
0 also. 071 is octal representation of 57. If octal representation is not valid it is treated 
as decimal 

Hexadecimal literals start with 0x followed by hexadecimal representation of number.
Binary literal start with 0b followed by binary representation of number.
*/

let numberVariable = 1000_000_1;
console.log("Value of numberVariable is " + numberVariable);
console.log("type of numberVariable is " +  typeof numberVariable);
console.log("NaN/2 is " + NaN/2);
console.log("Result of NaN == NaN is " + (NaN == NaN));

let binaryRep = 0b101;
console.log("Value of binaryRep is " + binaryRep);
/* 
string type:-
a string is a sequence of zero or more characters. string literal
begins and ends with either a single quote(') or a double quote("").
JavaScript strings are immutable.
*/

let stringVariable = 'JavaScript';
stringVariable[0] = 'j';
console.log(stringVariable);

/*
boolean type:-
boolean has two literal values true and false in lowercase.
To convert another data type into a boolean value use Boolean() function
string->(non-empty string true),(empty string false)
number->(non-zero number and infinity true),(0,NaN false)
object->(non-null object true),(null false)
undefined->(nothing for true),(undefined for false)
to get boolean value from Boolean() object valueOf() is used.
*/
let booleanVariable = true;
console.log("value of booleanVariable is " + booleanVariable);
console.log("Type of booleanVariable is " + booleanVariable);
console.log(Boolean({})); // empty object but not null.

let booleanObject = new Boolean(false);
console.log("Value of booleanObject is " + booleanObject);
console.log("Value stored in booleanObject is " + booleanObject.valueOf());
/* 
bigint:-
bigint is the built-in object that can represent whole numbers larger than 2^53-1
to create a bigint append n at the end of number literal or call BigInt()
*/

let bigintVariable1 = 9007199254740991n;
let bigintVariable2 = BigInt(9007199254740991);
console.log(bigintVariable1);
console.log(bigintVariable2);
