<?php

// $dir = array_slice(scandir(__DIR__),2);

// $folders = [];


// foreach($dir as $file){
//     if(is_dir($file)){
//         $newDir = array_slice(scandir('./'.$file),2);
        
//         foreach($newDir as $innerDir){
//             if($innerDir == "index.html"){
//                 rename('./'.$file.'/'.$innerDir,$file.".php");
                
//             }else{
//                 // echo $innerDir." /".$file." <br>";
//             }
//         }
//     }
//     else{
//         // echo $file." files <br>";
//     }
// }

// foreach($folders as $folder){

// }

// // var_dump($dir);
// die;










ob_start();
session_start();


$url = $_SERVER['REQUEST_URI'];

$current_url = explode('?', $url);
$url = $current_url[0];

// if(strstr($url,'/pricing',false)){
//     require_once('./pricing/index.php');
//     exit();
// }
$dir    = __DIR__.'/views';

$files = array_slice(scandir($dir), 2); 
// echo "<pre>";

$fileWithOutExt = array();

foreach($files as $file){
    // remove end slash if you dont need traling slash
    $without_extension = '/'.pathinfo($file, PATHINFO_FILENAME).'/';
    array_push($fileWithOutExt,$without_extension);
}

if($url=="/"){
    require $dir.'/home.php';
    die();
}

if (in_array($url,$fileWithOutExt)) {
  
  $urlWithoutSlashes =  str_replace('/',"",$url);
  require $dir.'/'.$urlWithoutSlashes.'.php';

    
}
else{
    require $dir.'/404.php';
}
?>