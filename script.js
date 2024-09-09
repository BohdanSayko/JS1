// TASK 1
// Напишіть програму, яка отримує від користувача 2 числа.
// Вивести різницю з допомогою функції alert.

function getDifference() {
    let a = prompt("Enter first number: ");
    a = Number(a);
    let b = prompt("Enter first number: ");
    b = Number(b);
    if(a>b){
        alert(a-b);
    }else{
        alert(b-a);
    }
}
  
  getDifference();
  
  // TASK 2
  // Напишіть програму, яка отримує від користувача 2 числа.
  // Вивести максимальне з цих двох чисел.
  
  function getMax() {
    let a = prompt("Enter first number: ");
    a = Number(a);
    let b = prompt("Enter first number: ");
    b = Number(b);
    if(a>b){
        alert (a);
    }else{
        alert (b);
    }
  }
  
  getMax();
  
  // TASK 3
  // Напишіть програму, яка отримує від користувача 2 рядки і повертає їх конкатенацію.
  
  function concatenateStrings() {
    let firstString = prompt("Enter first string");
    let secondString = prompt("Enter second string:");

    let concatenateStrings = firstString + secondString;
    alert(concatenateStrings);
  }
  
  concatenateStrings();
  
  // TASK 4
  // Напишіть функцію, яка отримує рядок і виводить його довжину.
  
  function showLength() {
    let string = prompt("Enter string");
  
    let length = string.length;

    alert("String length: " + length);
  }
  
  showLength();
  
  
  // TASK 5
  // Напишіть функцію, яка конвертує введений рядок у верхній регістр.

  
  function toUpperCase() {
    let string = prompt("Enter string");

    let upperString = string.toUpperCase();
    alert("Uppercase string: " + upperString);
}
  toUpperCase();
  
  // TASK 6
  // Напишіть функцію, яка реверсує заданий рядок.
  
  function reverseString() {
    let string = prompt("Enter string");

    let reversedString = string.split('').reverse().join('');
    alert("Reversed string:  " + reversedString);
  }
  
  reverseString();
  
  // TASK 7 *HARD*
  // Напишіть програму, яка отримує від користувача 3-цифрове число і обертає його.
  // Ви можете використовувати лише числа та їх оператори.
  // Не використовуйте тут строки!

  function reverseNumber() {
    let number = prompt("Enter three-digit number for reverse");
    number = Number(number);

    let a = number % 10;
    let b = Math.floor((number % 100) / 10);
    let c = Math.floor(number / 100);

    let reversedNumber = a*100 + b*10 + c;
    alert("Reversed number: " + reversedNumber);
  }
  
  reverseNumber();
  
  // TASK 8 *HARD*
  // Напишіть функцію, яка отримує на вхід речення і повертає найдовше слово у цьому реченні.
  // Якщо існує декілька слів однакової довжини, повернути перше з них.
  
  function findLongestWord(someString) {

    let words = someString.split(' ');
    
    let theLongestWord = words[0];

    for(let i = 0; i<words.length; i++){
        if(theLongestWord.length < words[i].length){
            theLongestWord = words[i];
        }
    }
   
    
    alert(theLongestWord);
  }
  
  console.log(findLongestWord('I am a coding god')); // should return "coding"
  console.log(findLongestWord('I would like to work for Google')); // should return "Google"
  console.log(findLongestWord('Ain`t nobody got time for that')); // should return "nobody"
  
  // TASK 9 *HARD*
  // Напишіть функцію, яка повертає перший неповторюваний символ у рядку.
  // Якщо всі символи повторюються, повернути null.
  
  function firstNonRepeatingCharacter(someString) {
    let characters = someString.split('');

    for (let i = 0; i < characters.length; i++) {
        let isNonRepeating = true;

        for (let b = 0; b < characters.length; b++) {
            if (characters[i] == characters[b] && b != i) {
                isNonRepeating = false;
                break;
            }
        }

        if (isNonRepeating) {
            alert("First non-repeating character: " + characters[i]);
            return; 
        }
    }

    alert(null);
}

console.log(firstNonRepeatingCharacter('hello')); // should return "h"
console.log(firstNonRepeatingCharacter('swiss')); // should return "w"
console.log(firstNonRepeatingCharacter('aabbcc')); // should return null
console.log(firstNonRepeatingCharacter('ccdd')); // should return null
