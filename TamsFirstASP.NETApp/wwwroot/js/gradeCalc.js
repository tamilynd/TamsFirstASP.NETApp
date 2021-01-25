const percentAssign = 0.5;
const percentProject = 0.1;
const percentQuiz = 0.1;
const percentExam = 0.2;
const percentIntex = 0.1;


//sets inner HTML value for grade percentage calculated in set listener function
function setValue(grade) {
	$("#finalGrade").html(grade + " %");
}

//calculates letter grade and sets innerhtml for it
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

	$("#letterGrade").html(letterGrade);
	$("#letterGrade").css({ 'color': color });
}

//pull grades and compute final grade percentage
$("#submit").click( function(){
	var assignment = $("#assignments").val();
	var project = $("#projects").val();
	var quiz = $("#quizzes").val();
	var exam = $("#exams").val();
	var intex = $("#intex").val();

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
