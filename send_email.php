<?php
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get POST data
    $Name = isset($_POST['Name']) ? strip_tags(trim($_POST['Name'])) : '';
    $Email = isset($_POST['Email']) ? trim($_POST['Email']) : '';
    $Service = isset($_POST['Service']) ? strip_tags(trim($_POST['Service'])) : '';
    $Date = isset($_POST['Date']) ? strip_tags(trim($_POST['Date'])) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    // Validate form fields
    if (empty($Name)) {
        $errors[] = 'Name is empty';
    }

    if (empty($Email)) {
        $errors[] = 'Email is empty';
    } else if (!filter_var($Email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }

     if (empty($Service)) {
        $errors[] = 'Service not entered';
    }
    
    if (empty($Date)) {
        $errors[] = 'Date not entered';
    }
    
    if (empty($Message)) {
        $errors[] = 'Message is empty';
    }

    // If no errors, send email
    if (empty($errors)) {
        // Recipient email address (replace with your own)
        $recipient = "swalehmwanza@gmail.com";

        // Additional headers
        $headers = "From: $name <$email>";

        // Send email
        if (mail($recipient, $message, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email. Please try again later.";
        }
    } else {
        // Display errors
        echo "The form contains the following errors:<br>";
        foreach ($errors as $error) {
            echo "- $error<br>";
        }
    }
} else {
    // Not a POST request, display a 403 forbidden error
    header("HTTP/1.1 403 Forbidden");
    echo "You are not allowed to access this page.";
}
?>
