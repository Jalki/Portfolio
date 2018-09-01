<?php

require_once('PHPMailer/PHPMailerAutoload.php');

$mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure() = 'ssl';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = '465';
    $mail->Username = "jaleenbowenskelly@gmail.com";
    $mail->Password = "tempPassword";
    $mail->isHTML(true);
    $mail->setForm = (address:$mail, name: $name);
    $mail->addAddress = ('jaleenbowenskelly@gmail.com');
    $mail->Subject = $subject;
    $mail->Body = $message;
        if (isset($_POST['submit'])) {
            send();
        else:
            echo "oof";
        }

?>