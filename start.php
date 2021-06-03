<?php
if (isset($_POST['btn'])) {
    $user = $_POST['username'];
    session_start();
    $_SESSION['user'] = $user;
    header('Location:index.php');
}
?>

<html>
 
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="index.css">
    <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style="margin-left: 10%;">Flag Game</a>
            <a href="index.php" class="btn btn-primary">New Game</a>

        </div>
    </nav>
</head>

<body>
    <div class="card offset-4" style="width: 18rem;">
        <div class="card-body">
            <form action="start.php" method="post">
                <h3 class="card-title">Enter Your Name</h5>
                    <input type="text" class="form-control" placeholder="Your Name" name="username">
                    <br>
                    <input type="submit" class="btn btn-primary" style="width:100px" name="btn" value="Start!">
            </form>
        </div>
    </div>
</body>

</html>