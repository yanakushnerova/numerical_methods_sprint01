console.log("1")
console.log(leftRectangleMethod(function1, 0, 5, 100))
console.log(leftRectangleMethod(function2, 0, 5, 100))
console.log("2")
console.log(rightRectangleMethod(function1, 0, 5, 100))
console.log(rightRectangleMethod(function2, 0, 5, 100))
console.log("3")
console.log(middleRectangleMethod(function1, 0, 5, 100))
console.log(middleRectangleMethod(function2, 0, 5, 100))
console.log("4")
console.log(trapezoidalMethod(function1, 0, 5, 100))
console.log(trapezoidalMethod(function2, 0, 5, 100))
console.log("5")
console.log(parabolicMethod(function1, 0, 5, 128))
console.log(parabolicMethod(function2, 0, 5, 128))

console.log("---------------------------------------------")
console.log("1")
console.log(eulerMethod(function3, 1, 5, 1, 10))
console.log("2")
console.log(rungeKuttaMethod2(function3, 1, 5, 1, 10))
console.log("3")
console.log(rungeKuttaMethod3(function3, 1, 5, 1, 10))
console.log("4")
console.log(rungeKuttaMethod4(function3, 1, 5, 1, 10))

const choise_page = document.getElementById("choise")
const integral_page = document.getElementById("integral")
const differential_page = document.getElementById("differential")

const integral_button = document.getElementById("ch_integral")
const differential_button = document.getElementById("ch_differential")

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("ch_integral").onclick = function() {
        choise_page.style.display = "none"
        integral_page.style.display = "block"
        differential_page.style.display = "none"
    }

    document.getElementById("ch_differential").onclick = function() {
        choise_page.style.display = "none"
        integral_page.style.display = "none"
        differential_page.style.display = "block"
    }

    document.getElementById("turn_back_int").onclick = function() {
        choise_page.style.display = "block"
        integral_page.style.display = "none"
        differential_page.style.display = "none"
    }

    document.getElementById("turn_back_diff").onclick = function() {
        choise_page.style.display = "block"
        integral_page.style.display = "none"
        differential_page.style.display = "none"
    }

    
});
