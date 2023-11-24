const uiTranslations = {
    'replay': {
        'fr': 'Refaire le quiz',
        'en': 'Redo the quiz'
    },
    'submitAnswer': {
        'fr': 'Valider ma réponse',
        'en': 'Submit my answer'
    },
    'nextQuestion': {
        'fr': 'Question suivante',
        'en': 'Next question'
    },
    'rightAnswer': {
        'fr': 'Vous aviez la bonne réponse :',
        'en': 'You had the right answer:'
    },
    'wellDone': {
        'fr': 'Bien joué !',
        'en': 'Well done!'
    },
    'wrongAnswer': {
        'fr': 'Mauvaise réponse !',
        'en': 'Wrong answer!'
    },
    'correctAnswerWas': {
        'fr': 'La bonne réponse est :',
        'en': 'The correct answer was:'
    },
    'allOver': {
        'fr': 'C\'est fini !',
        'en': 'It\'s all over now!'
    },
    'yourScore': {
        'fr': 'Votre score final est de :',
        'en': 'Your final score is:'
    }
}

const quizForm = document.querySelector('[data-quiz-json]');
const jsonUrl = quizForm.attributes['data-quiz-json'].value;
const lang = quizForm.attributes['data-quiz-lang'].value || 'fr';

readJsonFile(jsonUrl, runQuiz);

let jsonData = {};
let quizStep = 0;
let score = 0;

function runQuiz(text) {
    jsonData = JSON.parse(text);
    renderStep();
    quizForm.onsubmit = submitQuiz;
}

function renderStep() {
    const question = jsonData.questions[quizStep];

    if (!question) {
        score = 0;
        quizStep = 0;
        renderStep();
        return;
    }

    let answersHtml = '';
    for (const index in question.answers) {
        answersHtml += `<div class="radio-group radio-rich">
            <input type="radio" id="quiz-radio-rich-${index}" name="answer" value="${question.answers[index].title}" required>
            <label class="label" for="quiz-radio-rich-${index}">${question.answers[index].title}</label>
        </div>`;
    }

    quizForm.innerHTML = `<fieldset class="fieldset " aria-labelledby="quiz-radio-rich-legend" role="group">
        <legend class="fieldset__legend" id='quiz-radio-rich-legend'>
            ${(quizStep+1)}. ${question.question}
        </legend>
        <div class="fieldset__content">
            ${answersHtml}
        </div>
    </fieldset>
    <div class="form-group">
        <button type="submit" class="btn">${getUiTranslation('submitAnswer', lang)}</button>
    </div>`;
}

function checkAnswer(userAnswer) {
    const question = jsonData.questions[quizStep];

    let rightAnswer = null;
    for (const index in question.answers) {
        if (question.answers[index].isRight) {
            rightAnswer = question.answers[index].title;
            break;
        }
    }

    if (userAnswer === rightAnswer) {
        ++score;
    }

    quizForm.innerHTML = `<p class="fieldset__legend">${(quizStep+1)}. ${question.question}</p>`
    + (userAnswer === rightAnswer
        ? `<div class="alert alert--success">
            <p class="alert__title">${getUiTranslation('wellDone', lang)}</p>
            <p>${getUiTranslation('rightAnswer', lang)} «&nbsp;${rightAnswer}&nbsp;»</p>
            <p>${question.answerInformation ? question.answerInformation : ''}</p>
        </div>`
        : `<div class="alert alert--error">
            <p class="alert__title">${getUiTranslation('wrongAnswer', lang)}</p>
            <p>${getUiTranslation('correctAnswerWas', lang)} «&nbsp;${rightAnswer}&nbsp;»</p>
            <p>${question.answerInformation ? question.answerInformation : ''}</p>
        </div>`
    )
    + (jsonData.questions[quizStep+1]
        ? `<div class="form-group">
            <button type="submit" class="btn">${getUiTranslation('nextQuestion', lang)}</button>
        </div>`
        : `<div class="alert alert--info">
            <p class="alert__title">${getUiTranslation('allOver', lang)}</p>
            <p>${getUiTranslation('yourScore', lang)} ${score} / ${quizStep+1}</p>
            <p><button type="submit" class="btn btn--secondary">${getUiTranslation('replay', lang)}</button></p>
        </div>`
    );
}

function getUiTranslation(key, lang) {
    return uiTranslations[key][lang];
}

function submitQuiz(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const userAnswer = data.get('answer');
    
    if (null === userAnswer) {
        ++quizStep;
        renderStep();
        return;
    }

    checkAnswer(userAnswer);
}

function readJsonFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}