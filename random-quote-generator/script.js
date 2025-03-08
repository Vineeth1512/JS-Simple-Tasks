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
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Opportunities don’t happen. You create them.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Perfection is not attainable, but if we chase perfection we can catch excellence.",
  "I attribute my success to this: I never gave or took any excuse.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "With the new day comes new strength and new thoughts.",
  "Keep going. Everything you need will come to you at the perfect time.",
  "Life is 10% what happens to us and 90% how we react to it.",
];

let containerElement = document.createElement("div");
containerElement.classList.add("container");

let h1Element = document.createElement("h1");
h1Element.innerText = "Random Quote Generator";

let paraQuote = document.createElement("p");
paraQuote.classList.add("quote");
paraQuote.innerHTML = quotes[0];

let buttonElement = document.createElement("button");
buttonElement.innerText = "New Quote";

buttonElement.addEventListener("click", randonNumberGenerator);
containerElement.append(h1Element, paraQuote, buttonElement);

document.body.append(containerElement);

//let currentQuote = document.getElementsByClassName("quote")[0];
let randomNumber = 1;
// Math.floor(Math.random() * quotes.length);
function randonNumberGenerator() {
  paraQuote.innerHTML = quotes[randomNumber];
  randomNumber += 1;
  console.log(randomNumber);
  if (randomNumber == quotes.length) {
    randomNumber = 0;
  }
}
