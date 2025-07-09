// let a = 5;
// const b = 5;
// var c = a + b;
// console.log(c);

// console.log(9 * '3');           

//--------------------------------------------------------------------------------------------------------
// c = 100;
// a = 66;



let a; // reassigning the variable is allowed. hoisting cannot be done
// const b;    //can not reassign a constant value
var c; // reassigning is allowed , hoisting is allowed.

// b = "Lannister always pays its debt"

// console.log(a);
// console.log(b);
// console.log(c);

//----------------------------------------------------------------------------------------------------------------

/* temporal dead zone and variable hoisting */

// {
//     // TDZ starts at beginning of scope
//     const func = () => console.log(letVar); // OK

//     // Within the TDZ letVar access throws `ReferenceError`

//     let letVar = 3; // End of TDZ (for letVar)
//     func();  // Called outside TDZ!
// }

// --------------------------------------------------------------------------------------------------------------------

// let str = "winter"
// let str2 = str.split('');
// console.log(str2);
// let rev = str2.reverse();
// console.log(rev);

// -----------------------------------------------------Conditional statement-----------------------------------------------------


// let str = "Nitin"
// let str2 = str.split('')

// let rev = str2.reverse().join('');

// if (str === rev) {
//     console.log("palindrome")
// } else {
//     console.log("Not a palindrome")
// }

//-----------------------------------------------------conditional loop-------------------------------------------------------------

let i = 1;

for (i; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log('buzzzFuzzz')
    } else if (i % 3 == 0) {
        console.log('buzzz')
    } else if (i % 5 == 0) {
        console.log('Fuzzzz')
    } else {
        console.log(i);
    }
};