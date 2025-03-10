const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Believe you can and you're halfway there.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Do what you can, with what you have, where you are.",
  "You are never too old to set another goal or to dream a new dream.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "The best way to predict the future is to create it.",
  "In the middle of every difficulty lies opportunity.",
  "Love yourself first and everything else falls into line.",
  "To love and be loved is to feel the sun from both sides.",
  "The greatest thing you’ll ever learn is just to love and be loved in return.",
  "Love is composed of a single soul inhabiting two bodies.",
  "A simple ‘I love you’ means more than money.",
  "Love isn’t something you find. Love is something that finds you.",
  "We are most alive when we're in love.",
  "The best thing to hold onto in life is each other.",
  "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
];
let buttonElement = document.getElementsByTagName("button")[0];
let paraQuote = document.getElementsByClassName("quote")[0];
buttonElement.addEventListener("click", randomNumGenerator);

count = 0;
function randomNumGenerator() {
  paraQuote.innerHTML = quotes[count];
  count++;
  console.log(count);

  if (count == quotes.length) {
    count = 0;
  }
}
