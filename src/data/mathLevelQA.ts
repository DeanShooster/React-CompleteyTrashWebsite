import { CarSeries, NumberGraph, ParallelTwo, PrismTwo, RectangleAngleOne, SquareTwo, TriangleAngleOne } from "../assets";

interface IMathQuestion {
  text: string;
  img?: string;
}

interface IMathAnswer {
  correctAnswer: string;
  possibleAnswers: string[];
}

export interface IMathLevelQA {
  question: IMathQuestion;
  answers: IMathAnswer;
}

//***************************** Level 1 ****************************** */
export const mathQuestionsLevelOne: IMathLevelQA[] = [
  {
    question: {
      text: `The public pool initially contains 120 liters of water.
       It is being drained at a rate of 4 liters per hour. However, due to heavy rain, 
      the pool gains 1.5 liters back every hour. How many liters the pool has after X hours?`,
    },
    answers: {
      correctAnswer: "120 - 2.5x",
      possibleAnswers: ["120 + 2.5x", "120 - 2.5x", "120 - 6.5x", "120 + 6.5x"],
    },
  },
  {
    question: {
      text: "Solve: (x-5)/(x-3) = 5",
    },
    answers: {
      correctAnswer: "2.5",
      possibleAnswers: ["2.5", "-5", "-2.5", "5"],
    },
  },
  {
    question: {
      text: "What is the number of parking space covered by the car?",
      img: CarSeries,
    },
    answers: {
      correctAnswer: "87",
      possibleAnswers: ["97", "87", "78", "08"],
    },
  },
  {
    question: {
      text: "Replace the question mark in the above problem with the appropriate number.",
      img: NumberGraph,
    },
    answers: {
      correctAnswer: "6",
      possibleAnswers: ["0", "10", "6", "9"],
    },
  },
  {
    question: {
      text: "Find the equation of a line parallel to y=-30x+4 that passes through the point: (3,-100).",
    },
    answers: {
      correctAnswer: "y=-30x-10",
      possibleAnswers: ["y=30x-10", "y=30x+10", "y=-30x+10", "y=-30x-10"],
    },
  },
  {
    question: {
      text: "Find the equation of the line f(x) passing through the points: (20,7) and (-10,4)",
    },
    answers: {
      correctAnswer: "y=0.1x+5",
      possibleAnswers: ["y=0.1x+5", "y=0.1x-5", "y=10x-63", "y=3.3x+15"],
    },
  },
  {
    question: {
      text: "Find a.",
      img: TriangleAngleOne,
    },
    answers: {
      correctAnswer: "42",
      possibleAnswers: ["96", "68", "42", "a is undefined, not enough information is given."],
    },
  },
  {
    question: {
      text: "ABCD is a Rectangle and E is the center of DC, find the angle of BEC.",
      img: RectangleAngleOne,
    },
    answers: {
      correctAnswer: "38",
      possibleAnswers: ["52", "38", "42", "62"],
    },
  },
  {
    question: {
      text: "Look at this series: 36, 34, 30, 28, 24, x , y ... What number y equals to?",
    },
    answers: {
      correctAnswer: "18",
      possibleAnswers: ["22", "20", "16", "18"],
    },
  },
  {
    question: {
      text: "If a certain product increased in price by 12%, what was its original price?",
    },
    answers: {
      correctAnswer: "50",
      possibleAnswers: ["50", "48", "52", "46"],
    },
  },
  {
    question: {
      text: "If 10% of the classroom consists of 3 students who failed the exam, is it possible that 7% failed the exam?",
    },
    answers: {
      correctAnswer: "No",
      possibleAnswers: ["Yes", "No", "Undefined, Need more information"],
    },
  },
  {
    question: {
      text: "What does it mean when a system of equations has no solution?",
    },
    answers: {
      correctAnswer: "The set of equations does not have any common point of intersection.",
      possibleAnswers: [
        "It means the equations have infinitely many solutions.",
        "The equations are linear.",
        "The set of equations does not have any common point of intersection.",
        "Doesn't mean anything special.",
      ],
    },
  },
];

