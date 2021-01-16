var submit = document.getElementById("submit");
const percentAssign = 0.5;
const percentProject = 0.1;
const percentQuiz = 0.1;
const percentExam = 0.2;
const percentIntex = 0.1;

function handleForm(event) { event.preventDefault(); } 

function setValue(grade) {
	document.getElementById("finalGrade").innerHTML = grade + " %";
}

function setLetter(grade) {
	var letterGrade
	var color
	if (grade < 60) {
		letterGrade = "E";
		color = "red";
	}
	else if (grade < 64) {
		letterGrade = "D-";
		color = "red";
	}
	else if (grade < 67) {
		letterGrade = "D";
		color = "red";
	}
	else if (grade < 70) {
		letterGrade = "D+";
		color = "red";
	}
	else if (grade < 74) {
		letterGrade = "C-";
		color = "orange";
	}
	else if (grade < 77) {
		letterGrade = "C";
		color = "orange";
	}
	else if (grade < 80) {
		letterGrade = "C+";
		color = "orange";
	}
	else if (grade < 84) {
		letterGrade = "B-";
		color = "yellow";
	}
	else if (grade < 87) {
		letterGrade = "B";
		color = "yellow";
	}
	else if (grade < 90) {
		letterGrade = "B+";
		color = "yellow";
	}
	else if (grade < 94) {
		letterGrade = "A-";
		color = "limegreen";
	}
	else {
		letterGrade = "A";
		color = "green";
	}

	document.getElementById("letterGrade").innerHTML = letterGrade;
	document.getElementById("letterGrade").style.color = color;
}

submit.addEventListener("click", function(){
	var assignment = document.getElementById("assignments").value;
	var project = document.getElementById("projects").value;
	var quiz = document.getElementById("quizzes").value;
	var exam = document.getElementById("exams").value;
	var intex = document.getElementById("intex").value;

	finalGrade = (
		assignment * percentAssign +
		project * percentProject +
		quiz * percentQuiz +
		exam * percentExam +
		intex * percentIntex
	);

	finalGrade = finalGrade.toFixed(2)

	setValue(finalGrade);
	setLetter(finalGrade);
})
