<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['firstname']))  {
  
  //Email information
  $admin_email = "admin@textbookconsultants.com";
  $firstname = $_REQUEST['firstname'];
  $lastname = $_REQUEST['lastname'];
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  $comment = $_REQUEST['comment'];
  
  $message = "Hello!

Your contact form has been submitted by:

First Name: $firstname
Last Name: $lastname
E-mail: $email

Comments:
$comment

End of message
";  

  //send email
  mail($admin_email, $subject, $message);
  
  header('Location: www.textbookconsultants.com/thanks.html');
  exit();
  
  //if "email" variable is not filled out, display the form
  else  {
?>


<?php
exit();
}
?>

