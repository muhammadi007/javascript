
// // console.log(x)
// // // x [0] = "barcha"
// // // delete
// // let r = delete x[1]
// // console.log(r)
// // console.log(x)

// // // array concat
// let x = ["ali",17,"gilgit"]
// let y = ["ahmed",22,"gilgit"]


// let result = x.concat(y)

// console.log(result) 


// // sort

// let a = ["zahid","sohail","aslam","nawaz","khan","fayoo"]

// // console.log(a)
// // let output = a.sort()
// // console.log(output)

// // // alert

// let obj = {
//     name :"ali",
//     class :12
    
    
// }
// alert(obj["name"])
// confirm("aqwerty")

// let labour = prompt("enter your contact")
// console.log(labour)

// // // pop

// let lagayoo = ["labar","chatoo","malang"]
// console.log(lagayoo)
// lagayoo.pop()
// console.log(lagayoo)

// push

// let lagayo = ["labar","chatoo","malang"]
// console.log(lagayo)
// lagayo.push("chitaro")
// console.log(lagayo)

// shift

// lagayo.shift()
// console.log(lagayo)

// // unshift

// lagayo.unshift("lagan",22)

// console.log(lagayo)



// let x = ["ali",22,"gilgit"]
// console.log(x)
// x.push("nagar")
// console.log(x)



// let color = ["Blue ",  "Red", "Orange", "Violet", "Green","Indigo", "Yellow "];
// let o = ["th","st","nd","rd"]

// let choice1 = color[0]
// console.log("first choice is", choice1)

// let choice2 = color[4]
// console.log("2nd choice is", choice2)


// let choice3 = color[1]
// console.log("3rd choice is", choice3)



// let choice4 = color[2]
// console.log("four choice is", choice4)



// ================conditions==================

// let marks = prompt("plese enter your marks")

// if(marks <= 100 && marks >= 90  ){
//     alert("Grade A++")
// }
//     else if(marks >= 80 && marks <= 89 ){
//         alert("Grade A+")
//     }

//     else if(marks >= 70 && marks <= 79 ){
//         alert("Grade A")
//     }
//     else if(marks >= 60 && marks <= 69 ){
//         alert("Grade B")
//     }

//     else if(marks >= 50 && marks <= 59 ){
//         alert("Grade C")
//     }

//     else if(marks >= 40 && marks <= 49 ){
//         alert("Grade D")
//     }

//     else if( marks >= 0 && marks <=  39 ){
//         alert       ("fail")
//     }

//     else{
//         alert("please enter valid number")
//     }


// =============pop================

// let array = ["yaqub","imram","wajahat"]
// console.log(array)

// array.pop()
// console.log(array)

// // ========push=============
// array.push("muhammadi")
// console.log(array)

// // ===========shift=========

// array.shift()
// console.log(array)

// // ========unshift==========

// array.unshift("ali",22)
// // console.log(array)


// ===================switch=========================

// let day = prompt("ENTER a valid number")

// switch (day) {
//     case "1":
//         alert("sunday")
//         break;

//         case "2":
//         alert("Monday")
//         break;

//         case "3":
//         alert("Tuesday")
//         break;

//         case "4":
//         alert("Wednesday")
//         break;

//         case "5":
//         alert("Thrusday")
//         break;


//         case "6":
//             alert("Friday")
//             break;
            
//         case "7":
//             alert("Saturday")
//             break;
        

//     default:
//         alert("ENTER a valid number")
//         break;
// }



// ==================loops=========================

//===================while loop=====================

// let a = 1;
// while (a <= 10) {
//     document.write(a+   "ali <br> ")
//     a = a + 1;
// }

// =================dowhile loop=====================
// let b = 1;
// do {
//     document.write(b + "habibi come to gilgit <br>")
//     b = b + 1;
// } while (b <= 10);


// ===================for loop=====================
// for (let ali = 15; ali >= 1; ali--) {
//     console.log(ali)
    
// }


// let marks = prompt("plese enter your marks")

// if(marks <= 100 && marks >= 90  ){
//     alert("Grade A++")
// }
//     else if(marks >= 80 && marks <= 89 ){
//         alert("Grade A+")
//     }

//    else{
//     alert("try again")
//    }



// =================ternary operator===================

// (5 < 4)? console.log("false") : console.log("true")

//======================= even numbers=================

// for(i=1; i<=10; i++){
//     if(i % 2 == 0){
//         document.write(i, "<br>")
//     }
// }

// ====================ODD NUMBERS====================

// for(i=1; i<=50; i++){
//     if(i % 2 !== 0){
//         document.write(i, "<br>")
//     }
// }


// ========================Object=======================

// let obj = {
//     fname : "muhammadi",
//     lname : "barcha",
//     class : "12th",
//     address : "Gilgit"
// }

// // ===============Addition ==========================
// obj.roll_number = 12
// obj.address = "nagar"

// //========================delete====================
// delete obj["class"] 
// console.log(obj)


// ========================Function=====================
// let b = "nagar"
// function name(names) {
//     let gb = "gilgit"
//     console.log(gb)
//     console.log(names)
//     console.log(b)

//     function asdf() {
//         let c = "barcha"
//         console.log(c)
//     }
//     asdf()
// }


// name("ali")


// ==============funtion=================


// function name() {
//     let a = "ali"
//     console.log(a)
// }

// name()


// // ==============global scope==================

// let gg = "sco"
// function ggg() {
//     console.log(gg)
// }

// ggg()



// // ==============lexical scope====================

// function lex() {
//     let lexi = "scope"
//     console.log(lexi)

//     function lexus() {
        
//         let lexu = "lexee_hotel"
//         console.log(lexu)
//     }

//     lexus()
// }

// lex()


// // ==============parameter================

// function para(meta) {
//     console.log(meta)
// }

// para("khan") 




// // ==============funtions=============

// function ali() {
//     let asd = "hussain"
//     console.log(asd)

//     function khan() {
//         let qwert = "hussain"
//     console.log(qwert)
//     }

//     khan()
// }

// ali()


// // =========object===============

// let obj = {
//     first_name : "Muhammadi",
//     last_name : "Barcha",
//     class : "12th",
//     roll_number : "5"

// }

// console.log(obj)



// let obj_2 = {
//     first_name : "Muhammad",
//     last_name : "Ali",
//     class : "11th",
//     roll_number : "3"
// }

// console.log(obj_2)




// let obj = {
//     fname : "muhammadi",
//     lname : "barcha",
//     class : "12th",
//     address : "gilgit",

//     obj_2 :{
//         names : "ali",
//         class : 12,

//          array : [
//             "khan","nawaz",12
//          ]

//         }
   
// }

// function objt(name) {
    
//     console.log(obj.obj_2.array[1])
// }

// objt(obj)


function num(x,y) {
    console.log(x*y)
}

num(prompt("enter first number"), prompt("enter first number"))