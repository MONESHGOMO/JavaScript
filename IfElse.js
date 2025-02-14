function evenOrOdd(givenNumber) {

    let divisor = 2;
    let validator = 0;

    if (givenNumber % divisor == validator) {
        console.log("It is a even number ");
    }
    else {
        console.log("It is a odd number ");

    }
}

function positiveOrNegative(givenNumber) {

    if (givenNumber == 0 || givenNumber > 0) {
        console.log("It is a positive number");
    }
    else {
        console.log("It is a negative number");
    }
}

function gradeCalculator(givenMark) {

    let grade_A = "A";
    let grade_B = "B";
    let grade_C = "C";
    let grade_D = "D";
    let grade_F = "FAIL";
    let minimumMark = 0;
    let maximumMark = 100;

    if (givenMark > minimumMark && givenMark <= maximumMark) {

        if (givenMark > 79) {
            console.log("Grade : " + grade_A);
        }
        else if (givenMark > 69) {
            console.log("Grade : " + grade_B);
        }
        else if (givenMark > 59) {
            console.log("Grade : " + grade_C);

        }
        else if (givenMark > 49) {
            console.log("Grade : " + grade_D);
        }
        else {
            console.log("Fail : " + grade_F);

        }
    }
    else {
        console.log("Invalid score check again");

    }
}


function leapYearChecker(year) {
    let divisor = 4;
    let testDivisor = 100;
    let test2Divisor = 400;

    if (year % divisor == 0 && year % testDivisor !== 0 || year % test2Divisor == 0) {
        console.log(year + " " + "It is a leap year ");

    }
    else {
        console.log(year + " " + "It is not a leap year ");

    }
}

function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}


//call()

evenOrOdd(7);
evenOrOdd(10);

positiveOrNegative(-5);
positiveOrNegative(8);

gradeCalculator(85);
gradeCalculator(72);
gradeCalculator(55);
gradeCalculator(40);
gradeCalculator(105);

leapYearChecker(2024);
leapYearChecker(2023);

checkVotingEligibility(16);
checkVotingEligibility(20);
