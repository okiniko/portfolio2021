
<?php
$headers = array(
    "MIME-Version: 1.0",
    "Content-type: text/html; charset=iso-8859-1",
    "From:".$_POST['email'],
    "X-Mailer: PHP/" . PHP_VERSION
     

);
$headers = implode("\r\n", $headers);
$message = "<p>{$_POST['message']}</p><p>De la part de {$_POST['nom']}</p>";
    if (isset($_POST['message'])) {
        $position_arobase = strpos($_POST['email'], '@');
        if ($position_arobase === false)
            echo "<p>Votre email doit comporter un arobase.</p>";
        else {
            $retour = mail('okinikog11@gmail.com', $_POST['objet'],$message,$headers);
            if($retour)
                {
                    echo "<p>everything is perfect dude</p>";
                   
                }
            else
            echo "<p>Wrong Bad Motherfucker</p>";
                
        }
        
    }
    ?>
    