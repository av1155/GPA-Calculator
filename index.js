import { question, questionFloat, questionInt } from "readline-sync";

function calculateSemesterGPA(semesterCourses) {
    // Calculate the semester GPA
    let convertGPA = new Map();
    convertGPA.set("A+", 4.0);
    convertGPA.set("A", 4.0);
    convertGPA.set("A-", 3.7);
    convertGPA.set("B+", 3.3);
    convertGPA.set("B", 3.0);
    convertGPA.set("B-", 2.7);
    convertGPA.set("C+", 2.3);
    convertGPA.set("C", 2.0);
    convertGPA.set("C-", 1.7);
    convertGPA.set("D+", 1.3);
    convertGPA.set("D", 1.0);
    convertGPA.set("F", 0.0);

    let totalCredits = 0;
    let totalGradePoints = 0;
    semesterCourses.forEach((course) => {
        let courseGradePoints = convertGPA.get(course.grade);
        let courseCredits = course.credits;
        let gpaTotal = courseGradePoints * courseCredits;

        totalGradePoints += gpaTotal;
        totalCredits += courseCredits;
    });

    let semesterGpa = totalGradePoints / totalCredits;

    return semesterGpa.toFixed(2);
}

function calculateOverallGPA(totalGPA, totalCredits, semesterGPA, semesterCredits) {
    // Calculate the updated overall GPA
    let updatedOverallGPA =
        (totalGPA * totalCredits + semesterGPA * semesterCredits) / (totalCredits + semesterCredits);

    return updatedOverallGPA.toFixed(2);
}

async function main() {
    // logic to interact with user and invoke calculations
    let numCourses = questionInt("How many courses are you taking? ");
    console.log(); // New line

    let semesterCourses = [];
    let possibleGrades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "F"];

    for (let i = 0; i < numCourses; i++) {
        console.log("Course " + (i + 1) + ":");
        let courseName = question("Enter course name: ");

        let courseGrade = "";
        let isValidGrade = false;
        while (!isValidGrade) {
            courseGrade = question("Enter course grade: ");
            if (possibleGrades.includes(courseGrade.toUpperCase())) {
                isValidGrade = true;
            } else {
                console.log("Invalid input. Please enter a valid grade.");
            }
        }

        let courseCredits = -1;
        while (courseCredits < 0 || isNaN(courseCredits)) {
            if (courseCredits !== -1) {
                console.log("Invalid input. Please enter a positive number of credits.");
            }
            courseCredits = questionInt("Enter course credits: ");
        }

        semesterCourses.push({
            name: courseName.toUpperCase(),
            grade: courseGrade.toUpperCase(),
            credits: courseCredits,
        });

        console.log(); // New line
    }

    let semesterCredits = 0;
    semesterCourses.forEach((course) => {
        console.log(`Course: ${course.name}, Grade: ${course.grade}, Credits: ${course.credits}`);
        semesterCredits += course.credits;
    });

    let semesterGPA = calculateSemesterGPA(semesterCourses);
    console.log("Semester GPA: " + semesterGPA + "\n");

    let decision = question("Do you want to calculate your overall GPA? (Y/N): ");

    let totalGPA = -1;
    let totalCredits = -1;
    if (decision.toUpperCase() === "Y" || decision.toUpperCase() === "YES") {
        while (totalGPA < 0.0 || totalGPA > 4.0 || isNaN(totalGPA)) {
            if (totalGPA !== -1) {
                // This check prevents the message from showing the first time
                console.log("Invalid input. Please enter a GPA between 0.00 and 4.00.");
            }
            totalGPA = questionFloat("Current overall GPA: ");
        }
        while (totalCredits < 0 || isNaN(totalCredits)) {
            if (totalCredits !== -1) {
                // Similarly, this prevents the message from showing the first time
                console.log("Invalid input. Please enter a positive number of credits.");
            }
            totalCredits = questionInt("Total credits earned: ");
        }

        console.log("Overall GPA: " + calculateOverallGPA(totalGPA, totalCredits, semesterGPA, semesterCredits));
        console.log("Total credits earned: " + (totalCredits + semesterCredits));
    } else {
        console.log("Goodbye!");
    }
}

main();
