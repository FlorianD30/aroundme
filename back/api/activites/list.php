<?php
include "../config/fonctions.php";

$connex = connexion_bd();
$req = "SELECT * FROM roles";
$res = $connex->query($req);
while ($row = $res->fetch(PDO::FETCH_OBJ)) {
    echo $row->name . "<br>";
}
