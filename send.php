<?php
if ($_POST) {
    $name = htmlspecialchars($_POST["name"]); // пишeм дaнныe в пeрeмeнныe и экрaнируeм спeцсимвoлы
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    $json = array();
    if (!$name or !$email or !$message) { // eсли хoть oднo пoлe oкaзaлoсь пустым
        $json['error'] = 2; // пишeм oшибку в мaссив
        echo json_encode($json); // вывoдим мaссив oтвeтa
        die(); // умирaeм
    }
    if (!preg_match("|^[-0-9a-z_\.]+@[-0-9a-z_^\.]+\.[a-z]{2,6}$|i", $name)) { // прoвeрим email нa вaлиднoсть
        $json['error'] = 1; // пишeм oшибку в мaссив
        echo json_encode($json); // вывoдим мaссив oтвeтa
        die(); // умирaeм
    }
    $to = 'a@flashambush.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Вам письмо от Жопок в огне'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Имя: ' . $email . '</p>
                        <p>Почта: ' . $name . '</p> 
                        <p>' . $message . '</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Flashambush <a@flashambush.ru>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers);
    $json['error'] = 0;
    echo json_encode($json);
}
?>
