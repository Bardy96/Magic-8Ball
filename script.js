const input = document.querySelector('input')
const ball = document.querySelector('img')
const error = document.querySelector('.error')
const answer = document.querySelector('.answer')

const answersArr = ['Absolutly yes', 'No', 'Maybe', 'Shake again', 'I hope so', 'Thank you for the you me know (:']


const generateAnswer = () => {
    const number = Math.floor(Math.random() * 6)
    answer.innerHTML = `<span>Answer:</span> ${answersArr[number]}`
}

ball.addEventListener('click', generateAnswer)