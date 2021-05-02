<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
    session_start();
    if (isset($_POST['email'])) { $login = $_POST['email']; if ($login == '') { unset($login);} }
    if (isset($_POST['password'])) { $password=$_POST['password']; if ($password =='') { unset($password);} }
    if (empty($login) or empty($password))
    {
    exit ("Вы ввели не всю информацию, вернитесь назад и заполните все поля!<p><a href=index.php>Назад</a></p>");
    }
    $con = mysqli_connect("localhost","root","","grain_units");
    if (!$con)
    {
    die('Нет соединения: ' . mysql_error());
    }
    mysqli_select_db($con, "users");
    $q = ("SELECT * FROM users WHERE Email='$login'");
    $r = mysqli_query($con, $q);
    $myrow = mysqli_fetch_array($r);

    if ($myrow['Email'] ==$login and $myrow['Password']== $password)
    {
    $_SESSION['fullName']=$myrow['FullName'];
    echo $_SESSION['fullName'].' Вы успешно вошли на сайт!';
    }
    else
    {
    exit ("Извините, введённый вами email или пароль неверный.<p><a href=index.php>Назад</a></p>");
    }
    ?>
  </body>
</html>
