<?php

include "../config/fonctions.php";
$co= connexion_bd();


$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {

    $request = returnJsonData($postdata);

    
    $username = $request->username;
    $pwd = $request->password;
    $pwdHash = hash('sha256', $pwd);
    
    $req = "SELECT * FROM users WHERE username=? AND password=?";
    $res = $connex->prepare($req);
    $res->execute(
        array(
            $username,
            $pwdHash
        ));
    $row = $res->fetch(PDO::FETCH_OBJ);
    
    $_SESSION['login'] = $row->login;
    header('Location: index.php');

    
    
}

// if(isset($_POST['username']) && !empty($_POST['username'])){
//     echo $_POST['password'];

// }

function returnJsonData($data){
    $decode_data = json_decode($data);
    return $decode_data;
}