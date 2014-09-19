var allQuestions = [{
    question: "Who is Prime Minister of the United Kingdom?",
    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
    correctAnswer: "Winston Churchill"
}, {
    question: "Who is President of the USA?",
    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
    correctAnswer: "David Cameron"
}, {
    question: "Who is Prime Minister of Russia?",
    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
    correctAnswer: "Gordon Brown"
}, {
    question: "Who is Prime Minister of Uganda?",
    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
    correctAnswer: "Tony Blair"
}, {
    question: "Who is Prime Minister of Brazil",
    choices: ["Jim Babbit", "Gordon Brown", "Winston Churchill", "Tony Blair"],
    correctAnswer: "Tony Blair"
}, {
    question: "Who is Prime Minister of Lithuania?",
    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
    correctAnswer: "Tony Blair"
}, {
    question: "Who is Prime Minister of Israel?",
    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
    correctAnswer: "Tony Blair"
}];


var Quiz = {

    count: 0,
    correctAnswerCount: 0,

    showQuestion: function() {
        $('.questions').html(''); //clear question
        $('.choices').html(''); //clear answers
        $('.correct-answers').html(''); //clear correct answers
        $('.next-button').text('Next Question').removeClass('btn-success');
        if (this.count < allQuestions.length) {
            var question = allQuestions[this.count].question;
            var id = 1;
            $('.questions').prepend('<p>' + question + '</p>');

            allQuestions[this.count].choices.forEach(function(choice) {
                if (id === 1)
                    $('.choices').append('<div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios' + id + '" value="' + choice + '" checked>' + choice + '</label></div>');
                else
                    $('.choices').append('<div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios' + id + '" value="' + choice + '">' + choice + '</label></div>');
                id++;
            });
        } else {
            $('.correct-answers').html(this.correctAnswerCount + ' / ' + allQuestions.length + ' answered correctly!');
            $('.next-button').text('Start Over').addClass('btn-success');
            this.count = 0;
        }
    },

    checkAnswer: function(answer) {
        if (answer && answer === allQuestions[this.count].correctAnswer)
            this.correctAnswerCount += 1;
        this.count += 1;
    }

};

$(function() {
    //show first question
    Quiz.showQuestion();

    //event listener
    $('.next-button ').on('click', function() {
        var answer = $('input[name="optionsRadios"]:checked').val();
        Quiz.checkAnswer(answer);
        Quiz.showQuestion();
    });
});
