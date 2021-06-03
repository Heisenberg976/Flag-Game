<?php
session_start();
if (!isset($_SESSION['user'])) {
    header('Location:start.php');
}
?>

<html>

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="index.css">

</head>

<body>
    <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style="margin-left: 10%;font-size:30px">Flag Game</a>
            <h3 id="score" style="color:aliceblue">Score: 0</h3>
            <button class="btn btn-primary" id="show">Show Board</button>
            <a href="index.php" class="btn btn-primary" style="font-size:25px;margin-right:5%">New Game</a>
        </div>
    </nav>

    <div id="result" style="text-align: center;font-size:30px">

    </div>
    <div class="main">
        <table class="table" style="border:blanchedalmond">
            <tr>
                <td id="one"></td>
                <td id="two"></td>
                <td id="three"></td>
                <td id="four"></td>

            </tr>

            <tr>

                <td id="five"></td>
                <td id="six"></td>
                <td id="seven"></td>
                <td id="eight"></td>

            </tr>

            <tr>

                <td id="nine"></td>
                <td id="ten"></td>
                <td id="eleven"></td>
                <td id="twelve"></td>

            </tr>

            <tr>

                <td id="thirteen"></td>
                <td id="fourteen"></td>
                <td id="fifteen"></td>
                <td id="sixteen"></td>
                <input type="hidden" id="user" value="<?=$_SESSION['user']?>">
            </tr>
        </table>
    </div>

    <script src="index.js"></script>

</body>
 
</html>