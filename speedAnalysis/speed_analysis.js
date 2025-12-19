let testText = 'the quick brown fox jumps over the lazy dog.';
let startTime, endtime;

function startTest(){
    document.getElementById('inputText').value = testText;

    let userInput = document.getElementById('userInput');
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById("output").innerHTML = "";

    startTime = new Date().getTime();
}


function endTest(){
    endtime = new Date().getTime();
    document.getElementById("userInput").readOnly = true;

    var timeElapsed = (endtime - startTime) / 1000;
    
    var userTypedText = document.getElementById("userInput").value;

    var typedWords = userTypedText.split(/\s+/).filter((word)=>{
        return word !== ""
    }).length;

    var wpm = 0; // Default value
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }
    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";
}