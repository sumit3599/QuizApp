const quizData = [
    {
        question: "Which of the following tag doesn't require a closing tag?",
        a: "<br>",
        b: "<hr>",
        c: "Both A and B",
        d: "None",
        correct: "c",
    },
    {
        question: "Which attribute is used to provide a unique name to an HTML element?",
        a: "class",
        b: "id",
        c: "type",
        d: "None",
        correct: "b",
    },
    {
        question: "The correct way to print 'world' from string s = 'Hello World' in Python among the follwing is?",
        a: "print('World')",
        b: "s[-1:-6:-1][::-1]",
        c: "s[s.find(' ')+1:]",
        d: "Both B and C",
        correct: "d",
    },
    {
        question: "The latest Android version is: ",
        a: "13",
        b: "12",
        c: "11",
        d: "10",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})