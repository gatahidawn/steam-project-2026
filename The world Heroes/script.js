function startGame(game){
      {
    question: "Which animal lives in the ocean?",
    options: ["Lion", "Fish", "Elephant"],
    answer: "Fish"
  },
  {
    question: "What should we NOT throw in the ocean?",
    options: ["Plastic", "Water", "Sand"],
    answer: "Plastic"
  },
  {
    question: "Which animal is a sea turtle?",
    options: ["Dog", "Turtle", "Cow"],
    answer: "Turtle"
  },
  {
    question: "Coral reefs are important because they...",
    options: ["Protect sea life", "Make cars", "Grow trees"],
     answer: "Protect sea life"
  },
  {
    question: "Who cleans plastic from the ocean using technology?",
    options: ["Boyan Slat", "Albert Einstein", "Isaac Newton"],
    answer: "Boyan Slat"
  }
];
let correctAnswers = {
  q1: "fish",
  q2: "plastic",
  q3: "turtle"
};

function checkAnswer(answer) {

  let result = document.getElementById("quizResult");

  if (answer === "fish" || answer === "turtle") {
    result.innerText = "✅ Correct! That animal lives in the ocean.";
  } 
  else if (answer === "lion") {
    result.innerText = "❌ Wrong! Lions do not live in the ocean.";
  }
}
let quizQuestions = [
{
  question: "Which animal lives in the ocean?",
  options: ["Lion","Fish","Elephant"],
  answer: "Fish"
},
{
  question: "What pollutes the ocean the most?",
  options: ["Plastic","Clouds","Sand"],
  answer: "Plastic"
},
{
  question: "Which of these is a sea animal?",
  options: ["Turtle","Dog","Cow"],
  answer: "Turtle"
},
{
  question: "Coral reefs help...",
  options: ["Protect sea animals","Build houses","Make cars"],
  answer: "Protect sea animals"
},
{
  question: "Why should we protect oceans?"
   question: "Why should we protect oceans?",
  options: ["For sea life","For noise","For smoke"],
  answer: "For sea life"
},
{
  question: "Which animal is the largest in the ocean?",
  options: ["Blue Whale","Cat","Chicken"],
  answer: "Blue Whale"
},
{
  question: "What should you do with trash near the beach?",
  options: ["Throw it away properly","Drop it in water","Ignore it"],
  answer: "Throw it away properly"
},
{
  question: "Which helps clean the ocean?",
  options: ["Recycling plastic","Throwing bottles","Burning trash"],
  answer: "Recycling plastic"
},
{
  question: "What do sea turtles eat?",
  options: ["Sea grass","Pizza","Chocolate"],
  answer: "Sea grass"
  },
{
  question: "What protects many fish homes?",
  options: ["Coral reefs","Roads","Buildings"],
  answer: "Coral reefs"
}
];