//***************************** Level 2 ****************************** */
export const mathQuestionsLevelTwo: IMathLevelQA[] = [
  {
    question: {
      text: "Given a quadrilateral with perimeter P, what shape would hold the largest area?",
    },
    answers: {
      correctAnswer: "Square",
      possibleAnswers: ["Rectangle", "Square", "Parallelogram", "Undefined"],
    },
  },
  {
    question: {
      text: "Solve 6x^2-18x=0",
    },
    answers: {
      correctAnswer: "x=0 , x=3",
      possibleAnswers: ["x=0 , x=2", "x=0", "x=3", "x=0 , x=3"],
    },
  },
  {
    question: {
      text: "4x^2+12x+k=0 , For which values of k does this equation have a single solution?",
    },
    answers: {
      correctAnswer: "k=9",
      possibleAnswers: ["k=36", "k=-36", "k=9", "k=-9"],
    },
  },
  {
    question: {
      text: "The perimeter of rectangle PSGD is 20. Find the perimeter of square ABCD.",
      img: SquareTwo,
    },
    answers: {
      correctAnswer: "40",
      possibleAnswers: ["30", "40", "50", "Undefined, not enough information is given."],
    },
  },
  {
    question: {
      text: "What is the probability of having at least one rainy day, given that the probability of rain on Sunday is 40% and on Monday is 25%?",
    },
    answers: {
      correctAnswer: "90%",
      possibleAnswers: ["10%", "90%", "65%", "35%"],
    },
  },
  {
    question: {
      text: "The volume of the prism is 2,400, find x.",
      img: PrismTwo,
    },
    answers: {
      correctAnswer: "x=12",
      possibleAnswers: ["x=8", "x=12", "x=16", "x=15"],
    },
  },
  {
    question: {
      text: "Write down the next 2 numbers in the pattern: 2, 3, 5, 8, 13 ...",
    },
    answers: {
      correctAnswer: "21,34",
      possibleAnswers: ["18,24", "21,34", "19,26", "Undefined, this doesn't make any sense"],
    },
  },
  {
    question: {
      text: "A certain building roof is under construction. The height of the building is 20 meters and the constructions workers are using the fire departments ladder trucks. Just to be safe they positioned the truck 7 meters away from the building. What would be the length of the ladder once its connected to the roof?",
    },
    answers: {
      correctAnswer: "A bit over 21 meters",
      possibleAnswers: ["A bit over 20 meters", "A bit over 21 meters", "A bit over 22 meters", "A bit over 23 meters"],
    },
  },
  {
    question: {
      text: "The formula for changing degrees Celsius to degrees Fahrenheit is: F=9C/5 + 32 , Rearrange this formula to make C the subject.",
    },
    answers: {
      correctAnswer: "C=5(F-32)/9",
      possibleAnswers: ["C=5F-32/9", "C=(5F-32)/9", "C=5(F-32)/9", "C=5F/9 - 32"],
    },
  },
  {
    question: {
      text: "Solve the equation: x + 2 - 15/x = 0",
    },
    answers: {
      correctAnswer: "x=-5 , x=3",
      possibleAnswers: ["x=5, x=-3", "x=5", "x=-3", "x=-5 , x=3"],
    },
  },
  {
    question: {
      text: "If 3x-y=12, what is the value of 8^x / 2^y ?",
    },
    answers: {
      correctAnswer: "2^12",
      possibleAnswers: ["2^8", "2^12", "8^2", "Undefined, not enough information is given."],
    },
  },
  {
    question: {
      text: "AB parallel to CD, find x.",
      img: ParallelTwo,
    },
    answers: {
      correctAnswer: "50",
      possibleAnswers: ["40", "50", "60", "70"],
    },
  },
];

export const mathQuestionsLevelThree: IMathLevelQA[] = [
  {
    question: {
      text: "",
    },
    answers: {
      correctAnswer: "",
      possibleAnswers: [],
    },
  },
];
