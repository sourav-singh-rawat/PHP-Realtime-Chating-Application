<?php
    try{
        $server="localhost";
        $usr="irotech";
        $pass="8899619096";
        $database = "chat";
        $conn = new PDO("mysql:host=$server;dbname=$database", $usr, $pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e)
    {
        echo "Connection failed: " . $e->getMessage();
    }
?>
