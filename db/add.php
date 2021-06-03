<?php

print_r($_POST);
 
include 'database.php';
if (isset($_POST['btn'])) {
    $try = $_POST['try'];
    $user = $_POST['user'];
    $sql = "insert into users (user,try) values( '" . $user . "',$try)";
    mysqli_query($con, $sql);

    print_r($sql);
}
