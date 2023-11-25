<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "wee.portal@mail.ru";
    $date = date ("d.m.v");
    $time = date ("h:i");
    $from = $email;
    $subject = "Заявка с сайта";

    $msg="
    Name: $name /n
    Email: $email /n
    Message: $message /n";
    mail($to, $subject, $msg, "From: $from ");

?>
