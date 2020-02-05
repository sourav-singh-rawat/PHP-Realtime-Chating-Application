<!-- MAKE THIH PAGE HTML NOT PHP BY DIVERTING IT 2 TIMES AFTER VARIFICATION -->

<?php
  session_start();
  $user=$_SESSION['user'];
  session_abort();
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="./chatBox.css">
    <title>Chat</title>
  </head>
  <body style="font-family: 'Muli', sans-serif;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" style="color:teal;" id="userName"><?php echo $user ?></a>    
        <a class="navbar-brand" href="#" style="margin-left:50%;">Chat</a>
        <a href="./index.html " style="padding-left:35%;">Logout</a>
    </nav>
    <nav class="navbar navbar-dark bg-dark">
    </nav>

    <!-- to person info -->
    <!-- online or not -->

    <div id="chatWindow" style="width:98%;height:480px;overflow-y:auto;">
      <!-- dom chat -->
      <!-- #TODO:timeText
      #TODO:send,seen -->
    <!-- <div id="realTimer"></div> -->
    </div>
    <nav class="navbar navbar-dark bg-primary">
        <textarea id="txtArea" autofocus></textarea>
        <button type="submit" id="sendButton" onclick="sendBtn();"><img src="./send-button.png"></button>
    </nav>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script type="text/javascript" src="../jquery_min.js"></script>
    <script src="./chatWinJS.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
