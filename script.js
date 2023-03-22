const input = document.querySelector('input')
const ball = document.querySelector('img')
const error = document.querySelector('.error')
const answer = document.querySelector('.answer')

const answersArr = ['Absolutly yes', 'No', 'Maybe', 'Shake again', 'I hope so', 'Thank you for let you me know (:']

const shakeBall = () => {
    ball.classList.add('shake-animation')
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
    
    if(input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = ''
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Invalid question. Add "?".'
        answer.textContent = ''
    } else {
        error.textContent = 'Ask the question!'
        answer.textContent = ''
    }

    ball.classList.remove('shake-animation')

}

const generateAnswer = () => {
    const number = Math.floor(Math.random() * 6)
    answer.innerHTML = `<span>Answer:</span> ${answersArr[number]}`
}

ball.addEventListener('click', shakeBall)