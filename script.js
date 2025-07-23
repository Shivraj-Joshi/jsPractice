// // let a = 5;
// // const b = 5;
// // var c = a + b;
// // console.log(c);

// // console.log(9 * '3');

// //--------------------------------------------------------------------------------------------------------
// // c = 100;
// // a = 66;



// let a; // reassigning the variable is allowed. hoisting cannot be done
// // const b;    //can not reassign a constant value
// var c; // reassigning is allowed , hoisting is allowed.

// // b = "Lannister always pays its debt"

// // console.log(a);
// // console.log(b);
// // console.log(c);

// //----------------------------------------------------------------------------------------------------------------

// /* temporal dead zone and variable hoisting */

// // {
// //     // TDZ starts at beginning of scope
// //     const func = () => console.log(letVar); // OK

// //     // Within the TDZ letVar access throws `ReferenceError`

// //     let letVar = 3; // End of TDZ (for letVar)
// //     func();  // Called outside TDZ!
// // }

// // --------------------------------------------------------------------------------------------------------------------

// // let str = "winter"
// // let str2 = str.split('');
// // console.log(str2);
// // let rev = str2.reverse();
// // console.log(rev);

// // -----------------------------------------------------Conditional statement-----------------------------------------------------


// // let str = "Nitin"
// // let str2 = str.split('')

// // let rev = str2.reverse().join('');

// // if (str === rev) {
// //     console.log("palindrome")
// // } else {
// //     console.log("Not a palindrome")
// // }

// //-----------------------------------------------------conditional loop-------------------------------------------------------------

// // let i = 1;

// // for (i; i <= 100; i++) {
// //     if (i % 15 == 0) {
// //         console.log('buzzzFuzzz')
// //     } else if (i % 3 == 0) {
// //         console.log('buzzz')
// //     } else if (i % 5 == 0) {
// //         console.log('Fuzzzz')
// //     } else {
// //         console.log(i);
// //     }
// // };

// //---------------------------------------------------loops-----------------------------------------------------------------


// let res = 1;
// function fact(n) {
//     for (let i = 1; i <= n; i++) {
//         res *= i;
//     }
//     return res;
// }
// console.log(fact(5))

//======================================================to-do=========================================================================

const takeInput = document.getElementById('takeInput');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');


// const taskText = takeInput.value.trim();
// console.log(taskText);


// let tasks = [];


// addTask.addEventListener('click', () => {
//     const taskText = takeInput.value.trim();


//     if (taskText !== '') {
//         tasks = [...tasks, taskText];
//         takeInput.value = "";
//         renderTasks();


// const listItem = document.createElement('li');
// listItem.textContent = taskText;


// const deleteBtn = document.createElement('button');
// deleteBtn.textContent = ' Delete';
// deleteBtn.classList.add('delete-btn');
// listItem.appendChild(deleteBtn);

// taskList.appendChild(listItem);
// takeInput.value = '';

// deleteBtn.addEventListener('click', () => {
//     taskList.removeChild(listItem);
// })

//     }
// })

// function renderTasks() {
//     taskList.innerHTML = "";
//     tasks.forEach((task, index) => {
//         const listItem = document.createElement('li');
//         listItem.textContent = task;

//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = ' Delete';
//         deleteBtn.classList.add('delete-btn');

//         deleteBtn.addEventListener('click', () => {
//             taskList.removeChild(listItem);
//         })

//         listItem.appendChild(deleteBtn);
//         taskList.appendChild(listItem);


//     })
// }


// let tasks = [];

// addTask.addEventListener('click', () => {
//     const taskText = takeInput.value.trim();


//     if (taskText !== "") {
//         tasks = [...tasks, taskText];
//         takeInput.value = "";
//         renderTasks();
//     }

// })

// function renderTasks() {
//     taskList.innerHTML = "";
//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.textContent = task;

//         const deletebtn = document.createElement('button');
//         deletebtn.textContent = "Delete"
//         deletebtn.classList.add('delete-btn')

//         deletebtn.addEventListener('click', () => {
//             taskList.removeChild(li);
//         })

//         li.appendChild(deletebtn);
//         taskList.append(li);
//     })

// }


//=====================================================palindrome checker==================================================================

addTask.addEventListener('click', () => {
    let str = takeInput.value.trim();
    console.log(str); //for debugging purpose 
    let str2 = str.split('');
    let rev = str2.reverse().join('');
    console.log(rev); //for debugging purpose 

    let li = document.createElement('li');
    if (str == rev) {
        li.innerHTML = "It is a Pallindrom word"

    } else {
        li.innerHTML = "It is not a pallindrom word , try another word"
    }

    taskList.appendChild(li);
})

