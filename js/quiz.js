var score = 0;//set score to 0
var total = 5;//Total no. of questions
var point = 2;//points per correct answer
var highest = total * point;

//Initializer
function init(){
    //set correct answers
    sessionStorage.setItem('a1','b');
    sessionStorage.setItem('a2','d');
    sessionStorage.setItem('a3','c');
    sessionStorage.setItem('a4','a');
    sessionStorage.setItem('a5','b');
}

$(document).ready(function(){
    //Hide all questions
   $('.question-form').hide();

   //Show first Question
    $('#q1').show();

    $('.question-form #submit').click(function(){
       //Get data attributes
       current = $(this).parents('form:first').data('question');
       next = $(this).parents('form:first').data('question') + 1;
       //Hide all questions
        $('.question-form').hide();
        //Show next question
        $('#q'+next+'').fadeIn(300);
        process(''+current+'');
        return false;
    });
});

//process the answers
function process(n){
    //Get input value
    var submitted = $('input[name=q'+n+']:checked').val();
    if(submitted == sessionStorage.getItem('a'+n+'')){
        score = score + point;
    }
    if(n == total){
        $('#results').html('<h3>Your final score is: '+ score + 'out of'+highest+'</h3><a href="index.html">Take Quiz again</a>');
        if(score == highest){
            $('#results').append('<p>You are an HTML5 master!');
        }
        else if(score == highest - point || score == highest - point - point){
            $('#results').append('<p>Good Job!');

        }
    }

    return false;
}


//Add Event Listener
window.addEventListener('load',init,false);