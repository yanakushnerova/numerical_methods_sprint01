// console.log("1")
// console.log(leftRectangleMethod(function1, 0, 5, 100))
// console.log(leftRectangleMethod(function2, 0, 5, 100))
// console.log("2")
// console.log(rightRectangleMethod(function1, 0, 5, 100))
// console.log(rightRectangleMethod(function2, 0, 5, 100))
// console.log("3")
// console.log(middleRectangleMethod(function1, 0, 5, 100))
// console.log(middleRectangleMethod(function2, 0, 5, 100))
// console.log("4")
// console.log(trapezoidalMethod(function1, 0, 5, 100))
// console.log(trapezoidalMethod(function2, 0, 5, 100))
// console.log("5")
// console.log(parabolicMethod(function1, 0, 5, 128))
// console.log(parabolicMethod(function2, 0, 5, 128))

// console.log("---------------------------------------------")
// console.log("1")
// console.log(eulerMethod(function3, 1, 5, 1, 10))
// console.log("2")
// console.log(rungeKuttaMethod2(function3, 1, 5, 1, 10))
// console.log("3")
// console.log(rungeKuttaMethod3(function3, 1, 5, 1, 10))
// console.log("4")
// console.log(rungeKuttaMethod4(function3, 1, 5, 1, 10))
// console.log("---------------------------------------------")


const choise_page = document.getElementById("choise")
const integral_page = document.getElementById("integral")
const differential_page = document.getElementById("differential")

const integral_button = document.getElementById("ch_integral")
const differential_button = document.getElementById("ch_differential")

const func_int = document.getElementById("func_int")
const method_int = document.getElementById("method_int")

const begin_int = document.getElementById("begin_int")
const end_int = document.getElementById("end_int")
const n_int = document.getElementById("n_int")

const func_diff = document.getElementById("func_diff")
const method_diff = document.getElementById("method_diff")

const begin_diff = document.getElementById("begin_diff")
const end_diff = document.getElementById("end_diff")
const n_diff = document.getElementById("n_diff")
const y0_diff = document.getElementById("y0_diff")

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

    document.getElementById("solve_int").onclick = function() {
        console.log("ihihihihi")
        let a = parseFloat(begin_int.value)
        let b = parseFloat(end_int.value)
        let n = parseFloat(n_int.value)
        console.log(a, "-----", b, "-----", n)
        
    }

    document.getElementById("table_int").onclick = function() {
        alert("here")
    }

    document.getElementById("solve_diff").onclick = function() {
        alert("there")
    }
});
