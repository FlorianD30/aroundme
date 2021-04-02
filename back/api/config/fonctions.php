<?php
//Connexion à la base de données
function connexion_bd()
{
    //on charge les paramètres de config de la base
    require('config.php');
    try {
        $connex = new PDO($source, $user, $passwd,  array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
        ));
        return $connex;
    } catch (PDOException $e) {
        //vérification de la connexion
        echo "Erreur : " . $e->getMessage();
        exit;
    }
}

session_start();
