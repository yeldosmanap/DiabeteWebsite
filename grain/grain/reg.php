<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
    $conn = mysqli_connect("localhost", "root", "", "grain_units");
    if (!$conn) {
    die("Ошибка соединения с базой данных: " . mysqli_connect_error());
    }
    $sql = "INSERT INTO users (FullName, Password, Email) VALUES ('$_POST[fullName]','$_POST[password]','$_POST[email]')";

    if (mysqli_query($conn, $sql)) {
    echo "Регистрация прошла успешно";
    } else {
    echo "Ошибка регистрации: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
    ?>
  </body>
</html>
