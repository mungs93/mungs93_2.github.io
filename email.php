<?php
	require("class.phpmailer.php");
	
	if (isset($_REQUEST['firstname']))  {
  
	$firstname = $_REQUEST['firstname'];
	$lastname = $_REQUEST['lastname'];
	$email = $_REQUEST['email'];
	$subject = $_REQUEST['subject'];
	$comment = $_REQUEST['comment'];
	
	
	$mail = new PHPMailer();
	$mail -> IsSMTP();
	$mail -> SMTP Auth = true;
	$mail -> SMTP Secure = "ssl";
	$mail -> Host = "smtp.gmail.com";
	$mail -> Port = 465;
	
	$mail -> Username = "textbookconsultants@gmail.com";
	$mail -> Password = "Seller732";
	
	$mail -> From = $email;
	$mail -> FromName = $firstname;
	$mail -> Subject = $subject;
	$mail -> AltBody = $comment
	
	$mail -> WordWrap = 50;
	$mail -> MsgHTML($body);
	$mail -> AddReplyTo($email, $firstname);
	$mail -> IsHTML(true);
	
	}
	if(!$mail->Send()) {
  echo "The mail could not be sent: " . $mail->ErrorInfo;
  exit;
} 

else {
  echo "Message has been sent";
}
?>

	
//if "email" variable is filled out, send email

  
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

