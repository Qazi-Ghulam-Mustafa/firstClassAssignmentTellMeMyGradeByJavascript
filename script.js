var Maths = +prompt('enter Maths marks');
var Physics = +prompt('enter Physics marks');
var English = +prompt('enter English marks');
var Computer = +prompt('enter Computer marks');
var Urdu = +prompt('enter Urdu marks');
var obtainedMarks = Urdu + English + Maths + Physics + Computer;
alert(obtainedMarks)
var totalMarks = 500;
var percentage = (obtainedMarks / totalMarks) * 100;
alert(percentage)

if (percentage >= 90) {
    alert("you got A1 Grade in your exam")
} else if (percentage >= 80) {
    alert("you got A Grade in your exam")
} else if (percentage >= 70) {
    alert("you got B Grade in your exam")
} else if (percentage >= 60) {
    alert("you got C Grade in your exam ")
} else if (percentage >= 50) {
    alert("you got D Grade in your exam ")
} else if (percentage >= 40) {
    alert("you are Fail in your exam ")
}
