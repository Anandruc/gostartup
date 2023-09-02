<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Your email address where you want to receive form submissions
    $to = "naveenkumar80032@gmail.com";

    // Email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Phone: $phone\n";
    $email_message .= "Subject: $subject\n\n";
    $email_message .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";

    // Send the email
    mail($to, $email_subject, $email_message, $headers);

    // Redirect to a thank you page
    header("Location: thankyou.html");
    // echo "thank you your form is submitted";
} else {
    // Handle form submission failure
    echo "Form submission failed.";
}
?>
