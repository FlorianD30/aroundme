<?php

include "../config/fonctions.php";
$co = connexion_bd();


$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = returnJsonData($postdata);

    
    $mail = $request->email;
    $username = $request->username;
    $pwd = $request->password;
    $pwdHash = hash('sha256', $pwd);
    $date = date("Y-m-d H:i:s");

    echo $username . ' ' . $mail ." ".$pwd." ".$pwdHash;

    if(checkDuplicateEmail($mail,$co) || checkDuplicateUsername($username,$co)){
        return http_response_code(400);
    }


    $sql = 'INSERT INTO users VALUES (NULL,?,?,?,?,?)';
    $res = $co->prepare($sql);
    $res->execute(
        array(
            $username,
            $mail,
            $pwdHash,
            $date,
            $date
        )
    );
}

function returnJsonData($data){
    $decode_data = json_decode($data);
    return $decode_data;
}

function checkDuplicateUsername($data,$co)
{
    $sql = "
        SELECT * 
        FROM users
        WHERE username = ?";
    $res = $co->prepare($sql);
    $res->execute(
        array($data)
    );
    
    $row = $res->fetch(PDO::FETCH_OBJ);
    return isset($row->username);
}

function checkDuplicateEmail($data,$co)
{
    $sql = "
        SELECT * 
        FROM users
        WHERE email = ?";
    $res = $co->prepare($sql);
    $res->execute(
        array($data)
    );
    
    $row = $res->fetch(PDO::FETCH_OBJ);
    return isset($row->email);
}