name1 = localStorage.getItem("uname1");
name2 = localStorage.getItem("uname2");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML = name1 + " : ";
document.getElementById("player2_name").innerHTML = name2 + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "<h3>Question Turn : " + name1 + "</h3>";
document.getElementById("player_answer").innerHTML = "<h3>Answer Turn : " + name2 + "</h3>";

function send() {

    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_ans = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input ='text' id='input_check_box' placeholder = 'Type Here'> ";
    check_button = "<br><br><button class = 'btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check() {
    likhith = document.getElementById("input_check_box").value;
    if (likhith == actual_ans) {
        if (answer_turn == "player1") {
            player1_newscore = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_newscore;
        } else {
            player2_newscore = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_newscore;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn -" + name2;
    } else {
        question_turn == "player1"
        document.getElementById("player_question").innerHTML = "Question Turn -" + name1;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + name2;
    } else {
        answer_turn == "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + name1;
    }
    document.getElementById("input_check_box").value = "";
    document.getElementById("output").innerHTML = "";
}
