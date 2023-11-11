<?php
$like = fopen("like.log","a");
$set = $_POST["like"];
fwrite($like,$set);
fwrite($like,"\n");
fclose($like);
?>