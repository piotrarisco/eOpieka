<?php

require_once "libs/Mobile_Detect.php";
$detect = new Mobile_Detect;

if ($detect->isMobile() ){
    include 'TemplateS.php';    
}

else{
    include 'TemplateB.php';
}

?>

