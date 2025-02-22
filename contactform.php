<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = 'info@barleytattoo.cz';
    $subject = 'REZERVACE';
    $body = "<br>Od: $name<br>Email: $email<br>Telefon: $phone<br><br>Zpráva:<br> $message";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n" .
	    "Reply-To: $email" . "\r\n" .
	    "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>window.location.href = 'https://barleytattoo.cz'; alert('Zpráva úspěšně odeslána.');</script>";
    } else {
        echo "<script>window.location.href = 'https://barleytattoo.cz'; alert('Zprávu se nepodařilo odeslat.<br>Zkuste to prosím znovu.');</script>";
    }

?>