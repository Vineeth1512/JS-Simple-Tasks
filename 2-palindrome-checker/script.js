let buttonElement = document.getElementsByClassName("pali-btn")[0];
let paraElement = document.getElementsByClassName("user-input")[0];

buttonElement.addEventListener("click", function () {
  let inputValue = document.getElementsByClassName("pali-input")[0].value;
  console.log(inputValue);

  if (inputValue == "") {
    alert("Please enter the input value");
    return; 
  }

  if (isPalindrome(inputValue)) {
    paraElement.innerHTML = `${inputValue} is a palindrome`;
    paraElement.style.color = "Green";
  } else {
    paraElement.innerHTML = `${inputValue} is not  a palindrome`;
    paraElement.style.color = "red";
  }
  document.getElementsByClassName("pali-input")[0].value = "";
});

function isPalindrome(str1) {
  var str = str1.toLowerCase().replace(/ [^a-z0-9]/g, "");
  console.log(str);

  var reverse = str.split("").reverse().join("");
  console.log(reverse);
  // var s = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   if (str.charAt(i) != " ") s = s + str.charAt(i);
  // }
  return str == reverse;
}

// var str1 = "Never odd or even";
// var str = str1.toLowerCase().replace(/ /g, "");
// console.log(str);
// var s = "";

// for (i = str.length - 1; i >= 0; i--) {
//   if (str.charAt(i) != " ") {
//     s = s + str.charAt(i);
//   }
// }
// console.log(s);

// console.log(str == s);
