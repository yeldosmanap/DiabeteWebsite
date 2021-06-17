<?php
// необходимые HTTP-заголовки 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

	 session_start();
	$data = json_decode(file_get_contents("php://input"));
	$login= $data->login;
	$password= $data->password;
    $con = mysqli_connect("localhost","root","","den_prezent");
    if (!$con)
    {
    die('Нет соединения: ' . mysql_error());
    }
    mysqli_select_db($con, "users");
    $q = ("SELECT * FROM users WHERE login='$login'");
    $r = mysqli_query($con, $q);
    $myrow = mysqli_fetch_array($r);

    if ($myrow['login'] ==$login and $myrow['password']== $password and $myrow['password']!=null and $myrow['login']!=null)
    {
		http_response_code(200);
		echo json_encode(array("email" => $myrow['login']), JSON_UNESCAPED_UNICODE);
    }
    else
    {
        // код ответа - 503 Сервис не доступен 
		  http_response_code(503);

		  // сообщение пользователю 
		  echo json_encode(array("status" => "error"), JSON_UNESCAPED_UNICODE);
    }
?>