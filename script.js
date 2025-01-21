document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Retrieve input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    // Create a JSON object
    const jsonData = {
        name: name,
        age: parseInt(age, 10),
        email: email
    };

    // Display the JSON data
    document.getElementById('jsonOutput').textContent = JSON.stringify(jsonData, null, 2);
});

document.getElementById('copyButton').addEventListener('click', function() {
    const jsonOutput = document.getElementById('jsonOutput').textContent;

    // Copy the JSON output to the clipboard
    navigator.clipboard.writeText(jsonOutput).then(() => {
        alert('JSON copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
