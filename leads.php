
<?php
  if(!empty($_POST["send"])) {
    $subject = 'Lead Form';
    $userName = $_POST['name'];
    $userEmail = $_POST["email"];
    $userPhone = $_POST["phone"];
    $userMessage = $_POST["brief"];
    $toEmail = "zeeshanzeegota@gmail.com";
  
    $mailHeaders = "Subject: " . $subject .
    "\r\n Name: " . $userName .
    "\r\n Email: ". $userEmail  . 
    "\r\n Phone: ". $userPhone  . 
    "\r\n Message: " . $userMessage . "\r\n";

    if(mail($toEmail, $userName, $mailHeaders)) {
      $msg = "<h1>Thank you for your submission, $UserName!</h1>";
  
      echo "<script>
        window.open('/thank-you.html/?thanksMsg=$msg','_self')
        </script>";
    }else {
      $msg = '<h1 class="text-center">Sorry your submission failed!</h1>';
      echo "<script>
      window.open('/thank-you/?thanksMsg=$msg','_self')
      </script>";
    }
  }
?>