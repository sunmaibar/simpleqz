function submitAnswers() {
    var total = 5;
    var score = 0;
    
    //Get User Input

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //Validation


    for(i = 1; i <= total; i++){
        if(eval("q"+i) == null || eval("q"+i) == ""){
            alert("你第"+ i +"題還沒回答");
            return false;
        }
    }


    //Set Correct Answers
    var answers = ["b","a","d","b","d"];

    //check Answers
    for(i = 1; i <= total; i++){
        if(eval("q" + i) == answers[ i - 1 ]){
          score++;  
        }
    }
    // Display Results
    var results = document.getElementById("results");
    results.innerHTML = "<h3><span>"+total+"</span> 題中你答對<span> "+score+" </span> </h3>";
    alert(total +"題中你答對" + score);


    return false;
}