const $weight = document.getElementById('weight')
const $height = document.getElementById('height')

console.log($weight)
console.log($height)

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault()
    const response = category(calculate(Number($weight.value), Number($height.value)))
   console.log(response)
   document.querySelector('#response').innerHTML = response
  
})

console.log( category(70 / (1.60*1.60)))

function calculate (weight, height) {
    return weight / (height * height)
}

function isUnderWeight (imc) {
    return imc < 18.5
}
function isNormalweight (imc) {
    return imc >= 18.5 && imc <= 24.9
}
function isOverWeight (imc) {
    return imc >= 25 && imc <= 29.9
}
function isObesityOne (imc) {
    return imc >= 30 && imc <= 34.9
}
function isObesityTwo (imc) {
    return imc >= 35 && imc <= 39.9
}
function isObesityThree (imc) {
    return imc >= 40
}
function category (imc) {
    if (isUnderWeight(imc)) return `Imc: ${imc} está abaixo do peso`
    if (isNormalweight(imc)) return `Imc: ${imc} está com peso normal`
    if (isOverWeight(imc)) return `Imc: ${imc} está acima do peso`
    if (isObesityOne(imc)) return `Imc: ${imc} obesidade grau 1`
    if (isObesityTwo(imc)) return `Imc: ${imc} obesidade grau 2`
    if (isObesityThree(imc)) return `Imc: ${imc} obesidade grau 3`
}

