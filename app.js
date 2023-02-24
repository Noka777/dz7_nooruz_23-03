const form = document.querySelector("#calculator")
const result = document.querySelector("#result")

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    const operator = document.querySelector("#operator").value

    let answer

    switch (operator) {
        case "+":
            answer = num1 + num2
            break
        case "-":
            answer = num1 - num2
            break
        case "*":
            answer = num1 * num2
            break
        case "/":
            answer = num1 / num2
            break
        default:
            answer = "Ошибка: неизвестный оператор"
    }
    result.textContent = `Результат: ${answer}`
})