const imc = require('./calculate-imc')

function isUnderWeight () {
    return imc < 18.5
}
function isNormalweight () {
    return imc >= 18.5 && imc <= 24.9
}
function isOverWeight () {
    return imc >= 25 && imc <= 29.9
}
function isObesityOne () {
    return imc >= 30 && imc <= 34.9
}
function isObesityTwo () {
    return imc >= 35 && imc <= 39.9
}
function isObesityThree () {
    return imc >= 40
}
module.exports = function () {
    if (isUnderWeight()) return `Imc: ${imc} está abaixo do peso`
    if (isNormalweight()) return `Imc: ${imc} está com peso normal`
    if (isOverWeight()) return `Imc: ${imc} está acima do peso`
    if (isObesityOne()) return `Imc: ${imc} obesidade grau 1`
    if (isObesityTwo()) return `Imc: ${imc} obesidade grau 2`
    if (isObesityThree()) return `Imc: ${imc} obesidade grau 3`
}
