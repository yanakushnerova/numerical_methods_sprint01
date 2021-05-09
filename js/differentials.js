function eulerMethod(func, a, b, y0, n) {
    let y = []
    let step = (b - a) / n
    
    for (let i = a + step; i <= b; i += step) {
        let temp = (i - y0) / n
        let xi = a, yi = y0

        for (let j = 0; j < n; j++) {
            yi += temp * func(xi, yi)
            xi += temp
        }
        
        y.push(yi)
    }

    return y
}

function rungeKuttaMethod2(func, a, b, y0, n) {
    let y = []
    let step = (b - a) / n

    for (let i = a + step; i <= b; i += step) {
        let temp = (i - a) / n
        let xi = a, yi = y0

        for (let j = 0; j < n; j++) {
            let temp1 = func(xi, yi)
            let temp2 = func(xi + temp / 2, yi + temp * temp1 / 2)

            yi += temp * (temp1 + 2 * temp2) / 6
            xi += temp
        }

        y.push(yi)
    }

    return y
}

function rungeKuttaMethod3(func, a, b, y0, n) { 
    let y = []
    let step = (b - a) / n

    for (let i = a + step; i <= b; i += step) {
        let temp = (i - a) / n
        let xi = a, yi = y0

        for (let j = 0; j < n; j++) {
            let temp1 = func(xi, yi)
            let temp2 = func(xi + temp / 2, yi + temp * temp1 / 2)
            let temp3 = func(xi + temp / 2, yi + temp * temp2 / 2)

            yi += temp * (temp1 + 2 * temp2 + 2 * temp3) / 6
            xi += temp
        }

        y.push(yi)
    }

    return y
}

function rungeKuttaMethod4(func, a, b, y0, n) {
    let y = []
    let step = (b - a) / n

    for (let i = a + step; i <= b; i += step) {
        let temp = (i - a) / n
        let xi = a, yi = y0

        for (let j = 0; j < n; j++) {
            let temp1 = func(xi, yi)
            let temp2 = func(xi + temp / 2, yi + temp * temp1 / 2)
            let temp3 = func(xi + temp / 2, yi + temp * temp2 / 2)
            let temp4 = func(xi + temp, yi + temp * temp3)

            yi += temp * (temp1 + 2 * temp2 + 2 * temp3 + temp4) / 6
            xi += temp
        }

        y.push(yi)
    }

    return y
}
