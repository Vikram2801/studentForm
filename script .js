let subjectCount = 1;

// Function to dynamically add subjects
function addSubject() {
    subjectCount++;
    const marks = document.getElementById("marks-container");
    const newInput = document.createElement("input");
    newInput.type = "number";
    newInput.classList.add('form-control', 'mb-2');
    newInput.placeholder = `Enter Mark For Subject ${subjectCount}`;
    newInput.required = true;
    marks.appendChild(newInput);
}


// Calculate total marks
function calculate(marks) {
    const totalMarks = marks.reduce((sum, mark) => sum + parseInt(mark), 0);
    return totalMarks;
}

// Calculate percentage
function percentage(totalMarks, subjectCount) {
    return (totalMarks / (subjectCount * 100)) * 100;
}

// Handle form submission
function submit(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const rollNumber = document.getElementById("rollNumber").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const department = document.getElementById("Department").value;
    
    // Get marks
    const marks = Array.from(document.querySelectorAll("#marks-container input")).map(input => input.value);

    const totalMarks = calculate(marks);
    const percentageValue = percentage(totalMarks, marks.length);

    // Add student details to the table
    const table = document.getElementById("studentTable");
    const row = table.insertRow();
    row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${rollNumber}</td>
        <td>${department}</td>
        <td>${email}</td>
        <td>${phoneNumber}</td>
        <td>${marks.join(', ')}</td>
        <td>${totalMarks}</td>
        <td>${percentageValue.toFixed(2)}%</td>
        <td>${gender}</td>
        <td><button class="btn btn-danger" onclick="deleteStudent(this)">Delete</button></td>
    `;

    // Highlight if the student has failed (percentage < 40%)
    if (percentageValue < 40) {
        row.classList.add('failed');
    }
    else{
        row.classList.add(`success`)
    }

    // Reset the form after submission
    document.getElementById('studentForm').reset();
    document.getElementById('marks-container').innerHTML = '<input type="number" class="form-control mb-2" placeholder="Enter marks for subject 1" required />';
    subjectCount = 1;
}

// Function to delete student row
function deleteStudent(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

// Check for checkbox validation (optional)
function check() { 
    alert("Your information is true!");
}

// Add event listener to the form
document.getElementById('studentForm').addEventListener('submit', submit);
