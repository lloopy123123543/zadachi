// Нахождение символа в строке, который повторяется большее кол во раз
// let string = "aaffffffffffffffavfvvvf"
// let word = ''
// let counter = 0
// let cont = 0
// function tak(string){
//   for(let i = 0; i <string.length; i++){
//     for(let j =0; j< string.length; j++){
//       if (string[i] == string[j]){

//         counter += 1
//       }
//     }
//     if(cont < counter){
//       cont = counter
//       word = string[i]
//     }
//     counter = 0
//   }
//   return console.log(word, cont)

// }
// tak(string)
// ///////////////////////////////////////////////////////////////////////////////

// let string = "ываыва"
// let word = ''
// let count = 0

// function tak(string){
//   for(let i = 0; i < string.length; i++){
//     let cont = 0
//     for (let j = 0; j < string.length; j++){
//       if(string[i] == string[j]){
//         cont +=1
//       }
//     }
//     if(count < cont){
//       count = cont
//       word = string[i]
//     }
//   }
//   return console.log(word)
// }
// tak(string)

///////////////////////////////////////////////////////////////////////////////////////////

// string = [1,2,5,3,4]
// function find(string){
//   for (let i = 0; i< string.length; i++){
//     if (string[i] == 3){
//       return console.log(string[i]+1)
//     }
//     else{}

//   }
//   return console.log("not found")

// }
// find(string)

////////////////////////////////////////////////////////////////////////////////////////
// arr = [4,3,2,6,1,6,7,4];
// function max(arr){
//   let check = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(check < arr[i]){
//       check = arr[i];
//     }

//   }
//   console.log(check)

// }
// max(arr)

////////////////////////////////////////////////////////////////////////////////////////
// const arr = [5, 2, 3, 1, 7, 5, 4, 9, 8];
// function sortirovka(arr) {

//   for (let i = 0; i < arr.length; i++) {

//     for(let j = 0; j < arr.length; j++) {
//       if(arr[i] < arr[j]){
//         let sus = arr[i]
//         arr[i] = arr[j]
//         arr[j] = sus
//       }
      

//     }
      
    
//   }
  
//   return console.log(arr);
// }
// sortirovka(arr);


////////////////////////////////////////////////////////////////////////////////////////
// const a = 12
// const b = 2
// const sus = 0
// const j = 0
// function switchAndReverse(a,b){
//     a = a.toString(b)
//     a = a.split('').reverse().join('')

//     a = parseInt(a, 2);
//     return console.log(a)

// }
// switchAndReverse(a,b)

///////////////////////////////////////////////////////////////////////////////////////
// const str = "the-stealth_warrior"
// let arr = []
// function toCamelCase(str){
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] == '-' || str[i] == '_'){
//             arr.push(str[i+1].toUpperCase())
//             i++
//         }
        
//         else{
//             arr.push(str[i])

//         }

        
//     }
//     arr = arr.join('')
//     return console.log(arr)
  
//   }
//   toCamelCase(str)
///////////////////////////////////////////////////////////////////////////////////

// const array =[1, 2, 3]


// function findOddOrNot(array){
//     let odd = 0;
// let notOdd = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] % 2 == 0){
//             odd= odd+1
//         }
//         if(array[i] % 2 != 0){
//             notOdd = notOdd + 1
//         }
        
//     }
//     if(odd > notOdd){
//         for (let j = 0; j < array.length; j++) {
//             if(array[j] % 2 != 0){
//                 return console.log(array[j])
//             }
            
//         }
//     }
//     else{
//         for (let j = 0; j < array.length; j++) {
//             if(array[j] % 2 == 0){
//                 return console.log(array[j])
//             }
            
//         }

//     }
//     return("Nothing")

// }
// findOddOrNot(array)

////////////////////////////////////////////////////////////////////////////////////////

// const pin = '123456'
// function validatePIN (pin) {
//     let arr = []
//     if(pin.length == 4 || pin.length == 6){
//         for (let i = 0; i < pin.length; i++) {
//             if(pin[i] == Number(pin[i])){
//                 arr.push(pin[i])
//             }  
//             else{
//                 return console.log('false')
//             }
//         }
//     }
//     else{
//         return console.log("you are stupid")
//     }
//     arr = arr.join('')
//     return console.log(arr)
//   }
//   validatePIN(pin)

///////////////////////////////////////////////////////////////////////////////////
const string = '(){}}}[]'

function validBraces(string){
    let obj = {}
    if(string.length % 2 != 0){
        return console.log("false")
    }
    for (let i = 0; i < string.length; i++) {
        obj[string[i]] = 1
        

        
    }
    return console.log(obj)

}
validBraces(string)