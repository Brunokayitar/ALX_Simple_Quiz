// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Retrieve the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // If no option is selected, handle gracefully (though not explicitly required)
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }
    
    const userAnswer = selectedOption.value;
    const feedbackElement = document.getElementById('feedback');
    
    // Compare and update feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
