// Number 1

function factorial(n){
  if(n < 2){
    return 1
  }
  return n * factorial(n - 1)
}

console.log(factorial(4)) // 24
console.log(factorial(8)) // 40320

//Number 2

function reveseString(str){
  let newStr = []
  for (let i = (str.length - 1); i >= 0; i--) {
     newStr.push(str[i])
  }
  return newStr.join("")
}
console.log(reveseString("Kamu sangat Cantik"));

// number 4

let a = 7
let b = 3
  
//[a, b] = [b, a]

//console.log(a)

// number 6

function interval(arr, low, high){
  for (let i = 0; i < arr.length; i++) {
     if( arr[i] <= low || arr[i] >= high)
     {
       arr.splice(i, 1)
     }


  }
  return arr
}

console.log(interval([1,3,5,9,13], 4, 11));

// number 7

function intervalLength(arr, low, high){
  for (let i = 0; i < arr.length; i++) {
     if( arr[i] <= low || arr[i] >= high)
     {
       arr.splice(i, 1)
     }


  }
  return arr.length
}

console.log(intervalLength([1,3,5,9,13], 4, 11));

//number 8

function print(n){
  const arr = []
  for (let i = 1; i <= n; i++) {
     if(i%3===0 && i%5===0){
        arr.push("eduwork")
     } else if (i % 3 === 0){
       arr.push("edu");
     } else if (i%5===0){
       arr.push("work")
     } else {
       arr.push(i)
     }
  }
  return arr.join("\n")
}

console.log(print(15))

//number 10

function kabisatCheck(n){
  if(n%4 === 0){
    return `${n} adalah tahun kabisat`
  }else{
    return `${n} bukan tahun kabisat`
  }
}
console.log(kabisatCheck(2022));

//number 9

function lowhighSearch(arr){
  let low = arr[0];
  let high = arr[0]
  for (let i = 0; i < arr.length; i++) {
     if(arr[i] < low){
       low = arr[i]
     }
     if(arr[i] > high){
       high = arr[i]
     }
  }
  return `low = ${low}, high = ${high}`
}
 console.log(lowhighSearch([0,3,7,1,6,5,19]));

//Number 3
function checkNumber(str){
  let result = []
  let regex = /\d*/ig
  let res = str.match(regex).join("")
  let length = res.length
  result.push(res)
  for (let i = 0; i < res.length; i++) {
    result.push(res[i].padEnd(length,0));
    length -= 1
  }
  return result.join("\n")
}
console.log(checkNumber("8.39729gsjg77"))
// Number 5

function printNumber(n){
  const number = ["","satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh"]
  if(n.length === 1){
    return number[n]
  }
  if(n.length === 2){
    if(n[0] === 1){
       return n[1] === 1 ? "sebelas" : `${number[n[1]]} belas`
    } else {
      return `${number[n[0]]} puluh ${number[n[1]]}`
    }
  }
  if(n.length > 2){
    return n === 100 ? "seratus" : "masukkan bilangan 1 - 100"
  }
}
console.log(printNumber(2));
console.log(printNumber(12));
console.log(printNumber(11));
console.log(printNumber(71));
console.log(printNumber(102));
console.log(printNumber(100));