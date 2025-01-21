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
