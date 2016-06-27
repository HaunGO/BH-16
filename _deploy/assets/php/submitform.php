<?php 
  $to = 'me@brandonhaun.com' ;  // Replace email address with your own
  $subject = 'Hello kind sir,' ; 
  $name = $_POST['name'] ; 
  $email = $_POST['email'] ;
  $phone = $_POST['phone'] ;
  $text = $_POST['message'] ;

  // The above are the variables that will hold data entered by the user
  // You can use these variables, rename them or create your own
  // Make sure the text in the square brackets correspond to the name attributes in your form

  $message = "From: $name \nEmail: $email \nPhone: $phone \nMessage: $text \n";

  // The $message variable will form the message of the email.
  // It collects the variables your declared at the top
  // A line break ( \n ) is placed between each section

  $sent = mail($to, $subject, $message) ; 
    if($sent) {
      echo "<h3>Thank you for your message.</h3>"; 
    }else{
      echo "<h3>Sorry, your message wasn't sent.</h3><p>Something didn't work right. Please try again, and if it still doesn't work, send a regular email.</p>"; 
}

  // A new variable called $sent is created
  // This variable uses the mail() function to send the data.
  // The first option is the email address the message is sent to, as declared in the $to variable
  // The second is the subject, as declared with the $subject variable
  // The last is the message, as declared by the $message variable which holds the user submitted data

  // If the message is sent successfully, a "success message" is echoed.
  // If not, an alternate message is echoed.

?>