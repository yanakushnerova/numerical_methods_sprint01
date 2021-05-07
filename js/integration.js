function leftRectangleMethod(func, a, b, n) {
    let step = (b - a) / n
    let result = 0

    for (let i = a; i < b; i += step) {
        result += func(i)
    }

    result *= step

    return result
}

function rightRectangleMethod(func, a, b, n) {
    let step = (b - a) / n
    let result = 0

    for (let i = a + step; i <= b; i += step) {
        result += func(i)
    }

    result *= step

    return result
}

function middleRectangleMethod(func, a, b, n) {
    let step = (b - a) / n
    let result = 0

    for (let i = a + step * 0.5; i < b; i += step) {
        result += func(i)
    }

    result *= step

    return result
}

function trapezoidalMethod(func, a, b, n) {
    let step = (b - a) / n
    let result = func(a) + func(b)

    for (let i = 1; i <= n - 1; i++) {
        let temp = a + i * step
        result += 2 * func(temp)
    }

    result *= step / 2

    return result
}

function parabolicMethod(func, a, b, n) {
    //check if n = 2^x

    let step = (b - a) / n
    let result = func(a) + func(b)

    for (let i = 1; i <= n - 1; i++) {
        let temp = a + i * step
        
        if (i % 2 == 0) {
            result += 2 * func(temp)
        } else {
            result += 4 * func(temp)
        }
    }

    result *= step / 3

    return result
}
