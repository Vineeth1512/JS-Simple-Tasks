let btnElement = document.querySelector(".pali-btn");
let paraElement = document.querySelector(".user-input");

btnElement.addEventListener("click", function () {
  let inputValue = document.querySelector(".pali-input").value;
  console.log(inputValue);

  if (inputValue == "") {
    alert("please enter the value");
    return;
  }
  if (isPalindrome(inputValue)) {
    paraElement.innerText = `${inputValue} is a polindrome`;
    paraElement.style.color = "green";
  } else {
    paraElement.innerText = `${inputValue} is not a polindrome`;
    paraElement.style.color = "red";
  }
  document.querySelector(".pali-input").value = "";
});

function isPalindrome(str) {
  let clearStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(clearStr);
  let reverseStr = clearStr.split("").reverse().join("");
  console.log(reverseStr);

  return clearStr == reverseStr;
}

//Never odd or even
