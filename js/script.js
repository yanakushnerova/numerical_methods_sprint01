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
info_diff.setAttribute("id", "info_diff")

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

    document.getElementById("table_int").onclick = function() {
        info_int.innerText = ""
        info_int.innerText += "Comparing results of every method: "

        let func = func_int.value
        let a = parseFloat(begin_int.value)
        let b = parseFloat(end_int.value)
        let n = parseInt(n_int.value)

        let table = document.createElement("table")
        let first_tr = document.createElement("tr")
        let second_tr = document.createElement("tr")

        let first = document.createElement("th")
        first.innerText = "Left Rectangle"
        first_tr.appendChild(first)
        let second = document.createElement("th")
        second.innerText = "Right Rectangle"
        first_tr.appendChild(second)
        let third = document.createElement("th")
        third.innerText = "Middle Rectangle"
        first_tr.appendChild(third)
        let fourth = document.createElement("th")
        fourth.innerText = "Trapezoidal"
        first_tr.appendChild(fourth)
        let fifth = document.createElement("th")
        fifth.innerText = "Parabolic"
        first_tr.appendChild(fifth)

        let res1 = document.createElement("th")
        res1.innerText = solveIntegral(func, '1', a, b, n)
        second_tr.appendChild(res1)
        let res2 = document.createElement("th")
        res2.innerText = solveIntegral(func, '2', a, b, n)
        second_tr.appendChild(res2)
        let res3 = document.createElement("th")
        res3.innerText = solveIntegral(func, '3', a, b, n)
        second_tr.appendChild(res3)
        let res4 = document.createElement("th")
        res4.innerText = solveIntegral(func, '4', a, b, n)
        second_tr.appendChild(res4)
        let res5 = document.createElement("th")
        res5.innerText = solveIntegral(func, '5', a, b, n)
        second_tr.appendChild(res5)

        table.appendChild(first_tr)
        table.appendChild(second_tr)
        info_int.appendChild(table)
        integral_page.appendChild(info_int)
    }

    document.getElementById("solve_diff").onclick = function() { 
        info_diff.innerText = ""
        info_diff.innerText += "Table: "
        console.log(info_diff.innerText)

        let func = func_diff.value
        let method = method_diff.value
        let a = parseFloat(begin_diff.value)
        let b = parseFloat(end_diff.value)
        let n = parseInt(n_diff.value)
        let y0 = parseFloat(y0_diff.value)
        
        let result_x = findCoordinates(a, b, n)
        let result_y = solveDifferential(func, method, a, b, n, y0)
        console.log(result_x)
        console.log(result_y)

        let table = document.createElement("table")
        let first_tr = document.createElement("tr")
        let first = document.createElement("th")
        first.innerText = "x"
        first_tr.appendChild(first)
        let second = document.createElement("th")
        second.innerText = "y"
        first_tr.appendChild(second)
        table.appendChild(first_tr)
        
        for (let i = 0; i < result_y.length; i++) {
            let temp = document.createElement("tr")
            let temp1 = document.createElement("td")
            temp1.innerText = result_x[i]
            temp.appendChild(temp1)
            let temp2 = document.createElement("td")
            temp2.innerText = result_y[i]
            temp.appendChild(temp2)
            table.appendChild(temp)
        }

        info_diff.appendChild(table)
        differential_page.appendChild(info_diff)
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

function findCoordinates(a, b, n) {
    let x = []
    let step = (b - a) / n

    for (let i = a + step; i <= b; i += step) {
        x.push(i)
    }

    return x
}

function solveDifferential(func, method, a, b, n, y0) {
    let result = []

    if (a >= b) {
        return "incorrect"
    }

    switch(func) {
        case '1':
            switch(method) {
                case '1':
                    result = eulerMethod(function5, a, b, y0, n)
                    break
                case '2': 
                    result = rungeKuttaMethod2(function5, a, b, y0, n)
                    break
                case '3':
                    result = rungeKuttaMethod3(function5, a, b, y0, n)
                    break
                case '4':
                    result = rungeKuttaMethod4(function5, a, b, y0, n)
                    break
            }
            break
        case '2':
            switch(method) {
                case '1':
                    result = eulerMethod(function6, a, b, y0, n)
                    break
                case '2': 
                    result = rungeKuttaMethod2(function6, a, b, y0, n)
                    break
                case '3':
                    result = rungeKuttaMethod3(function6, a, b, y0, n)
                    break
                case '4':
                    result = rungeKuttaMethod4(function6, a, b, y0, n)
                    break
            }
            break
        case '3':
            switch(method) {
                case '1':
                    result = leftRectangleMethod(function7, a, b, n)
                    break
                case '2': 
                    result = rightRectangleMethod(function7, a, b, n)
                    break
                case '3':
                    result = middleRectangleMethod(function7, a, b, n)
                    break
                case '4':
                    result = trapezoidalMethod(function7, a, b, n)
                    break
            }
            break
    }

    return result
}
