const questions = [
{
	question: "what color is the sky?",
	choices: ["blue","red","green","purple"],
	getScore: function(answer) {
	if (answer === "blue") return 4;
	if (answer === "red") return 3;
	if (answer === "green") return 2;
	if (answer === "purple") return 0;
	}	
},

{
	question: "what is 9 + 10?",
	choices: ["21","14","19","83749832"],
	getScore: function(answer) {
	if (answer === "21") return 4;
	if (answer === "19") return 3;
	if (answer === "14") return 2;
	if (answer === "83749832") return 0;
	}
},

{
	question: "did you enjoy this",
	image: "test.jpg",
	choices: ["yes", "no"],
	getScore: function(answer) {
	if (answer === "yes") return 0;
	if (answer === "no") return 0
	}
}
];
let currentQuestionIndex = 0; 
let userAnswers = [];

function functiontoExecute() {
	const startButton = document.querySelector('.button');
	startButton.style.display = 'none';

	displayCurrentQuestion();
	}

function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById("questions");
	
	questionElement.innerHTML = `<p>${currentQuestion.question}</p>`;


	const questionImage = document.createElement(`img`);
	questionImage.src = currentQuestion.image;
	questionElement.appendChild(questionImage);

currentQuestion.choices.forEach(choice => {
	const button = document.createElement("button");
	button.textContent = choice;
	button.onclick = function() {
		userAnswers[currentQuestionIndex] = choice;
		currentQuestionIndex++;
		if (currentQuestionIndex < questions.length) {
			displayCurrentQuestion();
		} else { 
			const totalScore = calculateWeightedScore(userAnswers);
			displayResults(totalScore);
}
};
	questionElement.appendChild(button);
});
}

function calculateWeightedScore(answers) {
	let totalScore = 0;
	answers.forEach((answer, index) => {
	totalScore += questions[index].getScore(answer);
});
	return totalScore;
}

function displayResults(totalScore) {
	const questionElement = document.getElementById("questions");
	questionElement.innerHTML = '';

	const resultsContainer = document.getElementById("results");
	resultsContainer.innerHTML = '';

let resultMessage = '';
let resultImageSrc = '';

if (totalScore === 8) {
 resultImageSrc = "test.jpg";
} else if (totalScore === 5) {
 resultImageSrc = "image.png";
} else {
resultImageSrc = "squid.png" ;
}

const resultImage = document.createElement('img');
resultImage.src = resultImageSrc;
resultImage.alt = "Result Image";
resultsContainer.appendChild(resultImage);
}
