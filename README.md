# Student Details Form

This is a simple web-based application for capturing student details, including their personal information, marks, and department. It also calculates the total marks and percentage for multiple subjects and displays a student list with the respective details.

## Features

- **Student Details Form**: Collects first name, last name, roll number, marks, department, email, and phone number.
- **Dynamic Marks Input**: Users can add multiple subjects and enter marks for each subject.
- **Gender and Department Selection**: Users can select gender and department from provided options.
- **Form Validation**: Basic validation to ensure required fields are filled correctly.
- **Student List**: Displays the entered student details in a table format, including a calculated total marks and percentage.
- **Responsive Layout**: Built with Bootstrap 5, ensuring the application is responsive on all screen sizes.
- **Error Highlighting**: Highlights failed students (below 40% marks) with a different background color.
- **Login System**: A simple sign-in page for accessing the form. Only authorized users can access the form.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling of the form and table, with custom styles for a clean and modern look.
- **JavaScript**: 
    - Dynamic addition of subjects and their marks.
    - Calculation of total marks and percentage.
    - Form validation and submission.
    - Login functionality with hardcoded credentials.
- **Bootstrap 5**: Provides responsive grid system and styling for form elements and buttons.
- **Font Awesome**: For icons used in the form.

## Login Details

To access the Student Details Form, you must first sign in using the login page. Here are the login credentials:

- **Email**: `vikram@1234`
- **Password**: `1234567`

The login functionality checks if the entered credentials match the predefined ones. If successful, the user will be redirected to the student details form. If the credentials are incorrect, an error message will be shown.

### Steps for Login:

1. **Sign In Page**: The sign-in page requires the user to enter a valid email and password.
   - Use the provided **email** (`vikram@1234`) and **password** (`1234567`).
   - If the email and password are correct, the user will be redirected to the student details form.
   - If the credentials are incorrect, an error message will appear indicating invalid email or password.

## How to Use

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/student-details-form.git
