<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "textbookconsultants@gmail.com";
  $firstname = $_REQUEST['firstname'];
  $lastname = $_REQUEST['lastname'];
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  $comment = $_REQUEST['comment'];
  
  //send email
  mail($admin_email, $firstname, $lastname, "From:" . $email, "$subject", $comment);
  
  //Email response
  echo "Thank you for contacting us!";
  }
  
  //if "email" variable is not filled out, display the form
  else  {
?>



