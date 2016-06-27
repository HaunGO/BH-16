<?php
  $to = 'me@brandonhaun.com' ;  // Replace email address with your own
  $name = $_POST['name'];
  // $subject = 'Hello BH from... test '; 
  $subject = 'Hello BH from ' . $name; 
  $email = $_POST['email'];
  $msg = $_POST['msg'];



  // detect & prevent header injections
  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
      exit;
    }
  }
  



  $message = "From: $name \nEmail: $email \nMessage: $msg \n";

  mail( $to, $subject, $message );




?>
























