<?php include "./connection.php" ?>
<?php
    $from=$_POST["from"];
    $to=$_POST["to"];
    $msg=$_POST["msg"];
    $time=$_POST["Time"];
    $status=$_POST["status"];
    $sql="INSERT into chat(fromid,toid,msg,point,status) values('".$from."','".$to."','".$msg."','".$time."','".$status."')";
    $conn->query($sql);
    // echo $sql;
?>