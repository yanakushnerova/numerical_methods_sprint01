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
// console.log(eulerMethod(function5, 1, 5, 1, 10))
// console.log("2")
// console.log(rungeKuttaMethod2(function5, 1, 5, 1, 10))
// console.log("3")
// console.log(rungeKuttaMethod3(function5, 1, 5, 1, 10))
// console.log("4")
// console.log(rungeKuttaMethod4(function5, 1, 5, 1, 10))
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

const info_int = document.createElement("div")
info_int.setAttribute("id", "info_int")

const info_diff = document.createElement("div")
info_int.setAttribute("id", "info_diff")

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
        info_int.innerText = ""

        let func = func_int.value
        let method = method_int.value
        let a = parseFloat(begin_int.value)
        let b = parseFloat(end_int.value)
        let n = parseInt(n_int.value)

        let result = solveIntegral(func, method, a, b, n)
        if (result == "incorrect") {
            info_int.innerText = "Interval is incorrect, a >= b"
        } else {
            info_int.innerText = "Result: I = " + result
        }
    
        integral_page.appendChild(info_int)
    }

    document.getElementById("solve_diff").onclick = function() {
        let func = func_diff.value
        let method = method_diff.value
        let a = parseFloat(begin_diff.value)
        let b = parseFloat(end_diff.value)
        let n = parseInt(n_diff.value)
        let y0 = parseFloat(y0_diff.value)
        console.log(func, "-----", method, "---", a, "-----", b, "-----", n, "----", y0)
    }
});

function solveIntegral(func, method, a, b, n) {
    let result = 0

    if (a >= b) {
        return "incorrect"
    }

    switch(func) {
        case '1':
            switch(method) {
                case '1':
                    result = leftRectangleMethod(function1, a, b, n)
                    break
                case '2': 
                    result = rightRectangleMethod(function1, a, b, n)
                    break
                case '3':
                    result = middleRectangleMethod(function1, a, b, n)
                    break
                case '4':
                    result = trapezoidalMethod(function1, a, b, n)
                    break
                case '5':
                    result = parabolicMethod(function1, a, b, n)
                    break
            }
            break
        case '2':
            switch(method) {
                case '1':
                    result = leftRectangleMethod(function2, a, b, n)
                    break
                case '2': 
                    result = rightRectangleMethod(function2, a, b, n)
                    break
                case '3':
                    result = middleRectangleMethod(function2, a, b, n)
                    break
                case '4':
                    result = trapezoidalMethod(function2, a, b, n)
                    break
                case '5':
                    result = parabolicMethod(function2, a, b, n)
                    break
            }
            break
        case '3':
            switch(method) {
                case '1':
                    result = leftRectangleMethod(function3, a, b, n)
                    break
                case '2': 
                    result = rightRectangleMethod(function3, a, b, n)
                    break
                case '3':
                    result = middleRectangleMethod(function3, a, b, n)
                    break
                case '4':
                    result = trapezoidalMethod(function3, a, b, n)
                    break
                case '5':
                    result = parabolicMethod(function3, a, b, n)
                    break
            }
            break
        case '4':
            switch(method) {
                case '1':
                    result = leftRectangleMethod(function4, a, b, n)
                    break
                case '2': 
                    result = rightRectangleMethod(function4, a, b, n)
                    break
                case '3':
                    result = middleRectangleMethod(function4, a, b, n)
                    break
                case '4':
                    result = trapezoidalMethod(function4, a, b, n)
                    break
                case '5':
                    result = parabolicMethod(function4, a, b, n)
                    break
            }
            break
    }

    return result
}

function solveDifferential() {

}
