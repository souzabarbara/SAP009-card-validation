function isValid(creditCardNumber) {
  const listOfNumbers = transformStringToListOfNumbers(creditCardNumber)
  const numbers = applyTwoSteps(listOfNumbers)
  return sumOfNumbers(numbers) % 10 === 0
}

// transformar uma string em uma lista de números 
function transformStringToListOfNumbers(string) {
  return string.split("").map(char => parseInt(char))
}

// implica as funções de doubling 
function applyTwoSteps(listOfNumbers) {
  return listOfNumbers.map((currentValue, index) => {
    const isEven = index % 2 === 0

    if (isEven) return currentValue

    const doubleValue = currentValue * 2

    if (doubleValue <= 9) return doubleValue

    const arrNumbersString = doubleValue.toString().split('')
    return parseInt(arrNumbersString[0]) + parseInt(arrNumbersString[1])
  })
}

// soma todos os números da lista
function sumOfNumbers(list) {
  return list.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

function maskify(string) {
  return string.replace(/\d(?=\d{3})/g, "*")
}

const validator = {
  isValid: isValid,
  maskify: maskify
};

export default validator;
