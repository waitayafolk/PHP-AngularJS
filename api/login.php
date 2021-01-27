<?php 
session_start();
include('condb.php');
$params = json_decode(file_get_contents('php://input'));


$sql =" SELECT * FROM tb_user WHERE status = 'use' AND username = :username AND password = :password ";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':username', $params->username);
            $stmt->bindParam(':password', $params->password);
            $stmt->execute();

            $user = $stmt->fetch();

            $_SESSION["user_id"] = $user["id"];
            $_SESSION["a_name"] = $user["name"];
            $_SESSION["level"] = $user["level"];
            // print_r($_SESSION);exit();
            if(empty($_SESSION["user_id"])){ 
                echo json_encode(array('message' => 'invalid'));
            }else{
                echo json_encode(array('message' => 'success' ,'user' => $user));
            }
?>