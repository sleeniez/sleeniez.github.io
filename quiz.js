function functiontoExecute(){
	document.getElementbyId("button").addEventListener('click', function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('questions');
}
const questions = [
	{
	question: "what color is the sky?",
	choices: ["blue",
		"red".
		"green",
		"purple"],
	if (answer="blue") {Score: +4};
 	else if (answer="green") {Score: +3};
	else if (answer="red") {Score: +2};
	else if (answer="purple") {Score: +0};
	
	}
	{
	question: "what is 9 + 10?"
	choices: ["21",
		"14",
		"19",
		"83749832"],
	if (answer="21") {Score: +4};
 	else if (answer="14") {Score: +3};
	else if (answer="19") {Score: +2};
	else if (answer="83749832") {Score: +0};
	}
function calculateWeightedScore(answers) {
  let Score = 0;
}

const totalScore = calculateWeightedScore(userAnswers);
	if (totalScore = 8) {alert("Yippee!")};
	else {alert("BOOOOOOOOOOOO")}; 
}
