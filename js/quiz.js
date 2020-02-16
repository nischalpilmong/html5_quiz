var score = 0;//set score to 0
var total = 5;//Total no. of questions
var point =1;//points per correct answer
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

    $('#q1 #submit').click(function () {
        $('.question-form').hide();
        $('#q2').fadeIn(300);
        return false;
    });
    $('#q2 #submit').click(function () {
        $('.question-form').hide();
        $('#q3').fadeIn(300);
        return false;
    });
    $('#q3 #submit').click(function () {
        $('.question-form').hide();
        $('#q4').fadeIn(300);
        return false;
    });
    $('#q4 #submit').click(function () {
        $('.question-form').hide();
        $('#q5').fadeIn(300);
        return false;
    });
    $('#q5 #submit').click(function () {
        $('.question-form').hide();
        $('#results').fadeIn(300);
        return false;
    });
});

//Add Event Listener
window.addEventListener('load',init,false);