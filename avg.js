document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the grade values from input fields
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const subject5 = parseFloat(document.getElementById('subject5').value);

    // Calculate the average grade
    const average = (subject1 + subject2 + subject3 + subject4 + subject5) / 5;

    // Display the result
    document.getElementById('average').textContent = average.toFixed(2);
});
