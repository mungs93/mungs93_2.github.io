<?php
	require("phpmailer/class.phpmailer.php");	
	
	if (isset($_REQUEST['firstname']))  {
  
  	$admil_email = textbookconsultants@gmail.com;
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
	
	
	  $message = "Hello!

Your contact form has been submitted by:

First Name: $firstname
Last Name: $lastname
E-mail: $email

Comments:
$comment

End of message
";  

  fsockopen($admin_email, $subject, $message);

	
	}
	if(!$mail->Send()) {
  echo "The mail could not be sent: " . $mail->ErrorInfo;
  header('Location: www.textbookconsultants.com/thanks.html');
  exit;
} 

else {
  echo "Message has been sent";
  header('Location: www.textbookconsultants.com/thanks.html');
}
?>